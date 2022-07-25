// get the DOM elements and assign them to variables

const myForm = document.querySelector("#myForm");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const stateInput = document.querySelector("#state");
const ageInput = document.querySelector("#age");
const coursesInput = document.querySelector("input[name='courses']:checked");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const genderInput = document.querySelector("input[name='gender']:checked");
    if (firstNameInput.value === "" || lastNameInput.value === "" || stateInput.value === "" || ageInput.value === "" || genderInput.value === "" || coursesInput.value === false) {
        msg.classList.add("error");
        msg.innerHTML = "Please enter your details";
        setTimeout(() => msg.remove(), 5000);
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${firstNameInput.value} : ${lastNameInput.value} : ${stateInput.value} : ${ageInput.value} : ${genderInput.value} : ${coursesInput.value}`)
        );
        userList.appendChild(li);
        firstNameInput.value = "";
        lastNameInput.value = "";
        stateInput.value = "";
        ageInput.value = "";
        genderInput.value = "";
        coursesInput.value = "";
    }
}
    // 
    
// function validateForm() {
    //     const myForm = document.forms["myForm"]["firstName"].value;
    //     if (myForm == "") {
    //       alert("FirstName must be filled out");
    //       return false;
    //     }
    // }
