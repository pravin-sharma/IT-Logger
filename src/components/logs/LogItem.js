import React from 'react'
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';
import PropTypes from 'prop-types'

const LogItem = ({ log, deleteLog, setCurrent }) => {

    //on delete
    const onDelete = (e) =>{
        deleteLog(log.id);
        M.toast({ html: 'Log Deleted', classes: 'rounded red' })            
    }
    
    return (
        <li className='collection-item'>
            <ul>
                <li> <a href="#edit-log-modal" className={log.attention?'red-text modal-trigger':'modal-trigger'} onClick={()=>setCurrent(log)}>{log.message}</a></li>
                <li className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by <span className='black-text'>{log.tech}</span> on 
                    <span className='black-text'> <Moment format='MMMM Do YYYY, hh:mm:ss a'>{log.date}</Moment></span>
                    <a href="#!" className='secondary-content'>
                        <i className="material-icons red-text" onClick={onDelete}>delete</i>
                    </a>
                </li>
            </ul>
        </li>
    )
}

LogItem.propTypes = {
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}


export default connect(null,{deleteLog, setCurrent})(LogItem);