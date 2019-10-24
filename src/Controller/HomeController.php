<?php


namespace App\Controller;

class HomeController extends AbstractController
{
    public function index()
    {
        return $this->twig->render('Begin/pg-begin.html.twig');
    }

    public function choose()
    {
        return $this->twig->render('Begin/chooseHero.html.twig');
    }
}

