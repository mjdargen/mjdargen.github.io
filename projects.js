/* for project windows */

/*
<!--
<iframe src="./web/viewer.html?file=../documents/resume.pdf
#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1"
style="border: none; width: 100%; height: calc(100% - 32px);">
</iframe>
-->
*/

/* open project 221 */
function _221() {
	var x = document.getElementById('221window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","221doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.1 Night Light.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 221 x */
function _221XClick() {
	var x = document.getElementById('221window');
	x.style.display = "none";

	var ifrm = document.getElementById('221doc');
	x.removeChild(ifrm);
}

/* open project 222 */
function _222() {
	var x = document.getElementById('222window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","222doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.2 Magic 8-Ball cont'd.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 222 x */
function _222XClick() {
	var x = document.getElementById('222window');
	x.style.display = "none";

	var ifrm = document.getElementById('222doc');
	x.removeChild(ifrm);
}

/* open project 223 */
function _223() {
	var x = document.getElementById('223window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","223doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.3 8x8 LED Matrix.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 223 x */
function _223XClick() {
	var x = document.getElementById('223window');
	x.style.display = "none";

	var ifrm = document.getElementById('223doc');
	x.removeChild(ifrm);
}

/* open project 224 */
function _224() {
	var x = document.getElementById('224window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","224doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.4 Weather Station.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 224 x */
function _224XClick() {
	var x = document.getElementById('224window');
	x.style.display = "none";

	var ifrm = document.getElementById('224doc');
	x.removeChild(ifrm);
}

/* open project 225 */
function _225() {
	var x = document.getElementById('225window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","225doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.5 Alarm System.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 225 x */
function _225XClick() {
	var x = document.getElementById('225window');
	x.style.display = "none";

	var ifrm = document.getElementById('225doc');
	x.removeChild(ifrm);
}

/* open project 226 */
function _226() {
	var x = document.getElementById('226window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","226doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.6 Morse Code Transmitter.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 226 x */
function _226XClick() {
	var x = document.getElementById('226window');
	x.style.display = "none";

	var ifrm = document.getElementById('226doc');
	x.removeChild(ifrm);
}

/* open project 227 */
function _227() {
	var x = document.getElementById('227window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","227doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.7 Calculator.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 227 x */
function _227XClick() {
	var x = document.getElementById('227window');
	x.style.display = "none";

	var ifrm = document.getElementById('227doc');
	x.removeChild(ifrm);
}

/* open project 228 */
function _228() {
	var x = document.getElementById('228window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","228doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.8 Digital Level.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 228 x */
function _228XClick() {
	var x = document.getElementById('228window');
	x.style.display = "none";

	var ifrm = document.getElementById('228doc');
	x.removeChild(ifrm);

	/* makes current window the top window */
	var windows = document.getElementsByClassName('drsElement');
	var i = windows.length;
	while(i--) {
			windows[i].style.zIndex = "3";
	}
	x.style.zIndex = "4";
	x.focus();
}

/* open project 229 */
function _229() {
	var x = document.getElementById('229window');

	if (window.getComputedStyle(x).getPropertyValue("display") === "none") {
		x.style.display = "block";

		var doc = document.createElement('iframe');
		doc.setAttribute("id","229doc");
		doc.setAttribute("src", "./web/viewer.html?file=../projects/2.2.9 Apps Platform.pdf#navpanes=0&amp;toolbar=0&amp;statusbar=0&amp;view=FitV&amp;pagemode=none&amp;page=1");
		doc.setAttribute("style","border: none; width: 100%; height: calc(100% - 32px)");
		x.appendChild(doc);

		/* makes current window the top window */
		var windows = document.getElementsByClassName('drsElement');
		var i = windows.length;
		while(i--) {
				windows[i].style.zIndex = "3";
		}
		x.style.zIndex = "4";
		x.focus();
	}
}

/* close project 229 x */
function _229XClick() {
	var x = document.getElementById('229window');
	x.style.display = "none";

	var ifrm = document.getElementById('229doc');
	x.removeChild(ifrm);
}
