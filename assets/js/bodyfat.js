
jQuery(function ($) {
    $("#submit").click(function () {
      var gender = $('input[name="rating"]:checked').val();
      var weight = parseInt($("#weight").val()) * 1000;
      var wrist = parseInt($("#wrist").val());
      var waist = parseInt($("#waist").val());
      var hip = parseInt($("#hip").val());
      var forearm = parseInt($("#forearm").val());
      const perc = $("#perc");
      var fatP = Infinity;
  
      if (
        weight === "" ||
        wrist === "" ||
        waist === "" ||
        hip === "" ||
        forearm === ""
      ) {
        alert("Must fill all fields");
      }
      switch (gender) {
        case "male":
          var fac1 = weight * 1.082 + 94.42;
          var fac2 = waist * 4.15;
          var lean = fac1 - fac2;
          var fatW = weight - lean;
          fatP = (fatW * 100) / weight;
          console.log(fatP);
          if (isNaN(fatP)) {
            alert("Must fill all fields");
          } else if (fatP <= 0) {
            alert("Invalid values");
          } else {
            perc.text(fatP.toFixed(2) + "%");
          }
          break;
        case "female":
          var fac1 = weight * 0.732 + 8.987;
          var fac2 = wrist / 3.14;
          var fac3 = waist * 0.157;
          var fac4 = hip * 0.249;
          var fac5 = forearm * 0.434;
          var lean = fac1 + fac2 + fac3 + fac4 + fac5;
          var fatW = weight - lean;
          fatP = (fatW * 100) / weight;
          console.log(fatP);
          if (isNaN(fatP)) {
            alert("Must fill all fields");
          } else if (fatP <= 0) {
            alert("Invalid values");
          } else {
            perc.text(fatP.toFixed(2) + "%");
          }
          break;
        default:
          break;
      }
    });
  });
  