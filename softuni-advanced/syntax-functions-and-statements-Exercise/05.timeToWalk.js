function walk(steps, footprintMeters, studentSpeed) {
  const distance = steps * footprintMeters;
  const speed = studentSpeed / 3.6;
  const time = distance / speed;
  const timeToRest = Math.floor(distance / 500);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time - minutes * 60);

  return (
    (hours < 10 ? "0" : "") +
    hours + ":" + (minutes + timeToRest < 10 ? "0" : "") +
    (minutes + timeToRest) + ":" + (seconds < 10 ? "0" : "") + seconds);
}
walk(4000, 0.6, 5);
walk(2564, 0.7, 5.5);
