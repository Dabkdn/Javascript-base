// var a = 'Hello!';

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// first();

var a = 'Hello!';

function first() {
    var b = 'Hi!';
    second();

function second() {
        var c = 'Hey!';
        third()
    }
}

function third() { //on top of execution stack
  var d = 'John';
  console.log(a+b+c+d); //here b and c not accessible by ScopeChain        
}
first();