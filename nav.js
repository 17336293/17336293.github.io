fetch('nav_bar.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('nav_bar').innerText = data;
        });