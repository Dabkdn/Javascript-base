let thisObj = {
    speak: function () {
        console.log(this);
        // -> this refer to the caller object

        function letSayThis() {
            console.log(this);
            // -> this refer to global object
        }
        letSayThis();

        const arrFunc = () => {
            console.log(this);
            // -> because this arrow function is called in speak function
            // so that this refer to speak.
        };
        arrFunc();
    },
};

thisObj.speak();