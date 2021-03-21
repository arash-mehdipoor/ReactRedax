import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../action/LogAction';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectItemList from '../tech/TechSelectItemList';

const EditLogModal = ({ updateLog, current }) => {


    const [message, setMessage] = useState('');
    const [attention, setattention] = useState(false);
    const [tech, setTech] = useState('');
    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setattention(current.attention);
            setTech(current.tech);
        }
    }, [current]);


    const onSubmit = (e) => {
        if (message === '' || tech === '') {
            M.toast({ html: "Please Enter a message and tech" });
        }
        else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            };

            updateLog(updLog);
            M.toast({ html: `update ${tech}` });
            setMessage('');
            setTech('');
            setattention(false);
        }
    }
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
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
                            <TechSelectItemList />
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
EditLogModal.propTypes = {
    cuurent: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}
const modalStyle = {
    width: '75%',
    height: '75%'
}
const mapStateToProps = state => ({
    current: state.log.current
})
export default connect(mapStateToProps, { updateLog })(EditLogModal);
