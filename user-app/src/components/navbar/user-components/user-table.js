'use client'

import Link from "next/link"

export default function UserTable({userList}) {
    return (
        <>
        <h1>User Page</h1>
        <Link href={'/users/create'} className="btn btn-sm btn-outline-secondary">
            Create User
        </Link>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Email</th>
                    <th>UserName</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList?.map((user) =>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <Link 
                                href={`users/modify/${user.id}`}
                                className="btn btn-sm btn-primary"
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}