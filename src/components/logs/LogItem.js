import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteLog } from '../../action/LogAction';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog }) => {


    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: "log deleted" });
    }

    return (
        <li key={log.id} className="collection-item">
            <div>
                <a href="#edit-log-modal"
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                >{log.message}</a>
                <span>
                    ID <span className="gray-text">#{log.id}</span> last Update By {' '}
                    <span className="black-text">{log.tech}</span>
                    <Moment format="MMMM Do YYYY, h:mm:ss a">
                        {log.date}
                    </Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="material-icons gray-text">
                        delete
                    </i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
}

export default connect(null, { deleteLog })(LogItem);
