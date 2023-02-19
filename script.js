function saveData() {
    // Get the name and text data from the form
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;
  
    // Send the data to the server using a POST request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Update the output with the response from the server
        document.getElementById("output").innerHTML = xhr.responseText;
      }
    };
    xhr.send("name=" + encodeURIComponent(name) + "&text=" + encodeURIComponent(text));
  }
  