// nothing here yet...

// function myFunction() {
//     let jsonId = document.getElementById('json') ;
//     jsonId.innerText('hi');
// }


const handleSubmit = (event) => {
    event.preventDefault();
    // const type = document.getElementById('type').value
    // console.log(type.value)

    fetch('/jokes', 
    {method: 'POST',
    headers: {'Accept': 'application/json',
    'Content-type': 'application/json'},
    // must be sent as STRINGIFY to the backend
    body: JSON.stringify({type: type})
})
        //turning it bakc into an object from te stingify jason/
        .then(res => {
            let jokeText = res.json()
           
            return jokeText
        })
        .then(res => {
            console.log(res);
            let newText = document.createElement('div');
            newText.id = "jokeText";
            document.querySelector('body').appendChild(newText);
            newText.innerText = res.data;
        })
    }

        
        // .then(res => {
        //     console.log(res);
        //     let newText = document.createElement('div')
        //     document.querySelector('body').appendChild(newText);
        //     newText.innerText(res)
        // })
        
