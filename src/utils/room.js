const rooms = []

const addRoom = (roomName) => {
    const room = {}
    roomName = roomName.trim().toLowerCase()
    room.name = roomName
    const isInRooms = rooms.find((room) => room.name === roomName)

    if (isInRooms) return
    rooms.push(room)
}

const removeRoom = (roomName) => {
    const idx = rooms.findIndex((room) => room.name === roomName)

    if (idx !== -1) {
        return rooms.splice(idx, 1)[0]
    }
}

const getRooms = () => {
    const roomsInUse = rooms
    return roomsInUse
}

module.exports = {
    addRoom,
    removeRoom,
    getRooms
}