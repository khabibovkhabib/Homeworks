let submit = document.getElementById("submit");
submit.addEventListener('click', createTable);

function createTable() {
    document.getElementById("table").style.display = "flex";
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let userName = row.insertCell(0);
    let password = row.insertCell(1);
    let message = row.insertCell(2);
    let dropdownTitle = row.insertCell(3);
    userName.innerHTML = document.getElementById("userName").value;
    password.innerHTML = document.getElementById("password").value;
    message.innerHTML = document.getElementById("message").value;
    dropdownTitle.innerHTML = document.getElementById("dTitle").value;

    return false;
}