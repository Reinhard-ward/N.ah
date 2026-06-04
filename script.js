async function saludar() {
    const video = document.getElementById("miVideo");
    if (video) {
        video.muted = false;
        video.play().catch(() => {});
    }
    const lista = document.createElement("ul");
    lista.classList.add('mensaje-lista');
    const mensajes = [
        `Nat, cada día contigo se siente como una página escrita con cuidado y ternura.`,
        `Tu sonrisa tiene la suavidad de un atardecer tranquilo y la fuerza de un abrazo cálido.`,
        `Me inspira tu sinceridad, esa forma natural de decir las cosas con respeto y bondad.`,
        `Eres alguien que llena el momento con calma, con presencia y con atención al detalle.`,
        `Tu mirada muestra admiración por la gente y amor por lo que haces.`,
        `Cuando hablas, todo suena auténtico: tu voz transmite confianza y cariño.`,
        `Tu creatividad ilumina proyectos y convierte ideas en cosas bellas.`,
        `Me encanta cómo transformas cada logro en motivo para celebrar juntos.`,
        `Tu corazón generoso hace que quien te conoce se sienta importante y querido.`,
        `Eres un ejemplo de equilibrio entre sensibilidad y valentía.`,
        `Contigo se aprende que una buena amistad también es paz y libertad.`,
        `Tu forma de cuidar a los demás es elegante, cálida y natural.`,
        `Tienes un don para encontrar palabras que reconfortan y alientan.`,
        `Cada pequeño gesto tuyo transmite respeto, delicadeza y honestidad.`,
        `Tu estilo es único, auténtico y siempre fiel a ti misma.`,
        `Te admiro por tu constancia y por la dulzura con la que enfrentas cada desafío.`,
        `Eres una persona que sabe escuchar y también sabe compartir su verdad.`,
        `Tu energía positiva deja huellas de luz en quienes te rodean.`,
        `Me encanta cómo haces que cualquier idea se vuelva más bonita con tu toque.`,
        `Contar contigo es saber que hay una mano amiga, sincera y firme.`,
        `Tu bondad no necesita palabras rimbombantes, sólo necesita tu simple presencia.`,
        `Eres capaz de dar ánimo con una mirada y tranquilidad con una sonrisa.`,
        `Gracias por ser tan especial, completa y hermosa en tu manera de ser.`,
        `Siempre eres un refugio de comprensión, buen humor y cariño verdadero.`,
        `Tu paciencia es sabia, como un río que fluye sereno y constante.`,
        `Eres fuente de calma en los días llenos de ruido y de prisa.`,
        `Tu forma de inspirar confianza es sencilla, directa y muy humana.`,
        `Tu presencia convierte cualquier espacio en un lugar agradable y acogedor.`,
        `Tu mirada transparente refleja nobleza y autenticidad.`,
        `Siento que contigo todo se vuelve más fácil y menos pesado.`,
        `Tu sonrisa es un regalo que ilumina incluso un día gris.`,
        `Eres una persona con gracia, sensibilidad y carácter bien definido.`,
        `Tu voz transmite honestidad y también esa delicadeza que reconforta.`,
        `Me atrae tu capacidad de crear armonía sin forzar nada.`,
        `Eres un ejemplo de buen gusto y de corazón generoso.`,
        `Tu compañía aporta una mezcla perfecta de alegría y serenidad.`,
        `Eres capaz de ver lo mejor de las personas incluso cuando no lo ven.`,
        `Tu amabilidad tiene una belleza que no se desgasta con el tiempo.`,
        `Admiro la forma en que afrontas cada día con esperanza y ternura.`,
        `Tu sonrisa sincera es un puente que une pensamientos y emociones.`,
        `Cada palabra tuya deja una impresión de cuidado y respeto.`,
        `Eres el tipo de persona que hace que los demás se sientan seguros.`,
        `Tu presencia es como una brisa suave en una tarde de verano.`,
        `Me gusta tu estilo elegante, discreto y absolutamente personal.`,
        `Tu mirada es clara, cálida y llena de buenos deseos.`,
        `Siento que contigo se valoran más los detalles y las intenciones.`,
        `Eres quien da luz a las conversaciones con ternura y atención.`,
        `Tu amistad es un espacio donde se puede ser libre y aceptado.`,
        `Eres capaz de comprender sin necesidad de muchas explicaciones.`,
        `Tu sensibilidad no es frágil, es profunda y muy valiosa.`,
        `Me inspira cómo vives cada momento con respeto y belleza.`,
        `Eres un ejemplo de equilibrio entre fuerza y dulzura.`,
        `Tu compañía hace que todo se sienta más humano y sentido.`,
        `Tus gestos tienen siempre una intención amable y considerada.`,
        `Tu forma de animar es elegante, natural y muy eficaz.`,
        `Eres un apoyo constante y también una voz serena cuando hace falta.`,
        `Tu presencia aporta confianza, sin necesidad de palabras grandes.`,
        `Tienes una elegancia que nace de la manera en que cuidas a los demás.`,
        `Me conmueve tu capacidad de dar cariño sin esperar nada a cambio.`,
        `Eres capaz de escuchar con el corazón, no sólo con los oídos.`,
        `Tu mirada es un reflejo de la bondad que llevas adentro.`,
        `Me gusta que seas auténtica y que no tengas miedo de ser tú misma.`,
        `Eres un regalo para quienes te conocen de verdad.`,
        `Tu risa es contagiosa y llena de sinceridad.`,
        `Eres una persona con mucha luz, fuerte y muy delicada a la vez.`,
        `Tu compañía genera una sensación de armonía y cuidado.`,
        `Tienes una manera especial de mejorar cualquier situación.`,
        `Tu cariño es calmado, seguro y muy valioso.`,
        `Eres alguien que inspira respeto sin necesitar demostraciones.`,
        `Tu belleza interior es evidente en cada gesto amable.`,
        `Me encanta la serenidad que irradias cuando estás con quienes quieres.`,
        `Eres un ejemplo de bondad madura y profunda.`,
        `Tu forma de expresarte es clara, delicada y con estilo propio.`,
        `Eres una compañía que siempre aporta luz y confianza.`,
        `Tu manera de apoyar es elegante y muy bien recibida.`,
        `Eres capaz de transformar lo sencillo en algo significativo.`,
        `Tu amor por los demás se nota en cada actitud amable que tienes.`,
        `Eres una mujer fuerte, generosa y muy cercana.`,
        `Tu presencia tiene un efecto calmante y alentador.`,
        `Me inspira tu capacidad de ver lo bueno en cada persona.`,
        `Eres una guía discreta, firme y llena de empatía.`,
        `Tu sonrisa es amable y llena de autenticidad.`,
        `Eres un abrazo de palabras cuando alguien necesita consuelo.`,
        `Tu generosidad es bonita, sincera y totalmente real.`,
        `Eres quien sabe decir lo correcto con calma y cariño.`,
        `Tu sensibilidad está llena de fuerza y sabiduría.`,
        `Eres una persona que escucha con paciencia y responde con cariño.`,
        `Tu actitud amena y elegante hace que todo resulte más agradable.`,
        `Eres capaz de ver el valor de cada detalle y celebrarlo.`,
        `Tu amistad es un remanso de paz y alegría sencilla.`,
        `Eres una persona que aporta equilibrio, estilo y calidez.`,
        `Tu manera de cuidar al otro es discreta, pero muy presente.`,
        `Eres un faro de respeto, ternura y buen gusto.`,
        `Me encanta que tu presencia siempre sea considerada y amable.`,
        `Eres dueña de una elegancia tranquila, genuina y muy bella.`,
        `Tu bondad se siente en el tono de tu voz y en tus gestos suaves.`,
        `Eres una compañía que hace que todo se vea más valioso.`,
        `Tu naturalidad es encantadora y muy fácil de querer.`,
        `Eres una mezcla perfecta de fuerza interior y dulzura exterior.`,
        `Tu amistad es un tesoro que da calma y confianza.`,
        `Eres un ejemplo de nobleza, tacto y sensibilidad auténtica.`,
        `Tu presencia no exige nada y aún así aporta mucho.`,
        `Eres quien inspira sin alardes y acompaña sin presiones.`,
        `Tu forma de ser es elegante, completa y llena de buena intención.`,
        `Eres una voz que transmite calma, seguridad y empatía.`,
        `Tu espíritu generoso se nota en cada detalle que compartes.`,
        `Eres capaz de hacer que cualquier persona se sienta valorada.`,
        `Tu estilo es amable, sofisticado y siempre sincero.`,
        `Eres una persona impresionante por tu calidad humana y tu cariño.`,
        `Tu mirada serena aporta claridad y confianza a quienes te conocen.`,
        `Eres esencial en mi vida porque haces que las cosas sean mejores.`,
        `Tu amabilidad deja huella en todos los que tienen la suerte de verte.`,
        `Eres alguien con carácter, pero también con una ternura admirable.`,
        `Tu compañía es un regalo que siempre se aprecia en el corazón.`,
        `Eres brillante, cálida y profundamente leal.`
    ];
    document.body.appendChild(lista);
    for (let i = 0; i < mensajes.length; i++) {
        const texto = mensajes[i].trim();
        const item = document.createElement("li");
        item.classList.add('mensaje-scroll');
        lista.appendChild(item);
        await typewriterEffect(item, texto);
    }
}

function typewriterEffect(element, text) {
    return new Promise((resolve) => {
        let index = 0;
        element.innerText = '';
        const interval = setInterval(() => {
            if (index < text.length) {
                element.innerText = text.slice(0, index + 1);
                index++;
            } else {
                clearInterval(interval);
                element.innerHTML = element.innerText.replace(/\n/g, '<br>');
                resolve();
            }
        }, 30);
    });
}

