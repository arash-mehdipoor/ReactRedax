import React, { useEffect, useState } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
    }

    return (
        <div id="tech-list-modal" className="modal" style={modalStyle}>
            <div className="modal-content">

                <h4 className="center">System techs</h4>
                <ul className="collection">
                    {techs.length === 0 ? (<p>No techs To Show</p>) :

                        (
                            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
                        )

                    }
                </ul>
            </div>

        </div>
    )
}
const modalStyle = {
    width: '75%',
    height: '75%'
}
export default TechListModal
