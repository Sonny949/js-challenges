// The next set of drills are a bit more difficult. I know that sometimes it might be hard to work out what is meant by the question, but I ask that you stay with it and do your best to piece it apart - sometimes it is hard to express these questions without some confusion. I am happy to give answers to some of the questions if that will help with the understanding so that you can move forward. Where a question asks for a log to screen, the simplest thing will be to log the name of the function. Most times in these questions it is not what the function does that will be important, but rather how that function sits within the object, or even within the other function.

// 1. Define an object that has two keys. One will have the value of a string, and the other a function (and this function can simply log its own name to screen).
const funk = {
    'string': "How long is this?",
    hey() { console.log("I'm a function.")}
}
// 2. Log the string to screen.
console.log(funk['string'])
// 3. Log the entire function to screen.
console.log(funk.hey)
// 4. Invoke the function within the object.
console.log(funk.hey())
// ============================================
// 5. Define an object that has three keys, and each key has the value of an anonymous function. In each function log something to screen (different in each function).
const gun = {
    'chamber1': () => console.log('Bang!'),
    'chamber2': () => console.log('Bang!'),
    'chamber3': () => console.log('Click. Oh dang bro I misfired! Quick, look down the eye of my barrel!')
}
// 6. Call each function (through the object).
console.log(gun.chamber1())
console.log(gun.chamber2())
console.log(gun.chamber3())
// ============================================
// 7. Make a function that returns an object that has two keys, one key with a string value, and the other that has an anonymous function as its value.
function voltar() {
    const objeto = {
        'nutritious': 'beef stew',
        'order': () => {
            console.log("gimme beef stew")
        }
    }  
    
    return {  nutritious: objeto.nutritious, order: objeto.order }

} 
// 8. Log to screen the result of invoking this function.
console.log(voltar())
// 9. Work out how to log to screen the value of the returned object’s string.
console.log(voltar().nutritious)
// 10. Invoke the returned object’s function (via the first function - you will need to return the object, and then call the function within the returned object).
console.log(voltar().order())
// ============================================
// 11. Write a function that takes a number and a function as an argument. Inside this function perform three simple calculations with the given number (the first argument), and then pass the final result to the function that is passed as the second argument.
function numero(num, func) {
    x = num * 2
    y = x ** 2
    z = y / 2
    func(z)
}

// 12. Call this function three times with different numbers, and a different anonymous callback function each time (perhaps each time the callback doing a different simple calculation).
console.log(numero(2, function(result) {console.log(result + 1)}))
console.log(numero(4, function(resultado) {console.log(resultado - 6)}))
console.log(numero(8, (result) => console.log(result / 2))) 
// 13. Now write two functions that take a number as an argument, and do some very simple calculation.
function addTwo(num) {
    return num + 2
}

function takeTwo(num) {
    return num - 2
}

// 14. Invoke the function from 11 twice, each time with a different number argument, and using each of the two functions that you just defined in 13 (one in each invocation).
console.log(numero(2, function(result) {console.log(addTwo(result))}))
console.log(numero(4, function(result) {console.log(takeTwo(result))}))
// ============================================
// 15. Define three very basic functions that take no arguments and that simply console out the name of the function.
function funkyShawn() {
    console.log('I am Funky Shawn!')
} 

function funksJohn() {
    console.log('I am Funks John!')
}

function funksSon() {
    console.log('I am the son of Funk!')
}
// 16. Place each of these functions into an array (do not call the functions).
const arr = [funkyShawn, funksJohn, funksSon]
// 17. Loop through this array and invoke each of the functions in turn.
for (const func of arr) {
    console.log(func())
}

// ============================================
// 18. Define a function (funcReturnsFunc) that returns an anonymous function. If you like you can have funcReturnsFunc log out something before it returns the function. The returned function can just log out a simple message to inform you it ran.
function funcReturnsFunc(){
    console.log("I'm functioninnng")
    return function(x) {return x * 2}
    
} 
// 19. Invoke funcReturnsFunc, and store the result in a const.
const bongoInTheCongo = funcReturnsFunc()(2)
// 20. Using that const, run the returned function.
console.log(funcReturnsFunc()(bongoInTheCongo))
// 21. Now do the same thing in one line: run funcReturnsFunc, and then run the anonymous function that results immediately.
console.log(funcReturnsFunc()(2) * 4)

