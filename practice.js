//////////////////////////////8///////////////////////////

// for(let i=1; i<=5;i++){
//     row=''
//     for (let j = 1; j <= 5; j++) { // Inner loop for numbers in each row
       
//             row += j+ "   ";
//         }
//         console.log(row); // Print the constructed row
// }


// for(let i=1; i<=5;i++){
//     row=''    
//     for (let j = 1; j <= i; j++) { // Inner loop for numbers in each row
       
//             row += j+ "   ";
//         }
//         console.log(row); // Print the constructed row
// }

// let product={
//     reviews:[
//         {
//             rate: 5,
//             cname: "Kagaj",
//             price: 2055,
//             address: "ktm",
//             branch: "canva",
//         }
//     ]
// }

// for(let obj of product.reviews){

//     for(let digit of obj.price.toString()){
//         console.log(digit);
        
//     }
// }

//function

// function addition(a,b){
//     c=a+b
//     return c
// }
// result=addition(1,2)
// console.log(result);

// arr=[1,2,3,4,5]

// function addArray(a){
//     let sum=0

//     for(let obj of a){
//         sum+=obj
//     }
//     return sum
// }
// result=addArray(arr)
// console.log(result);






///////////////////////9////////////////////

//All revise and basic function



///////////////// Revision 1//////////////////////
//////////////////Revision 2//////////////////////
//////////////////Revision 3//////////////////////
//////////////////Revision 4//////////////////////
//////////////////Revision 5//////////////////////
//////////////////Revision 6//////////////////////
//////////////////Revision 7//////////////////////
//////////////////Revision 8//////////////////////
//////////////////Revision 9//////////////////////


////////////////10////////////////////
// const user={
//     name:"Pramit",
//     getName(){
//         return this.name
//     }
// }

// console.log( user.getName());

// const some=()=>{
//     console.log("Some");
//     const none=()=>{
//         console.log("SoimeSome");
//     }
//     none()
// }
// some()

// const some=(cb)=>{
//     console.log("I am inside doSomething");
//     cb()
// }

// const none=()=>{
//     console.log("This is none");
// }
// some(none)

// let products= [
//     {
//             rate: 5,
//             cname: "Kagaj",
//             price: 2055,
//             address: "ktm",
//             branch: "canva",
//         },
//     {
//             rate: 5,
//             cname: "Kagaj",
//             price: 2055,
//             address: "pkr",
//             branch: "canva",
//         },
//     {
//             rate: 5,
//             cname: "Kagaj",
//             price: 2055,
//             address: "ktm",
//             branch: "canva",
//         }
//     ]

    // products.map((product)=>{
    //     if(product.address==="ktm"){
    //         ktm_product.push(product)
    //     }
    // })

    // ktm_product=products.filter((product)=>{return product.address==="ktm"})

    // console.log(ktm_product);

    // const twosec=()=>{
    //     console.log("After 2 seconds");
    // }

    // const onesec=()=>{
    //     console.log("After 1 seconds");
    // }

    // setTimeout(()=>{
    //     twosec()
    // },2000)

    // setTimeout(()=>{
    //     onesec()
    // },1000)

    // setTimeout(twosec,2000)

    // console.log("Instant 1st");
    
    // setTimeout(()=>{
    //     onesec()

    //     setTimeout(()=>{
    //         twosec()
    //     },2000)
    // },1000)



    //////////////////11////////////////////////

// let admin=()=>{
//    console.log("authorized");
   
// }

// let seller=()=>{
//     console.log("less authorized");
    
// }
// let login=(cb)=>{
//  let user={
//         role:"admin"
//     }
//     cb(user)
// }
// login(admin)
// login(seller)


//html simple button onclick=clickme()

// counter=0
// const clickMe=()=>{
//     counter++;
//     document.getElementById('clickMe').innerHTML=counter
// }
