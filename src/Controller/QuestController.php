<?php

namespace App\Controller;

class QuestController extends AbstractController
{
    public function story()
    {
        return $this->twig->render('Story/story.html.twig');
    }
}
