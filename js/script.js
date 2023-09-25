const str1 = 'aaaaa bb aaa bb aa ccc dd mm nn aa cccc';
console.log(str1);
console.log(str1.length);

const blackList = ['aa', 'ccc'];

console.log(filterBadWord(str1, blackList));


function filterBadWord(str, arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let filter = str.indexOf(arr[i]);

        console.log(filter); // Щоб бачити процес пошуку входу.

        while (filter !== -1) {

            str = str.replace(arr[i], '*'.repeat(arr[i].length));
            filter = str.indexOf(arr[i], filter + arr[i].length);
            
            console.log(filter); // Щоб бачити процес пошуку входу.
        }
    }   
    
    return str;
}

