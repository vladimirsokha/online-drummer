

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        playKick();
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        playSnare();
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        playClap();
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        playHihat();
        break;
      case "Enter":
        console.log("ENTER");
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        playCrash();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

  function playKick(){
    new Audio('assets/music/kick.wav').play();
  }

  function playSnare(){
    new Audio('assets/music/snare.wav').play();
  }

  function playHihat(){
    new Audio('assets/music/hihat.wav').play();
  }

  function playClap(){
    new Audio('assets/music/clap.wav').play();
  }

  function playCrash(){
    new Audio('assets/music/crash.wav').play();
  }