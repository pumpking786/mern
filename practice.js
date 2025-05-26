
/////////////////13//////////////////

// const ram=async ()=>{
//     // return //resolve
//     // throw //reject
// }

///////////////14///////////////

// class User{
//     name;
//     address;
//     price;

//     getName(){
//         return this.name
//     }
//     setName=function (_name){
//         this.name=_name
//     }
//     setAddress=(_address)=>{
//         this.address=_address
//     }
// }

//////////////15/////////////////

/////////////////////////15/////////////////////////
class Man{
    name;
    class;
    dob;
    age;

    constructor(_name,_class,_dob){
    this.name=_name
    this.class=_class
    this.dob=_dob
    this.getAge()
}

getAge=()=>{
    let nowdate=new Date()
    // console.log(nowdate);
    this.dob=new Date(this.dob)
    let age=Math.ceil((nowdate-this.dob)/(1000 * 60 * 60 * 24 * 365.25))
    this.age=age
    console.log(age);

}

}
const user_obj=new Man("Sam","2","1991-07-01")

///////////////////BREAK////////////////////
////////////////INHERITANCE/////////////////

class Person{
    name;
    age;
    class;
    role;

    login=()=>{

    }
}

class Customer extends Person{
    role='customer';
}

const customer_obj=new Customer()

class Admin extends Person{
    role='admin';
}
const admin_obj=new Admin()
