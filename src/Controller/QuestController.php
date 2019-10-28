<?php

namespace App\Controller;

use App\Model\HeroesManager;
use App\Model\StoryManager;

class QuestController extends AbstractController
{
    public function story($id)
    {
        $heroesManager = new HeroesManager();
        $heroes = $heroesManager->selectAll();
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        return $this->twig->render('Story/story.html.twig', ['heroes'=>$heroes,'story' => $story]);
    }
}
