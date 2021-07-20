import React, { useEffect, useState } from 'react'
import ListTechItem from './ListTechItem';

const ListTechModal = () => {

    const [techList, setTechList] = useState([]);

    useEffect(() => {
        getTechnicians();
    }, [])

    const getTechnicians = async () => {
        const response = await fetch('/technicians');
        const data = await response.json();

        setTechList(data);
    }

    return (
        <div id='list-tech-modal' className='modal'>
            <h3 className='center' style={{marginTop:'2rem'}}>List of Technicians</h3>
            <ul className='collection container' style={{marginBottom:'2rem'}}>
                {techList?.map(tech => <ListTechItem tech={tech} key={tech.id} />)}
            </ul>
        </div>
    )
}

export default ListTechModal
