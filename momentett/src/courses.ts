interface Course {
  code: String,
  name: string,
  progression: string,
  syllabus: string
}

let course: Course = {
  code: "DT092G",
  name: "Webbutveckling",
  progression: "A",
  syllabus: "URL" 
}

function printUser (course:Course) {
    console.log (course.code);
    console.log (course.name);
    console.log (course.progression);
    console.log (course.syllabus);
}

printUser(course);