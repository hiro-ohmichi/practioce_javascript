const array = ["r", "i", "c", "o", "h"];
delete array[array.indexOf("o")];

console.log(array);
console.log(array.length);

/*
[ 'r', 'i', 'c', <1 empty item>, 'h' ]
5
消したあとが残る
*/
console.log(array[3]);
//undefinedで残っている
