const socket = io()

const $availableRooms = document.querySelector('#available-rooms')

const selectRoomsTemplate = document.querySelector('#select-rooms-template').innerHTML

socket.on('activeRooms', (rooms) => {
    const html = Mustache.render(selectRoomsTemplate, {
        rooms
    })
    $availableRooms.innerHTML = html
})

