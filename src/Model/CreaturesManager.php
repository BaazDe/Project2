<?php


namespace App\Model;

class CreaturesManager extends AbstractManager
{
    const TABLE = 'creatures';
    const MAX_HEALTH = [null, 130, 170];

    public function __construct()
    {
        parent::__construct(self::TABLE);
    }
}
