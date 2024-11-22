-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 22, 2024 at 11:06 AM
-- Server version: 10.6.20-MariaDB-log
-- PHP Version: 8.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `noit1_cinecompass`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'Kaloyan', 'Kostadinov', 'kaloyan.kostadinov2007@gmail.com', '$2a$10$o0UzKrFRN8UyIGwZ11blouK7itblDp8jpyFjoY0520Q4Gnmji1KXG'),
(4, 'pesho', 'Kostadinov', 'kaloyan.kostadinov2007@gmail.comww', '$2a$10$/pXDkVzSUcu4XC4togB9KemO9aSEsI7MWju9DtMWzr0J2pJbFtxzG'),
(18, 'Kaloyan', 'kostadinov', 'kaloyan.kostadinov2007@gmail.comwww', '$2a$10$5qATZrH8EJ/SHm5eFWO8X.1hjlu8h95t2ooViU2YADU/gjgaEI1fq'),
(75, 'Kaloyan', 'kostadinov', 'kalata07eg30@afffffffffffffffabv.bg', '$2a$10$dr3His6HKjjoncsU9id6luB4aXvOYDZL1OQNrKoS20jQZQgcidzrG'),
(80, 'Kaloyan', 'kostadinov', 'kalata0730@xn--abv-gdd.bg', '$2a$10$w4SPEWwbpyRHIPgB5IuHve2KVOXedwe6cEgbxMaGpnx5u79n2tivu'),
(88, 'Kaloyan', 'kostadinov', 'kaloyan.kostadinov2007@gmail.comw', '$2a$10$rgV.mVcPiFREBt5E6MAiee5utAjegmNeU9KoGMq9UIhY6ReAELs1G'),
(90, 'Kaloyan', 'kostadinov', 'kaloyan.kostadinov2007@gmail.comwwww', '$2a$10$8MOA3ORRnI/zAdu08Bn5neFw/81Fpfm86eFuQXgG.6hxSCKhmhNEW'),
(120, 'Kaloyan', 'kostadinov', 'kaloyan.kostadinov2007@gmail.comwwwww', '$2a$10$GEMRMXmH4BbN01n9XUrnCuZUaPL6tPXqMWCIuNPx32W7gaDUgvEBO'),
(150, 'ivajlo', 'zdravkov', 'ivajlozdravkov77@gmail.com', '$2a$10$Xr7iLgZ08ZlYmZWArKx48.g5lTGXnHBxYg27L14cvWC822AMLEpXa'),
(151, 'Kaloyan', 'Kostadinov', 'kalata0730@abv.bg', '$2a$10$OBbCf.4g9nl4ydfbdFc7t.f5cB/iPLLrHDY95XVDhjIDRFXPSDz0K'),
(152, 'Kaloyan', 'Kostadinov', 'kaloyan.y.gaming2007@gmail.com', '$2a$10$ibHLUTu5MBaDWDAChgpEGOK46CkYgMltDeuxaGK/MLZjFIXSpe3om');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_email` (`email`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
