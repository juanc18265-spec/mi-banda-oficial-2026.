
    // Exponer de inmediato para asegurar funcionamiento del botón ENTRAR
    window.irApp = function () {
      console.log("ENTRANDO A LA APP...");
      const h = document.getElementById('home');
      const a = document.getElementById('app');
      if (h) h.style.display = 'none';
      if (a) a.style.display = 'block';
    };
    window.irHome = function () {
      const h = document.getElementById('home');
      const a = document.getElementById('app');
      const z = document.getElementById('zona-admin');
      if (h) h.style.display = 'block';
      if (a) a.style.display = 'none';
      if (z) z.style.display = 'none';
    };
    let tituloAnimado = false;
    window.animarTitulo = function () {
      if (tituloAnimado) return;
      tituloAnimado = true;
      try {
        const lineas = ['PROGRAMA', 'DE', 'MÚSICA'];
        const colors = ['#FF0404', '#00FF1E', '#0099FF', '#FFEE00', '#FF8C00', '#8A2BE2', '#00CED1', '#FF1493', '#27AE60', '#2980B9', '#E67E22', '#C0392B'];
        const contenedor = document.getElementById('texto-musical');
        if (!contenedor) return;
        contenedor.innerHTML = '';
        let delayCount = 0;
        lineas.forEach((p) => {
          const div = document.createElement('div');
          div.className = 'linea-musical';
          p.split('').forEach((l) => {
            const span = document.createElement('span');
            span.className = 'letra-musical';
            span.textContent = l;
            span.style.color = colors[delayCount % colors.length];
            span.style.animationDelay = (delayCount * 0.12) + 's';
            div.appendChild(span);
            delayCount++;
          });
          contenedor.appendChild(div);
        });
        console.log("Título animado listo");
      } catch (e) { console.error(e); }
    };

    document.addEventListener('DOMContentLoaded', () => {
      window.animarTitulo();
      // Solicitar permisos de notificación 3 segundos después de entrar
      setTimeout(() => {
        if (typeof window.requestPermission === 'function') window.requestPermission();
      }, 3000);
    });
    setTimeout(window.animarTitulo, 500);
    if (document.readyState === 'complete') window.animarTitulo();
  