import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTech } from '../../action/TechAction';
import TechItem from './TechItem';

const TechListModal = ({ tech: { techs, loading }, getTech }) => {

    useEffect(() => {
        getTech()
    }, [])

    return (
        <div id="tech-list-modal" className="modal" style={modalStyle}>
            <div className="modal-content">

                <h4 className="center">System techs</h4>
                <ul className="collection">
                    {!loading && techs === null ? (<p>No techs To Show</p>) :

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
const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { getTech })(TechListModal);
