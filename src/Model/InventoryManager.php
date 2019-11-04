<?php

<<<<<<< HEAD
=======

>>>>>>> 9261b9fb7d7b5139697816b7725c69cc364a3e96
namespace App\Model;

class InventoryManager extends AbstractManager
{
<<<<<<< HEAD
    const TABLE = 'inventory';
=======

    /**
     *
     */
    const TABLE = 'inventory';

>>>>>>> 9261b9fb7d7b5139697816b7725c69cc364a3e96
    /**
     *  Initializes this class.
     */
    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

<<<<<<< HEAD
    public function selectPotions(): array
    {
        return $this->pdo->query('select p.name, p.regen from inventory
                JOIN heroes as h on inventory.heroes_id = h.id
                JOIN potions as p on p.id = inventory.potions_id
          where p.id = 1;')->fetchAll();
    }
    public function selectWeapons(): array
    {
        return $this->pdo->query('select w.name, w.attack from inventory
   JOIN heroes as h on inventory.heroes_id = h.id
   JOIN weapons as w on w.id = inventory.weapons_id
where h.id = 1;')->fetchAll();
    }
    public function selectSpells(): array
    {
        return $this->pdo->query('select s.name, s.attack from inventory
                JOIN heroes as h on inventory.heroes_id = h.id
                JOIN spells as s on s.id = inventory.spells_id
where s.id = 2;')->fetchAll();
=======
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
>>>>>>> 9261b9fb7d7b5139697816b7725c69cc364a3e96
    }
}
