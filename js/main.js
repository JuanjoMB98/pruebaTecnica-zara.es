/*----------------------------------------- Actualizar video si es en movil --*/
function cambiarFuenteVideo() {
    // Obtiene el ancho de la pantalla
    var screenWidth = $(window).width();
    var videoElement = $(".js-videoSource");
    var videoElementPlay = $("#heroSectionVideo")[0];

    // Si la pantalla es de 768px o menos, muestra la fuente para dispositivos móviles
    if (screenWidth <= 768) {
        videoElement.attr("src", "src/video/videoMobile.mp4");
        $("body").on("click", function (event) {
            {
                event.preventDefault();
                videoElementPlay.play();
                videoElementPlay.pause();
            }
        });
    } else {
        // Si la pantalla es mayor a 768px, muestra la fuente para escritorios
        videoElement.attr("src", "src/video/videoDesktop.mp4");
    }
}
/*-------------- para el que al principio avance hasta el primer breakpoint --*/
function scrollToVideoTime(targetTime, animacion) {
    // Calculamos la posición de desplazamiento correspondiente al tiempo objetivo
    var targetScrollPosition = (targetTime * 1000) / 2;

    // Hacemos scroll hasta la posición calculada
    $("html, body").animate({ scrollTop: targetScrollPosition }, animacion); // Ajusta la duración según sea necesario
}

$(document).ready(function () {
    $(this).scrollTop(0);

    //Comprobamos fuente del video
    cambiarFuenteVideo();
    $(document).on("resize orientationchange", cambiarFuenteVideo);

    //CONTROLAMOS EL VIDEO CUANDO ESTE CARGADO

    var videoElement = $("#heroSectionVideo")[0];

    $(videoElement).on("loadeddata", function () {
        var videoDuration = videoElement.duration;

        // 1. Llevamos el video hasta el segundo 3
        scrollToVideoTime(3, 3000);

        // 2. Ajustamos la altura del Hero Section para que en el punto más bajo sea el segundo final del video
        var alturaHeroSection = (videoDuration * 1000) / 2;
        $(".js-heroSection").css("height", alturaHeroSection);

        // 4. Manejamos el Scroll
        var scrollPosition = $(window).scrollTop();

        $(document).on("scroll", function () {
            var newScrollPosition = $(this).scrollTop();
            var totalScrollDistance = alturaHeroSection - $(window).height();
            var videoProgress = newScrollPosition / totalScrollDistance;

            // Ajusta el tiempo de reproducción del video
            videoElement.currentTime = videoProgress * videoElement.duration;

            scrollPosition = newScrollPosition; // Actualiza la posición de desplazamiento

            console.log({
                scrollPosition
            })

            if( scrollPosition > 800){
                $(".m-heroStep__item").css("visibility", "visible");
            } else {
                $(".m-heroStep__item").css("visibility", "hidden");
            }


            handleStep(".js-step-1", 1450, 3450, 11, 1000);
            handleStep(".js-step-2", 4450, 6450, 17, 1000);
            handleStep(".js-step-3", 7450, Infinity, 3, 7000);

            handleReloadButton(7450);

            function handleStep(selector, start, end, scrollToTime, duration) {
                var $step = $(selector);
                var inRange = scrollPosition >= start && scrollPosition < end;

                $step
                    .toggleClass("-animationOUT", !inRange)
                    .toggleClass("-animationIN", inRange);

                if (inRange) {
                    $(".js-reloadButton")
                        .off("click")
                        .on("click", function () {
                            scrollToVideoTime(scrollToTime, duration);
                        });
                }
            }

            function handleReloadButton(threshold) {
                var $reloadButton = $(".js-reloadButton");
                var inRange = scrollPosition >= threshold;

                $reloadButton.toggleClass("-active", inRange);
            }
        });
    });
});
