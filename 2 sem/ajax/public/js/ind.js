$("#btnforps").click(function(e) {
  e.preventDefault();

  // str[$("#inptut").attr("name")] = $("#inptut").val();
  // str[$("#inptat").attr("name")] = $("#inptat").val();
  let var1 = $("#inptut").val();
  
  $.getJSON("./data.json", function( data ) {
    let mas = data.ferst;
    mas.push(var1);
    data.name = mas;
    // console.log(data.ferst);
    // console.log(typeof data.ferst);
    // console.log(data.ferst);
    $.ajax({
      type: "POST",
      data: data,
      url: "/index",
      success: function(msg) {
        alert("vu krasava");
      },
      fail: function(msg) {
        alert("obijaeh " + msg);
      }
    });
  });
});
