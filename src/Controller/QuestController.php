<?php

namespace App\Controller;

use App\Model\HeroesManager;
use App\Model\InventoryManager;
use App\Model\StoryManager;

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

    public function story($id)
    {
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        $inventoryManager = new InventoryManager();
        $potions = $inventoryManager->selectPotions();
        $weapons = $inventoryManager->selectWeapons();
        $spells = $inventoryManager->selectSpells();

        return $this->twig->render('Story/story.html.twig', [
            'heroes'=>$heroes,
            'story' => $story,
            'potion' => $potions,
            'weapon' => $weapons,
            'spell' => $spells,
            'path'=>$this->requestPath()
        ]);
    }
}
