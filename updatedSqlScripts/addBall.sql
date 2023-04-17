USE `bowlingapp`;
DROP PROCEDURE IF EXISTS addBall;
DELIMITER //

CREATE PROCEDURE addBall (IN p_userId int, IN p_manufacturer varchar(45), IN p_year year, IN p_ballName varchar(45),
IN p_ballColor varchar(45), IN p_ballWeight double, IN p_coreName varchar(45), IN p_coreType varchar(45),
IN p_coreRG float, IN p_coreDifferential float, IN p_coreIDiff double, IN p_coverName varchar(45), IN p_coverFinish varchar(45),
IN p_horizDistToPin double, IN p_vertDistToPin double, IN p_horizDistToCG double, IN p_vertDistToCG double, 
IN p_horizDistToMB double, IN p_vertDistToMB double)
BEGIN
 INSERT INTO bowlingapp.balls(userId, manufacturer, year, ballName, ballColor, ballWeight, coreName, coreType,
 coreRG, coreDifferential, coreIDiff, coverName, coverFinish, horizDistToPin, vertDistToPin, horizDistToCG, vertDistToCG,
 horizDistToMB, vertDistToMB) VALUES (p_userId, p_manufacturer, p_year, p_ballName, p_ballColor, p_ballWeight, p_coreName,
 p_coreType, p_coreRG, p_coreDifferential, p_coreIDiff, p_coverName, p_coverFinish, p_horizDistToPin, p_vertDistToPin,
 p_horizDistToCG, p_vertDistToCG, p_horizDistToMB, p_vertDistToMB);
END