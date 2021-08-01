import {
  Row, Col, Button,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const GenerateMapButton = ({ setGenerateMapRequest }) => (
  <Row>
    <Col>
      <Button color="success" onClick={() => setGenerateMapRequest()}>Generate map</Button>
    </Col>
  </Row>
);

GenerateMapButton.propTypes = {
  setGenerateMapRequest: PropTypes.func.isRequired,
};

export default GenerateMapButton;
