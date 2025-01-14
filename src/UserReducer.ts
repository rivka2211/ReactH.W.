import { createContext, Dispatch } from "react"
import { data } from "react-router-dom"

export type User = {
    id:number
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    phone: number
}
export const initialUser: User = {
    id:0,
    firstName: "israel",
    lastName: "israeli",
    address: "",
    email: "aaa@bbb.com",
    password: "12345",
    phone: 12345,
}


export type Action = {
    type: 'ADD' | 'REMOVE' | 'GET' | 'UPDATE',
    data: Partial<User> | number
}

export const UserContext = createContext<{ user: User; userDispatch: Dispatch<Action>; }>({
    user: initialUser,
    userDispatch: () => { }
});

const URL="http://localhost:3000/api/user/"

export const UserReducer =async (state: User, action: Action): Promise<User> => {
    const { id,firstName, lastName, email, password, address, phone } = action.data as Partial<User>
    switch (action.type) {
        case 'ADD':
                       const newUser={
                        id:id||0,
                        firstName:firstName||" ",
                        lastName:lastName||" ",
                        email:email||" ",
                        password:password||" ",
                        address:address||" ",
                        phone:phone||0 }
                        try{
                            const res=await fetch(URL,{
                            method:"POST",
                            body:JSON.stringify(newUser),
                            headers:{"user-id":newUser.id.toString(),"Content-Type": "application/json"}
                        })
                        console.log(await res.json);
                        }catch (e) {
                            console.error(e);
                          }
                     return newUser
        case 'UPDATE':
                state.firstName = firstName || state.firstName,
                state.lastName = lastName || state.lastName,
                state.email = email || state.email,
                state.password = password || state.password,
                state.address = address || state.address,
                state.phone = phone || state.phone
            console.log("in UserReducer>update");
            console.log(state);
            return state

        default://get
        const myId=action.data
        try{
            const res=await fetch(`${URL}${myId}`,{
            method:"GET",
            // body:JSON.stringify(newUser),
            // headers:{"user-id":newUser.id.toString(),"Content-Type": "application/json"}
        })
        console.log(await res.json);
        // return res.formData
        // state= JSON.parse(res.)
        }catch (e) {
            console.error(e);
        }
         
        return state
    }
}