import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLogs } from '../../action/LogAction';
import PropTypes from 'prop-types';

const AddLogModal = ({ addLogs }) => {


    const [message, setMessage] = useState('');
    const [attention, setattention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: "Please Enter a message and tech" });
        }
        else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }
            addLogs(newLog);
            setMessage('');
            M.toast({ html: "success add new log" });
            setTech('');
            setattention(false);
        }


    }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-fuild">
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                        <input
                            type="text"
                            name="message"
                            value={message}
                            placeholder="Log Message"
                            onChange={e => setMessage(e.target.value)}
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="input-fuild">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>Select Technical</option>
                            <option value='John Doe'>John Doe</option>
                            <option value='Sam Smit'>Sam Smit</option>
                            <option value='Sara Wilson'>Sara Wilson</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-fuild">

                        <label>
                            <input
                                type="checkbox"
                                name="message"
                                value={message}
                                className="filled-in"
                                checked={attention}
                                onChange={e => setattention(!attention)}
                            />
                            <span>Need Attention</span>
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
AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired,
}
const modalStyle = {
    width: '75%',
    height: '75%'
}
export default connect(null, { addLogs })(AddLogModal);
