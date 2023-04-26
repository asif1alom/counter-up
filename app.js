function counter() {
  let current = 0;
  const ctr = document.querySelector(".counter");
  const target = +ctr.getAttribute('data-value');

  const interval = setInterval(() => {
    if (current >= target) {
      clearInterval(interval);
    } else {
      current++;
      ctr.innerText = current;
    }
  }, 1000);
}

counter();