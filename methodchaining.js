class calculator{
    constructor(data){
    this.data = 0;
}
    add(value)
    {
        this.data=this.data+value;
        return this;
    }
    sub(value)
    {
        this.data = this.data-value;
        return this;
    }
    mul(value)
    {
        this.data = this.data*value;
        return this;
    }
    print (){
        return this.data;
    }
}
let call = new calculator();
console.log(call.add(20).sub(10).mul(10).print());