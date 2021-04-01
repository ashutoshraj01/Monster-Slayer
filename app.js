const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            mosterHealth: 100
        };
    },
    methods: {
        attackMonster(){
            const attackValue = Math.floor(Math.random() * (12-5)) + 5; // way to generate randome value b/w 5 to 12.
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = Math.floor(Math.random() * (15-8)) + 8; // way to generate randome value b/w 8 to 15.
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');