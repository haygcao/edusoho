<?php

namespace AppBundle\Controller\ItemBankExercise;

use AppBundle\Controller\BaseController;
use Biz\Accessor\AccessorInterface;
use Biz\ItemBankExercise\ItemBankExerciseException;
use Codeages\Biz\ItemBank\Answer\Constant\AnswerRecordStatus;
use Codeages\Biz\ItemBank\Answer\Constant\ExerciseMode;
use Codeages\Biz\ItemBank\Answer\Service\AnswerRecordService;
use Codeages\Biz\ItemBank\Answer\Service\AnswerService;
use Codeages\Biz\ItemBank\Item\Service\ItemCategoryService;
use Codeages\Biz\ItemBank\Item\Service\ItemService;
use Symfony\Component\HttpFoundation\Request;

class AnswerController extends BaseController
{
    public function assessmentAnswerAction(Request $request, $exerciseId, $moduleId, $assessmentId)
    {
        $user = $this->getCurrentUser();

        $access = $this->getItemBankExerciseService()->canLearnExercise($exerciseId);
        if (AccessorInterface::SUCCESS != $access['code']) {
            $this->createNewException(ItemBankExerciseException::FORBIDDEN_LEARN());
        }

        $latestAnswerRecord = $this->getItemBankAssessmentExerciseRecordService()->getLatestRecord($moduleId, $assessmentId, $user['id']);
        if (empty($latestAnswerRecord) || 'redo' == $request->get('action')) {
            $latestAnswerRecord = $this->getItemBankAssessmentExerciseService()->startAnswer($moduleId, $assessmentId, $user['id']);
        }

        if (AnswerRecordStatus::REVIEWING == $latestAnswerRecord['status']) {
            return $this->forward('AppBundle:AnswerEngine/AnswerEngine:reviewAnswer', [
                'answerRecordId' => $latestAnswerRecord['answerRecordId'],
                'successGotoUrl' => $this->generateUrl('item_bank_exercise_assessment_answer', ['exerciseId' => $exerciseId, 'moduleId' => $moduleId, 'assessmentId' => $assessmentId]),
                'role' => 'student',
            ]);
        }
        if (AnswerRecordStatus::FINISHED == $latestAnswerRecord['status']) {
            return $this->render(
                'item-bank-exercise/answer/report.html.twig',
                [
                    'answerRecordId' => $latestAnswerRecord['answerRecordId'],
                    'restartUrl' => $this->generateUrl('item_bank_exercise_assessment_answer', ['exerciseId' => $exerciseId, 'moduleId' => $moduleId, 'assessmentId' => $assessmentId, 'action' => 'redo']),
                ]
            );
        }
        $this->getAnswerService()->continueAnswer($latestAnswerRecord['answerRecordId']);

        return $this->forward('AppBundle:AnswerEngine/AnswerEngine:do', [
            'answerRecordId' => $latestAnswerRecord['answerRecordId'],
            'submitGotoUrl' => $this->generateUrl('item_bank_exercise_assessment_answer', ['exerciseId' => $exerciseId, 'moduleId' => $moduleId, 'assessmentId' => $assessmentId]),
            'saveGotoUrl' => $this->generateUrl('my_item_bank_exercise_show', ['id' => $exerciseId, 'moduleId' => $moduleId, 'tab' => 'chapter']),
            'showHeader' => 1,
        ]);
    }

    public function categoryAnswerAction(Request $request, $exerciseId, $moduleId, $categoryId)
    {
        $user = $this->getCurrentUser();

        $access = $this->getItemBankExerciseService()->canLearnExercise($exerciseId);
        if (AccessorInterface::SUCCESS != $access['code']) {
            $this->createNewException(ItemBankExerciseException::FORBIDDEN_LEARN());
        }

        $latestAnswerRecord = $this->getItemBankChapterExerciseRecordService()->getLatestRecord($moduleId, $categoryId, $user['id']);
        if ($latestAnswerRecord) {
            $answerRecord = $this->getAnswerRecordService()->get($latestAnswerRecord['answerRecordId']);
            if (ExerciseMode::SUBMIT_SINGLE == $answerRecord['exercise_mode']) {
                return $this->render('item-bank-exercise/answer/not-support-submit-single.html.twig', ['exerciseId' => $exerciseId]);
            }
        }
        if (empty($latestAnswerRecord) || 'redo' == $request->get('action')) {
            $latestAnswerRecord = $this->getItemBankChapterExerciseService()->startAnswer($moduleId, $categoryId, $user['id']);
        }

        if (AnswerRecordStatus::REVIEWING == $latestAnswerRecord['status']) {
            return $this->forward('AppBundle:AnswerEngine/AnswerEngine:reviewAnswer', [
                'answerRecordId' => $latestAnswerRecord['answerRecordId'],
                'successGotoUrl' => $this->generateUrl('item_bank_exercise_category_answer', ['exerciseId' => $exerciseId, 'moduleId' => $moduleId, 'categoryId' => $categoryId]),
                'role' => 'student',
                'saveGotoUrl' => $this->generateUrl('my_item_bank_exercise_show', ['id' => $exerciseId, 'moduleId' => $moduleId, 'tab' => 'chapter']),
            ]);
        }
        if (AnswerRecordStatus::FINISHED == $latestAnswerRecord['status']) {
            return $this->render(
                'item-bank-exercise/answer/report.html.twig',
                [
                    'answerRecordId' => $latestAnswerRecord['answerRecordId'],
                    'restartUrl' => $this->generateUrl('item_bank_exercise_category_answer', ['exerciseId' => $exerciseId, 'moduleId' => $moduleId, 'categoryId' => $categoryId, 'action' => 'redo']),
                ]
            );
        }

        $this->getAnswerService()->continueAnswer($latestAnswerRecord['answerRecordId']);

        return $this->forward('AppBundle:AnswerEngine/AnswerEngine:do', [
            'answerRecordId' => $latestAnswerRecord['answerRecordId'],
            'submitGotoUrl' => $this->generateUrl('item_bank_exercise_category_answer', ['exerciseId' => $exerciseId, 'moduleId' => $moduleId, 'categoryId' => $categoryId]),
            'saveGotoUrl' => $this->generateUrl('my_item_bank_exercise_show', ['id' => $exerciseId, 'moduleId' => $moduleId, 'tab' => 'chapter']),
            'showHeader' => 1,
        ]);
    }

    public function categoryInfoModalAction(Request $request, $exerciseId, $moduleId, $categoryId)
    {
        $access = $this->getItemBankExerciseService()->canLearnExercise($exerciseId);
        if (AccessorInterface::SUCCESS != $access['code']) {
            $this->createNewException(ItemBankExerciseException::FORBIDDEN_LEARN());
        }

        $category = $this->getItemCategoryService()->getItemCategory($categoryId);
        $items = $this->getItemService()->searchItems(['bank_id' => $category['bank_id'], 'category_id' => $categoryId], [], 0, PHP_INT_MAX);

        return $this->render('item-bank-exercise/answer/category-info-modal.html.twig', [
            'typesNum' => $this->getItemService()->countItemTypesNum($items),
            'total' => $category['item_num'],
            'chapterName' => $category['name'],
            'categoryId' => $category['id'],
            'moduleId' => $moduleId,
            'exerciseId' => $exerciseId,
        ]);
    }

    public function notSupportSubmitSingleAction()
    {
        return $this->render('item-bank-exercise/answer/not-support-submit-single-modal.html.twig');
    }

    /**
     * @return \Biz\ItemBankExercise\Service\ExerciseService
     */
    protected function getItemBankExerciseService()
    {
        return $this->createService('ItemBankExercise:ExerciseService');
    }

    /**
     * @return \Biz\ItemBankExercise\Service\ChapterExerciseService
     */
    protected function getItemBankChapterExerciseService()
    {
        return $this->createService('ItemBankExercise:ChapterExerciseService');
    }

    /**
     * @return \Biz\ItemBankExercise\Service\AssessmentExerciseService
     */
    protected function getItemBankAssessmentExerciseService()
    {
        return $this->createService('ItemBankExercise:AssessmentExerciseService');
    }

    /**
     * @return \Biz\ItemBankExercise\Service\ChapterExerciseRecordService
     */
    protected function getItemBankChapterExerciseRecordService()
    {
        return $this->createService('ItemBankExercise:ChapterExerciseRecordService');
    }

    /**
     * @return \Biz\ItemBankExercise\Service\AssessmentExerciseRecordService
     */
    protected function getItemBankAssessmentExerciseRecordService()
    {
        return $this->createService('ItemBankExercise:AssessmentExerciseRecordService');
    }

    /**
     * @return AnswerService
     */
    protected function getAnswerService()
    {
        return $this->createService('ItemBank:Answer:AnswerService');
    }

    /**
     * @return ItemCategoryService
     */
    protected function getItemCategoryService()
    {
        return $this->createService('ItemBank:Item:ItemCategoryService');
    }

    /**
     * @return ItemService
     */
    protected function getItemService()
    {
        return $this->createService('ItemBank:Item:ItemService');
    }

    /**
     * @return AnswerRecordService
     */
    protected function getAnswerRecordService()
    {
        return $this->createService('ItemBank:Answer:AnswerRecordService');
    }
}
