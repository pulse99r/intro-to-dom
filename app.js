//query selector
const body = document.querySelector('body')
console.log(body)

// updating the style
const h1 = document.querySelector('h1')
h1.style.color = "maroon"

// create new elements
const newH1 = document.createElement('h1');
newH1.innerText = "A new heading added dymamically"
newH1.style.color = 'tan'
// appending
body.appendChild(newH1)

// event handlers
const divOne = document.querySelector('.one');


function randomBackgroundColor(){
    const colors = ['yellow','blue', 'red', 'grey','pink', 'purple', 'aquamarine', 'skyblue', 'lightgreen', 'teal', '#ccc','#777788','#000','#fff', '#ffffff', '#3f3f3f','#4e4e4e','#7a0000','#008f00','#000087']
    const pickColor = Math.floor(Math.random() * colors.length)
    divOne.style.backgroundColor = colors[pickColor]
}
divOne.addEventListener('click',randomBackgroundColor)

// div two:  changing the size:
const divTwo = document.querySelector('.two')

let initHeight = 112
let initWidth =  112
function increaseSize() {
  const increment = 10
  divTwo.style.height = `${initHeight += 10}px`
  divTwo.style.width = `${initWidth += 5}px`
}

divTwo.addEventListener('click', ()=>{
  increaseSize()
})

const divThree= document.querySelector('.three')
let color = true;
divThree.addEventListener('click', ()=>{
  divThree.style.backgroundColor = color ? "green" : "white"
  color = color ? false : true
})


const main = document.querySelector('main')
const divFour = document.querySelector('.four')

let count = 0
divFour.addEventListener('click',()=>{
  const newSquare = document.createElement('div')
  newSquare.innerText = `newly added square #${++count}`
  main.appendChild(newSquare)
})
