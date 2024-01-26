import React from "react";
import { FormControl } from "react-bootstrap";
import "./style/searchbox.css";
import Autosuggest from "react-autosuggest";

import { FiSearch } from "react-icons/fi";
import { HStack } from "./BootstrapStack";
import searhbox from "./style/searchbox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const languages = [
    {
      name: "C",
      year: 1972,
    },
    {
      name: "Elm",
      year: 2012,
    },
    {
      name: "Go",
      year: 2009,
    },
    {
      name: "Haskell",
      year: 1990,
    },
    {
      name: "Java",
      year: 1995,
    },

    {
      name: "JavaScript",
      year: 1995,
    },
    {
      name: "Perl",
      year: 1987,
    },
  ];

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => (
    <div
      className="text-light"
      onClick={() => {
        navigate("/products");
      }}
    >
      {suggestion.name}
    </div>
  );

  const inputProps = {
    placeholder: "Search for products",
    value,
    onChange: onChange,
  };

  return (
    <div className="search-box">
      <HStack className={"search-input"}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </HStack>
    </div>
  );
};

export default SearchBox;
