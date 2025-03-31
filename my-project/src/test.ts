let myArr:string[] = ["Nami", "Asilian", "Zivara"];

function writeArr(arr:string[]) {
    arr.forEach(element => {
        console.log(element)
    });
}

writeArr(myArr);

let person: {
    name: string,
    age: number,
    occupation: string 
} = {
    name: "Anainanne Nennsai",
    age: 51,
    occupation: "Director"
}

console.log (person.name, person.age, person.occupation);

enum weekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend (day:weekDay) {
    if (day == weekDay.Saturday||day ===weekDay.Sunday) {
        return true;
    } else {
        return false;
    }
}

console.log(isWeekend(weekDay.Sunday));

interface User {
    name: string,
    email: string,
    phone: number
}

let user1: User = {
    name: "Midnatt Ziagi",
    email: "allisgood@ya.ni",
    phone: +2822332
}

let user2: User = {
    name: "Silvita Sogna",
    email: "flowergirl@fc.di",
    phone: +8694743
}

function printUser (user:User) {
    console.log (user.name);
    console.log (user.email);
    console.log (user.phone);
}

printUser(user1);
printUser(user2);