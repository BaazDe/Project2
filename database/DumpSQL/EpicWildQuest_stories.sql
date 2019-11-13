-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: EpicWildQuest
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `story` text NOT NULL,
  `creatures_id` int(11) DEFAULT NULL,
  `locations_id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_stories_creatures1_idx` (`creatures_id`),
  KEY `fk_stories_locations1_idx` (`locations_id`),
  CONSTRAINT `fk_stories_creatures1` FOREIGN KEY (`creatures_id`) REFERENCES `creatures` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_stories_locations1` FOREIGN KEY (`locations_id`) REFERENCES `locations` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` VALUES (1,'Vous vous réveillez dans une chambre de taverne, la bouche pâteuse, l’esprit embrouillé. La soirée a été compliquée n’est-ce pas ? Dépité, vous vous souvenez que vous avez dépensé toutes vos économies en bière, quel dommage. Un pop sonore provenant de la grande salle vous extirpe de vos pensées. De nature curieuse mais subissant encore vos excès de la veille vous hésitez entre aller voir ce qui se passe ou vous rendormir. Après tout, vous avez payé cette chambre.',NULL,1,'Story'),(2,'Vous avez préféré mettre votre curiosité de côté, tant pis pour vous. Vous vous rendormez pour ne plus jamais vous réveiller, en d’autres termes, vous êtes mort.',NULL,1,'Dead'),(3,'S’extirper du confort de votre lit n’a pas été chose facile mais vous y êtes parvenu ! En descendant les marches, vous remarquez des choses étranges. En effet, les affiches placardées aux murs sont écrites dans un langage que vous n’arrivez pas à déchiffrer. Plus vous regardez ces affiches, plus vous avez du mal à avancer. Vos jambes deviennent lourdes, vous êtes paralysé. Une voix grave vous explique que vous êtes sous l’emprise d’un sortilège, le seul moyen de vous en sortir est de traduire les affiches.',NULL,2,'Enigma'),(4,'Un mage vous a lancé ce sortilège pour tester votre étoffe de héro. Malheureusement cet encerclement n’a qu’une seule issue que vous n’arrivez pas à résoudre. Vous tombez dans un état végétatif, vous mourrez de soif au bout de trois jours.',NULL,2,'Dead'),(5,'- Bien joué ! Vous avez l’étoffe d’un héro !\nVous tombez nez à nez avec un homme âgé. D’après sa tenue, vous en déduisez que c’est un mage et que c’est surement lui qui vous a ensorcelé.\n- Je vous prie de m’excuser pour ce tour de passe-passe. Le royaume est en perdition, je me devais de vérifier vos capacités.\nLe mage vous explique qu’un sorcier maléfique a créé une machine perturbant le langage du royaume. Il vous engage pour le tuer et détruire son infernale création. Votre chemin sera semé d’embuche, car le sorcier a de nombreux serviteurs et a posé divers pièges afin que personne ne puisse l\'atteindre. La somme d’argent que vous propose le mage étant conséquente, vous acceptez. Il vous propose deux chemins pour rejoindre le château du sorcier. Passer par la forêt ou par le marécage.',NULL,2,'Story'),(6,'Cela fait une heure que vous avez quitté la taverne, vous n’avez croisé personne et vous commencez à croire que cette mission sera des plus simple. Vous êtes tellement à l’aise que vous sifflez gaiement pensant à l’argent facile que vous venez d’obtenir et aux bières que vous vous payerez. Soudainement vous entendez un grognement et vous vous retournez. Un loup féroce vous fonce dessus. Vous n’êtes pas du genre à fuir, vous vous engagez dans le combat.',1,3,'Fight'),(7,'Vous vous sentez mal, l’ambiance pesante du marécage vous rend mal à l’aise. Cette mission ne sera peut-être pas des plus simples. Vous finissez par tomber sur un pont surplombant un étang. Vous décidez de faire une petite pause. A peine vous êtes vous approché du bord de l’eau qu’une créature mi-crapaud, mi-homme tente de vous entraîner dans le fond. Vous devez remercier vos réflexes car ils vous ont empêché d\'être happé dans les eaux boueuses. La créature sort de l’eau pour vous attaquer. Vous n’êtes pas du genre à fuir, vous vous engagez dans le combat.',2,4,'Fight'),(8,'Une lutte sans merci s’est engagée entre vous et la créature. Dès le début, vous avez été surpris par sa vitesse et sa force. Petit à petit, l\'épuisement se fait sentir. Vous ratez un coup puis deux. Une ouverture et la créature en profite pour vous asséner le coup fatal. Vous êtes mort.\n',1,3,'Dead');
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-13 11:11:41
