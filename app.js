console.log('Its working')
const theButton = document.getElementById('fetchData')
theButton.onclick = () => {
    console.log('Data got')
    fetch ('http://localhost:3000/employees')
    .then(response => response.json())
    .then(data => console.log(data))
}

const sendButton = document.getElementById('sendData')
sendData.onclick =()=>{
    console.log('data successfully sent')
    fetch ('http://localhost:3000/employees', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'},
        
            body: JSON.stringify({"name": "Hossein"})
        //     body: JSON.stringify ({
        //     "name": "Hossein"
        // })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}

// const editButton = document.getElementById('editData')
// editButton.onclick = ()=>{
//     console.log('successfully edited')
//     fetch('http://localhost:3000/people/4', {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify ({
//             "name": "AbdolRahman"
//         })
//     })
//     .then (response=>response.json())
//     .then (data => console.log(data))
// }
// const deleteButton = document.getElementById('deleteData')
// deleteButton.onclick = ()=> {
//     console.log('successfully deleted')
//     fetch('http://localhost:3000/people/2', {
//         method: "DELETE",
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }