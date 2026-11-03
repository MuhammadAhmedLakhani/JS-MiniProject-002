// Mini project 2: Student Record System (about 1.5 to 2 hours)

// An array of student objects (each with id, name, and a marks object) and these functions:

// addStudent(id, name, marks): refuse a duplicate id and marks outside 0 to 100.
// findStudent(id): return the student, or a clear “not found” result that the caller handles without crashing.
// updateMark(id, subject, mark): change one mark, with the same validation.
// getAverage(id): the average across subjects.
// getTopStudent(): the student with the highest average.
// printReport(): one line per student with name, average, and a grade (A/B/C/Fail), in the style of your receipt.

// Edge cases to test: an empty list, a duplicate id, a missing student, and a mark of 101.


const students = [
    {
        id: '001',
        name: "Muhammad Ahmed",
        marks: { Math: 85, English: 91, History: 55 }
    },
    {
        id: '002',
        name: "Muhammad Raza",
        marks: { Math: 43, English: 21, History: 62 }
    },
    {
        id: '003',
        name: "Asad",
        marks: { Math: 32, English: 40, History: 75 }
    }
]



// findStudent(id): return the student, or a clear “not found” result that the caller handles without crashing.


const findStudent = (id) => {
    let student = students.find(student => student.id === id)
    if (!student) {
        return null
    }
    return student
}
// console.log(findStudent("001"))





const getAverage = (id) => {
    let student = findStudent(id);

    if (!student) {
        return null
    }
    else {
        let targetedArray = Object.entries(student.marks)

        let total = targetedArray.reduce((sum, elem) => { return sum + elem[1] }, 0)
        let average = (total / targetedArray.length)
        return average
    }

}

// console.log(getAverage("001"))

// addStudent(id, name, marks): refuse a duplicate id and marks outside 0 to 100.

// const addStudent = (id, name, marks) => {
//     let idStatus = findStudent(id)
//     let markStatus = Object.entries(marks).every(mark => (mark[1] > 0 && mark[1] < 100))
//     console.log(markStatus)
//     if (idStatus) {                             
//         return "student id already exits"
//     }
//     else if (!markStatus) {
//         return "marks are invalid"
//     }
//     else {
//         students.push({
//             name: name,
//             id: id

//         })
//         return "Student added sucessfully"
//     }

// }

// console.log(addStudent('001', "Raza",{Math:89,English:72,History:10}))
// console.log(students)

// updateMark(id, subject, mark): change one mark, with the same validation.


// let updateMark = (id, subject, mark) => {
//     let idStatus = findStudent(id)
//     let subjectStatus = subject in idStatus.marks   
//     let markStatus = (subjectStatus) &&  (mark >= 0 && mark <= 100)
//     if (!idStatus) {
//         return "student id doesnot exits"
//     }
//     else if(!markStatus) {
//         return "student mark subject or value not valid"
//     }
//     else {
//       idStatus["marks"][subject] = mark
//         return "Marks updated successfully"
//     }
// }

// console.log(updateMark("001","Math",10))
// console.log("after --->",students)

// getTopStudent(): the student with the highest average.

// let getTopStudent = () => {
//     let averageArray = [];
//     // slecting the marks object and turning it into array through enteries
//     let marksArray = students.map(student => Object.entries(student.marks))
//     marksArray.forEach((stu) => {
//         let total = stu.reduce((sum, curr) => {
//             return sum + curr[1]
//         }, 0)
//         // pushing the average of each student to average array
//         averageArray.push(total / stu.length)
//     })
//     // finding highest from average array
//     let highest = averageArray.reduce((high, curr) => {
//         return curr > high ? curr : high
//     })

//     let highIndex = averageArray.findIndex(elem => elem === highest)
//     return students[highIndex].name
// }

// console.log(getTopStudent())


// printReport(): one line per student with name, average, 
// and a grade (A/B/C/Fail), in the style of your receipt.


let getGrade = (avgMarks) => {
    switch (true) {
        case avgMarks < 50:
            return "Fail";
        case avgMarks >= 50:
            return "D";
        case (avgMarks >= 65):
            return "C";
        case avgMarks >= 75:
            return "B";
        case avgMarks > 85:
            return "A";
        default:
            return "average marks not valid"

    }
}


let printReport = () => {
    if (students.length > 0) {
        students.forEach(stu => {
            let average = getAverage(stu.id)
            let grade = getGrade(average)
            console.log("--------------------------------")
            console.log(`${stu.name} has ${average} average marks with grade ${grade}`)
        })
    } else {
        return "No students"
    }
}

printReport()



