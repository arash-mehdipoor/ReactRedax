import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechSelectItemList = ({ tech: { techs, loading } }) => {
    return !loading && techs !== null &&
        techs.map(tech => <option key={tech.id}
            value={`${tech.firstName} ${tech.lastName}`}
        >{tech.firstName} {tech.lastName}</option>)

}
TechSelectItemList.propTypes = {
    tech: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps)(TechSelectItemList);
