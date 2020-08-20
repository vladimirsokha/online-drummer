window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        console.log("ARROW DOWN");
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        console.log("ARROW UP");
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        console.log("ARROW LEFT");
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        console.log("ARROW RIGHT");
        break;
      case "Enter":
        console.log("ENTER");
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        console.log("ESCAPE")
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);