// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.greet = function(){
		console.log("Hello, my name is"+ this.name +", I am"+this.age+"years old");
	}
}

function Employee(name, age, jobTitle) extends Person{
	this.jobTitle = jobTitle;
	this.jobGreet = function(){
		console.log("Hello, my name is "+this.name+", I am "+this.age+" years old, and my job title is" this.jobTitle);
	}
}

// Do not change code below this line
// const car = new SportsCar("Ferrari", "Testarossa", 200);
// const two = new Car("suite", "bmw");
let name = new Person("lavina", 23);
let two = new Employee("lavina", 23, "vip");
two.jobGreet();
name.greet();
window.Person = Person;
window.Employee = Employee;
