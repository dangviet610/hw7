let touristMap = new Map();

touristMap.set("Da Nang", 500000);
touristMap.set("Ha Noi", 200000);
touristMap.set("Ca Mau", 100000);
touristMap.set("Yen Bai", 34000);

console.log(touristMap.get("Da Nang"));

touristMap.forEach((value, key) => {
    console.log(`${key}: ${value} visitors`);
});