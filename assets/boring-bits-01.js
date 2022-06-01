// JS Drills

// Sometimes you learn how to do things before you fully understand how they work. Coding is like this a lot. There are many things that I learned how to do well before I asked how they function. There are still plenty more things where that is the case for me. You merely push back that barrier slowly, but the unknown remains. In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, objects, and functions, and get you repeatedly using them. It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music. You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn. This is exactly the same. 

// Learn and fail as you need here, because the bigger tests are to come. As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means. (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’. *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there. If in doubt, puts out the structure you have made to make sure that it is what you hoped it was. I’m looking for accuracy - I want the instructions followed precisely. It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable. Ideally you’ll want the work to be checked, so copy and paste this text into a file and comment it out, so that I can check it easily - put the answer directly below the question.

// 1. Make a function that takes two arguments, and returns the result of them added together.
function add(a, b) {
    return a + b
}
// 2. Call the above function four times with different inputs each time. Make at least some of the inputs floats.
console.log(add(1, 4))
console.log(add("Sonny", "cool"))
console.log(add(1.2, 3.8))
console.log(add(-1, 6))
// 3. Define two integer and two float variables, and use them as arguments to this method you have made.
let x = 2.5
let y = 2.5
console.log(add(x, y))
// ============================================
// 4. Make an object (in ruby this would be a hash) with four keys, and have the keys be three different data types.
let object = {
    1: 'one',
    'two': 'zoo',
    true: true,
    'shoe': 'foo'
}

console.log(object)
// 5. Access two of the values in your object, and log them to the screen.
console.log(object[1])
console.log(object['two'])
// ============================================
// 6. Create another object with one key and value pair.
let twobject = {
    "key": "value"
}

console.log(twobject)
// 7. Define a function that takes that type of object as the input, and log out the value of that key.
function outPut(object) {
    for (let output in object) {
        console.log(`${output}: ${object[output]}`)
    }
} 
outPut(twobject)
// ============================================
// 8. Make an object with three keys and values, and assign it to a variable.
let person = {
    'name': 'baz',
    'age': 44,
    'status': 'very cool'
}
// 9. Make four more objects with the same keys.
let gavin = {
    'name': 'gav',
    'age': 36,
    'status': 'pretty cool'
}

let bessie = {
    'name': 'bessie',
    'age': 57,
    'status': 'cucumber cool'
}

let milton = {
    'name': 'milto',
    'age': 87,
    'status': 'miles davis cool'
}

let angela = {
    'name': 'ange',
    'age': 24,
    'status': 'still filling out in coolness'
}
// 10. Access a value from three of these objects.
console.log(angela.name)
console.log(bessie.status)
console.log(person.age)
// ============================================
// 11. Define a variable and assign to it an empty array.
let personsOfCool = []
// 12. Define a function that takes an array and an object as arguments. The function will push the object into the given array.
function amalgamator5000(array, object) {
    array.push(object)
    return array
}
// 13. Using the function, the four objects, and the array that you have made in the previous steps, invoke the function four times to put those four objects into the array.
amalgamator5000(personsOfCool, gavin)
amalgamator5000(personsOfCool, bessie)
amalgamator5000(personsOfCool, milton)
amalgamator5000(personsOfCool, angela)
amalgamator5000(personsOfCool, person)
// 14. Make sure that the array contains four hashes (maybe log to the screen).
console.log(personsOfCool)
// 15. Access two elements of the array that you have created (via an index)
console.log(personsOfCool[1])
console.log(personsOfCool[3])
// 16. For one of these, now access one of the values of the object at that is located at that index.
console.log(personsOfCool[2].name)
// ============================================
// 17. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.
function objarray(object, array) {
    console.log(object[Object.keys(object)[0]])
    console.log(array[0])
}

objarray(person, personsOfCool)
// 18. Define four objects, one with one key, one with two keys, one with three keys, and one with four. Make the first key consistent across these objects.
const cat = {
    'name': 'Arnold'
}

const birb = {
    'name': 'birb',
    'occupation': 'car salesman'
}

const ron = {
    'name': 'Ronaldinho',
    'game': 'Soccer',
    'fame': 'world-wide'
}

const margaret = {
    'name': 'margaret',
    'breed': 'human',
    'diet': 'codeine & cigarettes',
    'aboutMe': 'keep away from children'
}
// 19. Define two different arrays, with two different datatypes.
let  arrone = [1, 2, 3, 4 , 6547853]
let arrtwo = ["sosig", "hotdog", "kransky"]
// 20. Call the function four times, once with each object, and use the arrays you made.
objarray(margaret, arrtwo)
objarray(ron, arrone)
objarray(cat, arrtwo)
objarray(birb, arrone)

// ============================================
// 21. Write a function that takes five arguments: three strings, and two numbers.
function me(name, fact, vegetable, shoes, hats) {
    shoe = shoes * 2
    height = hats * 20
    console.log(`Hi, I'm ${name}. \nA cool thing about me is: \n${fact}. \nMy favourite vegetal is: \n${vegetable}. \nAnd guess what? I own ${shoes} pairs of shoes numbering ${shoe} individual shoes. Isn't that rad? \nDid you know I have ${hats} hats? If I wear them all at the same time they make me about ${height}cm taller!\n`)
}
// 22. Call that function three times.
me('Balthazar', "I gave Jesus the sweet gift of myrrh to prefigure his death because I'm a freaking magician, yo!", "zucchini", 4, 37)
me("Agares", "I ride a crocodile around because I'm a freaking demon, friend", 'turnips', 48, 8)
me("Tony Hawk", "My son rides skateboards for a living and I live in a video game", "I only eat hawk meat", 2, 2)
