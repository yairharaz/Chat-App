const users = []

const addUser = ({ id, username, room }) => {
    //Clean the data:
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data:
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user:
    const isExistingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //Validate username:
    if (isExistingUser) {
        return {
            error: 'Username is in use'
        }
    }

    //Store user:
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const idx = users.findIndex((user) => user.id === id)

    if (idx !== -1) {
        return users.splice(idx, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}