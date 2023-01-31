const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const btnPrev=document.querySelector('.btn-prev')
let num = 1


function generateRandomColor (){
    const randColor='0123456789ABCDEF'
    let color=''
    for (let i=0;i<6;i++){
        color+=randColor[Math.floor(Math.random()*randColor.length)]
    }
    return'#'+color
}
const setRandomColor=()=>{
    block.style.background=generateRandomColor()

}
setRandomColor()

const count=()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>
            `

        })
    btn.onclick=()=>{
        setRandomColor()
        num++
        count()

    }
    btnPrev.onclick=()=>{
        setRandomColor()
        num--
        count()

    }

}
count()








