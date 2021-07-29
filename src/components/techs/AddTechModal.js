import React, { useState } from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import {addTech} from '../../actions/techActions'

const AddTechModal = ({addTech}) => {

    //add states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            addTech(firstName,lastName);
            M.toast({ html: 'Technician Added', classes: 'rounded green' })
            //clear form
            setFirstName("");
            setLastName("");
        } else {
            M.toast({ html: 'Fill first name and last name of technician', classes: 'rounded red' })
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <form>
                <h3 className='center' style={{ marginTop: '1rem' }}>Add Technician</h3>
                
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="icon_prefix">First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="icon_prefix">Last Name</label>
                    </div>
                </div>

                <button className="btn waves-effect waves-light right modal-close" style={{ margin: '0 1rem 1rem 0' }} onClick={onSubmit}>Add
                    <i className="material-icons right">add</i>
                </button>
            </form>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null,{addTech})(AddTechModal);
