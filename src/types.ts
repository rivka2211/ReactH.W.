export type User = {
    id: number,
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

export type Recipe = {
    id: number,
    title: string,
    description: string,
    authorId: number,
    ingredients: string[],
    instructions: string,
    image: string,
}
