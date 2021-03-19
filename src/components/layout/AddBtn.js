import React from 'react';


const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                <i className="larg material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#tech-list-modal" className="btn-floating btn-large green modal-trigger">
                        <i className="larg material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating btn-large red modal-trigger">
                        <i className="larg material-icons">person_add</i>
                      person
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn
