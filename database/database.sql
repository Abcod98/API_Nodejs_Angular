CREATE DATABASE empresas_db;

USE empresas_db;

CREATE TABLE empresas (
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_comercial VARCHAR(100) NOT NULL,
  razon_social VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  nit VARCHAR(25) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  direccion VARCHAR(200) NOT NULL
);

DESCRIBE empresas;