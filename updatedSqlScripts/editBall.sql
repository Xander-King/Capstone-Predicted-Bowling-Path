USE `bowlingapp`;
DROP PROCEDURE IF EXISTS editBall;
DELIMITER //

CREATE PROCEDURE editBall (IN p_ballId int, IN p_manufacturer varchar(45), IN p_year year, IN p_ballName varchar(45),
IN p_ballColor varchar(45), IN p_ballWeight double, IN p_coreName varchar(45), IN p_coreType varchar(45),
IN p_coreRG float, IN p_coreDifferential float, IN p_coreIDiff double, IN p_coverName varchar(45), IN p_coverFinish varchar(45),
IN p_horizDistToPin double, IN p_vertDistToPin double, IN p_horizDistToCG double, IN p_vertDistToCG double, 
IN p_horizDistToMB double, IN p_vertDistToMB double)
BEGIN

UPDATE bowlingapp.balls
SET manufacturer = p_manufacturer, year = p_year, ballName = p_ballName, ballColor = p_ballColor, ballWeight = p_ballWeight,
 coreName = p_coreName, coreType = p_coreType, coreRG = p_coreRG, coreDifferential = p_coreDifferential, coreIDiff = p_coreIDiff, coverName = p_coverName, 
 coverFinish = p_coverFinish, horizDistToPin = p_horizDistToPin, vertDistToPin = p_vertDistToPin, horizDistToCG = p_horizDistToCG, 
 vertDistToCG = p_vertDistToCG, horizDistToMB = p_horizDistToMB, vertDistToMB = p_vertDistToMB
WHERE ballId = p_ballId;
END	