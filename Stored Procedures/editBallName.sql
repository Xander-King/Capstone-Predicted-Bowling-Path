DELIMITER //

CREATE PROCEDURE editBallName (IN p_ballId INT, p_name varchar(45)) 
BEGIN
	UPDATE 	bowlingapp.balls
    SET balls.ballName = p_name
    WHERE balls.ballId = p_ballId;
END