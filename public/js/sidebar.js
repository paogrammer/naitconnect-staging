document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById("header");
  const sidebarElement = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggle-sidebar");
  toggleButton.addEventListener("click", function() {
    sidebarElement.classList.toggle("show");
  });
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      headerElement.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});
