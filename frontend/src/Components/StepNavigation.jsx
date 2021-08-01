import {
  Row, Col, Button,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import Steps from '../Steps.ts';

const StepNavigation = ({ currentStep, setCurrentStep }) => (
  <Row>
    {currentStep !== Steps.Step1
      ? (
        <Col>
          <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
        </Col>
      ) : (
        <Col>
          <Button onClick={() => setCurrentStep(currentStep + 1)}>Next step</Button>
        </Col>
      )}
  </Row>
);

StepNavigation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};

export default StepNavigation;
