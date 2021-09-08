import React, { Fragment, useContext, useEffect } from 'react'
import Loading from '../../loading/Loading'
import { Link } from 'react-router-dom'
import Repos from '../users/repos/Repos'
import GithubContext from '../../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [])

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
    } = user;

    if (loading) {
        return <Loading />
    }
    else {
        return (
            <Fragment>
                <div className="flex justify-between items-center p-4">
                    <Link to="/" className="btn hover:bg-gray-400"> 
                        Back to search
                    </Link>
                </div>
                <div className="px-24 py-4 md:px-8 md:py-8">
                    <div className="card grid grid-cols-2">
                        <div className="justify-center items-center text-center m-auto">
                            <img src={ avatar_url } alt="" className="w-52 rounded m-auto"/>
                            <div className="text-lg mt-2">
                                { name }
                            </div>
                            <div className="mt-2">
                                { location && (
                                    <Fragment>
                                        Location: { location }
                                    </Fragment>
                                ) }
                            </div>
                        </div>
                        <div>
                            { bio && (
                                <Fragment>
                                    <div className="text-lg font-semibold">
                                        Bio
                                    </div>
                                    <div>
                                        { bio }
                                    </div>
                                </Fragment>
                            ) }
                            <div className="my-6">
                                <a href={html_url} className='btn hover:bg-gray-400 my-2'>
                                    Visit Github Profile
                                </a>
                            </div>
                            <ul>
                                <li>
                                    { login && (
                                        <Fragment>
                                            <strong>Username: </strong> { login }
                                        </Fragment>
                                    ) }
                                </li>
                                <li>
                                    { company && (
                                        <Fragment>
                                            <strong>Company: </strong> { company }
                                        </Fragment>
                                    ) }
                                </li>
                                <li>
                                    { blog && (
                                        <Fragment>
                                            <strong>Website: </strong> { blog }
                                        </Fragment>
                                    ) }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-24 py-4 md:px-8 md:py-8">
                    <div className="card text-center">
                        <span className="mx-2 bg-red-900 p-2 rounded">Followers: {followers}</span>
                        <span className="mx-2 bg-yellow-900 p-2 rounded">Following: {following}</span>
                        <span className="mx-2 bg-blue-900 p-2 rounded">Public Repos: {public_repos}</span>
                        <span className="mx-2 bg-purple-900 p-2 rounded">Public Gists: {public_gists}</span>
                    </div>
                </div>
                <div className="px-24 py-4 md:px-8 md:py-8">
                    <Repos repos={ repos } />
                </div>
            </Fragment>
        )
    }
}

export default User
