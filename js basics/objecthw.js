products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

products.forEach(data =>console.log(data.pName));

//2. print all mobile details whose display is lcd
console.log("----------------------------");
products.forEach(data1 =>data1.display=="lcd"?console.log(data1.pName):console.log(""));
console.log("----------------------------");
products.filter(data2=>data2.display=="lcd"?console.log("hai"):console.log("hello"));
products.filter(data2=>data2.display=="lcd").forEach(product=>console.log(product.pName));
console.log("----------------------------");
products.filter(data3=>data3.display=="lcd").forEach(product=>console.log(product.pName));
//3. print 5g mobile phone name
console.log("----------------------------");
products.filter(data3=>data3.band=="5g").forEach(product=>console.log(product.pName));
//4. filter mobile based on price
console.log("----------------------------");
products.sort((d1,d2)=>d2.price-d1.price).forEach(p=>console.log(p.pName));
//5. print costly mobile
console.log("----------------------------");
// console.log(products.reduce((d1,d2)=>d1.price<d2.price?console.log(d1.pName):console.log(d2.pName)));

console.log(products.reduce((d1,d2)=>d1.price>d2.price?d1:d2).pName);
//6. print low cost mobile
console.log("----------------------------");
console.log(products.reduce((d1,d2)=>d1.price<d2.price?d1:d2).pName);
