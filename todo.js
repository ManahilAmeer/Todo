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
  } else {
    try {
      document.getElementById("temp").remove();
    } catch {}
    id++;
    arr.push([input, id, false]);

    document.getElementById("tableBody").innerHTML += `<tr>
        <td ><input type="checkbox" name="check" id="check" onchange="fun(this)"/></td>
        <td id="text">${input}</td>
        <td><i class="material-icons" onclick="deleted(this)">delete</i></td>
        </tr>`;
    title.value = "";
    title.focus();
  }
}

function fun(element) {
  if (element.checked) {
    element.setAttribute("checked", "checked");
  } else {
  }
}

function deleted(element) {
  element.parentElement.parentElement.remove();
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
