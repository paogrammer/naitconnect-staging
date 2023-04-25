const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach(container => {
  const card = container.querySelector('.card');
  const description = container.querySelector('.description');
  
  card.addEventListener('click', () => {
    cardContainers.forEach(container => container.classList.remove('show-description'));
    container.classList.add('show-description');
  });
});
