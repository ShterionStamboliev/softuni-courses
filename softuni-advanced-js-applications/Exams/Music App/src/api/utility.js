export function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function setUserData(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem("user");
}

export function updateUserNav() {
  const user = getUserData();
  if (user) {
    document.querySelectorAll(".user").forEach((x) => (x.style.display = "inline"));
    document.querySelectorAll(".guest").forEach((x) => (x.style.display = "none"));
  } else {
    document.querySelectorAll(".user").forEach((x) => (x.style.display = "none"));
    document.querySelectorAll(".guest").forEach((x) => (x.style.display = "inline"));
  }
}
