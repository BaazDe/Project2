<?php


namespace App\Model;

class LocationManager extends AbstractManager
{
    const TABLE = 'locations';

    public function __construct()
    {
        parent::__construct(self::TABLE);
    }
}
