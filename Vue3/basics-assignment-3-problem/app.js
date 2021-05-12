const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    computed: {
        result() {
            var out;
            if (this.counter < 37 ) {
                out = "Not there yet";
            } else if ( this.counter > 37 ) {
                out = "Too much!";
            } else {
                out = '37'
            }
            return out;
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout( function() {
                that.counter = 0;
            }, 5000);
        }
    },
    methods: {
        add(arg) {
            this.counter = this.counter + arg;
        }
    }
});

app.mount("#assignment");