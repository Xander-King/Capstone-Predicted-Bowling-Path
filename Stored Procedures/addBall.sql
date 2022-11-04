DELIMITER //

CREATE PROCEDURE addBall (IN p_userId INT, p_ballName varchar(45), p_ballWeight varchar(45), p_ballColor varchar(45)) 
BEGIN
	INSERT INTO bowlingapp.balls(userId, ballColor, ballWeight, ballName) VALUES (p_userId, p_ballColor, p_ballWeight, p_ballName);
END