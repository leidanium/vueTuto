const app = Vue.createApp({
    data() {
        return {
            inputContent: "",
            tasks: [],
            visibility: true
        }
    },
    computed: {
        buttonDisplay() {
            return this.visibility ? "Hide" : "Display"
        }
    },
    watch: {
    },
    methods: {
        addToList() {
            this.tasks.push(this.inputContent);
            this.inputContent = "";
        },

        visibilityChange() {
            this.visibility = !this.visibility;
        }
    }
});

app.mount("#assignment");