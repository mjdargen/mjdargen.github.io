document.addEventListener("DOMContentLoaded", () => {
  // 1. generate icons
  renderDesktopIcons();

  // 2. generate windows
  generateWindows();

  // 3. window resizing
  initDragResize();

  // 4. start clock
  updateClock();
  setInterval(updateClock, 1000);

  // 5. start menu set up
  renderStartMenu();

  // 6. auto-open about me window after a short delay
  setTimeout(() => openWindow("aboutmewindow"), 600);
});
