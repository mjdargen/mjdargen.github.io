const WINDOWS = [
  {
    id: "aboutmewindow",
    title: "aboutme.txt",
    width: "60%",
    height: "60%",
    top: "calc(5% + 64px)",
    left: "20%",
    markdown: "about.md",
  },
  {
    id: "resumewindow",
    title: "resume.txt",
    width: "60%",
    height: "60%",
    top: "5%",
    left: "10%",
    iframe: "documents/resume.pdf", // auto create PDF viewer iframe
    cleanup: "removeIframe",
  },
  {
    id: "philosophywindow",
    title: "teaching_philosophy.txt",
    width: "60%",
    height: "60%",
    top: "calc(5% + 96px)",
    left: "calc(10% + 96px)",
    iframe: "documents/philosophy.pdf",
    cleanup: "removeIframe",
  },
  {
    id: "asciiWindow",
    title: "webcam.exe",
    width: "60%",
    height: "60%",
    top: "calc(5% + 64px)",
    left: "calc(10% + 128px)",
    content: `
            <div id="ascii-video">
                <div class="ascii-video">
                    <pre style="font-size:1.5px; line-height:1px; text-align:center;"></pre>
                </div>
                <br>
                <button id="asciiPause" class="window-button" onclick="asciiClick()">Click here to pause.</button>
                <p class="window-panel" style="text-align:center;">
                    The video above is ASCII characters…
                </p>
            </div>
        `,
    startup: "asciiStartup",
    cleanup: "stopWebcam",
  },
  {
    id: "cowsaywindow",
    title: "cowsay.exe",
    width: "60%",
    height: "60%",
    top: "calc(5% + 32px)",
    left: "calc(10% + 160px)",
    content: `
            <h1>cowsay</h1>
            <textarea id="cowsay-input" rows="3" style="width:calc(100% - 10px);"></textarea>
            <br><br>
            <button class="window-button" onclick="cowsayClick()">Speak!</button>
            <pre id="cowsay-response" style="display:none; text-align:left;">
                <span id="cowsay-output"></span>
            </pre>
        `,
  },
  {
    id: "magic8ballwindow",
    title: "magic8ball.exe",
    width: "60%",
    height: "60%",
    top: "5%",
    left: "calc(10% + 192px)",
    content: `
            <p id="plat_prompt">Ask your question...</p>
            <textarea id="8ball-input" rows="3" style="width:calc(100% - 10px);"></textarea>
            <br><br>
            <button class="window-button" onclick="magic8ballClick()">Click here for answers.</button>
            <div id="eight-ball" class="eight-ball">
                <div class="answer"><p id="magic8ball_answer">8</p></div>
            </div>
        `,
  },
];

// Function to generate the standard HTML shell
function generateWindowShell(win, contentHTML) {
  return `
        <div class="drsMoveHandle window-topbar">
            ${win.title}
            <button class="window-close" onclick="closeWindow('${win.id}')">X</button>
        </div>
        <div class="window-content">
            ${contentHTML || ""}
        </div>
    `;
}

// Function to handle the async loading and updating
async function loadMarkdownContent(wrapper, url) {
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error("Network response was not ok");
    const md = await r.text();
    // Use marked.parse directly
    const renderedHTML = marked.parse(md).trim();

    // Find the specific content area to update it *after* fetch is done
    const contentDiv = wrapper.querySelector(".window-content");
    if (contentDiv) {
      contentDiv.innerHTML = renderedHTML;
    }
  } catch (error) {
    console.error("Error loading markdown:", error);
    const contentDiv = wrapper.querySelector(".window-content");
    if (contentDiv) {
      contentDiv.innerHTML = "<p>Failed to load content.</p>";
    }
  }
}

// Main generation function - Use for...of to handle potential awaits smoothly
async function generateWindows() {
  // Make outer function async
  const desktop = document.body;

  marked.setOptions({ breaks: true, gfm: true, sanitize: false }); // Set options once

  for (const win of WINDOWS) {
    // Use for...of
    const wrapper = document.createElement("div");
    wrapper.className = "drsElement window-frame";
    wrapper.id = win.id;
    wrapper.style.display = "none";
    wrapper.style.top = win.top;
    wrapper.style.left = win.left;
    wrapper.style.width = win.width;
    wrapper.style.height = win.height;

    // Determine initial HTML structure
    if (win.markdown) {
      // Set a placeholder while loading
      wrapper.innerHTML = generateWindowShell(win, "<p>Loading content...</p>");
      desktop.appendChild(wrapper); // Append immediately so we can update it

      // *** Asynchronously update the content after appending ***
      loadMarkdownContent(wrapper, win.markdown);
    } else {
      // Standard content path (synchronous)
      wrapper.innerHTML = generateWindowShell(win, win.content || "");
      desktop.appendChild(wrapper);
    }
  }

  // Make clicking any window bring it forward
  document.addEventListener("mousedown", (e) => {
    const win = e.target.closest(".drsElement");
    if (win) bringToFront(win);
  });
  initDragResize(); // finally enable drag & resize
}

function bringToFront(win) {
  let maxZ = 0;
  document.querySelectorAll(".drsElement").forEach((w) => {
    const z = parseInt(getComputedStyle(w).zIndex) || 0;
    if (z > maxZ) maxZ = z;
  });
  win.style.zIndex = maxZ + 1;
}

function openWindow(id) {
  const winData = WINDOWS.find((w) => w.id === id);
  const el = document.getElementById(id);
  if (!el) return;

  // Lazy inject PDF iframe ONLY first time opened
  if (winData.iframe && !el.dataset.pdfLoaded) {
    const content = el.querySelector(".window-content");

    const iframe = document.createElement("iframe");
    iframe.className = "pdf-viewer";
    iframe.src = `web/viewer.html?file=../${winData.iframe}#navpanes=0&toolbar=0&statusbar=0&view=FitV`;

    content.appendChild(iframe);

    el.dataset.pdfLoaded = "true";
  }

  if (!el.dataset.initialized) {
    el.style.visibility = "hidden";
    el.style.display = "block";

    // Get actual computed pixel position
    const rect = el.getBoundingClientRect();
    el.style.top = rect.top + "px";
    el.style.left = rect.left + "px";

    el.dataset.initialized = "true";

    // Now hide it again until we actually open it
    el.style.display = "none";
    el.style.visibility = "visible";
  }

  // Now actually show it
  el.style.display = "block";

  bringToFront(el);
  el.focus();

  // Run any startup functions (ascii webcam etc)
  if (winData.startup && typeof window[winData.startup] === "function") {
    window[winData.startup]();
  }
}

function closeWindow(id) {
  const win = WINDOWS.find((w) => w.id === id);
  const el = document.getElementById(id);
  if (!el) return;

  el.style.display = "none";

  if (win.cleanup && typeof window[win.cleanup] === "function") {
    window[win.cleanup]();
  }
}
