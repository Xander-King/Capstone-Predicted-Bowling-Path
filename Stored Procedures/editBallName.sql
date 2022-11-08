DELIMITER //

CREATE PROCEDURE editUserName (IN p_userId INT, p_name varchar(45)) 
BEGIN
	UPDATE 	bowlingapp.users
    SET users.userName = p_name
    WHERE users.userId = p_userId;
END