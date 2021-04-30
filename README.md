![Estoes](assets/images/logo.png "Esto es Agencia Digital")
# Fullstack challenge
* Se debe realizar el frontend de una plataforma que que tiene como objetivo realizar la gestión de proyectos.
* Se debe crear un servicio que maneje los datos de la plataforma.
* Si bien no hay restricción de tiempo, creemos que de 3 a 5 horas es un tiempo razonable para entregarlo con calidad.

## Diseño
Podés encontrar el diseño [acá](https://www.figma.com/file/YLDHikbDgfsZbVdEbO0H6U/Full-Stack-Test-1?node-id=1%3A1701).

## Definición funcional
El usuario accede a un administrador de proyectos para realizar la gestión, puede crearlos, editarlos y eliminarlos.

* El usuario no puede submitear la creación o edición de un proyecto si los campos no están validados.
* El usuario debe poder utilizar el gestor en Desktop y Mobile.

## API REST
El objetivo es realizar la construcción de endpoint clase Projects que represente la información del proyecto como muestra el diseño.

* Realizar el schema de base de datos de proyectos(MySQL).
* El endpoint debe traer un listado de proyectos (suma si tiene paginado).
* Traer un solo proyecto /id.
* Realizar un POST para insertar un proyecto en la base de datos.
* Realizar un DELETE para eliminar un proyecto.

## Definición extras que no están en el diseño
* El listado de proyectos puede tener un paginado
* El eliminar puede tener un modal que sugiera si esta seguro de realizar la acción o no
* El listado de proyectos puede tener un buscador de la lista por nombre de proyecto

## Definiciones técnicas
* El Frontend debe estar realizado en un framework de JS, Angular o React.
* El Back-end debe estar realizado en un framework PHP (Laravel, CI, Express, Node).
* La aplicación debe estar publicada y debe ser accesible mediante un link(Ver Netfly, Heroku) o cualquier webserver.
* El código de la aplicación debe estar subida a un repositorio de público acceso.

## Consideraciones
* Es más importante la funcionalidad que aplicar la estética del diseño.
* Es importante que existan las validaciones de datos, ejemplo si se solicita un proyecto que no existe.

## Muchas gracias por tu tiempo!