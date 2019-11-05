<?php

namespace App\Model;

class InventoryManager extends AbstractManager
{
    const TABLE = 'inventory';

    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

    public function selectWeapons(int $idHero)
    {
        $statement = $this->pdo->prepare("select w.name, w.attack from inventory
    JOIN heroes as h on inventory.heroes_id = h.id
    JOIN weapons as w on w.id = inventory.weapons_id
where h.id = :id_hero");
        $statement->bindValue('id_hero', $idHero, \PDO::PARAM_INT);
        $statement->execute();
        return $statement->fetchAll();
    }

    public function selectSpells(int $idHero)
    {
        $statement = $this->pdo->prepare("select s.name, s.attack from inventory
    JOIN heroes as h on inventory.heroes_id = h.id
    JOIN spells as s on s.id = inventory.spells_id
where h.id = :id_hero");
        $statement->bindValue('id_hero', $idHero, \PDO::PARAM_INT);
        $statement->execute();
        return $statement->fetchAll();
    }

    public function selectPotions(int $idHero)
    {
        $statement = $this->pdo->prepare("select p.name, p.regen from inventory
    JOIN heroes as h on inventory.heroes_id = h.id
    JOIN potions as p on p.id = inventory.potions_id
where h.id = :id_hero");
        $statement->bindValue('id_hero', $idHero, \PDO::PARAM_INT);
        $statement->execute();
        return $statement->fetchAll();
    }
}
