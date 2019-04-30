$("#btnforps").click(function(e) {
  e.preventDefault();
  var str = {
    "name":$("#inptut").val()
  };
  
  // str[$("#inptut").attr("name")] = $("#inptut").val();
  // str[$("#inptat").attr("name")] = $("#inptat").val();
  console.log(str);
  let user = JSON.stringify(str);
  alert(typeof str);
  $.ajax({
    type: 'POST',
    data: str,
    url: '/index',
    dataType: 'JSON',
    success: function(msg) {
      alert("vu krasava");
    },
    fail: function(msg) {
      alert("obijaeh " + msg);
    }
  });
});
