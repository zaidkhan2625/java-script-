// function along with it's lexcial scope bundel together form a closures
// when a function  written inside the function maintain it's lexcial scope 
// it known as closures 

// lexcial scope :- it's a ability to a function scope to access the var from it's parent scope
// we call the child function to be laxcial bounded by that of the parent class 

// when we form a closuers function and run it then it try to access the vairable inside id parent 
//function and after that in the gloable scope(lexcial scope)
// example 

// function x()
// {
//     var a= 10;
//     function y(){
//         console.log(a);

//     }
//     y();
// }
// x();

// if we return the function y inside x and then store the function in a var it will writen the whole y function
// function x()
// {
//     var a= 10;
//     function y(){
//         console.log(a);

//     }
//     return y;
// }
// var z = x();
//console.log(z);

// after return the function x it will be vanish from call stack 
// but the closuers maintain it's lexcial scope 
// //and when we call z the it will return value of a
// z();

// if we declair nested function then it will  maintain it's lexical scope order and form the closuers 
//and if we return any funaction so the function will be out from the call stack but it maintain oit's lexcial scope

function x()
{
    var a= 10;
    function y(){
        console.log(a);

    }
    a=100;
    y();
}
x();
// we decalir the value after function y but it will return the updated value beacus it refer the 
//refrence of the variable 

