function notify(message) {
  const notificationWindow = document.getElementById('notification')
  notificationWindow.textContent = message;
  notificationWindow.style.display = 'block';

  notificationWindow.addEventListener('click', () => {
    notificationWindow.style.display = 'none';
  });
}