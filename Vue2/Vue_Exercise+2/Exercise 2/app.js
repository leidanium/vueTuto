new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            fireAlert: function() {
                alert("Button has been Clicked");
            },

            storeInput: function(event) {
                this.value = event.target.value;
            }
        }
    });