import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';

const getSuggestions = (value, nations) => {
  if (value === '') return nations;
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
  constructor(props) {
    super();
    this.state = {
      value: props.selectedNation,
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

    shouldRenderSuggestions = () => true;

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
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={this.onSuggestionSelected}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
}

NationSuggestions.propTypes = {
  selectedNation: PropTypes.string.isRequired,
  selectNation: PropTypes.func.isRequired,
  nations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NationSuggestions;
