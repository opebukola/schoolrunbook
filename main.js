/* Quote carousel: prev/next with wraparound, counter derived from the
   number of <figure> children so adding a quote needs no JS change.
   The 460ms slide itself lives in CSS on .carousel-track. */
(function () {
  var track = document.querySelector('[data-carousel-track]');
  if (!track) return;

  var prev = document.querySelector('[data-carousel-prev]');
  var next = document.querySelector('[data-carousel-next]');
  var counter = document.querySelector('[data-carousel-counter]');
  var index = 0;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function render() {
    var n = Math.max(1, track.children.length);
    index = ((index % n) + n) % n;
    track.style.transform = 'translateX(-' + index * 100 + '%)';
    if (counter) counter.textContent = pad(index + 1) + ' / ' + pad(n);
  }

  function go(delta) {
    index += delta;
    render();
  }

  if (prev) prev.addEventListener('click', function () { go(-1); });
  if (next) next.addEventListener('click', function () { go(1); });

  render();
})();
