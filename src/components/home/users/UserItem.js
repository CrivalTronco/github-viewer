import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ( { user: { login, avatar_url } } ) => {
    return (
        <div className="card text-center">
            <img src={ avatar_url } alt="Github Avatar" className="rounded-full w-px60 m-auto"/>
            <div className="text-lg my-3">{ login }</div>

            <div>
                <Link to={`/user/${login}`} className="btn my-1">
                    More
                </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
