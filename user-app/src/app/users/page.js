import UserTable from "@/components/navbar/user-components/user-table"

export default async function UsersPage(){
    //phia server component
    let res = await fetch('https://jsonserver-vercel-api.vercel.app/users',{
        method: 'GET', //cap nhat user create
        cache: 'no-cache',
        next: { //revalidateTag in Next
            tags: ['user-list'] //update lai luoi user list
        }
    })
    let userList = await res.json()
    //console.log('server',userList)
    return (
        <>
            <UserTable userList={userList}/>
        </>
    )
}