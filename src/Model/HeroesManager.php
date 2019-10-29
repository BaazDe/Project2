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

    /**
     * @return string
     */
    public function resetHeroes():string
    {
        // prepared request
        $statement = $this->pdo->exec("UPDATE $this->table SET health = 130, attack = 150, gold = 20 WHERE id = 1");
        $statement2 = $this->pdo->exec("UPDATE $this->table SET health = 80, attack = 200, gold = 20 WHERE id = 2");
        $statement3 = $this->pdo->exec("UPDATE $this->table SET health = 100, attack = 165, gold = 40 WHERE id = 3");
        return $statement.$statement2.$statement3;
    }
}
