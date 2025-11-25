const DESKTOP_ICONS = [
  {
    id: "about",
    img: "media/w95-recycle.png",
    label: "about me",
    column: "left",
    onClick: () => openWindow("aboutmewindow"),
  },
  {
    id: "github",
    img: "media/w95-internet.png",
    label: "github",
    column: "left",
    onClick: () => window.open("https://github.com/mjdargen", "_blank"),
  },
  {
    id: "email",
    img: "media/w95-email.png",
    label: "email me",
    column: "left",
    onClick: () => (location.href = "mailto:mjdargen@gmail.com"),
  },
  {
    id: "resume",
    img: "media/w95-paint.png",
    label: "resumé",
    column: "left",
    onClick: () => openWindow("resumewindow"),
  },
  {
    id: "philosophy",
    img: "media/w95-document.png",
    label: "teaching\nphilosophy",
    column: "left",
    onClick: () => openWindow("philosophywindow"),
  },
  {
    id: "thesis",
    img: "media/w95-help.png",
    label: "thesis",
    column: "left",
    onClick: () => window.open("https://repository.lib.ncsu.edu/handle/1840.20/37531", "_blank"),
  },
  {
    id: "rck",
    img: "media/rck.png",
    label: "community\nkickstand",
    column: "left",
    onClick: () => window.open("https://raleighcommunitykickstand.org/", "_blank"),
  },
  {
    id: "youtube",
    img: "media/youtube.png",
    label: "youtube",
    column: "left",
    onClick: () => window.open("https://www.youtube.com/@mjdargen", "_blank"),
  },

  // RIGHT COLUMN
  {
    id: "instructables",
    img: "media/instructables.png",
    label: "instruct\nables",
    column: "right",
    onClick: () => window.open("https://www.instructables.com/member/mjdargen/instructables/", "_blank"),
  },
  {
    id: "thingiverse",
    img: "media/thingiverse.png",
    label: "thingi\nverse",
    column: "right",
    onClick: () => window.open("https://www.thingiverse.com/mjdargen/designs", "_blank"),
  },
  {
    id: "magic8",
    img: "media/w95-phone.png",
    label: "magic 8-ball",
    column: "right",
    onClick: () => openWindow("magic8ballwindow"),
  },
  {
    id: "cowsay",
    img: "media/cowsay.png",
    label: "cowsay",
    column: "right",
    onClick: () => openWindow("cowsaywindow"),
  },
  {
    id: "ascii",
    img: "media/w95-computer.png",
    label: "ascii\nwebcam",
    column: "right",
    onClick: () => {
      openWindow("asciiWindow");
      asciiStartup();
    },
  },
  {
    id: "dorkwave",
    img: "media/dorkwave.png",
    label: "dorkwave",
    column: "right",
    onClick: () => openWindow("dorkwavewindow"),
  },
  {
    id: "rccalc",
    img: "media/w95_calc.png",
    label: "r/c calc",
    column: "right",
    onClick: () => window.open("https://mjdargen.github.io/Stocked-RC-Equivalence-Calculator/", "_blank"),
  },
  {
    id: "color",
    img: "media/color.png",
    label: "color of\nthe day",
    column: "right",
    onClick: () => window.open("https://dargen.io/coloroftheday", "_blank"),
  },
];

function renderDesktopIcons() {
  const left = document.getElementById("desktop-left");
  const right = document.getElementById("desktop-right");

  DESKTOP_ICONS.forEach((icon) => {
    const wrapper = document.createElement("div");
    wrapper.className = "desktop-icon";
    wrapper.onclick = icon.onClick;

    const img = document.createElement("img");
    img.src = icon.img;

    img.dataset.src = icon.img;
    img.dataset.hover = icon.img.replace(/\.png$/i, "-inv.png");

    const label = document.createElement("label");
    label.innerText = icon.label;

    wrapper.addEventListener("mouseenter", () => {
      img.src = img.dataset.hover;
      label.style.color = "black";
      label.style.textShadow = "1px 1px 0 white";
    });

    wrapper.addEventListener("mouseleave", () => {
      img.src = img.dataset.src;
      label.style.color = "white";
      label.style.textShadow = "1px 1px 0 black";
    });

    wrapper.appendChild(img);
    wrapper.appendChild(label);

    if (icon.column === "left") left.appendChild(wrapper);
    else right.appendChild(wrapper);
  });
}
