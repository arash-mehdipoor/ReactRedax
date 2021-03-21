import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteTech } from '../../action/TechAction';
const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
    const onDelete = () => {
        deleteTech(id);
        M.toast({ html: `delete ${firstName}` })
    }
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}
TechItem.propTypes = {
    deleteTech: PropTypes.func.isRequired
}
export default connect(null, { deleteTech })(TechItem)
