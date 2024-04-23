const openModal = document.querySelector('.bModal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__cerrado')

openModal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.add('modal--show')
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('modal--show')
})

///////////////////////////////////////////////

const openModal2 = document.querySelector('.bModal2')
const modal2 = document.querySelector('.modal2')
const closeModal2 = document.querySelector('.modal2__cerrado')

openModal2.addEventListener('click', (e)=>{
    e.preventDefault()
    modal2.classList.add('modal2--show')
})

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault()
    modal2.classList.remove('modal2--show')
})

///////////////////////////////////////////////


const openModal3 = document.querySelector('.bModal3')
const modal3 = document.querySelector('.modal3')
const closeModal3 = document.querySelector('.modal3__cerrado')

openModal3.addEventListener('click', (e)=>{
    e.preventDefault()
    modal3.classList.add('modal3--show')
})

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault()
    modal3.classList.remove('modal3--show')
})
