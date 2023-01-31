fetch( 'https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((json)=>{
        json.forEach(item=>console.log(item))
    })