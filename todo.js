let arr = [[1], [2], [3]];
delete arr[0];
arr = [];

let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("deleted");
// function to add item
function get_update() {
  
  let title = document.getElementById("title").value;
  
  if(title==""){
    alert("You have not entered any Item!!");
  }
  else if(arr.includes(title)){
    alert("This item already exists");
  }
  else{
  arr.push([title]);
  show();
}
}
// Function to show the item on screen 
function show() {
  str = "";
  arr.forEach((element, index) => {
    str =
      str +
      `<tr>
        <td ><input type="checkbox" name="task1" id="task1" /></td>
        <td>${element[0]}</td>
        <td><i class="material-icons" onclick="deleted(${index})">delete</i></td>
        </tr>`;
  });
  document.getElementById("tableBody").innerHTML = str;
}

// function to delete item
function deleted(item_index) {
  arr.splice(item_index, 1);
  console.log(arr);
  update();
}
// Adding event Listener to button
btn_add.addEventListener("click", () => {
  get_update();
});