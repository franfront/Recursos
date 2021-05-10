-- Crear base de datos/ CREATE DATABASE

CREATE DATABASE IF NOT EXISTS gestion_usuarios
DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
-- se crea base de datos sino existe con caracteres utf8, collate las tables tienen utf8

DROP DATABASE gestion_usuarios;
-- Borra la base para siempre


-- crea una tabla
CREATE TABLE gestion_usuarios.usuarios (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
    username VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB
/*
int= cantidad de numeros
unsigned= sin signos +-
not null = si o si un valor
auto increment = siempre se agregan numeros
varchar(n) n caracteres
primary key = clave principal y unica
innodb = interacción entre tablas
*/


DROP TABLE gestion_usuarios.usuarios;
-- borra tabla

INSERT INTO gestion_usuarios.usuarios;
(username, email, password)
VALUES
( "Juan", "juan@example.com", MD5("1234"));
-- insertamos datos

/* otra forma de insertar datos
USE gestion_usuarios;

INSERT INTO usuarios;
(username, email, password)
VALUES
( "Juan", "juan@example.com", MD5("1234"));*/

USE gestion_usuarios;

UPDATE usuarios
SET username = "Ana",
    email = "ana@example.com",
    password = MD5("nose12")
WHERE id = 1;
-- cambiar datos

USE gestion_usuarios;

DELET FROM usuarios;
WHERE id = 1;
-- borra datos

TRUNCATE gestion_usuarios.usuarios;
-- borra la tabla

SELECT FROM * usuarios;
--selecciona los campos * de la tabla

SELECT *
FROM usuarios
WHERE username LIKE "An%"
-- selecciona todos los que empiecen con An

SELECT *
FROM usuarios
ORDER BY username ASC;
-- ordena la tabla ascendente y esta DESC descendente


SELECT country, city
FROM country
INNER JOIN city ON city.country_id = country.country_id
ORDER BY country ASC 
-- busca en ambas tablas, obtiene las ciudades en city y los paises en country y cruza los datos
-- inner join combina tablas
-- WHERE country = 'Argentina'; 

-- group by
SELECT country, COUNT(*) AS cantidad
FROM country
INNER JOIN city ON city.country_id = country.country_id
GROUP BY country 
-- agrupa las ciudades por país

SELECT title, firs_name
FROM film
INNER JOIN film_actor ON film_actor.film_id = film.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
--cruza tablas

SELECT *
FROM film
WHERE rating IN ("G", "R")
-- obtiene las que tienen rating g o r

SELECT *
FROM film
WHERE rating NOT IN ("G", "R")
-- obtiene los que no tiene ese rating


SELECT *
FROM film
WHERE length BETWEEN 100 and 110
-- busca los length que estan entre ese rango


SELECT *
FROM film
WHERE length NOT BETWEEN 100 and 110

SELECT title, REPLACE(title, "ZOOLANDER FICTION", "Zoolander") AS new_title
FROM film
WHERE film_id = 999
-- cambia el titulo del film 999


SELECT IF(district = "", "Vacio", district)
FROM address;
-- pregunta si el distrito es vacio muestra Vacio

SELECT amount,
CASE 
    WHEN amount = 0 THEN "Gratis"
    WHEN amount < 6 THEN "Económicos"
    ELSE "Mejores ventas"
END AS pagos
FROM payment;