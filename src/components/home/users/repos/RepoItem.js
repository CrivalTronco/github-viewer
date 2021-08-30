import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
    return (
        <div className="card mb-4">
            <div className="text-3xl hover:underline">
                <a href={ repo.html_url }>{ repo.name }</a>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoItem
