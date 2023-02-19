USE `bowlingapp`;
DROP PROCEDURE IF EXISTS loginUser;
DELIMITER //


CREATE PROCEDURE loginUser (IN p_userName varchar(45), IN p_password varchar(45))

BEGIN

SELECT userName 
	FROM bowlingapp.users
	WHERE userName = p_userName AND password = p_password;
	
END
