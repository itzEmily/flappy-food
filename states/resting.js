export default game => ({

    preload() {
        game.load.image('bird', 'assets/flappydonut.png')
    },

    create() {
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(() => {
            this.state.start("main")
        });   

        this.bird = game.add.sprite(100, 245, 'bird');

        this.labelScore = game.add.text(190, 20, "0", 
        { font: "30px Arial", fill: "#ffffff" }); 
    },

})