<?php

namespace MarketingMallBundle\Biz\MallWechatNotification\Service;

interface MallWechatNotificationService
{
    public function notify($event, $data);
}
