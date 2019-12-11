var myInterval;
var pause = false;
var myStream;

function asciiStartup() {
	// width and height of canvas
	var CANVAS_WIDTH = 400;
	var CANVAS_HEIGHT = 300;

	// html elements as variables for reference in other functions
	var video = null;
	var canvas = null;
	var asciiVideo = null;

	// get the html elements
  asciiVideo = document.querySelector('.ascii-video pre');
	// create new element for raw webcam video
	video = document.createElement('video');
	video.setAttribute("id", "streamedvideo");
	// create a new html element for canvas
  canvas = document.createElement('canvas');
	canvas.setAttribute("id", "streamcanvas");

	// make sure that it starts by showing pause button
	var x =	document.getElementById('asciiPauseText');
	x.innerHTML = "Click here to pause.";
	pause = false;

	// start the stream
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then((stream) => {
		myStream = stream;
		video.srcObject = stream;
		video.play();
		startDrawingASCIIVideo();
	})
	.catch(function(err) {
		console.log("Error: " + err);
	});

  var ImageToASCIIConverter = (function (canvas) {
    var context = canvas.getContext('2d'),
        ASCII_CHARS = '@#8&OLI)i=+;:,. '.split(''),
        ASCII_CHARS_LENGTH = ASCII_CHARS.length - 1;

    var convertToASCII = function () {
      // The canvas image data will behave as the Bitmap for the screenshot.
      var imageData = context.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data,
          asciiImage = '',
          pixelMatchingChar,
          x, y, offset, red, blue, green, pixel;

      // Loop through each pixel of the screenshot.
      for (y = 0; y < CANVAS_HEIGHT; y += 1) {
        for (x = 0; x < CANVAS_WIDTH; x += 1) {
          offset = (y * CANVAS_WIDTH + x) * 4;

          // Get grayscale color from screenshot.
          // The easiest way is to get the biggest of the RGB values
          // of each pixel and divide by 255.
          red = imageData[offset];
          green = imageData[offset + 1];
          blue = imageData[offset + 2];
          pixel = Math.max(red, green, blue) / 255;

          // Select ASCII character that corresponds to pixel.
          pixelMatchingChar = ASCII_CHARS[parseInt(pixel * ASCII_CHARS_LENGTH, 10)];

          // Append grayscale character to image result.
          asciiImage += pixelMatchingChar;
        }

        asciiImage += '\n';
      }

      return asciiImage;
    }

    return {
      asciiImage: convertToASCII,
    }
  }(canvas));

  var convertImageFromVideo = function () {
    var context = canvas.getContext('2d');

    try {
      context.drawImage(video, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      asciiVideo.innerHTML = ImageToASCIIConverter.asciiImage();
    } catch(exception) {
      console.log(exception);
      displayWarning(exception.toString());
    }
  }

  var startDrawingASCIIVideo = function () {
    var context = canvas.getContext('2d'),
        fps = 10;

    canvas.setAttribute('width', CANVAS_WIDTH);
    canvas.setAttribute('height', CANVAS_HEIGHT);
    video.play();

    myInterval = setInterval(convertImageFromVideo, Math.round(1000 / fps));
  }

};

function stopWebcam() {
	var tracks = myStream.getTracks();
	tracks.forEach(function(track) {
  	track.stop();
	});
};

function asciiClick() {
	// stops the convert image function from being called
	if (pause) {
		asciiStartup();
		var x =	document.getElementById('asciiPauseText');
		x.innerHTML = "Click here to pause.";
		pause = false;
	}
	else {
		clearInterval(myInterval);
		stopWebcam();
		var x =	document.getElementById('asciiPauseText');
		x.innerHTML = "Click here to restart.";
		pause = true;
	}
};
