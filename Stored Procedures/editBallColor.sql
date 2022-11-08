DELIMITER //

CREATE PROCEDURE editBallColor (IN p_ballId INT, p_color varchar(45)) 
BEGIN
	UPDATE 	bowlingapp.balls
    SET balls.ballColor = p_color
    WHERE balls.ballId = p_ballId;
END