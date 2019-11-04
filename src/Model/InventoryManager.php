<?php


namespace App\Model;

class InventoryManager extends AbstractManager
{

    /**
     *
     */
    const TABLE = 'inventory';

    /**
     *  Initializes this class.
     */
    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

    //displays weapons in inventory
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

    //displays spells in inventory
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

    //displays potions in inventory
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

    public function insertStartingItems(int $idHero)
    {
        //Truncate inventory table to reset
        $this->pdo->query("truncate table inventory");

        // prepared request
        // TODO : Join the tables inventory->weapons->heroes in the following SQL to get the right inventory according
        // to the hero
        // TODO : Insert items via their names, not their ID
        switch ($idHero) {
            case 1:
                // adds axe + 1 potion to warrior
                $statement = $this->pdo->prepare("insert into inventory (weapons_id, spells_id, heroes_id, 
                       potions_id) values (1,4,$idHero,1)");
                break;
            case 2:
                // adds wand + 1 potion to mage
                $statement = $this->pdo->prepare("insert into inventory (weapons_id, spells_id, heroes_id, 
                       potions_id) values (2,4,$idHero,1)");
                break;
            case 3:
                // adds dagger + 1 potion to rogue
                $statement = $this->pdo->prepare("insert into inventory (weapons_id, spells_id, heroes_id, 
                       potions_id) values (3,4,$idHero,1)");
                break;
            default:
                $statement = $this->pdo->prepare("insert into inventory (weapons_id, spells_id, heroes_id, 
                       potions_id) values (4,4,$idHero,3)");
                break;
        }
        $statement->execute();
    }
}
