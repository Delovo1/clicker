// alert(document.body.firstElementChild);
// alert(document.body.firstElementChild.nextElementSibling);
// alert(document.body.firstElementChild.nextElementSibling.lastElementChild);
// for (let i = 0; i < document.body.firstElementChild.rows.length; i++) {
//   document.body.firstElementChild.rows[i].cells[i].style.background = "red";
// }
// let el = document.querySelectorAll("#elem");
// for (const i of el) {
//   console.log(i.innerHTML);
// }
// let agtable = document.getElementById("age-table");
// console.log(agtable);
// let a = agtable.getElementsByTagName("label");
// console.log(a);
// console.log(agtable.querySelector("#age-table td:first-child"));
// let form = document.body.getElementsByTagName("form")[0];
// console.log(form);
// let f = document.getElementsByName("search")[0];
// console.log(f);
// "https://www.factroom.ru/wp-content/uploads/2022/10/cover-screamer.jpg"

// console.log(f.getElementsByTagName("input")[0]);
// console.dir(f.getElementsByTagName("input")[1]);

document.getElementById("plus").onclick = () => {
  document.getElementById("number").innerHTML =
    +document.getElementById("number").innerHTML + 1;
  if (+document.getElementById("number").innerHTML % 20 === 0) {
    alert("Не пора ли остановиться?");
  }
  if (+document.getElementById("number").innerHTML === 22) {
    const newImg = document.createElement("img");
    newImg.src =
      "https://www.factroom.ru/wp-content/uploads/2022/10/cover-screamer.jpg";
    document.body.appendChild(newImg);
    setTimeout(() => {
      newImg.remove();
    }, 3000);
  }
};

document.getElementById("minus").onclick = () => {
  document.getElementById("number").innerHTML =
    +document.getElementById("number").innerHTML - 1;
};
