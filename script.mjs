function checkGrade() {
    var percent = parseFloat(document.getElementById("percentInput").value);
  
    if (percent >= 80) {
      document.getElementById("result").textContent = "Grade: A+";
    } else if (percent >= 70) {
      document.getElementById("result").textContent = "Grade: A";
    } else if (percent >= 60) {
      document.getElementById("result").textContent = "Grade: B";
    } else if (percent >= 50) {
      document.getElementById("result").textContent = "Grade: C";
    } else {
      document.getElementById("result").textContent = "Grade: F";
    }
  }