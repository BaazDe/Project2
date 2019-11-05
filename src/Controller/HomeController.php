<?php


namespace App\Controller;

use App\Model\HeroesManager;
use App\Model\InventoryManager;

class HomeController extends AbstractController
{
    public function index()
    {
        return $this->twig->render('Begin/begin.html.twig');
    }

    public function choose()
    {
        $heroesManager = new HeroesManager();
        // reset stats
        $heroesManager->resetHeroes();
        $heroes = $heroesManager->selectAll();
        return $this->twig->render('Begin/chooseHero.html.twig', [
            'heroes' => $heroes
        ]);
    }
}
