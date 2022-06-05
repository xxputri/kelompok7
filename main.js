setInterval(function () {
    fetch("http://localhost/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("cahaya").innerHTML = res.ldr;
      });
  }, 1000);