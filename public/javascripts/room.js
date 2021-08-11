const socket = io();

let message = document.querySelector('#message')
let messageBtn = document.querySelector('#message-btn')
let messageList = document.querySelector('#message-list')

messageBtn.addEventListener('click', e => {
    e.preventDefault()
        console.log(message.value)
        socket.emit('new_message', { message: message.value })
        message.value = ''
})

socket.on('receive_message', data => {
    console.log(data)
    let listItem = document.createElement('li')
    listItem.textContent = data.message
    listItem.classList.add('list-group-item')
    messageList.appendChild(listItem)
})