import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import uuidv4 from './utils';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const getUnitSuggestions = (value, units) => {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp(`^${escapedValue}`, 'i');

  return units.filter((unit) => regex.test(unit.name) || regex.test(unit.dominion_id));
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
      const { units } = this.props;
      const suggestions = getUnitSuggestions(value, units).slice(0, 100);
      this.setState({
        suggestions,
      });
    };

    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: [],
      });
    };

    shouldRenderSuggestions = () => true;

    render() {
      const { value, suggestions } = this.state;

      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'Type unit name or unit id',
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
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          renderSuggestion={renderUnitSuggestion}
          inputProps={inputProps}
        />
      );
    }
}

UnitSuggestions.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUnit: PropTypes.func.isRequired,
  selectedUnits: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedNation: PropTypes.string.isRequired,
};

export default UnitSuggestions;
