import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../action/TechAction';
const AddTechModal = ({ addTech }) => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: "Please Enter a message and tech" });
        }
        else {
            addTech({
                firstName,
                lastName
            });
            M.toast({ html: "success new tech" });
            setFirstName('');
            setLastName('');
        }
    }
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Enter System tech</h4>
                <div className="row">
                    <div className="input-fuild">
                        <label htmlFor="firstName" className="active">
                            firstName
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="firstName"
                            onChange={e => setFirstName(e.target.value)}
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="input-fuild">
                        <label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                className="filled-in"
                                checked={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                            <span>Need lastName</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn">Enter</a>
            </div>
        </div>
    )
}
export default connect(null, { addTech })(AddTechModal);
