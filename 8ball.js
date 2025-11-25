/* --------------------------------------------------------------- */
/*                    magic 8-ball scripting                       */
/* ----------------------------------------------------------------*/
function magic8ballClick() {
  var answer = document.getElementById("magic8ball_answer");
  var inputText = document.getElementById("8ball-input");

  var ballresponses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  if (inputText.value.length > 1) {
    var num =
      (Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 67) + Math.floor(Math.random() * 13)) %
      ballresponses.length;
    answer.innerText = ballresponses[num];
    answer.style.fontSize = "18px";
    answer.style.left = "10%";
    answer.style.width = "80%";
    inputText.value = "";
  }
}

/* check to see if user hit enter in cowsay window */
function check8BallEnter() {
  var key = window.event.keyCode;

  // If the user has pressed enter
  if (key === 13) {
    magic8ballClick();
    document.getElementById("8ball-input").value = document.getElementById("8ball-input").value + "\n*";
    document.getElementById("8ball-input").value = "";
    return false;
  }
}
