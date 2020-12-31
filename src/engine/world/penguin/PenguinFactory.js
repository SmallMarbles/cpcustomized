import ClientPenguin from './client/ClientPenguin'
import Penguin from './Penguin'
import PenguinLoader from './loader/PenguinLoader'


export default class PenguinFactory {

    constructor(world) {
        this.world = world

        this.penguinLoader = new PenguinLoader(world)
    }

    createPenguin(user, room) {
        let client = this.world.client

        if (user.id == client.id) {
            client.penguin = new ClientPenguin(user, room, user.x, user.y, this.penguinLoader)
            client.setInput(room)

            return client.penguin

        } else {
            return new Penguin(user, room, user.x, user.y, this.penguinLoader)
        }
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            penguins[user.id] = this.createPenguin(user, room)
        }

        return penguins
    }

}