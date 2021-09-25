import {
  Row, Col, Button,
} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from '../consts';

const Navigation = ({
  currentStep,
  setCurrentStep,
  lengthOfNations,
  setNationIndex,
  nationIndex,
  setGenerateMapRequest,
  isLoadingUnits,
}) => (
  <Row>
    {currentStep === Steps.Step1
      ? lengthOfNations > 1 && (
        <Col>
          <Button color="info" onClick={() => setCurrentStep(currentStep + 1)}>
            Next step
          </Button>
        </Col>
      ) : (currentStep !== Steps.Step2 || nationIndex === 0) && (
        <Col>
          <Button onClick={() => setCurrentStep(currentStep - 1)}>
            Back
          </Button>
        </Col>
      )}

    {currentStep === Steps.Step2 && !isLoadingUnits
      && (
      <>
        { lengthOfNations > nationIndex + 1
          && (
            <Col>
              <Button color="info" onClick={() => setNationIndex(nationIndex + 1)}>
                Configure next nation
              </Button>
            </Col>
          )}
        { nationIndex > 0
          && (
            <Col>
              <Button onClick={() => setNationIndex(nationIndex - 1)}>
                Configure previous nation
              </Button>
            </Col>
          )}
        { nationIndex !== 0 && lengthOfNations <= nationIndex + 1
          && (
            <Col>
              <Button color="success" onClick={() => setGenerateMapRequest()}>
                Generate map
              </Button>
            </Col>
          )}
      </>
      )}

  </Row>
);

Navigation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  lengthOfNations: PropTypes.number.isRequired,
  setNationIndex: PropTypes.func.isRequired,
  nationIndex: PropTypes.number.isRequired,
  setGenerateMapRequest: PropTypes.func.isRequired,
  isLoadingUnits: PropTypes.bool.isRequired,
};

export default Navigation;
