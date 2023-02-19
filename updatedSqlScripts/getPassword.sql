USE `bowlingapp`;
DROP PROCEDURE IF EXISTS getPassword;
DELIMITER //

CREATE PROCEDURE getPassword (IN p_userName varchar(45), IN p_secQuest varchar(45))
BEGIN

SELECT password
 FROM bowlingapp.users
 WHERE username = p_userName AND secQuest = p_secQuest;

END
