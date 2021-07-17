import React from 'react'
import Moment from 'react-moment';

const LogItem = ({ log }) => {
    return (
        <li className='collection-item'>
            <ul>
                <li> <a href="#edit-modal">{log.message}</a></li>
                <li className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by <span className='black-text'>{log.tech}</span> on 
                    <span className='black-text'> <Moment format='MMMM Do YYYY, hh:mm:ss a'>{log.date}</Moment></span>
                    <a href="#!" className='secondary-content'>
                        <i className="material-icons red-text">delete</i>
                    </a>
                </li>
            </ul>
        </li>
    )
}

export default LogItem;
