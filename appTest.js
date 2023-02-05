let addDataButton = document.getElementById('addNewData')
addDataButton.onclick =()=>{
    fetch('http://localhost:3000/employees',{
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify({
            "name": document.getElementById('inputName').textContent,
            "surname": document.getElementById('inputSurname').textContent,
            "studentId": document.getElementById('inputStudentId').textContent,
            })

    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}


function makeARow (newObject){
    let newRow = document.createElement ('tr')
    let newName = document.createElement ('td')
    let newSurname = document.createElement ('td')
    let newStudentID = document.createElement ('td')
    let deleteButton = document.createElement ('button')

    document.getElementById ('studentTable').appendChild(newRow)
    newRow.appendChild(newName)
    newRow.appendChild(newSurname)
    newRow.appendChild(newStudentID)
    newRow.appendChild(deleteButton)

    newName.innerText = newObject.name
    newSurname.innerText = newObject.surname
    newStudentID.innerText = newObject.studentId
    deleteButton.innerText = 'Delete'
    deleteButton.onclick =()=>{
        document.getElementById('studentTable').removeChild(newRow)
        // newRow.removeChild(newStudentID)
    }

    // deleteButton.onclick=()=>{
    //     fetch('http://localhost:3000/employees',{
    //         method: 'DELETE'
    //     })
    //     .then(response=> response.json())
    //     .then(data=>console.log(data))
    // }
}


    fetch('http://localhost:3000/employees')
  .then(response=>response.json())
  .then(data=> data.forEach(el=>makeARow(el)))

//   let addButton = document.createElement('button')
//   document.body.appendChild(addButton)
//   addButton.innerText = 'Add'
//   addButton.onclick =()=>{
//     let defaultValue = {name: "name", surname: "surname", studentId: "111111"}
//     makeARow(defaultValue)
//   }

//   let addButton = document.createElement('button')
//   document.body.appendChild(addButton)
//   addButton.innerText = 'Add'
//   addButton.onclick =(newValue)=>{
//     let defaultValue = {name: "name", surname: "surname", studentId: "111111"}
//     fetch('http://localhost:3000/employees',{
//     method: 'POST',
//         // headers: {'content-type': 'application/json'},
//         body: JSON.stringify({
//             "name": defaultValue.name,
//             "surname": defaultValue.surname,
//             "studentId": defaultValue.studentId
//         })
//     })
// }

// example json object for button






















