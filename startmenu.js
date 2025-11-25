const START_MENU_ITEMS = [
  { label: "about me", action: () => openWindow("aboutmewindow") },
  { label: "github", action: () => window.open("https://github.com/mjdargen", "_blank") },
  { label: "email me", action: () => (location.href = "mailto:mjdargen@gmail.com") },
  { label: "resumé", action: () => openWindow("resumewindow") },
  { label: "teaching philosophy", action: () => openWindow("philosophywindow") },
  { label: "thesis", action: () => window.open("https://repository.lib.ncsu.edu/handle/1840.20/37531", "_blank") },
  { label: "community kickstand", action: () => window.open("https://www.youtube.com/@mjdargen", "_blank") },
  { label: "youtube", action: () => window.open("https://raleighcommunitykickstand.org/", "_blank") },
  {
    label: "instructables",
    action: () => window.open("https://www.instructables.com/member/mjdargen/instructables/", "_blank"),
  },
  { label: "thingiverse", action: () => window.open("https://www.thingiverse.com/mjdargen/designs", "_blank") },
  { label: "magic 8-ball", action: () => openWindow("magic8ballwindow") },
  { label: "cowsay", action: () => openWindow("cowsaywindow") },
  {
    label: "ascii webcam",
    action: () => {
      openWindow("asciiWindow");
      asciiStartup();
    },
  },
  { label: "dorkwave", action: () => openWindow("dorkwavewindow") },
  {
    label: "r/c calculator",
    action: () => window.open("https://mjdargen.github.io/Stocked-RC-Equivalence-Calculator/", "_blank"),
  },
];

function renderStartMenu() {
  const container = document.getElementById("myDropup");
  container.innerHTML = "";

  START_MENU_ITEMS.forEach((item) => {
    const a = document.createElement("a");
    a.textContent = item.label;
    a.style.border = "solid #EC6760";
    a.onclick = item.action;
    container.appendChild(a);
  });

  window.onclick = function (e) {
    if (!e.target.matches(".start")) {
      var myDropup = document.getElementById("myDropup");
      var myDropupOS = document.getElementById("myDropupOS");
      if (myDropup.classList.contains("show")) {
        myDropup.classList.remove("show");
      }
      if (myDropupOS.classList.contains("show")) {
        myDropupOS.classList.remove("show");
      }
    }
  };
}
