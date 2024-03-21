let graph2 = document.getElementById("graphpie").getContext("2d");
let masspop = new Chart(graph2, {
  type: "bar",
  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        data: [20, 80, 56, 32, 78, 24, 87, 13, 87, 13, 67],
        backgroundColor: "#71BE58",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Revenue Generated VS Revenue Missed",
      fontSize: 18,
    },
    legend: {
      display: false,
    },
  },
});

function CheckPassword(inputtxt) {
  var decimal =
    /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (inputtxt.value.match(decimal)) {
    var str2 = "SmartServTest@123";
    var n = inputtxt.value.localeCompare(str2);
    if (n == 0) {
      window.location.href = "dashboard.html";
      return false;
    } else {
      alert("Password valid!");
    }
    return true;
  } else {
    alert(
      "Password should contain atleast 1 Capital, 1 Small letter, Numerical value and only @ as special character."
    );
    return false;
  }
}

function checkEmail() {
  var email = document.getElementById("email");
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert("Please provide a valid username in form of E-Mail");
    email.focus;
    return false;
  }
}
