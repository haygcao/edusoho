<?php

namespace Biz\WrongBook\Service;

interface WrongQuestionService
{
    public function buildWrongQuestion($fields, $source);

    public function createWrongQuestion($fields);

    public function searchWrongQuestion($conditions, $orderBys, $start, $limit, $columns = []);

    public function deleteWrongQuestion($id);

    public function batchBuildWrongQuestion($wrongAnswerQuestionReports, $source);

    public function countWrongQuestion($conditions);

    public function getPool($poolId);

    /**
     * BookPool
     */
    public function searchWrongBookPool($conditions, $orderBys, $start, $limit);

    public function countWrongBookPool($conditions);

    public function getWrongBookPoolByFieldsGroupByTargetType($fields);

    public function searchWrongQuestionsWithCollect($conditions, $orderBys, $start, $limit, $columns = []);
}
