import { createContext, Dispatch } from "react";
import axios from "axios";
import {User} from "./types";
import { initialUser } from "./types";

// export type User = {
//     id: number,
//     firstName: string,
//     lastName: string,
//     email: string,
//     password: string,
//     address: string,
//     phone: number
// }
// export const initialUser: User = {
//     id:0,
//     firstName: "israel",
//     lastName: "israeli",
//     address: "",
//     email: "aaa@bbb.com",
//     password: "12345",
//     phone: 12345,
// }


export type Action = {
    type: 'ADD' | 'REMOVE' | 'GET' | 'UPDATE',
    data: Partial<User> | number
}
// export var UserContext: React.Context<{
//     user: User;
//     userDispatch: Dispatch<Action>;
// }>
export const UserContext = createContext<{ user: User; userDispatch: Dispatch<Action>; }>({
    user: initialUser,
    userDispatch: (): User | null => {
        return null;
    }
});

const URL = "http://localhost:3000/api/user/"

export const UserReducer = async (state: User, action: Action): Promise<User> => {
    let newUser: User = initialUser;
    const { id, firstName, lastName, email, password, address, phone } = action.data as Partial<User>
    switch (action.type) {
        case 'ADD':
            newUser = {
                id: id ||Date.now(),
                firstName: firstName || " ",
                lastName: lastName || " ",
                email: email || " ",
                password: password || " ",
                address: address || " ",
                phone: phone || 0
            }
            try {
                //change using with "fetch to using with "axsios"
                const res = await axios.post(`${URL}/register`, {
                    body: JSON.stringify(newUser),
                    // headers: { "user-id": newUser.id.toString(), "Content-Type": "application/json" }
                })
                console.log(res.data);
                console.log(res.data.id);
                newUser.id = res.data.id
            } catch (e: any) {
                if (e.status === 400 || e.status === 401)
                    console.error(e.response.data.message);
                console.error(e);
            }
            return newUser
        case 'UPDATE':
            newUser = {
                id: state.id,
                firstName: firstName || state.firstName,
                lastName: lastName || state.lastName,
                email: email || state.email,
                password: password || state.password,
                address: address || state.address,
                phone: phone || state.phone
            }
            console.log("in UserReducer>update");
            console.log(state);
            try {
                //change using with "fetch to using with "axsios"
                const res = await axios.put(URL, {
                    // method: "PUT",
                    body: JSON.stringify(newUser),
                    // headers: { "user-id": newUser.id.toString(), "Content-Type": "application/json" }
                })
                console.log(res.data);
                newUser.id = res.data.id
            } catch (e:any) {
                if (e.status === 404 ){
                    console.error(e.response.data.message);
                    console.error("user not found,try to add user");
                }
                console.error(e);
            }
            return newUser
            
        default://get
            const myId = action.data

            try {
                const res = await fetch(`${URL}/${myId}`, {
                    method: "GET",
                    // body:JSON.stringify(newUser),
                    // headers:{"user-id":newUser.id.toString(),"Content-Type": "application/json"}
                })
                console.log(res.json);
                state = JSON.parse(await res.json());
                // return state;
            } catch (e) {
                console.error(e);
            }
            return state
    }
}