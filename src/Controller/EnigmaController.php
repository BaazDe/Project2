<?php


namespace App\Controller;

use App\Model\EnigmasManager;
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

    public function enigma1($id)
    {
        $enigmasManager = new EnigmasManager();
        $enigme = $enigmasManager->selectOneById($id);
        return $this->twig->render('Enigmas/enigma1.html.twig', ['enigme' => $enigme]);
    }

}
