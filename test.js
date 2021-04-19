var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

function displayOut() {
    console.log(this.registrationNumber+ " " +this.brand)
}


displayOut()
