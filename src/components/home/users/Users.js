import React, { useContext } from 'react'
import UserItem from './UserItem';
import Loading from '../../loading/Loading'

import GithubContext from '../../../context/github/githubContext'

const Users = () => {

    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    if (loading) {
        return <Loading />
    }
    else {
        return (
            <div className="grid gap-4 p-4 h-uch overflow-y-auto grid-cols-10 grid-row-height md:grid-cols-5">
                { users.map( user => (
                    <UserItem key={ user.id } user={ user } />
                ))}
            </div>
        )
    }
}

export default Users
