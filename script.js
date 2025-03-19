document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function () {
    const serviceDetails = this.parentElement.nextElementSibling; 
    if (serviceDetails.style.display === 'none' || serviceDetails.style.display === '') {
      serviceDetails.style.display = 'block'; 
      this.textContent = '-'; 
    } else {
      serviceDetails.style.display = 'none'; 
      this.textContent = '+'; 
    }
  });
});

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
  chatBox.scrollTop = chatBox.scrollHeight; 
}
window.onclick = function (event) {
  const modal = document.getElementById('chat-modal');
  if (event.target === modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
};





