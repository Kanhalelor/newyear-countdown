// new year countdown
Permissions-Policy: interest-cohort=();
const newYear = new Date("1 Jan, 2023 00:00:00").getTime();

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
  document.getElementById("hour").innerText = formatTime(h);
  document.getElementById("min").innerText = formatTime(m);
  document.getElementById("sec").innerText = formatTime(s);
};

setInterval(() => {
  updateTime();
}, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
