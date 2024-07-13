https://sequelize.org/


Creamos la base de datos
CREATE SCHEMA `paises` DEFAULT CHARACTER SET utf8 ;

Creamos la tabla : paises

id  - nombre - capital - poblacion - fecha de creacion - fecha de modificacion
CREATE TABLE `paises`.`paises` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `capital` VARCHAR(45) NULL,
  `poblacion` INT NULL,
  `createAt` DATETIME NULL,
  `updateAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

Creamos la tabla : usuarios

CREATE TABLE `paises`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreCompleto` VARCHAR(45) NULL,
  `clave` INT NULL,
  `createAt` DATETIME NULL,
  `updateAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

Creamos la tabla : feedbacks

CREATE TABLE `paises`.`feedbacks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NULL,
  `contenido` VARCHAR(45) NULL,  
  `createAt` DATETIME NULL,
  `updateAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

CREATE TABLE `paises`.`creadores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreCompleto` VARCHAR(45) NULL,
  `acerca` VARCHAR(45) NULL,
  `webLink` VARCHAR(45) NULL,
  `createAt` DATETIME NULL,
  `updateAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

creo dos registros desde my sql para consultarlos desde mi API (GET)
INSERT INTO `paises`.`paises` (`id`, `nombre`, `capital`,`poblacion`) VALUES ('1', 'Argentina', 'Buenos Aires', '46.000.000');
INSERT INTO `paises`.`paises` (`id`, `nombre`, `capital`,`poblacion`) VALUES ('2', 'Uruguay', 'Montevideo', '3.423.000');

creo dos registros desde my sql para consultarlos desde mi API (GET)
INSERT INTO `paises`.`usuarios` (`id`, `nombreCompleto`, `clave`) VALUES ('1', 'Valentin', '1234');
INSERT INTO `paises`.`usuarios` (`id`, `nombreCompleto`, `clave`) VALUES ('2', 'Esteban', '4321');

creo dos registros desde my sql para consultarlos desde mi API (GET)
INSERT INTO `paises`.`feedbacks` (`id`, `usuario_id`, `contenido`) VALUES ('1', 'Carlos', 'Contenido del posteo en myql');
INSERT INTO `paises`.`feedbacks` (`id`, `usuario_id`, `contenido`) VALUES ('2', 'Rosario', 'Otro contenido desde mysql');

creo dos registros desde my sql para consultarlos desde mi API (GET)
INSERT INTO `paises`.`creadores` (`id`, `nombreCompleto`, `acerca`, `weblink`) VALUES ('1', 'Valentin', 'Soy Estudiante','');
INSERT INTO `paises`.`creadores` (`id`, `nombreCompleto`, `acerca`, `weblink`) VALUES ('2', 'Esteban', 'Trabajo en Apple','');

------------

Como se reinicia un id
ALTER TABLE paises AUTO_INCREMENT = 0; Donde paises sera el nombre de nuestra tabla y 0 el numero por el que debe reiniciar (puede ser 0 o 50 o 1000, el que queramos).
-----------------------------------------------------------------------------------------------------------------------
