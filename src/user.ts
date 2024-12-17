export type User={
   firstName:string,
   lastName:string,
   email:string,
   password:string,
   address:string,
   phon:number
}

type Action = {
    type: 'ADD' | 'REMOVE'|'GET'|'UPDATE',
    data: Partial<User> | number
}

export const userReducer=(state:User[],action:Action):User[]=>{
const{firstName,lastName,email,password,address,phon}=action.data as Partial<User>
switch (action.type) {
    case 'ADD':
        return[
            ...state,{firstName:firstName||" ",
                    lastName:lastName||" ",
                    email:email||" ",
                    password:password||" ",
                    address:address||" ",
                    phon:phon||0
            }
        ]
    case 'UPDATE':
        // const{firstName ,lastName ,email ,password ,address ,phon }=action.data as Partial<User>
        let myUser= state.filter(u=>u.email==email )[0]
        myUser.firstName=firstName|| myUser.firstName ,
        myUser.lastName=lastName||myUser.lastName ,
        myUser.email=email||myUser.email ,
        myUser.password=password|| myUser.password ,
        myUser.address=address||myUser.address ,
        myUser.phon=phon ||myUser.phon
        return [myUser]
        
    default://get
        const myEmail=action.data as string
        return state.filter(u=>u.email==myEmail)
}
}