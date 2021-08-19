class Player { 
    constructor(){}
    
    //read(.on) and write(.set /.update)
    
    getCount(){
 var playercountref = database.ref('playerCount');
 playercountref.on("value",function(data){
     playercount=data.val();
 })
    }
    
    updateCount(count){
database.ref('/').update({
    playerCount:count 
})
    }
    
   update(name) {
    var playerindex = "player"+playercount;
    database.ref(playerindex).set({
        name:name
    })
   }
    

    }