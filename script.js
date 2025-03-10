document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function () {
    const serviceDetails = this.parentElement.nextElementSibling; // Находим следующий элемент (список услуг)
    if (serviceDetails.style.display === 'none' || serviceDetails.style.display === '') {
      serviceDetails.style.display = 'block'; // Показываем список услуг
      this.textContent = '-'; // Изменяем текст на "-"
    } else {
      serviceDetails.style.display = 'none'; // Скрываем список услуг
      this.textContent = '+'; // Изменяем текст обратно на "+"
    }
  });
});

// Код для работы с чатом
document.getElementById('open-chat').addEventListener('click', function (event) {
  event.preventDefault();
  const modal = document.getElementById('chat-modal');
  modal.style.display = 'block';
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);
});

document.querySelector('.close-button').addEventListener('click', function () {
  const modal = document.getElementById('chat-modal');
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
});

document.getElementById('send-button').addEventListener('click', function () {
  const userInput = document.getElementById('user-input');
  const message = userInput.value;
  if (message.trim() !== '') {
    addMessage(message, 'user');
    userInput.value = '';
    setTimeout(() => {
      addMessage('Спасибо за ваше сообщение! Мы свяжемся с вами скоро.', 'vet');
    }, 1000);
  }
});

function addMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Прокручиваем вниз
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  const modal = document.getElementById('chat-modal');
  if (event.target === modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
};
// Открытие модального окна для регистрации
const registrationModal = document.getElementById("registration-modal");
const openRegistrationButton = document.getElementById("open-registration");
const closeButton = document.querySelector(".close-button");
const registrationForm = document.getElementById("registration-form");
const confirmationMessag = document.getElementById("confirmation-messag");

// Открываем модальное окно
openRegistrationButton.addEventListener('click', function() {
    registrationModal.style.display = "block";
});

// Закрываем модальное окно
closeButton.addEventListener('click', function() {
    registrationModal.style.display = "none";
    confirmationMessag.style.display = "none"; // Скрываем сообщение при закрытии
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === registrationModal) {
        registrationModal.style.display = "none";
    }
});

// Обработка регистрации
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Показываем сообщение об успешной регистрации
    confirmationMessag.style.display = "block";

    // Сбрасываем форму
    registrationForm.reset();
});





