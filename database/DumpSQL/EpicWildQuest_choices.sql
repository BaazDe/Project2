UPDATE EpicWildQuest.choices SET choice = 'Je vais voir ce qu’il se passe.', consequences = 3, controller = 'enigma/enigma1' WHERE id = 1 AND stories_id = 1;
UPDATE EpicWildQuest.choices SET choice = 'Je préfère me rendormir.', consequences = 2, controller = 'yourDead/end' WHERE id = 2 AND stories_id = 1;
UPDATE EpicWildQuest.choices SET choice = 'Je passe par la forêt.', consequences = 6, controller = 'quest/story' WHERE id = 3 AND stories_id = 5;
UPDATE EpicWildQuest.choices SET choice = 'Je passe par le marécage', consequences = 7, controller = 'quest/story' WHERE id = 4 AND stories_id = 5;
UPDATE EpicWildQuest.choices SET choice = 'Se battre', consequences = 2, controller = 'combat/fight' WHERE id = 5 AND stories_id = 7;
UPDATE EpicWildQuest.choices SET choice = 'Se battre', consequences = 1, controller = 'combat/fight' WHERE id = 6 AND stories_id = 6;