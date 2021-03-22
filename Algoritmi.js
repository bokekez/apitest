
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

const output = reverse('hello');

console.log(output);