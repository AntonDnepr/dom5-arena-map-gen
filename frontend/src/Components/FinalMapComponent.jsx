import {
  Row, Col,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const FinalMapComponent = ({ finalMapData }) => (
  <Row>
    <Col>
      <p>Copy the text below into a backup of Arena.map file</p>
      <div style={{ whiteSpace: 'pre-line' }}>
        {finalMapData}
      </div>
    </Col>
  </Row>
);

FinalMapComponent.propTypes = {
  finalMapData: PropTypes.string.isRequired,
};

export default FinalMapComponent;
