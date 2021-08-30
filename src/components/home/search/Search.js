import React, { useState, useContext } from 'react'

import GithubContext from '../../../context/github/githubContext'

const Search = () => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {

        }
        else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = e => setText(e.target.value)

    return (
        <section className="flex justify-between items-center">
            <form onSubmit={onSubmit} className="p-4">
                <input type="text" placeholder="Search users..." className="w-96" value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn mx-2 cursor-pointer hover:bg-gray-400"/>
            </form>
            <button className="btn mx-4 hover:bg-gray-400 " onClick={githubContext.clearUsers}>Clear Search Result</button>
        </section>
    )
}

export default Search
