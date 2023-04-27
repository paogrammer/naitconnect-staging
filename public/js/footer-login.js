document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById("footer");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer-login.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerElement.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });
  