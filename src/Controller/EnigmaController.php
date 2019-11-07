<?php


namespace App\Controller;

use App\Model\EnigmasManager;
use App\Model\HeroesManager;
use App\Model\InventoryManager;
use App\Model\StoryManager;

class EnigmaController extends AbstractController
{
    public function requestPath()
    {
        $requestUri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
        $scriptName = explode('/', trim($_SERVER['SCRIPT_NAME'], '/'));
        $parts = array_diff_assoc($requestUri, $scriptName);
        if (empty($parts)) {
            return '/';
        }
        return $parts;
    }

    public function enigma1($id, $idHero)
    {
        //calling InventoryManager
        $itemsManager = new InventoryManager();
        //fetch weapons
        $weapons = $itemsManager->selectWeapons($idHero);
        //fetch spells
        $spells = $itemsManager->selectSpells($idHero);
        //fetch potions
        $potions = $itemsManager->selectPotions($idHero);
        $enigmasManager = new EnigmasManager();
        $enigme = $enigmasManager->selectOneById($id);
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        return $this->twig->render('Enigmas/enigma1.html.twig', [
            'potions' => $potions,
            'weapons'=>$weapons,
            'spells'=>$spells,
            'story' => $story,
            'enigme' => $enigme,
            'heroes'=>$heroes,
            'path'=>$this->requestPath()
        ]);
    }
public function Answer()
{
    for ($i<3, $i++){
        if ($answer == )
    }
}
}
