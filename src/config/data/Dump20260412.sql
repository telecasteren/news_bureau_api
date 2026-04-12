CREATE DATABASE  IF NOT EXISTS `tele_news_bureau` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tele_news_bureau`;
-- MySQL dump 10.13  Distrib 9.6.0, for macos26.3 (arm64)
--
-- Host: 127.0.0.1    Database: tele_news_bureau
-- ------------------------------------------------------
-- Server version	9.6.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

-- SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '3d80be68-2792-11f1-83cf-43e6b8e8612c:1-117';

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `body` text,
  `category` varchar(100) DEFAULT NULL,
  `submitted_by` int DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_submitted_by` (`submitted_by`),
  CONSTRAINT `fk_submitted_by` FOREIGN KEY (`submitted_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (14,'Study of METAL functions and behaviors','Psychology is the scientific study of the mind and behavior. Its subject matter includes the behavior of humans and nonhumans, both conscious and unconscious phenomena, and mental processes such as thoughts, feelings, and motives. Psychology is an academic discipline of immense scope, crossing the boundaries between the natural and social sciences.','Psychology',18,'2026-04-02 17:27:26'),(15,'Bobs first article','There\'s no end to x media coverage of y','Politics',20,'2026-04-07 22:29:22'),(16,'Bobs second article','It\'s a crime podcast out there','Crime',20,'2026-04-07 22:37:41'),(17,'wrewfwergerg wef','wfgrwwegwegwefwfgrge\r\negrrger\r\nergjebgeørgøerbjgbebgwgwbejøbwebgfbøjw\r\nwkngergbnerbjgr','Crime',20,'2026-04-07 22:57:55'),(18,'aergee','egegeggrg','rgeg',20,'2026-04-07 23:31:08'),(19,'Creating with Postman','There are many ways to do stuff, yet only some suffice. This is the story of using an Express.js API with Postman, and the successful response messages we get with this nice setup. A promise resolved.','Tech',21,'2026-04-09 15:40:30'),(20,'Part2 - Creating with Postman','Even more validation with zod is smart, so I actually utilise it properly. So smooth.','Tech',21,'2026-04-09 19:46:38'),(21,'Part3 - Validating with zod','There are many ways to do stuff, yet only some suffice. This is the story of using an Express.js API with Postman, and the successful response messages we get with this nice setup. A promise resolved.','Tech',21,'2026-04-09 20:01:08'),(22,'bob writes an article','Bob blob article 201!','News',20,'2026-04-10 15:39:41'),(23,'bob writes another article','Bob blob article 202!','Tech',20,'2026-04-10 15:44:18'),(24,'bob writes a third article','Bob blob article 203!','News',20,'2026-04-10 15:57:56'),(25,'Robbies friday','This is an article about Robbie\'s friday','News',22,'2026-04-10 16:32:58'),(26,'GINTAMAAAA','There are many ways to do stuff, yet only some suffice. This is the story of using an Express.js API with Postman, and the successful response messages we get with this nice setup. A promise resolved.','Social',23,'2026-04-11 12:28:05'),(27,'Test Person Run','Here is a recommended testing route: Start by testing all endpoints with empty headers and body. Then register a new user (try first with invalid body and then a valid body). Login as the new user (try first with invalid body and then a valid body). Create an article (try first with invalid body and then a valid body). Fetch the article by its id. Try to update someone elses article (see database export for article ids). Update the article (try first with empty or invalid body, then with one or more fields). Search for the article by querying title, body or category. Delete the article. Fetch all articles','Testing, Social',24,'2026-04-11 14:06:06'),(29,'All about cloning','The way to clone a repo is the way of life...','Testing',25,'2026-04-11 16:36:00');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (12,'emilie@mail.no','$2b$10$upOF1ffbJ/ZMGSbl5P/yeuKaAOT8nkMoCBBnmiSsx6t8rPpAfDZ1e','2026-03-31 14:54:08'),(13,'emmy@mail.no','$2b$10$Sn3zi/AgM7a4/aR1zaDvyuTlJ15GiE.edPsM9T1H3Y.zNSNR/ZYu.','2026-03-31 14:56:41'),(14,'poul@mail.no','$2b$10$iflpEX8iEAfQWWuCLotH9eha620Dx4TO7N8H/o/Hbih8zHS2jMUU.','2026-03-31 14:59:12'),(15,'ceci@mail.no','$2b$10$4UtzokXn3102FhA53DfhI.Ii41aojax0ytGFzi5p47dBZc7kIgvrS','2026-03-31 15:04:04'),(16,'oda@mail.no','$2b$10$/YS22X.r/sx.nXaUsrI./.dRlXQdP48OmCSLa10a7itkbU7Gi.dDO','2026-03-31 15:33:05'),(17,'randi@mail.no','$2b$10$98/9FYAKOvXWRBES/0X.lep2x3nzxRegq71eH3V0fNp0kAxXewZDa','2026-03-31 16:13:04'),(18,'geirChangedTwice@mail.com','$2b$10$u8pf3KczLmSnwUWCJ0wNfuGP8hIZkYIGbmDGTK4hlUEBFXgpWFzVO','2026-04-02 17:12:30'),(19,'stallact@mail.com','$2b$10$ZOQ9irTiK2mZ4lGGkz/Qyup.tZy4ItyfEcqxuGZ3FvvML.QPiTKla','2026-04-05 18:01:58'),(20,'bob@mail.com','$2b$10$6gV0H7pudk2Blb7.2NxrveNHkQ3JRKepNld5r26qg0ZLjCQRNqCy6','2026-04-07 07:48:11'),(21,'bigbang@mail.com','$2b$10$EwM60.8fXQBw4z9ou7j.weURA.rX6dDLouccGLRhhil0IUO.AtGIy','2026-04-09 15:33:00'),(22,'robbySocks@mail.com','$2b$10$6SxL04m4KjXqDYr.ThCEoeegrPOnc0hg6HnOZrAEKhkCilhOOWMJy','2026-04-10 16:31:14'),(23,'maggie@mail.com','$2b$10$g5Rl1mFZ5WCxCvvvj.jb3uyxMxN/5shGgnELbJxe0eR2VhSw0uDai','2026-04-11 12:25:59'),(24,'testperson@mail.com','$2b$10$Ylkqci4QfQyJv729mMdx/uxSlJ.oDoxePuUwaNFyIbFUy8W6w1CSW','2026-04-11 14:04:46'),(25,'cloner@mail.com','$2b$10$KOf85C.syPUIg9lgiOGIaewXfVOCqv25YfIdHlNlktDlbos..NP3i','2026-04-11 16:32:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-12  7:29:14
