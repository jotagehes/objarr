var fisrt = fetch('https://api.github.com/users/jotagehes')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


    var second = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))