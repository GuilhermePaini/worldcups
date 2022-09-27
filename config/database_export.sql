create schema worldcup;

-- worldcup.WorldCups definition

CREATE TABLE worldcup.`WorldCups` (
  `Year` int NOT NULL,
  `Country` varchar(12) NOT NULL,
  `Winner` varchar(10) NOT NULL,
  `RunnersUp` varchar(25) NOT NULL,
  `Third` varchar(11) NOT NULL,
  `Fourth` varchar(14) NOT NULL,
  `GoalsScored` int NOT NULL,
  `QualifiedTeams` int NOT NULL,
  `MatchesPlayed` int NOT NULL,
  `Attendance` varchar(9) NOT NULL,
  PRIMARY KEY (`Year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO WorldCups (`Year`,Country,Winner,RunnersUp,Third,Fourth,GoalsScored,QualifiedTeams,MatchesPlayed,Attendance) VALUES
	 (1930,'Uruguay','Uruguay','Argentina','USA','Yugoslavia',70,13,18,'590.549'),
	 (1934,'Italy','Italy','Czechoslovakia','Germany','Austria',70,16,17,'363.000'),
	 (1938,'France','Italy','Hungary','Brazil','Sweden',84,15,18,'375.700'),
	 (1950,'Brazil','Uruguay','Brazil','Sweden','Spain',88,13,22,'1.045.246'),
	 (1954,'Switzerland','Germany FR','Hungary','Austria','Uruguay',140,16,26,'768.607'),
	 (1958,'Sweden','Brazil','Sweden','France','Germany FR',126,16,35,'819.810'),
	 (1962,'Chile','Brazil','Czechoslovakia','Chile','Yugoslavia',89,16,32,'893.172'),
	 (1966,'England','England','Germany FR','Portugal','Soviet Union',89,16,32,'1.563.135'),
	 (1970,'Mexico','Brazil','Italy','Germany FR','Uruguay',95,16,32,'1.603.975'),
	 (1974,'Germany','Germany FR','Netherlands','Poland','Brazil',97,16,38,'1.865.753');
INSERT INTO WorldCups (`Year`,Country,Winner,RunnersUp,Third,Fourth,GoalsScored,QualifiedTeams,MatchesPlayed,Attendance) VALUES
	 (1978,'Argentina','Argentina','Netherlands','Brazil','Italy',102,16,38,'1.545.791'),
	 (1982,'Spain','Italy','Germany FR','Poland','France',146,24,52,'2.109.723'),
	 (1986,'Mexico','Argentina','Germany FR','France','Belgium',132,24,52,'2.394.031'),
	 (1990,'Italy','Germany FR','Argentina','Italy','England',115,24,52,'2.516.215'),
	 (1994,'USA','Brazil','Italy','Sweden','Bulgaria',141,24,52,'3.587.538'),
	 (1998,'France','France','Brazil','Croatia','Netherlands',171,32,64,'2.785.100'),
	 (2002,'Korea/Japan','Brazil','Germany','Turkey','Korea Republic',161,32,64,'2.705.197'),
	 (2006,'Germany','Italy','France','Germany','Portugal',147,32,64,'3.359.439'),
	 (2010,'South Africa','Spain','Netherlands','Germany','Uruguay',145,32,64,'3.178.856'),
	 (2014,'Brazil','Germany','Argentina','Netherlands','Brazil',171,32,64,'3.386.810');

-- worldcup.WorldCupMatches definition

CREATE TABLE worldcup.`WorldCupMatches` (
  `Year_Cup` int NOT NULL,
  `Datetime` varchar(21) DEFAULT NULL,
  `Stage` varchar(24) DEFAULT NULL,
  `Stadium` varchar(50) DEFAULT NULL,
  `City` varchar(34) DEFAULT NULL,
  `Home_Team_Name` varchar(26) DEFAULT NULL,
  `Home_Team_Goals` int DEFAULT NULL,
  `Away_Team_Goals` int DEFAULT NULL,
  `Away_Team_Name` varchar(26) DEFAULT NULL,
  `Win_conditions` varchar(45) DEFAULT NULL,
  `Referee` varchar(36) DEFAULT NULL,
  `MatchID` int NOT NULL,
  `Home_Team_Initials` varchar(3) DEFAULT NULL,
  `Away_Team_Initials` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`MatchID`),
  KEY `WorldCupMatches_FK` (`Year_Cup`),
  CONSTRAINT `WorldCupMatches_FK` FOREIGN KEY (`Year_Cup`) REFERENCES `WorldCups` (`Year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO WorldCupMatches (Year_Cup,`Datetime`,Stage,Stadium,City,Home_Team_Name,Home_Team_Goals,Away_Team_Goals,Away_Team_Name,Win_conditions,Referee,MatchID,Home_Team_Initials,Away_Team_Initials) VALUES
	 (1930,'30 Jul 1930 - 14:15','Final','Estadio Centenario','Montevideo','Uruguay',4,2,'Argentina',NULL,'LANGENUS Jean (BEL)',1087,'URU','ARG'),
	 (1934,'10 Jun 1934 - 17:30','Final','Nazionale PNF','Rome','Italy',2,1,'Czechoslovakia','Italy win after extra time','EKLIND Ivan (SWE)',1134,'ITA','TCH'),
	 (1938,'19 Jun 1938 - 17:00','Final','Stade Olympique','Colombes','Italy',4,2,'Hungary',NULL,NULL,1174,'ITA','HUN'),
	 (1954,'04 Jul 1954 - 17:00','Final','Wankdorf Stadium','Berne','Germany FR',3,2,'Hungary',NULL,NULL,1278,'FRG','HUN'),
	 (1958,'29 Jun 1958 - 15:00','Final','Rasunda Stadium','Solna','Brazil',5,2,'Sweden',NULL,NULL,1343,'BRA','SWE'),
	 (1962,'17 Jun 1962 - 14:30','Final','Nacional','Santiago De Chile','Brazil',3,1,'Czechoslovakia',NULL,'LATYCHEV Nikolaj (URS)',1463,'BRA','TCH'),
	 (1966,'30 Jul 1966 - 15:00','Final','Wembley Stadium','London','England',4,2,'Germany FR','England win after extra time','DIENST Gottfried (SUI)',1633,'ENG','FRG'),
	 (1970,'21 Jun 1970 - 12:00','Final','Estadio Azteca','Mexico City','Brazil',4,1,'Italy',NULL,'GLOECKNER Rudolf (GDR)',1765,'BRA','ITA'),
	 (1974,'07 July 1974 - 16:00','Final','Olympiastadion','Munich','Netherlands',1,2,'Germany FR',NULL,'TAYLOR John (ENG)',2063,'NED','FRG'),
	 (1978,'25 Jun 1978 - 15:00','Final','El Monumental - Estadio Monumental Antonio Vespuci','Buenos Aires','Argentina',3,1,'Netherlands','Argentina win after extra time','GONELLA Sergio (ITA)',2198,'ARG','NED');
INSERT INTO WorldCupMatches (Year_Cup,`Datetime`,Stage,Stadium,City,Home_Team_Name,Home_Team_Goals,Away_Team_Goals,Away_Team_Name,Win_conditions,Referee,MatchID,Home_Team_Initials,Away_Team_Initials) VALUES
	 (1982,'11 Jul 1982 - 20:00','Final','Santiago Bernabeu','Madrid','Italy',3,1,'Germany FR',NULL,'COELHO Arnaldo (BRA)',923,'ITA','FRG'),
	 (1986,'29 Jun 1986 - 12:00','Final','Estadio Azteca','Mexico City','Argentina',3,2,'Germany FR',NULL,'ARPPI FILHO Romualdo (BRA)',393,'ARG','FRG'),
	 (1990,'08 Jul 1990 - 20:00','Final','Stadio Olimpico','Rome','Germany FR',1,0,'Argentina',NULL,'CODESAL MENDEZ Edgardo (MEX)',27,'FRG','ARG'),
	 (1994,'17 Jul 1994 - 12:30','Final','Rose Bowl','Los Angeles','Brazil',0,0,'Italy','Brazil win on penalties (3 - 2)','PUHL Sandor (HUN)',3104,'BRA','ITA'),
	 (1998,'12 Jul 1998 - 21:00','Final','Stade de France','Saint-Denis','Brazil',0,3,'France',NULL,'BELQOLA Said (MAR)',8788,'BRA','FRA'),
	 (2002,'30 Jun 2002 - 20:00','Final','International Stadium Yokohama','Yokohama','Germany',0,2,'Brazil',NULL,'COLLINA Pierluigi (ITA)',43950064,'GER','BRA'),
	 (2006,'09 Jul 2006 - 20:00','Final','Olympiastadion','Berlin','Italy',1,1,'France','Italy win on penalties (5 - 3)','ELIZONDO Horacio (ARG)',97410064,'ITA','FRA'),
	 (2010,'11 Jul 2010 - 20:30','Final','Soccer City Stadium','Johannesburg','Netherlands',0,1,'Spain','Spain win after extra time','WEBB Howard (ENG)',300061509,'NED','ESP'),
	 (2014,'13 Jul 2014 - 16:00','Final','Estadio do Maracana','Rio De Janeiro','Germany',1,0,'Argentina','Germany win after extra time','Nicola RIZZOLI (ITA)',300186501,'GER','ARG');

