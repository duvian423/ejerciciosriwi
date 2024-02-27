
CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    apellido VARCHAR(45),
    edad INT(3),
    tipo_documento VARCHAR(30),
    numero_documento VARCHAR(20)
);

INSERT INTO usuarios
(name, apellido, edad, tipo_documento, numero_documento)
VALUES
("martin","zuares",23,"cedula","987664321"),
("emanuel","quintero",23,"cedula","987664321"),
("blanca","garcia",23,"cedula","987664321");


CREATE TABLE dueños(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    apellido VARCHAR(45),
    tipo_documento VARCHAR(30),
    numero_documento VARCHAR(20)
);

INSERT INTO dueños
(name, apellido, tipo_documento, numero_documento)
VALUES
("pedro", "perez", "cedula", "123432567");

CREATE TABLE vehiculo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(45),
    linea VARCHAR(45),
    color VARCHAR(45),
    placa VARCHAR(10),
    usuario INT(3),
    dueño INT(3),
    Foreign Key (usuario) REFERENCES usuarios (id),
    Foreign Key (dueño) REFERENCES dueños (id)
);

INSERT INTO vehiculo
(marca, linea, color, placa, usuario, dueño)
VALUES
("bajaj", "tvs", "negro", "adk-02h", 3, 1),
("yamaha", "xt", "morado", "drs-32g", 4, 1),
("bajaj", "boxer", "gris", "msk-03e", 5, 1),
("yamaha", "libero", "amarillo", "dks-22a", 4, 1);

CREATE TABLE plazas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

INSERT INTO plazas
(name)
VALUES
("plaza A1"),
("plaza A2"),
("plaza A3"),
("plaza A4"),
("plaza A5");

CREATE TABLE estado_plaza(
    id INT PRIMARY KEY AUTO_INCREMENT,
    plaza INT(3),
    vehiculo INT(3),
    hora_entrada DATETIME,
    hora_salida DATETIME,
    Foreign Key (plaza) REFERENCES plazas (id),
    Foreign Key (vehiculo) REFERENCES vehiculo (id)
);

INSERT INTO estado_plaza
(plaza, vehiculo, hora_entrada, hora_salida)
VALUES
(1, 2, "2023-04-23 12:53:47", "2023-04-23 14:53:47")

SELECT usuarios.name, usuarios.apellido , vehiculo.linea , vehiculo.placa FROM vehiculo INNER JOIN usuarios WHERE vehiculo.usuario = usuarios.id  AND vehiculo.placa = "msk-03e";





DROP TABLE plazas;

DROP TABLE usuarios;

DROP TABLE vehiculo;








