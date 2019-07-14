document.addEventListener("DOMContentLoaded", function(){
    var numberOfVisits = localStorage.getItem("visits");
    var message = document.querySelector("#message");
    if (numberOfVisits) {
        localStorage.setItem("visits", parseInt(numberOfVisits)+1);
        message.innerHTML = "This is your visit #" + numberOfVisits;
    } else {
        // It's the first time the user visits my form
        message.innerHTML = "Welcome for the first time to our Winery";
        localStorage.setItem("visits", "1");
    }

    var inputs = document.querySelectorAll("#name, #phone, #email");
    for (var input of inputs) {
        // Load operation
        var storedValue = localStorage.getItem(input.id);
        if (storedValue) {
            input.value = storedValue;
        }
        // Save Operation
        input.addEventListener("change", function() {
            localStorage.setItem(this.id, this.value);
        });
    }
});