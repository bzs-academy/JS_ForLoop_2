
// 1. Kullanici tarafindan girilecek bir rakamin faktoriyel'ini hesaplayip consola yazdiran js kodu

/* 
1. kullanicidan rakam alinacak - window.prompt
2. string => number
3. 0 , negatif sayi => kullanici uyarilacak
4. ondalik sayiyi tam sayiya cevirmemiz gerekli
5. for loop
6. if conditions
*/

// var num = window.prompt(' Bir sayi giriniz :');
// // num = parseInt(num);
// num = Math.floor(num);

// var faktoriyel = 1;

// if ( num === 0 ) {
//     console.log(`${num}! faktoriyel = ${faktoriyel}` )
// } else if ( num < 0 ) {
//     window.alert('Lütfen pozitif bir sayi giriniz!')
// } else {

//     for (var i = 1; i <= num; i++) {
//         faktoriyel = faktoriyel * i;
//     }
//     console.log(`${num}! faktoriyel = ${faktoriyel}.`)
//     console.log(num + "! faktoriyel = " + faktoriyel + ".")
// }



// 2. verilen bir array icerisinde mevcut elemanlardan String olanlari secip, yeni array'a atayacak ve yeni array'i consola yazdiracak js kodu.
/* 
1. For Loop
2. if condotions
3. typeof()
4. .push()
*/ 

// var array = [1, 5, 'istanbul', 'ankara', 15, 0.45, 'bursa', {}, [1,2], function(){}, 'izmir'];

// var newArray = [];

// for (var i = 0 ; i < array.length ; i++ ) {
//     if ( typeof array[i] === "string" ) {
//         newArray.push(array[i]);
//         console.log(`${array[i]} is typeof String`);
//     } else {
//         console.log(`${array[i]} is NOT typeof String, it's type is ` + (typeof(array[i])).toUpperCase());
//     }
// }
// console.log(newArray);

// newArray = array.filter( item => typeof(item) === 'string').map( item => console.log(item));



// 3. verilen arraydeki tekrarlari önleyecek sekilde yeni bir array olusturan ve rakamlari bir kez olacak sekilde yeni array'e atayan js kodu

var x = [10, 1, 2, 2, 3, 6, 7, 3, 9, 3, 6, 1, 4, 2, 3, 5, 5, 9, 3, 6, 1, 23];

var newX = [];

for ( var i = 0; i < x.length; i++) {
    if (newX.includes(x[i])) {
        continue;
    } else {
        newX.push(x[i])
    }
}

// for (var i = 0; i < x.length; i++) {
//     if (!newX.includes(x[i])) {
//         newX.push(x[i]);
//     }
// }

// console.log(newX);
// console.log(x.length);
// console.log(x[8]);

// newX = x.filter( item => item < 8).map(item => console.log(item));

// newX = x.filter( item => item < 8);
// console.log(newX);
