document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById("header");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'header-login.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerElement.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });
  