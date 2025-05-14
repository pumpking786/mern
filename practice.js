// // ////////////////////12/////////////////////
// // const func=()=>{
// //     return new Promise((res,rej)=>{
        
        
// //         // res();
// //         // rej();
// //         // return Promise.resolve()
// //         // return Promise.reject()
// // }
// // )}

// // func().then()
// // func().catch()

// // func().then(()=>{}).catch().finally()


// const func1=()=>{
//     return new Promise((res,rej)=>{
//       let  a=false
//         if(a){
//             res("I am fun1")
//         }else{
//             rej("I am rej of fun1")
//         }
//     })
// }
// const func2=()=>{
//     return new Promise((res,rej)=>{
//        let b=false
//         if(b){
//             res("I am fun2")
//         }else{
//             rej("I am rej of fun2")
//         }
//     })
// }
// const func3=()=>{
//     return new Promise((res,rej)=>{
//       let  c=false
//         if(c){
//             res("I am fun3")
//         }else{
//             rej("I am rej of fun3")
//         }
//     })
// }

// // func1().then((res1)=>{
// //     console.log(res1);
// // }).catch((res1)=>{
// //     console.log(res1);
// // })
// // func2().then((res2)=>{
// //     console.log(res2);
// // }).catch((res2)=>{
// //     console.log(res2);
// // })
// // func3().then((res3)=>{
// //     console.log(res3);
// // }).catch((res3)=>{
// //     console.log(res3);
// // })

// func1().then((res)=>{
//     console.log(res);
//     return func2
// }).then((res2)=>{
//     console.log(res2);
//     return func3
// }).then((res3)=>{
//     console.log(res3);
// })
// .catch((rej)=>{
//     console.log(rej);
// })



//////////////////////13/////////////////////
//Async await

// const prom=()=>{
//     return new Promise((res,rej)=>{
//         res([{
//             name:"Test"
//         }])
//     });
// }

const prom=async()=>{
    return [{name:"Test"}]
    throw "Msg"
}

const another=async ()=>{
    try{
        let users=await prom();
    }catch(exception){
        //
    }
}
