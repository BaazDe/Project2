<?php

namespace App\Controller;

use App\Model\StoryManager;

class QuestController extends AbstractController
{
    public function story($id)
    {
        $storiesManager = new StoryManager();
        $story = $storiesManager->selectOneById($id);
        return $this->twig->render('Story/story.html.twig', ['story' => $story]);
    }
}
