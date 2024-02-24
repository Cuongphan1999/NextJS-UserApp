

import ModifyUserForm from "@/components/navbar/user-components/user-modify"



export default async function ModifyUserPage(props) {
    const { params: { userId } } = props
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${userId}`, {
        method: "GET",
        
    })
    let user = await res.json()
    console.log(user)
async function modifyUserAction(modifyUser){
    'use server'
        let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${userId}` , {
            method: "PUT", //cap nhat user put
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(modifyUser)
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
            <ModifyUserForm
                user={user}
                modifyUserAction={modifyUserAction}
            />
        </>
    )
}
///1.47.19