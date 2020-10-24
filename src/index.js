const newYear = new Date("1 Jan, 2021 00:00:00").getTime();

const updateTime = () => {
  const today = new Date().getTime();
  const gap = newYear - today;

  const sec = 1000;
  const min = sec * 60;
  const hours = min * 60;
  const days = hours * 24;

  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hours);
  const m = Math.floor(((gap % days) % hours) / min);
  const s = Math.floor((((gap % days) % hours) % min) / sec);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("min").innerText = m;
  document.getElementById("sec").innerText = s;
};

setInterval(() => {
  updateTime();
}, 1000);
