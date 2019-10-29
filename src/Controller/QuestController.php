<?php

namespace App\Controller;

use App\Model\HeroesManager;
use App\Model\StoryManager;

class QuestController extends AbstractController
{

    public function requestPath()
    {
        $requestUri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
        $scriptName = explode('/', trim($_SERVER['SCRIPT_NAME'], '/'));
        $parts = array_diff_assoc($requestUri, $scriptName);
        if (empty($parts)){
            return '/';
        }
        $path = implode('/', $parts);
        if (($position = strpos($path, '?')) !== FALSE)
        {
            $path = substr($path, 0, $position);
        }
        return $parts;
    }

    public function story($id)
    {
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        return $this->twig->render('Story/story.html.twig', ['heroes'=>$heroes,'story' => $story, 'path'=>$this->requestPath()]);
    }
}
