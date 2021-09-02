import React, {Fragment} from 'react'
import Users from './users/Users'

//components
import Search from './search/Search'

const Home = () => {

    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home
