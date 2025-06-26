// Feature animation on scroll
const features = document.querySelectorAll('.feature');
const bars = document.querySelectorAll('.bar');

const onScroll = () => {
  features.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });

  bars.forEach((bar) => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100 && !bar.classList.contains('animated')) {
      bar.style.height = bar.dataset.height;
      bar.classList.add('animated');
    }
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
