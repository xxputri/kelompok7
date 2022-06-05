setInterval(function () {
    fetch("https://smartglass7.herokuapp.com/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("cahaya").innerHTML = res.ldr;
      });
  }, 1000);