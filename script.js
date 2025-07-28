const clockElement = document.getElementById('clock');

const updateClock = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  clockElement.textContent = `${timeString}`;
};

updateClock();
setInterval(updateClock, 1000); 