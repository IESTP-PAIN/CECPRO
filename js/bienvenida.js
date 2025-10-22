$(document).ready(function () {
            $(window).on("load", function () {
                $("#preloader").fadeOut(1000);
            });
            const $bubbles = $('.bubbles');
            const bubbleCount = 25;
            for (let i = 0; i < bubbleCount; i++) {
                const size = Math.random() * 60 + 20;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = 8 + Math.random() * 6;

                const $bubble = $('<div class="bubble"></div>').css({
                    width: size + 'px',
                    height: size + 'px',
                    left: left + '%',
                    animationDelay: delay + 's',
                    animationDuration: duration + 's'
                });
                $bubbles.append($bubble);
            }

            const frases = [
                "“Formando profesionales para un futuro saludable y sostenible”",
                "“Cumple tus metas con nosotros”",
                "“Capacitamos con propósito y excelencia”",
                "“Aprender hoy, transformar mañana”",
                "“Tu desarrollo profesional es nuestra misión”"
            ];
            let fraseIndex = 0;
            let charIndex = 0;
            const velocidad = 70; 
            function escribir() {
                if (charIndex < frases[fraseIndex].length) {
                    $("#frase").append(frases[fraseIndex].charAt(charIndex));
                    charIndex++;
                    setTimeout(escribir, velocidad);
                } else {
                    setTimeout(borrar, 2500);
                }
            }
            function borrar() {
                if (charIndex > 0) {
                    const textoActual = frases[fraseIndex].substring(0, charIndex - 1);
                    $("#frase").text(textoActual);
                    charIndex--;
                    setTimeout(borrar, 40);
                } else {
                    fraseIndex = (fraseIndex + 1) % frases.length;
                    setTimeout(escribir, 800);
                }
            }
            escribir(); 
            $('.btn-ingresar').on('click', function () {
                $(this).addClass('animate__heartBeat');
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 900);
            });
        });