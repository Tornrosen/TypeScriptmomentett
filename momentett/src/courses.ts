let inputCodeEl = document.getElementById("courseCode") as HTMLInputElement;
let inputNameEl = document.getElementById("courseName") as HTMLInputElement;
let inputProgEl = document.getElementById("courseProg") as HTMLInputElement;
let inputSyllEl = document.getElementById("syllabus") as HTMLInputElement;
let courseListEl = document.getElementById("courseList");

let addBtnEl = document.getElementById("addBtn") as HTMLButtonElement;

addBtnEl.addEventListener("click", getValues);

function getValues() {

interface Course {
  code: String,
  name: string,
  progression: string,
  syllabus: string
}

let course: Course = {
  code: inputCodeEl.value,
  name: inputNameEl.value,
  progression: inputProgEl.value,
  syllabus: inputSyllEl.value
}

if (courseListEl){
  courseListEl.textContent = `Kurskod: ${course.code}. Kursnamn: ${course.name}. 
  Progression: ${course.progression}. Kursplan: ${course.syllabus}.`;
}
}

