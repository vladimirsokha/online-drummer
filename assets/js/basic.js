

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        new Audio('assets/music/kick.wav').play();
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        new Audio('assets/music/snare.wav').play();
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        new Audio('assets/music/clap.wav').play();
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        new Audio('assets/music/hihat.wav').play();
        break;
      case "Enter":
        console.log("ENTER");
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        new Audio('assets/music/crash.wav').play();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);