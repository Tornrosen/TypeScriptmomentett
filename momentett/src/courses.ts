window.onload = init;

let inputCodeEl = document.getElementById("courseCode") as HTMLInputElement;
let inputNameEl = document.getElementById("courseName") as HTMLInputElement;
let inputProgEl = document.getElementById("courseProg") as HTMLInputElement;
let inputSyllEl = document.getElementById("syllabus") as HTMLInputElement;
let courseListEl = document.getElementById("courseList");
let errorSpace1El = document.getElementById("errorSpace1");
let errorSpace2El = document.getElementById("errorSpace2");
let addBtnEl = document.getElementById("addBtn") as HTMLButtonElement;

interface Course {
  code: string,
  name: string,
  progression: string,
  syllabus: string
}

addBtnEl.addEventListener("click", addCourses);
inputProgEl.addEventListener ("keyup", checkInput);

function addCourses() {

  let course: Course = {
    code: inputCodeEl.value,
    name: inputNameEl.value,
    progression: inputProgEl.value,
    syllabus: inputSyllEl.value
  }

if (courseListEl){
  courseListEl.textContent = `Kurskod: ${course.code}. Kursnamn: ${course.name}. 
  Progression: ${course.progression}. Kursplan: ${course.syllabus}.`;
  inputCodeEl.value ="";
  inputNameEl.value ="";
  inputProgEl.value ="";
  inputSyllEl.value ="";
}
saveCourses(course);
}

function checkInput() {
  let input = inputProgEl.value
  if (input==="A"||input==="B"||input==="C") {
      addBtnEl.disabled=false;
      errorSpace1El.innerHTML ="";
     
  }
  else {
      addBtnEl.disabled = true;
       errorSpace1El.innerHTML="Välj A, B eller C!"
  }
}

function saveCourses(course:Course) {
let jsonStr = JSON.stringify(course);   
    
localStorage.setItem ("course", jsonStr);
}
function init () {
  loadCourses();
}

function loadCourses() {
  if(localStorage!=null){
    let savedCourse = JSON.parse(localStorage.getItem("course"));
    
      if (courseListEl){
      courseListEl.textContent = `Kurskod: ${savedCourse.code}. Kursnamn: ${savedCourse.name}. 
      Progression: ${savedCourse.progression}. Kursplan: ${savedCourse.syllabus}.`}
    };
  }


