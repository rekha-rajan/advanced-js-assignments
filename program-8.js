fetch('https://pro.ip-api.com/json/?key=xcrn7xnMDT8aFKv&fields=45740031')
    .then(response => response.json())
    .then(json => console.log(json)).catch(err => console.log(err));



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const names = data.map(user => user.name);
        let orderdli = '';
        names.forEach(name => {
            orderdli += '<li>' + name + '</li>'
        });
        console.log(orderdli);
    })
    .catch(error => console.error('Error fetching data:', error));


let _data = {
    title: "foo",
    body: "bar", 
    userId:10
}    
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
.then(response => response.json())
.then(json => console.log(json))
.catch (err => console.log(err));