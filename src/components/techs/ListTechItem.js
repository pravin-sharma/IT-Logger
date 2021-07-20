import React from 'react';

const ListTechItem = ({ tech }) => {
    return (
        <li className='collection-item' >
            {tech.firstName} {tech.lastName}
            <a href="#!" className='secondary-content'>
                <i className="material-icons red-text">delete</i>
            </a>
        </li>
    );
}

export default ListTechItem;
