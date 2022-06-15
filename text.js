var x = 20,
    y = 10,
    z = 100,
    firstName = "Mostafa",
    lastName = " Mohamed";


//alert("Hello From Head");
document.getElementById("test").innerHTML = firstName + lastName;
document.getElementsByClassName("test1").item = x + z;
if (x + z === 120) {
    console.log("good");
} else {
    console.log("bad");
}
var temp =120,
    
    na=(temp > 100)? console.log("red"):console.log("blue");
var temp = 20,
    nb = (temp > 100)? "red":"blue";
var color,flag = 1;
var favortColor = prompt("your favort Color is\ 1)RED 2)BLUE");
switch(favortColor)
    {
        case "1":
            color = "RED";
            break;
        case "2":
            color = "Blue";
            break;
        case "3":
            color = "black";
            break;
        case "4":
            color = "white";
            break;
        default:
            flag = 0;
            alert("Your Choice is wrong");
            break;
    }
if(flag)
    document.write(color+"<br>");

do{
    var respose=prompt("enter your name :");
    document.write(respose+"<br>");
}while(!respose);

var z = 50;
function add(x=0,y=0)
{
    var z = 10;
    return x*y;
}
var STRING = "MYSTRING";
document.write(STRING+"<br>");
console.log(typeof(STRING));
var mystring = new String("Hello JavaScriot World !!<br>");
var str = String("my new string from javascript !!<br>");
document.write(str);
//document.write(str.charAt(str.length-1));
console.log(typeof(str));
//console.log(mystring);
document.write(mystring);
console.log(typeof(mystring));
console.log(mystring.indexOf("J"));
console.log(mystring.indexOf("W"));
console.log(mystring.lastIndexOf("w"));
console.log(mystring.substring(5,14));
console.log(mystring.replace(/Sc/g,"_"));


var myArr=[1,2,3,,,,7,85,[1,2,5,7],"ggg",'h'];
console.log(myArr[0]);
console.log(myArr);
console.log(typeof(myArr[10]));
console.log(myArr[6]);

var colorArrar = new Array();
colorArrar[0]="red";
colorArrar[1]="blue";
colorArrar[4]="black";
var newArr = [2,3,6,9,1,8,5,7,11,12,13,22,55,33];

console.log(colorArrar.length);
console.log(colorArrar[2]);
//var b = prompt();
//colorArrar[3]=b;
//console.log(colorArrar[3]);
console.log(myArr.join("**"));
console.log(myArr.pop());
console.log(myArr.push("mostafa"));
console.log(myArr.sort());
console.log(myArr.sort());
console.log(newArr.sort(function (a,b) {return a-b}));


var myDate = new Date();
console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.setMonth(10));
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());



/*onerror = errorHandle;

function errorHandle(msg,url,l,col,err){
    
    
    //
    //
    console.log(meg);
    console.log(url);
    console.log(l);
    return false;
    
}*/


var myError = new Error("custom error");
try{
var repose1 = parseInt(prompt("enter number between 10 and 20 "));
if (repose1<10)
    throw "less than expected";
else if (repose1>20)
    throw RangeError = "out of reange";
else 
    alert("value within acepted range");

console.log("inside try block");
}

catch(e){
    if(e instanceof RangeError){
        console.log("this is Range Error");
        e.message;
        e.name;
    }
    else if (e == "less than expected"){
        console.log("low value");
    }
    //console.log("inside catch block");
}

function outer() {
    var a = 5;
 
    function inner() { //closure 
        var b = 10;
        alert(a + b);
    }
    inner();
    return inner;
}
outer(); 


var ns = document.getElementById("inner");
document.write(ns.innerHTML);
document.write(ns.textContent);
ns = document.getElementById("inner").nodeValue="string <em>innerHtml</em> and <strong>innerText</strong>";

console.log("done");
 
let myFun = function (a,b){
    return a+b;
}
myFun(4,9);//13

var arr = [1,45,49,56,function(x,y) {return x*y;},"mostafa"];


console.log(arr[4](4,7));

function AddingAditionalData(x,y,z){
    return function (){
        return x+y+z
    };
}
var result = AddingAditionalData(1,2,3);

console.log(result());

// creation obj object using constructor
var obj = new Object();
obj.namePorp="JavaScrip";
obj.typeProp="scripting language";

//litrall object    
var myobj = {};
myobj.objName = "custom object";
myobj.objAge = 10;
myobj.skills = ["web","programming"];
myobj.display = function (){return "this is a object function"};

//subscript notation

myobj["adress"] = "123 st.";

var loc = "location";

myobj[loc]="assiut";

console.log(myobj.adress);
console.log(myobj.display());
console.log(myobj.objAge);
console.log(myobj["objName"]);
console.log(obj.namePorp);
console.log(myobj.location);
console.log(myobj[loc]);

var emp1 = {};
var emp2 = {};
var emp3 = {};
var emp4 = {};
var emp5 = {};

//factory method
function employee (na,dept,sal){
    return{
        empName:na,
        empDept:dept,
        empSalary:sal,
        empInfo: function(){
            return this.empName + " works in " + this.empDept + " with salary :" + this.empSalary;
    }
}
}

var emp = employee("mostafa","software",7000);
console.log(emp.empName);
console.log(emp.empDept);
console.log(emp.empSalary);
console.log(emp.empInfo());

//constructor method

function Empolyee(name,dept,sal){
    this.empName=name;
    this.empDept=dept;
    this.empSalary=sal;
    
    //return
}

var mp = new Empolyee("mona","hardware",6000);
console.log(mp.empName);
console.log(mp.empDept);
console.log(mp.empSalary);

console.log(emp.hasOwnProperty("empName"));
console.log(mp.toString());
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.keys(mp));


//delete mp.empName;
//console.log(mp.empName);

for (var i in mp)
    {
        console.log(i + ":" +mp[i]);
    }

var name = "MOSTAFA";
var age = 23;
var sal = 10000;
var dept = "123 st.";
var objj ={};
/*Object.defineProperty(objj,"name",{
    value:name,
    writable:false,
    configurable:false
})*/

Object.defineProperties(objj,{
    //Data descriptor
    name:{
        value:name,
        writable:true,
        configurable:true,
        enumerable:true,
        
    },
    age:{
    value:age,
    writable:true,
    enumerable:true,
},
    salary:{
        value:sal,
        writable:true,
        enumerable:true
    },
    //accessor descriptor
    dept:{
        get:function(){return dept;},
        set:function(val){dept = val;},
    },
    display:{
        get:function(){
            return function(){
                return "my name is "+objj.name+" ,my age is "+objj.age+" ,and i lives in "+objj.dept;
            }
        }
    }

});
console.log(objj.name);
objj.name = "ALI";
console.log(objj.name);
console.log(objj.age);
console.log(objj.salary);
console.log(objj.dept);
objj.dept = "asd st.";
console.log(objj.dept);
var info = objj.display();
console.log(info);

//IIFE(immediately invoked function Expression)
(function (){console.log(110)})();

var fun = function (){
    console.log("length:" + arguments.length)
    var sum = 0;
    for(var i = 0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum;
} 
console.log(fun(5,9));
console.log(fun(5,9,6,9,7,4,5,3));
console.log(fun(5,9,5,7,1,1,2));


var str = "this is JavaScript";
console.log(str);

var arr = [1,2,5,8,"abc"];

//function borrowing using apply

console.log(arr.join.apply(str,["*"]));

//function borrowing using apply

console.log(arr.join.call(str,"*"));

//binding 
[]
var result = [].join.bind(str , "__");

console.log(result());



