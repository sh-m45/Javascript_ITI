var addBtn = document.getElementById("submitBtn");
var nameInput = document.getElementById("nameEmp");
var ageInput = document.getElementById("ageEmp");
var salaryInput = document.getElementById("salaryEmp");
var genderInput = document.getElementById("genderEmp");
var collectBtn = document.getElementsByClassName("form-control");
var x = "false";
var employees ;
//var testLocalStorage = JSON.parse(localStorage.getItem('employeesList')) ;
// console.log(testLocalStorage);

if( localStorage.getItem('employeesList') == null)
{
    employees = [] ;
}
else
{
    employees = JSON.parse(localStorage.getItem('employeesList')) ;
    displayForm()
}


function clickAction() {
    // if (x == "false") {
        addEmployee();
        displayForm();
        clearBtn();
    //}

    // else {
    //         console.log("else");
    //         updateRow();
    //         displayForm();
    //         clearBtn();
    //         x = "false" ;
            
        
    // }
}



var employee
function addEmployee() {

    employee =
    {
        name: nameInput.value,
        age: ageInput.value,
        salary: salaryInput.value,
        gender: genderInput.value
    };
    employees.push(employee);
    localStorage.setItem("employeesList", JSON.stringify(employees));
}

function displayForm() {
    var cartonaa = "";
    for (var i = 0; i < employees.length; i++) {
        //cartonaa += "<tr><td>"+employee[i].name+"</td> <td>"+employee[i].age+"</td> <td>"+employee[i].salary+"</td> <td>"+employee[i].gender+"</td></tr>"
        cartonaa += `<tr>
                        <td>${employees[i].name}</td> 
                        <td>${employees[i].age}</td> 
                        <td>${employees[i].salary}</td> 
                        <td>${employees[i].gender}</td>
                        <td><button onclick = 'deleteRow(${i})' type="button" class="btn btn-danger">Delete</button></td>
                        <td><button onclick = 'updateRow(${i})' type="button" class="btn btn-warning">Update</button></td>
                    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartonaa;
}

function clearBtn() {
    for (var i = 0; i < 4; i++) {
        collectBtn[i].value = " ";
    }
}

function deleteRow(index) {
    employees.splice(index, 1);
    displayForm();
    localStorage.setItem("employeesList", JSON.stringify(employees));
}

function search(searchTxt) {
    var cartonaa = "";

    for (var i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase().includes(searchTxt.toLowerCase())) {
            cartonaa += `<tr>
                        <td>${employees[i].name}</td> 
                        <td>${employees[i].age}</td> 
                        <td>${employees[i].salary}</td> 
                        <td>${employees[i].gender}</td>
                        <td><button onclick = 'deleteRow(${i})' type="button" class="btn btn-danger">Delete</button></td>
                        <td><button onclick = 'updateRow(${i})' type="button" class="btn btn-warning">Update</button></td>
                    </tr>`
        }

    }
    document.getElementById("tableBody").innerHTML = cartonaa;
}

// function updateRow(index) {
//     //window.alert(employees[index].name);
//     x = "true"
//     addBtn.innerHTML = "Update Employee";
//     nameInput.value = employees[index].name;
//     ageInput.value = employees[index].age;
//     salaryInput.value = employees[index].salary;
//     genderInput.value = employees[index].gender;
//     // employee =
//     // {
//     //     name: nameInput.value,
//     //     age: ageInput.value,
//     //     salary: salaryInput.value,
//     //     gender: genderInput.value
//     // };
//     // employees.splice(index, 1, employee);
// }

nameInput.onkeyup = function(){
    var rejexName = /^[A-Z][a-z]{2,9}$/ ;
    if (!rejexName.test(nameInput.value))
    {
        addBtn.disabled = "true" ;
    }
    else
    {
        addBtn.removeAttribute("disabled") ;
    }
}

ageInput.onkeyup = function()
{
    var rejexAge = /^[2-7][0-9]$/
    if(!rejexAge.test(ageInput.value))
    {
        addBtn.disabled = "true" ;
    }
    else
    {
        addBtn.removeAttribute("disabled") ;
    }
}

salaryInput.onkeyup = function()
{
    var rejexAge = /^[1-7][0-9]{3,5}$/
    if(!rejexAge.test(salaryInput.value))
    {
        addBtn.disabled = "true" ;
    }
    else
    {
        addBtn.removeAttribute("disabled") ;
    }
}

genderInput.onkeyup = function()
{
    var rejexAge = /^(female|male)$/
    if(!rejexAge.test(genderInput.value))
    {
        addBtn.disabled = "true" ;
    }
    else
    {
        addBtn.removeAttribute("disabled") ;
    }
}