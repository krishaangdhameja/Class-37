class Game {
    constructor() {

    }
    getState(){
        var gsref = database.ref('gameState')
        gsref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(25);
        text("Game Start", 150,80);
        Player.getplayerinfo();

        if(allPlayers !== undefined){
            var ypos = 200;
            for(var plr in allPlayers){
                ypos += 20;
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 200,ypos);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }

}