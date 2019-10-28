<?php


namespace App\Controller;

use App\Model\HeroesManager;

class HomeController extends AbstractController
{
    public function index()
    {
        return $this->twig->render('Begin/pg-begin.html.twig');
    }

    public function choose()
    {
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        return $this->twig->render('Begin/chooseHero.html.twig', ['heroes' => $heroes]);
    }
}
