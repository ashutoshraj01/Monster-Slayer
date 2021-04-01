const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100, 
            currentRound: 0,
            winner: null
        };
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
               // Draw 
               this.winner = 'draw';
            }else if(value <= 0){ 
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
               // Draw 
               this.winner = 'draw';
            }else if(value <= 0){ 
                // monster lost
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return { width: '0%'};
            }
            return { width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return { width: '0%'};
            }
            return { width: this.playerHealth + '%'}
        },
        shouldUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        startGame(){
            this.playerHealth =100,
            this.monsterHealth = 100, 
            this.currentRound = 0,
            this.winner = null
        },
        attackMonster(){
            this.currentRound++;
            const attackValue = Math.floor(Math.random() * (12-5)) + 5; // way to generate randome value b/w 5 to 12.
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = Math.floor(Math.random() * (15-8)) + 8; // way to generate randome value b/w 8 to 15.
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = Math.floor(Math.random() *(25-10)) + 10;
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = Math.floor(Math.random() * (20-8)) + 8;
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
               this.attackPlayer(); 
        }
    }
});

app.mount('#game');