DELIMITER //

CREATE PROCEDURE deleteUser (IN p_userId INT) 
BEGIN
	DELETE FROM bowlingapp.users WHERE userId = p_userId;
END