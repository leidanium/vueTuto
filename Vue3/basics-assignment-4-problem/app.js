const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            visibility: true,
            bgColor: ""
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    methods: {
        userInputAction(event) {
            this.userInput = event.target.value;
        },

        toogleButton() {
            this.visibility = !this.visibility
        },

        inputBg(event) {
            this.bgColor = event.target.value;
        }
    }
});

app.mount("#assignment");