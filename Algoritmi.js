
const reverse = (str) => {
    // const strArr = str.split('');
    // strArr.reverse ();
    // return strArr.join('');
    // .join -> array into a string
    // The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
    
    // let revString = '' ;
    // for(let i = str.length -1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    // let revString = '' ;
    // for(let i = 0; i <= str.length -1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    let revString = '';
    str.split('').forEach(element => {
        revString = element + revString;
    });
    return revString;
}

//palindrom

const isPalindrom = (str) => {
    const revString = str.split('').reverse().join('');
    if (revString === str){
        return true;
    } else {
        return false;
    }
    
}

const reverseInt = (int) => {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);
}

const capitilize = (str) =>{
    const strArr = str.toLowerCase().split(' ');

    // substring prvo slovo
    // split(' ') -> sa spaceom split by words

    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
}

// const maxChar = (str) =>{

// }

const fizzBuzz = () => {
    for(let i = 1; i <=100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }        
        else if(i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0){
            console.log('Buzz');
        } 
        else {
            console.log(i);
        }
    }
}

const output = reverse('hello');
const palin = isPalindrom('hello');
const intRev = reverseInt('12345');
const cap = capitilize('i love js');
const runFizz = fizzBuzz();

console.log(output);
console.log(palin);
console.log(intRev);
console.log(cap);
console.log(runFizz);