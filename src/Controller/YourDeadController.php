<?php

namespace App\Controller;

class YourDeadController extends AbstractController
{
    public function end()
    {
        return $this->twig->render('Story/dead.html.twig');
    }
}
