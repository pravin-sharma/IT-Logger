import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux'
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types'

const AddLogModal = ({addLog}) => {

    //add states
    const [message, setMessage] = useState("");
    const [tech, setTech] = useState("");
    const [attention, setAttention] = useState(false);

    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        if (message && tech) {

            //TODO: get tech name by id, then add the log

            let newLog = {
                message,
                tech,
                attention,
                date: new Date()
            }
            addLog(newLog);

            M.toast({ html: `Log Added`, classes: 'rounded green' })
            //clear form
            setMessage("");
            setTech("");
            setAttention(false);
        } else {
            M.toast({ html: 'Fill Message and Technician name', classes: 'rounded red' })
        }
    }

    return (
        <div id='add-log-modal' className='modal'>
            <form>
                <h3 className='center' style={{ marginTop: '1rem' }}>Add Log</h3>
                
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label htmlFor="icon_prefix">Message</label>
                    </div>
                </div>

                <div className="row">
                <label htmlFor='tech' className='col s6'>Technician Name</label>
                </div>
                <div className="row">
                    <div className="input-field col s6" style={{marginTop:'-1rem'}}>
                        <select name="tech" value={tech} className='browser-default' onChange={(e) => setTech(e.target.value)}>
                            <option value="" disabled>Choose your option</option>
                            <option value="1">John Doe</option>
                            <option value="2">Sam Smith</option>
                            <option value="3">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <div style={{ marginTop: '-2rem' }}>

                            <label>
                                <input type="checkbox" checked={attention} onChange={() => setAttention(!attention)} />
                                <span>Attention Need</span>
                            </label>
                        </div>
                    </div>

                </div>
                <button className="btn waves-effect waves-light right modal-close" style={{ margin: '0 1rem 1rem 0' }} onClick={onSubmit}>Add
                    <i className="material-icons right">add</i>
                </button>
            </form>
        </div>
    )
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}

export default connect(null, {addLog})(AddLogModal);
