// q1 . Create a Car class that has brand and model properties. Use a constructor to initialize them.
//  Create a method getDetails() that returns the full name of the car.

// class Car {
//     constructor(brand , model){
//         this.brand = brand
//         this.model = model

//     }

//     getDetails(brand , model){

//         document.writeln(this.brand + " "+ this.model)

//     }

// }
// const c1 = new Car("BMW" ,"Q5");
// c1.getDetails();



//Q2 .Create a Person class that stores name and age.
//  Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.

// class Person {

//     name;
//     #age;

  
// setAge(name , age){

//     this.name = name
//     this.#age = age

// }

// getAge(){
//     document.writeln(this.name + " " + this.#age)
// }

// }
// const p1 = new Person();
// p1.setAge("yatin" , 20);
// p1.getAge();


// q3 .Create a User class where the password should be private. Add methods to changePassword() and checkPassword().


// class User{
//     #password = 12444;

//     changePassword(newpassword){
//         this.#password = newpassword

//     }

//     checkPassword(){
//         document.writeln("your password is :" , this.#password)
//     }
// }
// const u1 = new User();
// u1.changePassword(12345)
// u1.checkPassword();


// Q4. Create a Calculator class that hides the internal result property
//  (e.g., using #result). Add methods to add(num), subtract(num), and getResult().


// class Calculator{
//     #result
//     constructor(num1,num2){
//         this.num1 = num1
//         this.num2 = num2

//     }

//     add(num1 , num2){
//          this.#result = this.num1 + this.num2
//          document.writeln("Addition is ", this.#result)
        
//     }

//       subtract(num1 , num2){
//          this.#result = this.num1 - this.num2
//             document.writeln("subtraction is ", this.#result)
        
//     }
// }
// const c = new Calculator(10 , 20)
// c.add()
// c.subtract()

// Q5 . Create a BankAccount class where balance is private. Add deposit(amount), withdraw(amount), and getBalance() methods.
//  Try to access balance directly (it should not work).


// class BankAccount {
//     #balance
//     constructor(balance){
//         this.#balance = balance
        
//     }
    

//     deposit(amount){
//         this.amount = amount
//        document.writeln(" Balance after deposit   ",this.#balance = this.#balance + this.amount)
//     }

//      withdraw(amount){
//           this.amount = amount
//        document.writeln("<br> Balance after withdraw",this.#balance = this.#balance - this.amount)

//     }

//     getBalance(){
//         document.writeln(" <br>your currant balance",this.#balance)
//     }
// }
// const b = new BankAccount(10000)
// b.deposit(2000);
// b.withdraw(5000);
// b.getBalance()



//Q6 .Create a Vehicle class with a method move().
//  Then create a Bike class that extends Vehicle. Create an object of Bike and call the move() method.


// class Vehicle {

//     constructor(bike , speed){
//         this.bike = bike 
//         this.speed = speed
        
//     }

//     move(){
//         document.writeln("bike :" + this.bike)
//     }
// }

// class Bike extends Vehicle {
//   constructor(bike,speed,distance){
//     super(bike,speed)
//     this.distance = distance
    
//   }

//     timecheck()
//     {
//         document.writeln(" cover" ,this.distance , "km", "  in " ," ", this.distance/this.speed, " hour" )
//     }

// }
// const v = new  Bike("rr310" , 150 , 300 )
// v.move()
// v.timecheck()

// Q7 . Create a Person class with a method greet(). 
// Create a Student class that extends Person and adds a method study(). Use both methods on a Student object.


//  class Person{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         document.writeln("your name is:",this.name,"<br>");
//     }
// }
// class Student extends Person{
//     constructor(name,subject){
//         super(name);
//         this.subject=subject;
//     }
//     study(){
//         document.writeln("subject is:",this.subject,"<br>");
//     }
// }
// const stu=new Student("Yatin","Javascript");
// stu.greet();
// stu.study();



//Q8.Create a Bird class with a method makeSound(). 
//Then create Sparrow and Parrot classes that override the makeSound() method with their unique sounds.

class Bird{
    makeSound(){
        document.writeln("Some sounds of bird:");
    }
}

class Sparrow extends Bird{
    makeSound(){
        document.writeln("chirp chirp <br>");
    }
}

class Parrot extends Bird{
    makeSound(){
        document.writeln("Squawks squawks");
    }
}


const sparrow=new Sparrow();
sparrow.makeSound();

const parrot= new Parrot();
parrot.makeSound();

