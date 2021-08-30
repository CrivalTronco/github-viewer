import React, { useContext } from 'react'
import UserItem from './UserItem';

import GithubContext from '../../../context/github/githubContext'

const Users = () => {

    const githubContext = useContext(GithubContext);
    const { users } = githubContext;

    return (
        <div className="grid gap-4 p-4 h-uch overflow-y-auto grid-cols-3 md:grid-cols-10">
            { users.map( user => (
                <UserItem key={ user.id } user={ user } />
            ))}
        </div>
    )
}

export default Users
