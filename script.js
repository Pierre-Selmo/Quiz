const button1 = document.querySelector('#btn-1')
const button2 = document.querySelector('#btn-2')
const button3 = document.querySelector('#btn-3')
const button4 = document.querySelector('#btn-4')
var animationId;

button1.addEventListener('click', () => 
{ button1.style.backgroundColor = 'red';
button2.disabled = true;
button3.disabled = true;
button4.style.backgroundColor = 'Lightgreen';
})

button2.addEventListener('click', () => 
{ button2.style.backgroundColor = 'red';
button1.disabled = true;
button3.disabled = true;
button4.style.backgroundColor = 'Lightgreen';
})

button3.addEventListener('click', () => 
{ button3.style.backgroundColor = 'red';
button1.disabled = true;
button2.disabled = true;
button4.style.backgroundColor = 'Lightgreen';
})

button4.addEventListener('click', () => {
  button4.style.backgroundColor = 'Lightgreen';
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  cancelAnimationFrame(animationId);
});
document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.getElementById('progress');

  function startTimer(duration) {
    let start = Date.now();
    function step() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - start;
      const progress = Math.min(1, elapsedTime / duration);

      progressBar.style.backgroundColor = 'azure';
      progressBar.style.width = progress * 100 + '%';

      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      }
    }
    animationId = requestAnimationFrame(step);
  }

  startTimer(10000); // 10 seconds
});
function freezeProgressBar() {
  cancelAnimationFrame(animationId);
}