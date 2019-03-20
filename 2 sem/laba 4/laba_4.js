document.getElementById("r4").addEventListener("click", clicked);

function clicked() {
  var obj = {};
  var inl = document.getElementsByTagName("input");
  for (var i = 0; i < inl.length; i++) {
    obj["text" + i] = inl[i].value;
  }

  console.log(obj);
