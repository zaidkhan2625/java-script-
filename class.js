class car {
    constructor(name , year)
    {
        this.name = name;
        this.year = year;
    }
    eat(){
        console.log("some one is wating");
    }
}
const obj1 = new car("ford" , 2002);
obj1.eat();