import React from "react";
import Autosuggest from "react-autosuggest";
import DeckListImport from './decklistImport';
import './textfield.css';

const getSuggestionValue = _ => null;
const renderSuggestion = _ => null;
const onSuggestionsFetchRequested = _ => null;
const onSuggestionsClearRequested = _ => null;

export default class DecklistLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            suggestions: [],
        };
    }

    onChange = (_, { newValue }) => {
        this.setState({ value: newValue });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Enter Moxfield deck web address",
            value,
            onChange: this.onChange
        };
        return (
            <div style={{ position: "relative" }}>
                <Autosuggest
                    inputProps={inputProps}
                    suggestions={suggestions}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested} />
                <DeckListImport disabled={!this.state.value} />
            </div>
        );
    }
}