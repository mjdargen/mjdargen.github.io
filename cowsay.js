/* --------------------------------------------------------------- */
/*                       cowsay scripting                          */
/* ----------------------------------------------------------------*/
function cowsayClick() {
  var cowsayOutput = document.getElementById("cowsay-output");
  var inputText = document.getElementById("cowsay-input");
  var line = 0;
  var i = 0;
  var input = inputText.value;
  var output = [];
  output[0] = "";
  var string_out = "";

  if (inputText.value.length > 1) {
    /* replace all newline characters */
    while (input.indexOf("\n") != -1) {
      input = input.replace("\n", "");
    }
    while (input.indexOf("\r") != -1) {
      input = input.replace("\r", "");
    }

    // split up word by word
    var split = input.split(" ");
    // until end of string
    while (i < split.length) {
      // if contents on current line + next word is > 40
      if (output[line].length + split[i].length >= 40) {
        // adds additional spaces to the end
        while (output[line].length < 40) {
          output[line] += " ";
        }
        line++;
        output[line] = "";
      }
      output[line] += " " + split[i];
      i++;
    }
    while (output[line].length < 40) {
      output[line] += " ";
    }

    /* adds the bars around the quote */
    // for only one line of text
    if (line == 0) {
      output[0] = "|" + output[0] + "|";
    }

    // for 2 lines of text
    if (line == 1) {
      output[0] = "/" + output[0] + "\\";
      output[output.length - 1] = "\\" + output[output.length - 1] + "/";
    }

    // for more than 3 lines of text
    if (line > 1) {
      output[0] = "/" + output[0] + "\\";
      output[output.length - 1] = "\\" + output[output.length - 1] + "/";
      i = 1;
      while (i < output.length - 1) {
        output[i] = "|" + output[i] + "|";
        i++;
      }
    }

    /* combine into single string */
    // if one line of text
    if (line == 0) {
      var str_length = output[0].indexOf("  "); //double space
      output[0] = output[0].substr(0, str_length);
      string_out = "\r\n ";
      i = 0;
      while (i < str_length) {
        string_out += "-";
        i++;
      }
      string_out += " \r\n" + output[0] + " |\r\n ";
      i = 0;
      while (i < str_length) {
        string_out += "-";
        i++;
      }
      string_out += " ";
    }
    // more than one line of text
    else {
      i = 0;
      string_out = "----------------------------------------\r\n";
      while (i < output.length) {
        string_out += output[i] + "\r\n";
        i++;
      }
      string_out += "----------------------------------------\r\n";

      // remove last return character
      string_out = string_out.substr(0, string_out.lastIndexOf("\r\n"));
    }

    cowsayOutput.innerHTML = string_out;
    inputText.value = "";

    var x = document.getElementById("cowsay-response");
    x.style.display = "block";
  }
}

/* check to see if user hit enter in cowsay window */
function checkCowsayEnter() {
  var key = window.event.keyCode;

  // If the user has pressed enter
  if (key === 13) {
    cowsayClick();
    document.getElementById("cowsay-input").value = document.getElementById("cowsay-input").value + "\n*";
    document.getElementById("cowsay-input").value = "";
    return false;
  }
}
