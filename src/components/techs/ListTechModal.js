import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import ListTechItem from './ListTechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import Preloader from '../layout/Preloader';

const ListTechModal = ({tech:{techs,loading}, getTechs}) => {

    useEffect(() => {
        getTechs();
    }, [])

    if(loading && techs == null){
        return <Preloader />
    }

    return (
        <div id='list-tech-modal' className='modal'>
            <h3 className='center' style={{marginTop:'2rem'}}>List of Technicians</h3>
            <ul className='collection container' style={{marginBottom:'2rem'}}>
                {!loading && 
                techs !== null &&
                techs?.map(techie => <ListTechItem tech={techie} key={techie.id} />)}
            </ul>
        </div>
    )
}

ListTechModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(ListTechModal)
