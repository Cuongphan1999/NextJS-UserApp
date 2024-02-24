import CreateUserFrom from "@/components/navbar/user-components/user-create";
import { revalidateTag } from "next/cache";

//revalidatetag
export default function CreateUserPage(){
    //server actions
    async function createUserAction(newUser){
        'use server'
        let res = await fetch('https://jsonserver-vercel-api.vercel.app/users' , {
            method: "POST",
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        if(!res.ok){
            throw new Error("Couldn't create user")
        }
        //phia server
        let result = await res.json()
        revalidateTag('user-list') //khi them new sp-> revalidate lai sp-> update on page
        console.log('server log:',result)
        return result
    }
    return (
        
        <>
        <CreateUserFrom 
        createUserAction={createUserAction}
        />
        </>
    )
}