import React, { useState, useContext } from 'react'
import GithubContext from '../../../context/github/githubContext'
import AlertContext from '../../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        }
        else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = e => setText(e.target.value)

    return (
        <div className="flex justify-between items-center">
            <form onSubmit={onSubmit} className="p-4">
                <input type="text" placeholder="Search users..." className="w-96" value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn mx-2 cursor-pointer hover:bg-gray-400"/>
            </form>
            <button className="btn mx-4 hover:bg-gray-400 " onClick={githubContext.clearUsers}>Clear Search Result</button>
        </div>
    )
}

export default Search
