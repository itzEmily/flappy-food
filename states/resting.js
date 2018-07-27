export default game => ({

    preload() {
        game.load.image('bird1', 'assets/flappydonut.png');
        game.load.image('bird2', 'assets/flappyavacado.png');
        game.load.image('bird3', 'assets/flappyburger.png');
        game.load.image('bird4', 'assets/flappycoke.png');
        game.load.image('bird5', 'assets/flappycupcake.png');
        game.load.image('bird6', 'assets/flappyfries.png');
        game.load.image('bird7', 'assets/flappymarshmellow.png');
        game.load.image('bird8', 'assets/flappystrawberry.png');
        game.load.image('bird9', 'assets/flappysushi.png');
    },

    create() {
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(() => {
            this.state.start("main")
        });   
        window.img = Math.floor(Math.random()*9+1)
        this.bird = game.add.sprite(100, 245, `bird${window.img}`);

        this.labelScore = game.add.text(190, 20, "0", { font: "30px Arial", fill: "#ffffff" });

        var message = this.add.text(55, 400, `<press SPACE to start>`, {fontSize: '25px', fill: '#ffffff'});
    },

})