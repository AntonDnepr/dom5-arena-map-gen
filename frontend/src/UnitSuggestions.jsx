import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';

const getUnitSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  if (inputLength >= 3) {
    // setLoading(true);
    return axios.get(`/api/v0/autocomplete/units/?search=${inputValue}`)
      .then((response) => response.data);
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
      const { selectUnit, selectedUnits } = this.props;
      const splittedString = suggestionValue.split('/');
      const generatedObject = {
        dominion_id: splittedString[0],
        name: splittedString[1],
      };
      const newSelected = [...selectedUnits, generatedObject];
      selectUnit(newSelected);
    }

    onSuggestionsFetchRequested = ({ value }) => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      if (inputLength >= 3) {
        getUnitSuggestions(value).then((suggestions) => {
          this.setState({
            suggestions,
          });
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
};

export default UnitSuggestions;
