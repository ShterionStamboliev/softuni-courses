function attachGradientEvents() {
  document.getElementById("gradient").addEventListener("mousemove", gradientHover);
  document.getElementById("gradient").addEventListener("mouseleave", gradientOut);
}
const gradientHover = (event) => {
  const percentage =
    Math.floor((event.offsetX / document.getElementById("gradient").clientWidth) * 100) + "%";
  document.getElementById("result").textContent = percentage;
}
const gradientOut = () => 
  document.getElementById("result").textContent = "";

  window.onload = async () => {
    await attachGradientEvents();
  }