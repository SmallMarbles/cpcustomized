export default class Plugin {

    constructor(network) {
        this.network = network
        this.game = network.game
        this.crumbs = network.game.crumbs
    }

}