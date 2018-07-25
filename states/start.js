const start = game => ({

    preload: function() {
        game.load.image('title', 'assets/flappyfood.png')
    },

    create: function() {
        // If this is not a desktop (so it's a mobile device) 
        if (game.device.desktop == false) {
        // Set the scaling mode to SHOW_ALL to show all the game
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Set a minimum and maximum size for the game
        // Here the minimum is half the game size
        // And the maximum is the original game size
        game.scale.setMinMax(game.width/2, game.height/2, 
        game.width, game.height);
    
        // Center the game horizontally and vertically
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        }

        game.stage.backgroundColor = '#71c5cf';

        this.title = game.add.image(-40, 70, 'title');
        this.title.scale.setTo(0.75, 0.5);


        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(() => {
            this.state.start("resting")
        });   
        var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterKey.onDown.add(() => {
            this.state.start("resting")
        });   
    },
})

export default start;