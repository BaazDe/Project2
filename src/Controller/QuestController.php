<?php

namespace App\Controller;

use App\Model\HeroesManager;
use App\Model\StoryManager;
use App\Model\InventoryManager;

class QuestController extends AbstractController
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

    public function story($id, $id_hero)
    {
        //calling InventoryManager
        $itemsManager = new InventoryManager();
        //fetch weapons
        $weapons = $itemsManager->selectWeapons($id_hero);
        //fetch spells
        $spells = $itemsManager->selectSpells($id_hero);
        //fetch potions
        $potions = $itemsManager->selectPotions($id_hero);
        //calling HeroesManager
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        return $this->twig->render('Story/story.html.twig', [
            'potions' => $potions,
            'weapons'=>$weapons,
            'spells'=>$spells,
            'heroes'=>$heroes,
            'story' => $story,
            'path'=>$this->requestPath()
        ]);
    }
}
