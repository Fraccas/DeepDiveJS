
let fArray = ['apple', 'orange', 'banana'];

function printF() {
    let favFruit = fArray[2];
    let leastFav = fArray[1];

    console.log(fArray[0]);
    printFavFruit();

    function printFavFruit() {
        console.log(favFruit);
    }
    console.log(leastFav);

    let result = function sum() {
        let sum = 3 + 5;
        alert("hi text");
        return sum;
    }

    result();
}



printF();
