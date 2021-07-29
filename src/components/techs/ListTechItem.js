import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';


const ListTechItem = ({ tech, deleteTech }) => {

    const onDelete = () =>{
        deleteTech(tech.id)
        M.toast({ html: 'Technician Deleted', classes: 'rounded red' })
    }

    return (
        <li className='collection-item' >
            {tech.firstName} {tech.lastName}
            <a href="#!" className='secondary-content' onClick={onDelete}>
                <i className="material-icons red-text">delete</i>
            </a>
        </li>
    );
}

ListTechItem.propTypes = {
    deleteTech: PropTypes.func.isRequired
}

export default connect(null,{deleteTech})(ListTechItem);
