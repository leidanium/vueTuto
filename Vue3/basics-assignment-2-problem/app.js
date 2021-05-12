const app = Vue.createApp({
    data() {
        return {
            output: ''
        }
    },
    methods: {
        hello() {
            alert("hello world !")
        },
        chInput(event) {
            this.output = event.target.value;
        }
    }
});

app.mount("#assignment");