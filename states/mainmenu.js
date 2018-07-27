export default game => ({

    preload: function() {
        game.load.image('square', 'assets/curvedsquare.png');
        game.load.image('gameover', 'assets/gameover.png');
    },

    create: function() {
        if (window.score <= 0) {
            window.score = 0
        }

        console.log("main menu", window.highscore, window.score)
        window.highscore = parseInt(localStorage.getItem("highscore") || "0");
        if (window.score > window.highscore) {
            window.highscore = window.score;
            localStorage.setItem("highscore", window.highscore);
        };
        console.log("main menu", window.highscore, window.score);

        game.stage.backgroundColor = '#71c5cf';

        this.square = game.add.image(67, 120, 'square');

        this.gameover = game.add.image(70, 60, 'gameover');
        this.gameover.scale.setTo(.5, 0.5);

        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(() => {
            this.state.start("resting")
        });  


        var message = this.add.text(153, 170, `score\n${window.score.toString().padStart(3, 0)}`, {fontSize: '28px', fill: '#00000'});

        var message = this.add.text(160, 250, `best\n${window.highscore.toString().padStart(3, 0)}`, {fontSize: '28px', fill: '#00000'});
    },

})