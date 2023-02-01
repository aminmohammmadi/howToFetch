
console.log('Amin Mohammadi')

let theTable = document.createElement('table');
let newTableRow = document.createElement('tr');
let newTableName = document.createElement('th');
let newTableSurname = document.createElement('th');
let newTableStudentID = document.createElement('th');

document.body.appendChild(theTable)
theTable.appendChild(newTableRow)
newTableRow.appendChild(newTableName)
newTableRow.appendChild(newTableSurname)
newTableRow.appendChild(newTableStudentID)

newTableName.innerText = 'Name'
newTableSurname.innerText = 'Surname'
newTableStudentID.innerText = 'Student ID'
newTableRow.style.color = 'red'

let makeARow = (newObject) => {
    let dataNewRow = document.createElement('tr')
    let dataName = document.createElement('td')
    let dataSurname = document.createElement('td')
    let dataStudentID = document.createElement('td')

    theTable.appendChild(dataNewRow)
    dataNewRow.appendChild(dataName)
    dataNewRow.appendChild(dataSurname)
    dataNewRow.appendChild(dataStudentID)

    dataName.innerText = newObject.name;
    dataSurname.innerText = newObject.surname;
    dataStudentID.innerText = newObject.studentId;

}

fetch('https://noviceguru.github.io/doveConvieneJson/data/names.json')
.then(response=>response.json())
.then(data => data.forEach(el => makeARow))




