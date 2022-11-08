DELIMITER //

CREATE PROCEDURE deleteBall (IN p_ballId INT) 
BEGIN
	DELETE FROM bowlingapp.balls WHERE ballId = p_ballId;
END