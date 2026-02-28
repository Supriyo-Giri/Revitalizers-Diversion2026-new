# Routes
## Player control
   health [GET] http://localhost:3000/
   
   new player [POST] http://localhost:3000/api/player/new 
    body: {
    "username": "Supriyo21",
    "email": "supriyogiri372@gmail.com"
    }

   load player [GET] http://localhost:3000/api/player/:id 

   unlock-reward [POST] http://localhost:3000/api/player/unlock 
   body: {
    "playerId":"69a2fcc5349451ac5987bd3f",
    "bossId": "sorted-guardian"
   }

## Game control
   tools [GET] http://localhost:3000/api/game/tools

   bosses [GET] http://localhost:3000  

   npcs [GET] http://localhost:3000/api/game/npcs

   get boss by id [GET] http://localhost:3000/api/game/bosses/:id


## Fight NPC
   
   fight npc [POST] http://localhost:3000/api/battle/fight-npc 
   body:{
    "npcId": "elder-coder",
    "toolSequence": ["binary search", "merge sort"],
    "playerId": "69a2fcc5349451ac5987bd3f"
}