<?php


namespace App\Controller;

class EnigmaController extends AbstractController
{
    public function enigma1()
    {
        return $this->twig->render('Enigmas/enigma1.html.twig');
    }

}