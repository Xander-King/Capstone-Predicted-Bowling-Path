USE `bowlingapp`;
DROP PROCEDURE IF EXISTS getUserBalls;
DELIMITER //

CREATE PROCEDURE getUserBalls (IN p_userId INT)
BEGIN

SELECT *
 FROM bowlingapp.balls
 WHERE userId = p_userId;

END
