/////////////16//////////
// interface Name{
//     getName()
// }
// trait Name{
//     getName(){
//         return this.name
//     }
// }
class User{
    constructor(){
        console.log("User");
    }
}

class Admin extends User{
    constructor(){
        super()
        console.log("Admin");
    }
}
const admin_obj=new Admin()
