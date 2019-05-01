$("#btnforps").click(function(e) {
  e.preventDefault();
  var str = {};

  str[$("#inptut").attr("name")] = $("#inptut").val();
  str[$("#inptat").attr("name")] = $("#inptat").val();
  // console.log(str);

  $.getJSON("./data.json", function( data ) {
    $.each( data, function( key, val ) {
      console.log(key[0].val)
      // key[0].val.push($("#inptut").val())
      console.log( "<li id='" + key + "'>" + val + "</li>" );
    });
    // data.ferst.push($("#inptut").val());
    console.log(data);
  });
  // console.log(json.responseText);
  // json.responseText[0].push($("#inptut").val())
  // console.log(json.responseText[0]);
  // console.log(json.ferst);

  // let user = JSON.stringify(str);
  // alert(typeof str);

  // $.ajax({
  //   type: "POST",
  //   data: str,
  //   url: "/index",
  //   dataType: "JSON",
  //   success: function(msg) {
  //     alert("vu krasava");
  //   },
  //   fail: function(msg) {
  //     alert("obijaeh " + msg);
  //   }
  // });
});
