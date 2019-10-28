<?php


namespace App\Model;

class HeroesManager extends AbstractManager
{
    /**
     *
     */
    const TABLE = 'heroes';

    /**
     *  Initializes this class.
     */
    public function __construct()
    {
        parent::__construct(self::TABLE);
    }
}
