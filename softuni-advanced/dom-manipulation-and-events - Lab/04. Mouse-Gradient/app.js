function attachGradientEvents() {
  const gradientElement = document.getElementById("gradient");
  gradientElement.addEventListener("mousemove", gradientHover);
  gradientElement.addEventListener("mouseleave", gradientOut);
  function gradientHover(event) {
    const percentage =
      Math.floor((event.offsetX / gradientElement.clientWidth) * 100) + "%";
    document.getElementById("result").textContent = percentage;
  }
  function gradientOut() {
    document.getElementById("result").textContent = "";
  }
}
