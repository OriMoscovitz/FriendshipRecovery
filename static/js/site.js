





(() => {
  const cfg = window.slideConfig || {};
  const terminal = document.getElementById("terminalModal");
  const toggle = document.getElementById("terminalToggle");
  const close = document.getElementById("terminalClose");
  const confettiBtn = document.getElementById("confettiBtn");
  const layer = document.getElementById("confettiLayer");

  toggle?.addEventListener("click", () => terminal?.showModal());
  close?.addEventListener("click", () => terminal?.close());
  terminal?.addEventListener("click", e => {
    if (e.target === terminal) terminal.close();
  });

  document.addEventListener("keydown", e => {
    if (terminal?.open && e.key === "Escape") {
      terminal.close();
      return;
    }
    if (e.key === "ArrowLeft" && cfg.next) location.href = `/slide/${cfg.next}`;
    if (e.key === "ArrowRight" && cfg.prev) location.href = `/slide/${cfg.prev}`;
    if (e.key.toLowerCase() === "t") terminal?.showModal();
  });

  let lastSpark = 0;
  document.addEventListener("pointermove", e => {
    const now = performance.now();
    if (now - lastSpark < 75 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lastSpark = now;
    const s = document.createElement("i");
    s.className = "spark";
    s.style.left = `${e.clientX}px`;
    s.style.top = `${e.clientY}px`;
    s.style.setProperty("--dx", `${(Math.random() - .5) * 34}px`);
    s.style.setProperty("--dy", `${(Math.random() - .5) * 34}px`);
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 700);
  });

    const videoModal = document.getElementById("videoModal");
    const videoClose = document.getElementById("videoClose");
    const apologyVideo = document.getElementById("apologyVideo");
    const forgivenessProtocol = document.getElementById("forgivenessProtocol");
    const protocolTerminal = document.getElementById("protocolTerminal");
    const apologyCat = document.getElementById("apologyCat");
    const protocolClose = document.getElementById("protocolClose");

    let apologyDeployed = false;

    function openVideo(videoId, startTime) {
      apologyVideo.src = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&rel=0`;
      videoModal.showModal();
    }

    function closeVideo() {
      apologyVideo.src = "";
      videoModal.close();

      // After the first apology video, reveal phase 2.
      if (apologyDeployed) {
        confettiBtn.innerHTML = `
          <span class="suspicious-dot"></span>
          still mad?... 👀
        `;

        confettiBtn.classList.add("still-mad-btn");
        confettiBtn.setAttribute("title", "there may or may not be a contingency plan");
      }
    }

    function celebrate() {
      const colors = [
        "#ff76a8",
        "#b998ff",
        "#7ccfff",
        "#ffd976",
        "#9ce5c7",
        "#ff646e"
      ];

      for (let i = 0; i < 80; i++) {
        const c = document.createElement("i");

        c.className = "confetti";
        c.style.left = `${Math.random() * 100}vw`;
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.setProperty("--d", `${1.8 + Math.random() * 2.2}s`);
        c.style.setProperty("--r", `${Math.random() * 180}deg`);
        c.style.setProperty("--x", `${(Math.random() - .5) * 260}px`);
        c.style.animationDelay = `${Math.random() * .35}s`;

        layer.appendChild(c);

        setTimeout(() => c.remove(), 4300);
      }

      apologyDeployed = true;

      setTimeout(() => {
        openVideo("XspDkqEtWFE", 0);
      }, 2200);
    }

//    confettiBtn?.addEventListener("click", () => {
//      if (!apologyDeployed) {
//        celebrate();
//      } else {
//        openVideo("UW3jBTGeXvw", 32);
//      }
//    });

//    function deployEmergencyProtocol() {
//      forgivenessProtocol.classList.add("active");
//
//      protocolTerminal.classList.remove("finished");
//      apologyCat.classList.remove("deploy");
//      protocolClose.classList.remove("visible");
//
//      setTimeout(() => {
//        protocolTerminal.classList.add("finished");
//      }, 5800);
//
//      setTimeout(() => {
//        apologyCat.classList.add("deploy");
//      }, 6200);
//
//      setTimeout(() => {
//        protocolClose.classList.add("visible");
//      }, 7900);
//    }

    function deployEmergencyProtocol() {
      forgivenessProtocol.classList.remove("active");
      protocolTerminal.classList.remove("finished");
      apologyCat.classList.remove("deploy");
      protocolClose.classList.remove("visible");

      // Force the browser to reset the CSS animations.
      void forgivenessProtocol.offsetWidth;

      forgivenessProtocol.classList.add("active");

        setTimeout(() => {
          protocolTerminal.classList.add("finished");
        }, 5600);

        setTimeout(() => {
          apologyCat.classList.add("deploy");
        }, 5700);

        setTimeout(() => {
          protocolClose.classList.add("visible");
        }, 7300);
    }

    protocolClose?.addEventListener("click", () => {
      forgivenessProtocol.classList.remove("active");

      protocolTerminal.classList.remove("finished");
      apologyCat.classList.remove("deploy");
      protocolClose.classList.remove("visible");
    });

    confettiBtn?.addEventListener("click", () => {
      if (!apologyDeployed) {
        celebrate();
      } else {
        deployEmergencyProtocol();
      }
    });

    videoClose?.addEventListener("click", closeVideo);

    videoModal?.addEventListener("click", e => {
      if (e.target === videoModal) {
        closeVideo();
      }
    });


  const card = document.getElementById("deckCard");
  if (card && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    card.addEventListener("pointermove", e => {
      if (innerWidth < 860) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(1200px) rotateX(${y * -1.2}deg) rotateY(${x * 1.4}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  }
})();
