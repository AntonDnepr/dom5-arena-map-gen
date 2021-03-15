import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import uuidv4 from './utils';

const { CancelToken } = axios;
let cancelToken;

const getUnitSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  if (inputLength > 1) {
    // Check if there are any previous pending requests
    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel('Operation canceled due to new request.');
    }

    // Save the cancel token for the current request
    cancelToken = CancelToken.source();
    return axios.get(`/api/v0/autocomplete/units/?search=${inputValue}`, {
      cancelToken: cancelToken.token,
    }).then((response) => response.data).catch((error) => {
      console.log('Error', error);
      return [];
    });
  }
  return [];
};

const getUnitSuggestionValue = (suggestion) => `${suggestion.dominion_id}/${suggestion.name}`;

const renderUnitSuggestion = (suggestion) => (
  <div>
    (
    {suggestion.dominion_id}
    )
    {suggestion.name}
  </div>
);

class UnitSuggestions extends React.Component {
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
    }

    onSuggestionSelected = (event, { suggestionValue }) => {
      const { selectUnit, selectedUnits, selectedNation } = this.props;
      const splittedString = suggestionValue.split('/');
      const generatedObject = {
        dominion_id: splittedString[0],
        name: splittedString[1],
        id: uuidv4(),
        for_nation: selectedNation,
        quantity: 1,
      };
      const newSelected = [...selectedUnits, generatedObject];
      selectUnit(newSelected);
      this.setState({
        value: '',
      });
    }

    onSuggestionsFetchRequested = ({ value }) => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      if (inputLength > 1) {
        getUnitSuggestions(value).then((suggestions) => {
          this.setState({
            suggestions,
          });
        }).catch((error) => {
          console.log('AutosuggestError', error);
        });
      }
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
        placeholder: 'Type unit name',
        value,
        onChange: this.onChange,
      };

      // Finally, render it!
      return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getUnitSuggestionValue}
          onSuggestionSelected={this.onSuggestionSelected}
          renderSuggestion={renderUnitSuggestion}
          inputProps={inputProps}
        />
      );
    }
}

UnitSuggestions.propTypes = {
  selectUnit: PropTypes.func.isRequired,
  selectedUnits: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedNation: PropTypes.string.isRequired,
};

export default UnitSuggestions;
