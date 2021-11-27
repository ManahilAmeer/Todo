let arr = [
  [1, 01, true],
  [2, 02, true],
  [3, 03, false],
];
delete arr[(0, 00, true)];
arr = [];
let id = 0;
let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("deleted");
let title = document.getElementById("title");
title.focus();
function get_update(input) {
  input = title.value;

  if (input == "") {
    alert("You have not entered any Item!!");
  } else if (arr.includes(input)) {
    alert("This item already exists");
  } else {
    id++;
    arr.push([input, id, false]);
    // update();
    document.getElementById("tableBody").innerHTML += `<tr>
        <td ><input type="checkbox" name="check" id="check" onchange="fun(this)"/></td>
        <td id="text">${input}</td>
        <td><i class="material-icons" onclick="deleted(this)">delete</i></td>
        </tr>`;
    title.value = "";
      title.focus();
  }
}
// function update() {
//   str = "";
//   arr.forEach((element, index) => {
//     const text = element[0];
//     str =
//       str +
//       `<tr>
//         <td ><input type="checkbox" name="check" id="check" onchange="fun(this)"/></td>
//         <td id="text">${text}</td>
//         <td><i class="material-icons" onclick="deleted(${index})">delete</i></td>
//         </tr>`;
//   });

//   document.getElementById("tableBody").innerHTML = str;
//   title.value = "";
//   title.focus();
// }
function fun(element) {
  // const pointer = arr[id - 1];
  if (element.checked) {
    element.setAttribute("checked", "checked");
    element.nextElementSibling.style.textDecoration = "line-through";
    // pointer[2] = true;
  } else {
    // pointer[2] = false;
  }
}
function check() {
  arr.forEach((element) => {
    document.getElementById("check").checked = element[2];
    alert(document.getElementById("check").checked);
  });
}

function deleted(element) {
  element.parentElement.parentElement.remove();
  // arr.splice(item_index, 1);
  // update();
}

btn_add.addEventListener("click", () => {
  get_update();
});
document.onkeydown = function (ev) {
  if (ev.key == "Enter") {
    ev.preventDefault();
    get_update();
  }
};
