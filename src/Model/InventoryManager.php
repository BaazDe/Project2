<?php


namespace App\Model;


class InventoryManager extends AbstractManager
{

    const TABLE = 'inventory';

    /**
     *  Initializes this class.
     */
    public function __construct()
    {
        parent::__construct(self::TABLE);
    }


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
where h.id = 1;' )->fetchAll();
    }

    public function selectSpells(): array
    {
        return $this->pdo->query('select s.name, s.attack from inventory
                JOIN heroes as h on inventory.heroes_id = h.id
                JOIN spells as s on s.id = inventory.spells_id
where s.id = 2;' )->fetchAll();
    }


}