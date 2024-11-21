function Bat() {
  let filter = document.getElementById("find").value;
  let item = document.querySelectorAll(".products");
  console.log(item);
  let l = document.querySelectorAll(".products .color");
  console.log(l);
  for (var i = 0; i <= l.length; i++) {
    let a = item[i].querySelector(".products .color")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
