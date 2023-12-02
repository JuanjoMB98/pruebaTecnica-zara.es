<img height="225" alt="zaralogo" src="https://media.licdn.com/dms/image/C4D0BAQFoeTCCNjCqzw/company-logo_200_200/0/1630511390825?e=1709769600&v=beta&t=N4NOMGsWSKsBKtnuQTzFq_7_mf7eoZZftoa6gx-LIrw" align="right">
<div align="center">
  <h1>Prueba Técnica - ZARA</h1>
  <h3>Creación de un Hero Section con HTML,CSS,JS</h3>
  <h5><i>Libreta del proyecto para apuntar tiempos y anotaciones.</i></h5>
</div>
 
 ---

> [!NOTE]
> En primer lugar muchas gracias por tu tiempo y la opotunidad! :smile:

<br>


# 1. PREANÁLISIS
Despues de mirar los assets y el material proporcionado, lo primero que se me ha ocurrido es hacer un "Hero Section" donde el fondo sea el video y el scroll sea el encargado de manejar los segundos de reproducción, de forma que si hacemos scroll hacia bajo el video avance y hacemos scroll hacia arriba el video retroceda.

Luego para el tema de los textos tengo la idea de hacer unos breakpoints donde en determinados momentos del video sea donde cambien las capas.

Y para la versión movil lo mismo, pero cambiando el source del video de fondo (Mi intención es hacer simplemente este ajuste en el responsive) y que el resto fluya de forma natural.

<br>

# 2. MEMORIA
## Despliegue
He subido la web utilizando pages de git y este es el enlace para ver la web (así la podía ver en un móvil real)
https://juanjomb98.github.io/pruebaTecnica-zara.es/

## Tareas
- [x] Preparar las capas
- [x] JS para manejar el video mediante el scroll
- [x] Breakpoints para mostrar capas correspondientes
- [x] Cambiar fuente del Video segun despositivo
- [x] Comprobar responsive
- [x] Control de volver al principio

## Desarrollo

### Preparar las capas
> He tardado <40 mins> en crear toda la estructura HTML.

**_Observaciones_**
Igual que el header no sabia si hacerlo o no y he hecho algo rápido para que pareciese más real

No sabía muy bien si escribir los textos o usar los svg que vosotros me habeis facilitado, como me los habeís dado los he usado, pero en el responsive el texto queda muy pequeño ya que el svg no puede wrapear como si lo haría un texto normal y podrias modificar el tamaño para que se leyese mejor

<br>

### JS para manejar el video mediante el scroll
>He tardado <2 horas> en hacerlo e investigar mejoras 

**_Observaciones_**
He estado investigando formas de optimizarlo pero finalmente no he conseguido nada. He estado viendo algo sobre crear un canva en lugar de reproducir el video directamente, pero tenia el mismo lag.

Luego cuando le digo que vaya a determinado momento del video, aunque el currentTime del video se actualiza a la perfección, visualmente el video se astasca hasta llegar al objetivo. Y no consigo que vaya de forma fluido. 

PD: Si muestro los controles del video la barra también avanza de forma fluida.

<br>

### Breakpoints para mostrar capas correspondientes
>He tardado <3 horas> en animar las entradas y salidas de los textos y decirles cuando entrar

**_Observaciones_**
La verdad que me he vuelto un poco loco con esto, porque me hubiese gustado hecho haciendo scroll en lugar de ir ocultando y mostrando las capas pero no he conseguido entender como está hecho

<br>

### Cambiar fuente del Video segun despositivo
>He tardado <24 mins> en cambiar la fuente. Lo hace cuando el dispositivo es menor de 768px

**_Observaciones_**

He estado investigando a ver si se podía hacer solo por CSS pero todavia no es soportado al 100% y lo he tenido que hacer en JS

<br>

### Comprobar responsive
>He tardado <60 mins> en hacerlo funcionar un movil real

**_Observaciones_**

Los moviles bloquean los videos de forma automatica y hay que hacer algun ajuste

<br>
<br>

> [!Important]
> Muchas gracias por todo!
