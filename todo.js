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

// Adding new to-do
function get_update(input) {
  input = title.value;
  if (input == "") {
    document.getElementById("hidden").style.visibility="visible";
  } else {
    try {
      document.getElementById("temp").remove();
    } catch {}
    document.getElementById("hidden").style.visibility = "hidden";
    id++;
    arr.push([input, id, false]);

    document.getElementById("tableBody").innerHTML += `<tr>
        <td ><input type="checkbox" name="check" id="check" onchange="check(this)"/></td>
        <td id="text">${input}</td>
        <td><i class="material-icons" onclick="deleted(this)">delete</i></td>
        </tr>`;
    title.value = "";
    title.focus();
  }
}

function check(element) {
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
  title.focus();
};
