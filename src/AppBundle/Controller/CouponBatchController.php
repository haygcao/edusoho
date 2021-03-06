<?php

namespace AppBundle\Controller;

use AppBundle\Common\Exception\AccessDeniedException;
use AppBundle\Common\Paginator;
use Biz\Classroom\Service\ClassroomService;
use Biz\Coupon\CouponException;
use Biz\Coupon\Service\CouponBatchService;
use Biz\Course\Service\CourseSetService;
use Biz\System\Service\SettingService;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;

class CouponBatchController extends BaseController
{
    public function couponReceiveAction(Request $request, $token)
    {
        $user = $this->getCurrentUser();

        if (!$user->isLogin()) {
            $goto = $this->generateUrl('coupon_receive', ['token' => $token], true);

            return $this->redirect($this->generateUrl('login', ['goto' => $goto]));
        }
        $couponBatch = $this->getCouponBatchService()->getBatchByToken($token);
        if (!$couponBatch['linkEnable']) {
            throw new AccessDeniedException('Coupon receipt by link is not allowed');
        }
        $couponSetting = $this->getSettingService()->get('coupon', []);
        if (empty($couponSetting['enabled'])) {
            return $this->createMessageResponse('info', '优惠券已失效');
        }

        $result = $this->getCouponBatchService()->receiveCoupon($token, $user['id']);

        if ($result['code']) {
            if (isset($result['id'])) {
                $response = $this->redirect($this->generateUrl('my_cards', ['cardType' => 'coupon', 'cardId' => $result['id']]));

                $response->headers->setCookie(new Cookie('modalOpened', '1'));

                return $response;
            }

            return $this->createMessageResponse('info', $result['message'], '', 2000, $this->generateUrl('my_cards', ['cardType' => 'coupon']));
        }

        return $this->createMessageResponse('info', '无效的链接', '', 2000, $this->generateUrl('homepage'));
    }

    public function couponResourceListAction(Request $request, $batchId)
    {
        $batch = $this->getCouponBatchService()->getBatch($batchId);
        if (!in_array($batch['targetType'], ['course', 'classroom']) || $batch['targetId'] < 0) {
            $this->createNewException(CouponException::TARGET_TYPE_ERROR());
        }
        $resourceIds = empty($batch['targetIds']) ? [-1] : $batch['targetIds'];

        if ('course' == $batch['targetType']) {
            $paginator = new Paginator(
                $request,
                $this->getCourseSetService()->countCourseSets(['ids' => $resourceIds]),
                10
            );
            $resources = $this->getCourseSetService()->searchCourseSets(
                ['ids' => $resourceIds],
                [],
                $paginator->getOffsetCount(),
                $paginator->getPerPageCount()
            );
        } else {
            $paginator = new Paginator(
                $request,
                $this->getClassroomService()->countClassrooms(['classroomIds' => $resourceIds]),
                10
            );
            $resources = $this->getClassroomService()->searchClassrooms(
                ['classroomIds' => $resourceIds],
                [],
                $paginator->getOffsetCount(),
                $paginator->getPerPageCount()
            );
        }

        return $this->render('card/coupon-resource-list-modal.html.twig', [
            'paginator' => $paginator,
            'batch' => $batch,
            'resources' => $resources,
        ]);
    }

    protected function getUserService()
    {
        return $this->createService('User:UserService');
    }

    protected function getTokenService()
    {
        return $this->createService('User:TokenService');
    }

    /**
     * @return CouponBatchService
     */
    private function getCouponBatchService()
    {
        return $this->createService('Coupon:CouponBatchService');
    }

    /**
     * @return SettingService
     */
    protected function getSettingService()
    {
        return $this->createService('System:SettingService');
    }

    /**
     * @return CourseSetService
     */
    private function getCourseSetService()
    {
        return $this->createService('Course:CourseSetService');
    }

    /**
     * @return ClassroomService
     */
    private function getClassroomService()
    {
        return $this->createService('Classroom:ClassroomService');
    }
}
