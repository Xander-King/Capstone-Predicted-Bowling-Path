USE `bowlingapp`;
DROP PROCEDURE addUser;
DELIMITER //

CREATE PROCEDURE addUser (IN p_userName varchar(45), IN p_password varchar(45), IN p_secQuest varchar(45))
BEGIN
 INSERT INTO bowlingapp.users(userName, password, secQuest) VALUES (p_userName, SHA1(p_password), p_secQuest);
END