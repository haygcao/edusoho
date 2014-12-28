<?php

namespace Topxia\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Topxia\AdminBundle\Controller\BaseController;
use Topxia\Common\Paginator;
use Topxia\Common\ArrayToolkit;
 
class CoinController extends BaseController
{
    public function settingsAction(Request $request)
    {
        $postedParams = $request->request->all();

        $coinSettingsPosted = $this->getSettingService()->get('coin',array());
// var_dump($coinSettingsPosted);
        $coinSettingsSaved = $coinSettingsPosted;
        $default = array(
          'coin_enabled' => 0,
          'price_type'=>'RMB',
          'coin_name' => '虚拟币',
          'coin_content' => '',
          'coin_picture' => '',
          'cash_rate' => 1,
        );
        $coinSettingsPosted = array_merge($default, $coinSettingsPosted);
      
        if ($request->getMethod() == 'POST') {
        $coinSettingsPosted = null;

        $coinSettingsPosted['coin_enabled'] = $request->request->get("coin_enabled");
        $coinSettingsPosted['price_type'] = $request->request->get("price_type");
        $coinSettingsPosted['coin_name'] = $request->request->get("coin_name");
        $coinSettingsPosted['coin_content'] = $request->request->get("coin_content");
        $coinSettingsPosted['coin_picture'] = $request->request->get("coin_picture");
        $coinSettingsPosted['cash_rate'] = $request->request->get("cash_rate");
        if (isset($coinSettingsPosted['cash_rate']) && !is_numeric($coinSettingsPosted['cash_rate'])){
          $this->setFlashMessage('danger', '错误，虚拟币汇率设置填入的必须为数字！');
          return $this->settingsRenderedPage($coinSettingsSaved);
        }
        
        $this->getSettingService()->set('coin', $coinSettingsPosted);
        $this->getLogService()->info('system', 'update_settings', "更新Coin虚拟币设置", $coinSettingsPosted);
        $this->setFlashMessage('success', '虚拟币设置已保存！');      
        }

        return $this->settingsRenderedPage($coinSettingsPosted);
    }

    public function pictureAction(Request $request)
    {
        return $this->render('TopxiaAdminBundle:Coin:picture-modal.html.twig');
    }

    public function  recordsAction(Request $request){
        $fields = $request->query->all();
        $conditions=array(
            'startTime'=>time()-7*24*3600);

        if(!empty($fields)){
          $conditions =$this->filterCondition($fields);
        };

        $conditions['cashType']="Coin";

        $paginator = new Paginator(
            $this->get('request'),
            $this->getCashService()->searchFlowsCount($conditions),
            20
          );

        $cashes=$this->getCashService()->searchFlows(
            $conditions,
            array('createdTime','DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
          );

        if(isset($conditions['type'])){

            switch ($conditions['type']) {
                case 'inflow':
                    $inflow=$this->getCashService()->analysisAmount($conditions);
                    $outflow=0;
                    break;
                case 'outflow':
                    $outflow=$this->getCashService()->analysisAmount($conditions);
                    $inflow=0;
                    break;
                default:
                    $conditions['type']="outflow";
                    $outflow=$this->getCashService()->analysisAmount($conditions);
                    $conditions['type']="inflow";
                    $inflow=$this->getCashService()->analysisAmount($conditions);
                    break;
            }

        }else{

            $conditions['type']="outflow";
            $outflow=$this->getCashService()->analysisAmount($conditions);
            $conditions['type']="inflow";
            $inflow=$this->getCashService()->analysisAmount($conditions);   
        }

        $in=$this->getCashService()->analysisAmount(array('type'=>'inflow','cashType'=>'Coin'));
        $out=$this->getCashService()->analysisAmount(array('type'=>'outflow','cashType'=>'Coin'));
        $amounts=$in-$out;

        $userIds =  ArrayToolkit::column($cashes, 'userId');
        $users = $this->getUserService()->findUsersByIds($userIds);
        
        return $this->render('TopxiaAdminBundle:Coin:coin-records.html.twig',array(
            'users'=>$users,
            'cashes'=>$cashes,
            'outflow'=>$outflow,
            'inflow'=>$inflow,
            'amounts'=>$amounts,
            'paginator'=>$paginator,
          ));
    }

    public function userRecordsAction(Request $request)
    {   
        $condition['time']=time()-7*3600*24;
        $condition['type']="";
        $condition['timeType']="oneWeek";
        $condition['orderBY']="desc";
        $condition['searchType']="";
        $condition['keyword']="";
        $condition['sort']="down";
        $condition['flowType']="";

        $fields = $request->query->all();

        if(!empty($fields)){
          $condition =$this->convertFiltersToCondition($fields);
        };

        if(isset($condition['userId'])){

            if($condition['userId'] == 0 ){
                $userIds=array();
                $users=array();
                $condition['userId']="null";
                goto response;
            } 
            

            $userIds=array($condition['userId']);
            $user=$this->getUserService()->getUser($condition['userId']);
            $users=array($condition['userId']=>$user);

            response:
            return $this->render('TopxiaAdminBundle:Coin:coin-user-records.html.twig',array(
              'condition'=>$condition,
              'userIds'=>$userIds,
              'users'=>$users,
            ));
        }

        $paginator = new Paginator(
            $this->get('request'),
            $this->getCashService()->findUserIdsByFlowsCount($condition['type'],$condition['time']),
            20
          );

        $flows=$this->getCashService()->findUserIdsByFlows(
            $condition['type'],$condition['time'],$condition['orderBY'],           
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
          );

        $userIds=ArrayToolkit::column($flows,'userId');

        $users=$this->getUserService()->findUsersByIds($userIds);
        
        return $this->render('TopxiaAdminBundle:Coin:coin-user-records.html.twig',array(
          'paginator'=>$paginator,
          'condition'=>$condition,
          'userIds'=>$userIds,
          'users'=>$users,
          ));
    }
    
    public function flowDetailAction(Request $request)
    {   
        $userId=$request->query->get("userId");
        $timeType=$request->query->get("timeType");

        if(empty($timeType)){
            $timeType="oneWeek";
        }

        $condition['timeType']=$timeType;
        $filter =$this->convertFiltersToCondition($condition);

        $conditions['startTime']=$filter['time'];
        $conditions['cashType']="Coin";
        $conditions['userId']=$userId;

        $paginator = new Paginator(
            $this->get('request'),
            $this->getCashService()->searchFlowsCount($conditions),
            20
          );

        $cashes=$this->getCashService()->searchFlows(
            $conditions,
            array('createdTime','DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
          );
        
        $user=$this->getUserService()->getUser($userId);

        return $this->render('TopxiaAdminBundle:Coin:flow-deatil-modal.html.twig', array(
            'user'=>$user,
            'cashes'=>$cashes,
            'paginator'=>$paginator,
            'timeType'=>$timeType,
        ));
    }

    public function  ordersAction(Request $request){

        $fields = $request->query->all();
        $conditions=array();
        if(!empty($fields)){
          $conditions =$fields;
        };
        if  (isset($conditions['keywordType'])) {
          if ($conditions['keywordType'] == 'userName'){
            $conditions['keywordType'] = 'userId';
            $userFindbyNickName = $this->getUserService()->getUserByNickname($conditions['keyword']);
            $conditions['keyword'] = $userFindbyNickName? $userFindbyNickName['id']:-1;
          }
        }
        if (isset($conditions['keywordType'])) {
            $conditions[$conditions['keywordType']] = $conditions['keyword'];
            unset($conditions['keywordType']);
            unset($conditions['keyword']);
        }

        $paginator = new Paginator(
            $this->get('request'),
            $this->getCashOrdersService()->searchOrdersCount($conditions),
            20
          );

        $orders=$this->getCashOrdersService()->searchOrders(
            $conditions,
            array('createdTime','DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
          );

        $userIds =  ArrayToolkit::column($orders, 'userId');
        $users = $this->getUserService()->findUsersByIds($userIds);

        return $this->render('TopxiaAdminBundle:Coin:coin-orders.html.twig',array(
            'users'=>$users,
            'orders'=>$orders,
            'paginator'=>$paginator,
          ));
    }

    protected function settingsRenderedPage($coinSettings)
    {
      return $this->render('TopxiaAdminBundle:Coin:coin-settings.html.twig',array(
        'coin_settings_posted' => $coinSettings,
      ));
    }

    public function logsAction($id)
    {
        $order = $this->getCashOrdersService()->getOrder($id);
        $user = $this->getUserService()->getUser($order['userId']);

        $orderLogs = $this->getCashOrdersService()->getLogsByOrderId($order['id']);
        
        $users = $this->getUserService()->findUsersByIds(ArrayToolkit::column($orderLogs, 'userId'));
        
        return $this->render('TopxiaAdminBundle:Coin:order-log-modal.html.twig', array(
            'order'=>$order,
            'user'=>$user,
            'orderLogs'=>$orderLogs,
            'users' => $users
        ));
    }

    public function giveCoinAction(Request $request)
    {
        if($request->getMethod()=="POST"){

            $fields=$request->request->all();

            $user=$this->getUserService()->getUserByNickname($fields['nickname']);

            $account=$this->getCashAccountService()->getAccountByUserId($user["id"]);

            if(empty($account)){
                $account=$this->getCashAccountService()->createAccount($user["id"]);
            }

            if($fields['type']=="add"){

                $this->getCashAccountService()->waveCashField($account["id"],$fields['amount']);
                $this->getLogService()->info('cash', 'add_coin', "添加 ".$user['nickname']." {$fields['amount']} 虚拟币", array());

            }else{

                $this->getCashAccountService()->waveDownCashField($account["id"],$fields['amount']);
                $this->getLogService()->info('cash', 'add_coin', "扣除 ".$user['nickname']." {$fields['amount']} 虚拟币", array());
            }
  
        }

        return $this->render('TopxiaAdminBundle:Coin:order-create-modal.html.twig', array());

    }

    // public function adminAction(Request $request)
    // {   
    //     $fields = $request->query->all();
    //     $nickname="";
    //     $conditions=array();

    //     if(isset($fields['nickName']) && $fields['nickName']!= ""){
    //         $nickname =$fields['nickName'];
    //         $user = $this->getUserService()->getUserByNickname($nickname);

    //         if($user){
    //             $conditions=array('userId'=>$user['id']);
    //         }else{
    //             $conditions=array('userId'=>-1);
    //         }
            
    //     }

    //     $paginator = new Paginator(
    //         $this->get('request'),
    //         $this->getCashAccountService()->searchAccountCount($conditions),
    //         20
    //       );

    //     $cashes=$this->getCashAccountService()->searchAccount(
    //         $conditions,
    //         array(),
    //         $paginator->getOffsetCount(),
    //         $paginator->getPerPageCount()
    //       );

    //     $userIds =  ArrayToolkit::column($cashes, 'userId');
    //     $users = $this->getUserService()->findUsersByIds($userIds);

    //     return $this->render('TopxiaAdminBundle:Coin:coin-admin.html.twig', array(
    //         'cashes'=>$cashes,
    //         'users'=>$users,
    //         'paginator'=>$paginator,
    //     ));
    // }

    public function editAction(Request $request,$id)
    {   
        if($request->getMethod()=="POST"){

            $fields=$request->request->all();

            $account=$this->getCashAccountService()->getAccount($id);

            if($account){

                $user=$this->getUserService()->getUser($account['userId']);

                if($fields['type']=="add"){

                $this->getCashAccountService()->waveCashField($id,$fields['amount']);

                $this->getLogService()->info('cash', 'add_coin', "添加 ".$user['nickname']." {$fields['amount']} 虚拟币", array());

                }else{

                    $this->getCashAccountService()->waveDownCashField($id,$fields['amount']);
                    $this->getLogService()->info('cash', 'add_coin', "扣除 ".$user['nickname']." {$fields['amount']} 虚拟币", array());

                }
            }
  
        }

        return $this->render('TopxiaAdminBundle:Coin:order-edit-modal.html.twig', array(
            'id'=>$id,
        ));
    }

    public function checkNicknameAction(Request $request)
    {
        $nickname = $request->query->get('value');
        $result = $this->getUserService()->isNicknameAvaliable($nickname);
        if ($result) {
            $response = array('success' => false, 'message' => '该用户不存在');
        } else {
            $response = array('success' => true, 'message' => '');
        }
        return $this->createJsonResponse($response);
    }

    public function avatarAction(Request $request)
    {
        $user = $this->getCurrentUser();

        $form = $this->createFormBuilder()
            ->add('avatar', 'file')
            ->getForm();

        if ($request->getMethod() == 'POST') {
            $form->bind($request);
            if ($form->isValid()) {
                $data = $form->getData();
                $file = $data['avatar'];

                if (!FileToolkit::isImageFile($file)) {
                    return $this->createMessageResponse('error', '上传图片格式错误，请上传jpg, gif, png格式的文件。');
                }

                $filenamePrefix = "user_{$user['id']}_";
                $hash = substr(md5($filenamePrefix . time()), -8);
                $ext = $file->getClientOriginalExtension();
                $filename = $filenamePrefix . $hash . '.' . $ext;

                $directory = $this->container->getParameter('topxia.upload.public_directory') . '/tmp';
                $file = $file->move($directory, $filename);

                $fileName = str_replace('.', '!', $file->getFilename());

                return $this->redirect($this->generateUrl('settings_avatar_crop', array(
                    'file' => $fileName)
                ));
            }
        }

        $hasPartnerAuth = $this->getAuthService()->hasPartnerAuth();
        if ($hasPartnerAuth) {
            $partnerAvatar = $this->getAuthService()->getPartnerAvatar($user['id'], 'big');
        } else {
            $partnerAvatar = null;
        }

        $fromCourse = $request->query->get('fromCourse');

        return $this->render('TopxiaWebBundle:Settings:avatar.html.twig', array(
            'form' => $form->createView(),
            'user' => $this->getUserService()->getUser($user['id']),
            'partnerAvatar' => $partnerAvatar,
            'fromCourse' => $fromCourse,
        ));
    }

    public function avatarCropAction(Request $request)
    {
        $currentUser = $this->getCurrentUser();
        $filename = $request->query->get('file');
        $filename = str_replace('!', '.', $filename);
        $filename = str_replace(array('..' , '/', '\\'), '', $filename);

        $pictureFilePath = $this->container->getParameter('topxia.upload.public_directory') . '/tmp/' . $filename;

        if($request->getMethod() == 'POST') {
            $options = $request->request->all();
            $this->getUserService()->changeAvatar($currentUser['id'], $pictureFilePath, $options);
            return $this->redirect($this->generateUrl('settings_avatar'));
        }

        try {
            $imagine = new Imagine();
            $image = $imagine->open($pictureFilePath);
        } catch (\Exception $e) {
            @unlink($pictureFilePath);
            return $this->createMessageResponse('error', '该文件为非图片格式文件，请重新上传。');
        }

        $naturalSize = $image->getSize();
        $scaledSize = $naturalSize->widen(270)->heighten(270);
        $pictureUrl = 'tmp/' . $filename;

        return $this->render('TopxiaWebBundle:Settings:avatar-crop.html.twig', array(
            'pictureUrl' => $pictureUrl,
            'naturalSize' => $naturalSize,
            'scaledSize' => $scaledSize,
        ));
    }

    public function cashBillAction(Request $request)
    {
        if($request->get('nickname')){

            $user=$this->getUserService()->getUserByNickname($request->get('nickname'));
       
            if($user){

                $conditions['userId']=$user['id'];
            }else{

                $conditions['userId']=-1;
            }
        }

        $conditions['cashType'] = 'RMB';
        $conditions['startTime'] = 0; 
        $conditions['endTime'] = time();


        switch ($request->get('lastHowManyMonths')) { 
            case 'oneWeek': 
                $conditions['startTime'] = $conditions['endTime']-7*24*3600; 
                break; 
            case 'twoWeeks': 
                $conditions['startTime'] = $conditions['endTime']-14*24*3600; 
                break; 
            case 'oneMonth': 
                $conditions['startTime'] = $conditions['endTime']-30*24*3600;               
                break;     
            case 'twoMonths': 
                $conditions['startTime'] = $conditions['endTime']-60*24*3600;               
                break;   
            case 'threeMonths': 
                $conditions['startTime'] = $conditions['endTime']-90*24*3600;               
                break;  
        } 
        
        $paginator = new Paginator(
            $request,
            $this->getCashService()->searchFlowsCount($conditions),
            20
        );

        $cashes = $this->getCashService()->searchFlows(
            $conditions,
            array('ID','DESC'),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );
        
        $userIds=ArrayToolkit::column($cashes,"userId");
        $users=$this->getUserService()->findUsersByIds($userIds);

        $conditions['type']  = 'inflow';      
        $amountInflow = $this->getCashService()->analysisAmount($conditions);

        $conditions['type']  = 'outflow'; 
        $amountOutflow = $this->getCashService()->analysisAmount($conditions);

        return $this->render('TopxiaAdminBundle:Coin:cash-bill.html.twig',array(
            'cashes' => $cashes,
            'paginator' => $paginator,
            'users'=>$users,
            'amountInflow' => $amountInflow?:0,
            'amountOutflow' => $amountOutflow?:0            
          
        ));   
    }

    private function convertFiltersToCondition($condition)
    {   
        $condition['time']=time()-7*3600*24;
        $condition['type']="";
        $condition['orderBY']="desc";
        $keyword="";

        if(isset($condition['searchType'])){

            if(isset($condition['keyword'])){

                $keyword=$condition['keyword'];
            }

            if($keyword !=""){
                switch ($condition['searchType']) {
                case 'nickname':
                    $user=$this->getUserService()->getUserByNickname($keyword);
                    $condition['userId']=$user ? $user['id'] : 0 ;
                    break;
                case 'email':
                    $user=$this->getUserService()->getUserByEmail($keyword);
                    $condition['userId']=$user ? $user['id'] : 0 ;
                    break;                
                default:
                    break;
                }
            }

        }else{
            
            $condition['searchType']="";
            $condition['keyword']="";
        }

        if(isset($condition['timeType']))
        {
            switch ($condition['timeType']) {
                case 'oneWeek':
                    $condition['time']=time()-7*3600*24;
                    break;
                case 'oneMonth':
                    $condition['time']=time()-30*3600*24;
                    break;                
                case 'threeMonths':
                    $condition['time']=time()-90*3600*24;
                    break;
                case 'all':
                    $condition['time']=0;
                    break;
                default:
                    break;
            }
        }else{
            $condition['timeType']="oneWeek";
        }

        if(isset($condition['sort'])){

            switch ($condition['sort']) {
                case 'up':
                    $condition['orderBY']="ASC";
                    break;
                case 'down':
                    $condition['orderBY']="DESC";
                    break;               
                default:
                    break;
            }  
        }else{
            $condition['sort']="down";
        }

        if(isset($condition['flowType'])){

            switch ($condition['flowType']) {
                case 'in':
                    $condition['type']="inflow";
                    break;
                case 'out':
                    $condition['type']="outflow";
                    break;            
                default:
                    break;
            }  
        }else{
            $condition['flowType']="";
        }


        return $condition;
    }

    private function filterCondition($conditions)
    {
        if  (isset($conditions['keywordType'])) {
          if ($conditions['keywordType'] == 'userName'){
            $conditions['keywordType'] = 'userId';
            $userFindbyNickName = $this->getUserService()->getUserByNickname($conditions['keyword']);
            $conditions['keyword'] = $userFindbyNickName? $userFindbyNickName['id']:-1;
          }
        }
        if (isset($conditions['keywordType'])) {
          $conditions[$conditions['keywordType']] = $conditions['keyword'];
          unset($conditions['keywordType']);
          unset($conditions['keyword']);
        }

        if(isset($conditions['createdTime'])){

            switch ($conditions['createdTime']) {
                case 'oneWeek':
                    $conditions['startTime']=time()-7*24*3600;
                    break;
                case 'oneMonth':
                    $conditions['startTime']=time()-30*24*3600;
                    break;
                case 'threeMonths':
                    $conditions['startTime']=time()-90*24*3600;
                    break;
                case 'all':
                    break;
                default:
                    break;
            }
            unset($conditions['createdTime']);

        }else{

            $conditions['startTime']=time()-7*24*3600;
        }

        return $conditions;
    }

    protected function getSettingService(){

      return $this->getServiceKernel()->createService('System.SettingService');
    }

    protected function getCashService(){
      
        return $this->getServiceKernel()->createService('Cash.CashService');
    }

    protected function getCashAccountService(){
        return $this->getServiceKernel()->createService('Cash.CashAccountService');
    }

    protected function getCashOrdersService(){
      
        return $this->getServiceKernel()->createService('Cash.CashOrdersService');
    }

    protected function getLogService() 
    {
        return $this->getServiceKernel()->createService('System.LogService');
    }




}
