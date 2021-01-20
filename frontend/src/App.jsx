import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';

const getSuggestions = (value, nations) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  if (inputLength === 0) {
    return [];
  }
  return nations.filter((nation) => nation.name.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = (suggestion) => `(${suggestion.era}) ${suggestion.name}`;

const renderSuggestion = (suggestion) => (
  <div>
    (
    {suggestion.era}
    )
    {suggestion.name}
  </div>
);

class NationSuggestions extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
    if (newValue === '') {
      const { selectNation } = this.props;
      selectNation(newValue);
    }
  }

  onSuggestionSelected = (event, { suggestionValue }) => {
    const { selectNation } = this.props;
    selectNation(suggestionValue);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { nations } = this.props;
    this.setState({
      suggestions: getSuggestions(value, nations),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a nation name',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={this.onSuggestionSelected}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

NationSuggestions.propTypes = {
  selectNation: PropTypes.func.isRequired,
  nations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Step1 = ({
  nations, isLoading, selectLandNations, selectWaterNations,
}) => (
  <>
    <Row>
      <Col>
        Select land nations
      </Col>
    </Row>
    <Row>
      <Col>
        Land nation 1:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectLandNations[0]} id="land1" />}
      </Col>
      <Col>
        Land nation 2:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectLandNations[1]} id="land2" />}
      </Col>
    </Row>
    <Row>
      <Col>
        Select water nations
      </Col>
    </Row>
    <Row>
      <Col>
        Water nation 1:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectWaterNations[0]} id="water1" />}
      </Col>
      <Col>
        Water nation 2:
        {' '}
        {isLoading ? 'loading' : <NationSuggestions nations={nations} selectNation={selectWaterNations[1]} id="water2" />}
      </Col>
    </Row>
  </>
);

Step1.propTypes = {
  nations: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectLandNations: PropTypes.arrayOf(PropTypes.func).isRequired,
  selectWaterNations: PropTypes.arrayOf(PropTypes.func).isRequired,
};

const NextStepButton = ({ setCurrentStep }) => (
  <Row>
    <Col>
      <Button onClick={() => setCurrentStep('step2')}>Show next step</Button>
    </Col>
  </Row>
);

NextStepButton.propTypes = {
  setCurrentStep: PropTypes.func.isRequired,
};

function App() {
  const [nations, setNations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('step1');
  const [selectedLandNation1, selectLandNation1] = useState('');
  const [selectedLandNation2, selectLandNation2] = useState('');
  const [selectedWaterNation1, selectWaterNation1] = useState('');
  const [selectedWaterNation2, selectWaterNation2] = useState('');

  useEffect(() => {
    if (nations.length < 1 && !isLoading) {
      setLoading(true);
      axios.get('/api/v0/autocomplete/nations/')
        .then((response) => {
          setLoading(false);
          setNations(response.data);
        });
    }
  }, [nations.length, isLoading]);
  const showNextStep = [
    selectedLandNation1, selectedLandNation2, selectedWaterNation1, selectedWaterNation2,
  ].some((x) => x !== '');
  return (
    <Container>
      {currentStep === 'step1' && (
      <Step1
        nations={nations}
        isLoading={isLoading}
        selectLandNations={[selectLandNation1, selectLandNation2]}
        selectWaterNations={[selectWaterNation1, selectWaterNation2]}
      />
      )}
      {showNextStep && <NextStepButton setCurrentStep={setCurrentStep} />}
    </Container>
  );
}

export default App;
