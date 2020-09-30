const r =Number(prompt("Enter the circle radius:"))

//// TODO: create the circle object here
const circle = {
    radius: Number ,
    circumference:  1 ,
    area: 1
};

// formulas 
circle.circumference *= 2 * Math.PI * Number ;
circle.area *= Math.PI * Number * Number ;

console.log(`Its circumference is ${circle.circumference()}`);

console.log(`Its area is ${circle.area()}`);