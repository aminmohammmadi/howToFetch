// console.log('Its working')
// const theButton = document.getElementById('fetchData')
// theButton.onclick = () => {
//     console.log('Data got')
//     fetch ('http://localhost:3000/employees')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// const postButton = document.getElementById('sendData')
// postButton.onclick =()=>{
//     console.log('data successfully sent')
//     fetch('http://localhost:3000/employees',{
//         method: "POST",
//         headers:{'content-type': 'application/json'},
//         body: JSON.stringify({
//             "name": "Zagros",
//              "id": Date.now()
//             })
//     })
//     .then(response => response.json())
//     .then(data=>console.log(data))
// }

// const putButton = document.getElementById('editData')
// putButton.onclick =()=>{
//     console.log('data successfuly edited')
//     fetch('http://localhost:3000/employees/2',{
//         method: "PUT",
//         headers: { 'content-type': 'application/json'},
//         body:  JSON.stringify({ "name": "Sina"})
//     })
// }

// const deleteButton = document.getElementById('deleteData')
// deleteButton.onclick =()=>{
//     console.log('data is deleted')
//     fetch('http://localhost:3000/employees/2',{
//         method: 'DELETE',
//     })
// }

/* EX3
3. In exercise 1, change your address from https://noviceguru.github.io/doveConvieneJson/data/names.json to http://localhost:3000.
    Doing this, you will start seeing the data in data.json inside your table.
    Now:
        a) Create a button, which adds a row with default values: {name: "name", surname: "surname", studentId: "111111"}
        b) Create a button on every row, which if clicked, deletes the row.
        c) Make a form beside the table with "Add" button and "Name", "Surname" and "StudentId" fields. Once values are added to the
            input fields and the add button clicked, a new row will be added to the table, with the values inserted in the field.
*/

function makeARow (newObject){
    let newRow = document.createElement ('tr')
    let newName = document.createElement ('td')
    let newSurname = document.createElement ('td')
    let newStudentID = document.createElement ('td')

    document.getElementById ('studentTable').appendChild(newRow)
    newRow.appendChild(newName)
    newRow.appendChild(newSurname)
    newRow.appendChild(newStudentID)

    newName.innerText = newObject.name
    newSurname.innerText = newObject.surname
    newStudentID.innerText = newObject.studentId


    fetch('https://noviceguru.github.io/doveConvieneJson/data/names.json')
  .then(response=>response.json())
  .then(data=> data.names.forEach(el=>makeARow(el)))
}
makeARow()

// let defaultValue = { "name": "name", "surname": "surname", "Id": 111111}
// makeARow(defaultValue)


// let firstButton = document.getElementById('firstButton')
// firstButton.onclick =()=> {
//   let defaultValue = { "name": "name", "surname": "surname", "Id": 111111}
//   // makeARow(defaultValue)
// }





