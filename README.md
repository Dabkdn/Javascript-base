# Javascript-base

## explain how javascript works in runtime environment:
eventloop, macrotaskqueue and microtaskqueue: https://javascript.info/event-loop

just remember that microtask queue have more priorities than macrotask queue
and the promise is thrown to microtask queue. This is the reason why eventloop get the promise from queue and throw it to call stack before the setimeout - in the macrotask queue

## Execution context

When the Javascript Program start to run, it creates a global execution context. This execution context has 2 phases: **Creation Phase** and **Execution Phase**

In the creation phase, 4 different things happen:

1. In Global execution context, Javascript will create global object
2. We will always create a **this** object
3. We set assign memory space for any variables or any functions.
4. Variables declarations get assigned a default value of undefined (hoisting) and function themselves place entirely in memory

The next type of execution context is the Function Execution context which will happen when a function is invoked. The function execution context is exactly the same as global execution context except for creating a global object we create an arguments object and any arguments passed in the function get added as it like local variables to the execution context.

## Closure

Whenever you have a function inside another function, even if parent function exection context is removed from the stack the inner function will retain access to the variable environment of the parent execution context => Closure.

```javascript
function out(x) {
  function in(y) {
    return x + y;
  }
}
```

## Scope chain

Scope chain: Javascript is going to look inside the current execution context to see if the variable "x" exist, if doesn't so it will go up the scope chain to the next closest parent execution context in this case it is closure scope, it will look for that variable and it exist

## Call, apply and bind

### Basic rules worth remembering:
**this** always refers to an object.
**this** refers to an object which calls the function it contains.
In the global context **this** refers to either window object or is undefined if the ‘strict mode’ is used.

```javascript
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayOut() {
    console.log(this.registrationNumber+ " " +this.brand)
}
```

not work
```javascript
displayOut() // undefined undefined
```

Well, this won’t work as the **this** will be now assigned to the global context which doesn’t have neither the registrationNumber nor the brand property

For such cases we can use the ECMAScript 5 **bind()** method of the Function.prototype property. This means **bind()** can be used by every single function.
```javascript
var myCarDetails = displayOut.bind(car); 
myCarDetails(); // GA12345 Toyota
```

The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. This way the bind() method enables calling a function with a specified “this” value.

Call and apply behave exactly the same way, they will immediately invoke the function. With **call** you pass argument one by one, with **apply** you pass as an array.
Bind exactly the same as call, but instead of immediatly invoke the function, it will return you a brand new function so you can invoke later

```javascript
displayOut.call(car, param1, param2)
displayOut.apply(car, [param1, param2])
var myCarDetails = displayOut.bind(car, param1, param2)
myCarDetails()
```
# Primitives vs Objects (Primitives vs Reference Types)
![image](/images/primitive_reference.png)