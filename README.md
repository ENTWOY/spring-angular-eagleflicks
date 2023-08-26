Este proyecto es un ejemplo de una aplicación CRUD que utiliza Spring Boot para el backend, Angular para el frontend y MySQL como base de datos.

## Requisitos previos
- Java 17
- [Spring Tool Suite 4](https://spring.io/tools) o cualquier IDE compatible con Spring.
- [Visual Studio Code](https://code.visualstudio.com/) u otro editor de texto.
- [Node.js](https://nodejs.org/) y [Angular CLI](https://angular.io/cli) para el frontend.
- [MySQL](https://www.mysql.com/) o cualquier base de datos compatible con MySQL.

## Instalación y Ejecución
1. Clonar o descarga el repositorio `https://github.com/NeiDenn/spring-angular-crud.git`
2. Importar el proyecto "empleados-backend" en el IDE Spring Tool Suite 4 y "empleados-frontend" en Visual Studio Code
3. Ajustar en el archivo `application.properties` la cadena de conexión `bd_spring_angular`
```
server.port=8091
spring.jpa.database=MYSQL
spring.jpa.show-sql=true
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/bd_spring_angular?serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=mysql
```

4. Ejecutar la base de datos MySQL `bd_spring_angular`
```
drop database if exists bd_spring_angular;
create database bd_spring_angular;
use bd_spring_angular;

create table tb_empleado(
id_emp int primary key auto_increment,
nom_emp varchar(99), 
ape_emp varchar(99), 
ema_emp varchar(255) NOT NULL UNIQUE
);

INSERT INTO tb_empleado (nom_emp, ape_emp, ema_emp )VALUES
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Smith', 'jane.smith@example.com'),
('Christopher', 'Davis', 'christopher.davis@example.com'),
('Amanda', 'Rodriguez', 'amanda.rodriguez@example.com');
```

5. Una vez que hayas iniciado tanto el backend de Spring como el frontend de Angular, podrás acceder a la aplicación en tu navegador web:

- Backend: http://localhost:8091
- Frontend: http://localhost:4200
