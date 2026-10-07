const ageButton = document.getElementById("ageButton");
ageButton.addEventListener("click", function () {
    const age = Number(document.getElementById("age").value);
    const ageResult = document.getElementById("ageResult");
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }
    console.log(age);
});


const numberButton = document.getElementById("numberButton");
numberButton.addEventListener("click", function () {
    const number = Number(document.getElementById("number").value);
    const numberResult = document.getElementById("numberResult");
    if (number > 0) {
        numberResult.textContent = "Positive number";
    } else if (number < 0) {
        numberResult.textContent = "Negative number";
    } else {
        numberResult.textContent = "Zero";
    }
    console.log(number);
});


const gradeButton = document.getElementById("gradeButton");
gradeButton.addEventListener("click", function () {
    const score = Number(document.getElementById("score").value);
    const gradeResult = document.getElementById("gradeResult");
    if (score < 0 || score > 100) {
        gradeResult.textContent = "Invalid score";
    } else if (score >= 90) {
        gradeResult.textContent = "Grade: A";
    } else if (score >= 80) {
        gradeResult.textContent = "Grade: B";
    } else if (score >= 70) {
        gradeResult.textContent = "Grade: C";
    } else if (score >= 60) {
        gradeResult.textContent = "Grade: D";
    } else {
        gradeResult.textContent = "Grade: F";
    }
    console.log(score);
});



const evenButton = document.getElementById("evenButton");
evenButton.addEventListener("click", function () {
    const number = Number(document.getElementById("evenNumber").value);
    const evenResult = document.getElementById("evenResult");
    if (number % 2 === 0) {
        evenResult.textContent = "Even";
    } else {
        evenResult.textContent = "Odd";
    }
    console.log(number);
});


const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginResult = document.getElementById("loginResult");
    if (username === "admin" && password === "12345") {
        loginResult.textContent = "Login successful";
    } else {
        loginResult.textContent = "Invalid username or password";
    }
    console.log(username);
    console.log(password);
});


const ternaryButton = document.getElementById("ternaryButton");
ternaryButton.addEventListener("click", function () {
    const age = Number(document.getElementById("ternaryAge").value);
    const ternaryResult = document.getElementById("ternaryResult");
    const result = age >= 18 ? "Adult" : "Minor";
    ternaryResult.textContent = result;
    console.log(result);
});


const accessButton = document.getElementById("accessButton");
accessButton.addEventListener("click", function () {
    const age = Number(document.getElementById("accessAge").value);
    const hasID = document.getElementById("hasID").checked;
    const accessResult = document.getElementById("accessResult");
    if (age >= 18 && hasID) {
        accessResult.textContent = "Access granted";
    } else {
        accessResult.textContent = "Access denied";
    }
    console.log(age);
    console.log(hasID);
});


const studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = document.getElementById("studentName").value;
    const score = Number(document.getElementById("studentScore").value);
    const studentResult = document.getElementById("studentResult");
    let grade;
    if (score < 0 || score > 100) {
        studentResult.textContent = "Invalid score";
    } else {
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        if (score >= 60) {
            studentResult.textContent =
                "Student: " + studentName +
                " | Score: " + score +
                " | Grade: " + grade +
                " | Status: Passed";
        } else {
            studentResult.textContent =
                "Student: " + studentName +
                " | Score: " + score +
                " | Grade: " + grade +
                " | Status: Failed";
        }
    }
    console.log(studentName);
    console.log(score);
    console.log(grade);
});