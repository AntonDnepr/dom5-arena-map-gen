import {
  Row, Col, Button,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import Steps from '../Steps.ts';

const Step2Button = ({ setCurrentStep }) => (
  <Row>
    <Col>
      <Button onClick={() => setCurrentStep(Steps.Step2)}>Show next step</Button>
    </Col>
  </Row>
);

Step2Button.propTypes = {
  setCurrentStep: PropTypes.func.isRequired,
};

export default Step2Button;
