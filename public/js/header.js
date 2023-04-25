document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById("header");
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerElement.innerHTML = xhr.responseText;
      executeHeaderScript(); // call the function to execute the JavaScript code in header.html
    }
  };
  xhr.send();
});

function executeHeaderScript() {
  console.log('this happened');

const toggleBtn = document.querySelector('.toggle-btn');
const closeSidebarBtn = document.querySelector('#close-sidebar');
const sidebar = document.querySelector('#sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-hidden');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('sidebar-hidden');
});

}
