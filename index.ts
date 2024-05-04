 let hour = document.getElementById("hours")! as HTMLSpanElement
let minute = document.getElementById("minutes")! as HTMLSpanElement
let second = document.getElementById("seconds")!as HTMLSpanElement
let start = document.getElementById("start")!as HTMLButtonElement
let pause = document.getElementById("pause")!as HTMLButtonElement
let reset = document.getElementById("reset")!as HTMLButtonElement

let  seconds = 0
let minutes = 0
let hours = 0

start.addEventListener("click", ()=>{
    
  let startTime =  setInterval( function () {
        second.textContent= `${seconds}`
       
        if (seconds >= 0) {
            seconds ++
        }

        minute.textContent = `${minutes}`
        if (seconds == 10) {
            seconds = 0
            minutes ++
        }

        hour.textContent = `${hours}`
        if (minutes == 2) {
            minutes = 0
            hours ++
        }
    }, 1000);  

    pause.addEventListener("click", ()=>{
        clearInterval(startTime)  
    })

    reset.addEventListener("click", function(){
        clearInterval(startTime)
        hours = 0
        minutes = 0
        seconds = 0
        hour.textContent = `00`
        minute.textContent = `00`
        second.textContent = `00`
    })
   
})


// import{gender, student} from "./module"

// class student1 implements student{
//     name;
//     age;
//     gender;
//     department;
//     constructor(name:string, age:number, gender:gender, department:string){
//         this.name = name,
//         this.age = age,
//         this.gender = gender;
//         this.department = department
//     }
//     import(name:string){
//         return "Dammy"
//     }
// }
// const student2 = new student1("Dammy",55,gender.female, "Science")
// const student3:student[] = {}
// student3.push(student2)
// student3.push({name: "Age", age: 48, gender: gender.female, department:"Art"})
// console.log(student3);

// let arr:student[] = []
// function ray(){
//     arr.push("Dammy", 78, gender.female, "Commercial")
// }


