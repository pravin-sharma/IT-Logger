import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {

    //add states
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    //onSubmit
    const onSubmit = () => {
        if (message && tech) {
            M.toast({ html: 'Log Added', classes: 'rounded green' })
            console.log(message, tech, attention);
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
                        <i className="material-icons prefix">message</i>
                        <input id="icon_prefix" type="text" className="validate" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label htmlFor="icon_prefix">Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">person</i>
                        <select value={tech} onChange={(e) => setTech(e.target.value)}>
                            <option value="" disabled>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Technician Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <div style={{ marginTop: '-2rem' }}>

                            <label>
                                <input type="checkbox" value={attention} onChange={() => setAttention(!attention)} />
                                <span>Attention Need</span>
                            </label>
                        </div>
                    </div>

                </div>
                <button className="btn waves-effect waves-light right modal-close" style={{ margin: '0 1rem 1rem 0' }} onClick={onSubmit} name="action">Add
                    <i className="material-icons right">add</i>
                </button>
            </form>
        </div>
    )
}

export default AddLogModal;
