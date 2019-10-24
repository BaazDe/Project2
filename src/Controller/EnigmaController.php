<?php


namespace App\Controller;

class EnigmaController extends AbstractController
{
    public function enigme()
    {
        return $this->twig->render('Enigmes/enigme1.html.twig');
    }
}