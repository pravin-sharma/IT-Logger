import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ current, updateLog }) => {

    //add states
    const [message, setMessage] = useState("");
    const [tech, setTech] = useState("");
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if (current !== null) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
    }, [current])

    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        if (message && tech) {
            const updatedLog = {
                id: current.id,
                message: message,
                tech: tech,
                attention: attention,
                date: current.date
            }
            updateLog(updatedLog);
            M.toast({ html: 'Log Updated', classes: 'rounded green' })            
        } else {
            M.toast({ html: 'Fill Message and Technician name', classes: 'rounded red' })
        }
    }

    return (
        <div id='edit-log-modal' className='modal'>
            <form>
                <h3 className='center' style={{ marginTop: '1rem' }}>Update Log</h3>

                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <label htmlFor='tech' className='col s6'>Technician Name</label>
                </div>
                <div className="row">
                    <div className="input-field col s6" style={{ marginTop: '-1rem' }}>
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
                <button className="btn waves-effect waves-light right modal-close" style={{ margin: '0 1rem 1rem 0' }} onClick={onSubmit}>Update
                    <i className="material-icons right">update</i>
                </button>
            </form>
        </div>
    )
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    current: state.log.current,
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);
