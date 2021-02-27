class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.distance=0;
        this.rank = null;
    }

    getCount(){
        database.ref('playerCount').on ("value",(data)=>
         {
             playerCount = data.val();
         })
    }

    updateCount(count){
        database.ref ('/').update({
            playerCount : count,
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance,
            rank : this.rank,
        })
    }
    getFinishedPlayers(){
        var finishedPlayersRef = database.ref("finishedPlayers");
        finishedPlayersRef.on("value",(data)=>{
            finishedPlayers = data.val();
        })
    }
    static updateFinishedPlayers(){
        database.ref('/').update({
            finishedPlayers : finishedPlayers + 1
        })
        this.rank = this.rank +1    
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
           allPlayers = data.val(); 
        })
    }
    
    
}