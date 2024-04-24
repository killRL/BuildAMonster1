class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redB.png");
        my.sprite.rightA = this.add.sprite(this.bodyX + 70, this.bodyY - 10, "monsterParts", "arm_whiteA.png");
        my.sprite.leftA = this.add.sprite(this.bodyX - 70, this.bodyY - 10, "monsterParts", "arm_yellowA.png");
        my.sprite.leftA.flipX = true;
        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY - 150, "monsterParts", "body_whiteC.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 170, "monsterParts", "eye_red.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY - 100, "monsterParts", "mouth_closed_teeth.png");
        my.sprite.mouth.flipY = true;
        my.sprite.rightL = this.add.sprite(this.bodyX + 45, this.bodyY + 150, "monsterParts", "leg_blueA.png");
        my.sprite.leftL = this.add.sprite(this.bodyX - 45, this.bodyY + 150, "monsterParts", "leg_blueA.png");
        my.sprite.leftL.flipX = true;
        my.sprite.leftE = this.add.sprite(this.bodyX - 45, this.bodyY - 220, "monsterParts", "detail_green_ear.png");
        my.sprite.leftE.flipX = true;
        my.sprite.rightE = this.add.sprite(this.bodyX + 45, this.bodyY - 220, "monsterParts", "detail_green_ear.png");
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.counter++;

        if (this.counter % 120 == 0) {
                                            // Polling input: peace hand
            if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
                my.sprite.mouth.flipY = true;
            }                               // Event input: dimple smile
            else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F).isDown) {
                my.sprite.mouth.visible = false;
                my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY - 100, "monsterParts", "mouth_closed_fangs.png");
            }                               // Event input: regular smile
            else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
                my.sprite.body.bodyX -=2;
                my.sprite.rightA.bodyX -=2;
                my.sprite.leftA.bodyX -=2;
                my.sprite.head.bodyX -=2;
                my.sprite.mouth.bodyX -=2;
                my.sprite.rightL.bodyX -=2;
                my.sprite.leftL.bodyX -=2;
                my.sprite.leftE.bodyX -=2;
                my.sprite.rightE.bodyX -=2;
            }
            else if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
                my.sprite.body.bodyX +=2;
                my.sprite.rightA.bodyX +=2;
                my.sprite.leftA.bodyX +=2;
                my.sprite.head.bodyX +=2;
                my.sprite.mouth.bodyX +=2;
                my.sprite.rightL.bodyX +=2;
                my.sprite.leftL.bodyX +=2;
                my.sprite.leftE.bodyX +=2;
                my.sprite.rightE.bodyX +=2;
            }
            
        }

    }
}