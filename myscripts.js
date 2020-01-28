/* --------------------------------------------------------------- */
/*                  startmenu & taskbar handling                   */
/* ----------------------------------------------------------------*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropupToggle() {
	document.getElementById("myDropup").classList.toggle("show");
	document.getElementById("myDropupOS").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.start')) {
		var myDropup = document.getElementById("myDropup");
		var myDropupOS = document.getElementById("myDropupOS");
		if (myDropup.classList.contains('show')) {
			myDropup.classList.remove('show');
		}
		if (myDropupOS.classList.contains('show')) {
			myDropupOS.classList.remove('show');
		}
	}
}

/* --------------------------------------------------------------- */
/*                handles icon and window clicking                 */
/* ----------------------------------------------------------------*/

/* double clicking about me icon */
function aboutIconClick() {
	var x = document.getElementById('aboutmewindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on about me window */
function aboutXClick() {
	var x = document.getElementById('aboutmewindow');
	x.style.display = "none";
}

/* double clicking projects icon or start menu */
function projectsIconClick() {
	var x = document.getElementById('projectswindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on projects window */
function projectsXClick() {
	var x = document.getElementById('projectswindow');
	x.style.display = "none";
}

/* double clicking cowsay icon */
function cowsayIconClick() {
	var x = document.getElementById('cowsaywindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on cowsay window */
function cowsayXClick() {
	var x = document.getElementById('cowsaywindow');
	x.style.display = "none";
}

/* double clicking github icon */
function githubIconClick() {
	window.open('https://github.com/mjdargen', '_blank');
}

/* double clicking email icon */
function emailIconClick() {
	location.href = "mailto:mjdargen@gmail.com";
}

/* double clicking ascii icon */
function asciiIconClick() {
	var x = document.getElementById('asciiWindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* double clicking resume icon */
function resumeIconClick() {
	var x = document.getElementById('resumewindow');
	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {

		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","resumedoc");
		doc.setAttribute("src", "./web/viewer.html?file=../documents/resume.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		// makes current window the top window
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* clicking resume x */
function resumeXClick() {
	var x = document.getElementById('resumewindow');
	x.style.display = "none";

	var ifrm = document.getElementById('resumedoc');
	x.removeChild(ifrm);
}

/* double clicking philosophy icon */
function philosophyIconClick() {
	var x = document.getElementById('philosophywindow');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","philosophydoc");
		doc.setAttribute("src", "./web/viewer.html?file=../documents/philosophy.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		// makes current window the top window
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* clicking philosophy x */
function philosophyXClick() {
	var x = document.getElementById('philosophywindow');
	x.style.display = "none";

	var ifrm = document.getElementById('philosophydoc');
	x.removeChild(ifrm);
}

/* clicking x on ascii window */
function asciiXClick() {
	// hide window
	var z = document.getElementById('asciiWindow');
	z.style.display = "none";

	// remove video stream
	/*var x =	document.getElementById('streamedvideo');
	x.remove();
	x = document.getElementById('streamcanvas');
	x.remove();*/
}

/* double clicking magic 8 ball icon */
function magicIconClick() {
	var x = document.getElementById('magic8ballwindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on magic 8 ball window */
function magic8ballXClick() {
	var x = document.getElementById('magic8ballwindow');
	x.style.display = "none";
}

/* double clicking writer's block icon */
function writerIconClick() {
	var x = document.getElementById('writerwindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on writer's block window */
function writerXClick() {
	var x = document.getElementById('writerwindow');
	x.style.display = "none";
}

/* double clicking dorkwave icon */
function dorkwaveIconClick() {
	var x = document.getElementById('dorkwavewindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on dorkwave window */
function dorkwaveXClick() {
	var x = document.getElementById('dorkwavewindow');
	x.style.display = "none";
}

/* double clicking rc calculator icon */
function rccalcIconClick() {
	var x = document.getElementById('rccalcwindow');
	x.style.display = "block";

	// makes current window the top window
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* clicking x on rc calculator window */
function rccalcXClick() {
	var x = document.getElementById('rccalcwindow');
	x.style.display = "none";
}


/* --------------------------------------------------------------- */
/*                  handles hovering over icons                    */
/* ----------------------------------------------------------------*/

/* hovering over about me */
function aboutIconHover() {
	var x = document.getElementById('aboutIcon');
	x.setAttribute("src", "media/w95-recycle-inv.png");
}

/* unhovering over about me */
function aboutIconUnhover() {
	var x = document.getElementById('aboutIcon');
	x.setAttribute("src", "media/w95-recycle.png");
}

/* hovering over github */
function githubIconHover() {
	var x = document.getElementById('githubIcon');
	x.setAttribute("src", "media/w95-internet-inv.png");
}

/* unhovering over github */
function githubIconUnhover() {
	var x = document.getElementById('githubIcon');
	x.setAttribute("src", "media/w95-internet.png");
}

/* hovering over email me */
function emailIconHover() {
	var x = document.getElementById('emailIcon');
	x.setAttribute("src", "media/w95-email-inv.png");
}

/* unhovering over email me */
function emailIconUnhover() {
	var x = document.getElementById('emailIcon');
	x.setAttribute("src", "media/w95-email.png");
}

/* hovering over projects */
function projectsIconHover() {
	var x = document.getElementById('projectsIcon');
	x.setAttribute("src", "media/w95-folder-inv.png");
}

/* unhovering over projects */
function projectsIconUnhover() {
	var x = document.getElementById('projectsIcon');
	x.setAttribute("src", "media/w95-folder.png");
}

/* hovering over resume */
function resumeIconHover() {
	var x = document.getElementById('resumeIcon');
	x.setAttribute("src", "media/w95-paint-inv.png");
}

/* unhovering over resume */
function resumeIconUnhover() {
	var x = document.getElementById('resumeIcon');
	x.setAttribute("src", "media/w95-paint.png");
}

/* hovering over philosophy */
function philosophyIconHover() {
	var x = document.getElementById('philosophyIcon');
	x.setAttribute("src", "media/w95-document-inv.png");
}

/* unhovering over philosophy */
function philosophyIconUnhover() {
	var x = document.getElementById('philosophyIcon');
	x.setAttribute("src", "media/w95-document.png");
}

/* hovering over ascii */
function asciiIconHover() {
	var x = document.getElementById('asciiIcon');
	x.setAttribute("src", "media/w95-computer-inv.png");
}

/* unhovering over ascii */
function asciiIconUnhover() {
	var x = document.getElementById('asciiIcon');
	x.setAttribute("src", "media/w95-computer.png");
}

/* hovering over cowsay */
function cowsayIconHover() {
	var x = document.getElementById('cowsayIcon');
	x.setAttribute("src", "media/cowsay-inv.png");
}

/* unhovering over cowsay */
function cowsayIconUnhover() {
	var x = document.getElementById('cowsayIcon');
	x.setAttribute("src", "media/cowsay.png");
}

/* hovering over magic 8 ball */
function magicIconHover() {
	var x = document.getElementById('magicIcon');
	x.setAttribute("src", "media/w95-help-inv.png");
}

/* unhovering over magic 8 ball */
function magicIconUnhover() {
	var x = document.getElementById('magicIcon');
	x.setAttribute("src", "media/w95-help.png");
}

/* hovering over startbutton */
function startButtonHover() {
	var x = document.getElementById('osIcon');
	x.setAttribute("src", "media/w95-computer-inv.png");
}

/* unhovering over startbutton */
function startButtonUnhover() {
	var x = document.getElementById('osIcon');
	x.setAttribute("src", "media/w95-computer.png");
}

/* hovering over writer's block */
function writerIconHover() {
	var x = document.getElementById('writerIcon');
	x.setAttribute("src", "media/w95-notepad-inv.png");
}

/* unhovering over writer's block */
function writerIconUnhover() {
	var x = document.getElementById('writerIcon');
	x.setAttribute("src", "media/w95-notepad.png");
}

/* hovering over dorkwave */
function dorkwaveIconHover() {
	var x = document.getElementById('dorkwaveIcon');
	x.setAttribute("src", "media/dorkwave-inv.png");
}

/* unhovering over dorkwave */
function dorkwaveIconUnhover() {
	var x = document.getElementById('dorkwaveIcon');
	x.setAttribute("src", "media/dorkwave.png");
}

/* hovering over rc calculator */
function rccalcIconHover() {
	var x = document.getElementById('rccalcIcon');
	x.setAttribute("src", "media/w95_calc_inv.png");
}

/* unhovering over rc calculator */
function rccalcIconUnhover() {
	var x = document.getElementById('rccalcIcon');
	x.setAttribute("src", "media/w95_calc.png");
}
