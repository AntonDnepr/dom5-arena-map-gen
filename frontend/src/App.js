import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestions = (value, nations) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : nations.filter(nation =>
    nation.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => `(${suggestion.era}) ${suggestion.name}`;

const renderSuggestion = suggestion => (
  <div>
    ({suggestion.era}){suggestion.name}
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
      value: newValue
    });
  }
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.nations)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a nation name',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}


function App() {
  const [nations, setNations ] = useState([])
  const [isLoading, setLoading ] = useState(false)

  useEffect(() => {
    if(nations.length < 1 && !isLoading){
      setLoading(true)
      axios.get('/api/v0/autocomplete/nations/')
        .then((response) => {
          setLoading(false)
          setNations(response.data)
        })
    }
  })

  return (
    <Container>
      <Row>
        <Col>
          Select land nations
        </Col>
      </Row>
      <Row>
        <Col>
            Land nation 1: {isLoading ? "loading" : <NationSuggestions nations={nations} id="land1"/>}
        </Col>
        <Col>
            Land nation 2: {isLoading ? "loading" : <NationSuggestions nations={nations} id="land2"/>}
        </Col>
      </Row>
      <Row>
        <Col>
          Select water nations
        </Col>
      </Row>
      <Row>
        <Col>
            Water nation 1: {isLoading ? "loading" : <NationSuggestions nations={nations} id="water1"/>}
        </Col>
        <Col>
            Water nation 2: {isLoading ? "loading" : <NationSuggestions nations={nations} id="water2"/>}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
