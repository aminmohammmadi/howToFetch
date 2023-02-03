console.log('Its working')
const theButton = document.getElementById('fetchData')
theButton.onclick = () => {
    console.log('Data got')
    fetch ('http://localhost:3000/employees')
    .then(response => response.json())
    .then(data => console.log(data))
}

// const sendButton = document.getElementById('sendData')
// sendData.onclick =()=>{
//     console.log('data successfully sent')
//     fetch ('http://localhost:3000/employees', {
//         method: "POST", 
//         headers: {
//             'Content-Type': 'application/json'},
        
//             body: JSON.stringify ({
//             "name": "Hossein",
//             "id": 5
//         })
//     })
//     .then(response=>response.json())
//     .then(data=>console.log(data))
// }

const postButton = document.getElementById('sendData')
postButton.onclick =()=>{
    console.log('data successfully sent')
    fetch('http://localhost:3000/employees',{
        method: "POST",
        headers:{'content-type': 'application/json'},
        body: JSON.stringify({
            "name": "Zagros",
             "id": 2
            })
    })
    .then(response => response.json())
    .then(data=>console.log(data))
}

const putButton = document.getElementById('editData')
putButton.onclick =()=>{
    console.log('data successfuly edited')
    fetch('http://localhost:3000/employees/2',{
        method: "PUT",
        headers: { 'content-type': 'application/json'},
        body:  JSON.stringify({ "name": "Sina"})
    })
}

const deleteButton = document.getElementById('deleteData')
deleteButton.onclick =()=>{
    console.log('data is deleted')
    fetch('http://localhost:3000/employees/2',{
        method: 'DELETE',
    })
}

