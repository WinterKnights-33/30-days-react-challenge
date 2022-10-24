

let arr = [3, 4, 1, 2, 5];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

let mixedDataTypes = ['string', 'number', 3, 3.14, -4, -5];

let itCompanies = ['Facebook', 'Goggle', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[7]);
console.log(itCompanies.join('\n'));

const upper = itCompanies.map(element => {
    return element.toUpperCase();
});
console.log(upper);
