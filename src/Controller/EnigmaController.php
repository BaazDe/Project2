<?php


namespace App\Controller;

use App\Model\EnigmasManager;
use App\Model\StoryManager;

class EnigmaController extends AbstractController
{
    public function enigma1($id)
    {
        $enigmasManager = new EnigmasManager();
        $enigme = $enigmasManager->selectOneById($id);
        return $this->twig->render('Enigmas/enigma1.html.twig', ['enigme' => $enigme]);
    }
}
