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
    update();
  }
}
function update() {
  str = "";
  arr.forEach((element, index) => {
    const text = element[0];
    str =
      str +
      `<tr>
        <td ><input type="checkbox" name="check" id="check" onchange="fun(this,${element[1]})"/></td>
        <td>${text}</td>
        <td><i class="material-icons" onclick="deleted(${index})">delete</i></td>
        </tr>`;
    
    
    document.getElementById("check").checked= element[2];
    
  });
  
  document.getElementById("tableBody").innerHTML = str;
  title.value = "";
  title.focus();
}
function fun(element, id) {
  const pointer = arr[id - 1];
  if (element.checked) {
    pointer[2] = true;
    
  } else {
    pointer[2] = false;
    
  }
  
}
function check() {
  arr.forEach((element) => {
    
    document.getElementById("check").checked = element[2];
    alert(document.getElementById("check").checked);
  });
}











function deleted(item_index) {
  arr.splice(item_index, 1);
  
  update();
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
