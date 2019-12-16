// creating function for inserting droplets for every 0.3 sec

function createCircle() {
  const circleEl = document.createElement('div');
  circleEl.classList.add('circle');
  // positioning droplets in workspace randomly
  circleEl.style.top = Math.random() * innerHeight + "px";
  circleEl.style.left = Math.random() * innerWidth + "px";
  // now append the div inside body
  document.body.appendChild(circleEl);

  // remove the circle after its drawn in the workspace after 3sec;
  setTimeout(() => {
    circleEl.remove();
  }, 3000);
}

// set interval for every 0.3sec on creation of circle
setInterval(createCircle, 300);