DELIMITER //

CREATE PROCEDURE editUserPassword (IN p_userId INT, p_password varchar(45)) 
BEGIN
	UPDATE 	bowlingapp.users
    SET users.password = SHA1(p_password)
    WHERE users.userId = p_userId;
END