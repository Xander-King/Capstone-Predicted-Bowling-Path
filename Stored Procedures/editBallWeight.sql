DELIMITER //

CREATE PROCEDURE editBallWeight (IN p_ballId INT, p_weight INT) 
BEGIN
	UPDATE 	bowlingapp.balls
    SET balls.ballWeight = p_weight
    WHERE balls.ballId = p_ballId;
END