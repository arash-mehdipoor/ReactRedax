import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const LogItem = ({ log }) => {
    return (
        <li key={log.id} className="collection-item">
            <div>
                <a href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                >{log.message}</a>
                <p>
                    ID <span className="gray-text">#{log.id}</span> last Update By {' '}
                    <span className="black-text">{log.tech}</span>
                    <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {log.date}
                    </Moment>
                </p>
                <a className="secondary-content">
                    <i className="material-icons gray-text">
                        delete

                    </i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem
