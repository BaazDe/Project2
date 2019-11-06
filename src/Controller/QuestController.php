<?php

namespace App\Controller;

use App\Model\ChoiceManager;
use App\Model\HeroesManager;
use App\Model\LocationManager;
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

    public function story($id, $idHero)
    {
        //calling InventoryManager
        $itemsManager = new InventoryManager();
        if ($id == 1) {
            // reset inventory
            $inventoryManager = new InventoryManager();
            $inventoryManager->insertStartingItems($idHero);
        }
        //fetch weapons
        $weapons = $itemsManager->selectWeapons($idHero);
        //fetch spells
        $spells = $itemsManager->selectSpells($idHero);
        //fetch potions
        $potions = $itemsManager->selectPotions($idHero);
        if (isset($_POST['potion'])) {
            $itemsManager->usePotion();
        }

        //calling HeroesManager
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        $choicesManager = new ChoiceManager();
        $choices = $choicesManager->selectResponse($id);

        //display locations
        $locationId = $story['locations_id'];
        $locationsManager = new LocationManager();
        $location=$locationsManager->selectOneById($locationId);
        $location=$location['name'];
        return $this->twig->render('Story/story.html.twig', [
            'potions' => $potions,
            'weapons'=>$weapons,
            'spells'=>$spells,
            'heroes'=>$heroes,
            'story' => $story,
            'choices' => $choices,
            'locations' =>$location,
            'path'=>$this->requestPath()
        ]);
    }
}
