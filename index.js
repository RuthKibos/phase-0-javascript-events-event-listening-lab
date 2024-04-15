const input = document.getElementById('button');

function addingEventListener() {
  input.addEventListener('click', clickAlert);
}

function clickAlert() {
  alert("Click Me!");
}

addingEventListener();