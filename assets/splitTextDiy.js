
const numbers = [];
const letters = [];

let myName = document.getElementById('my_name').firstElementChild;
for(let i = 0; i < 6; i++){
    letters[i] = myName;
    numbers[i] = i;
    myName = myName.nextElementSibling;
}

let surname = document.getElementById('my_surname').firstElementChild;
for(let i = 6; i < 15; i++){
    letters[i] = surname;
    numbers[i] = i;

    surname = surname.nextElementSibling;
}

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

function randomAppear(array, numbers, interval) {
    let number = 0;
    let counter = 0;

    setInterval(() => {
        if (counter >= array.length)
            return

        number = get_random(numbers);
        array[number].style.opacity = 1;
        numbers.splice(numbers.indexOf(number), 1);

        counter++;
    }, interval); 
}

randomAppear(letters, numbers, 55);