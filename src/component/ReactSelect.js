import React from "react";
import { Badge } from "react-bootstrap";
import Select, { StylesConfig } from "react-select";
import { COLOR } from "../Util/color";
import { HStack } from "./BootstrapStack";

export const ReactSelect = ({ options }) => {
  const [value, setValue] = React.useState("Select Option");

  const onChange = (e) => {
    setValue(e);
  };

  const customStyles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    control: (base, state) => ({
      ...base,
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: "#333333",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#333333",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: "grey",
      color: "white",
      cursor: state.isDisabled ? "not-allowed" : "default",
      "&:active": {
        ...base[":active"],
        backgroundColor: COLOR.secondary,
        opacity: 0.8,
      },
    }),
    singleValue: (base, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...base, opacity, transition };
    },
    placeholder: (base, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...base, opacity, transition };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "#333333",
      "&:hover": {
        color: COLOR.secondary,
      },
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      backgroundColor: COLOR.secondary,
    }),
  };

  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={"Select Option"}
      onChange={(e) => onChange(e)}
      isMulti={true}
      value={value}
      isSearchable={true}
      getOptionValue={(e) => e.id}
      getOptionLabel={(e) => {
        return <span>{e.name}</span>;
      }}
      isClearable={true}
      options={options}
      styles={customStyles}
    />
  );
};

export const ReactSingleSelect = ({ options }) => {
  const [value, setValue] = React.useState("Select Option");

  const onChange = (e) => {
    setValue(e);
  };

  const customStyles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    control: (base, state) => ({
      ...base,
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: "#333333",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#333333",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: "grey",
      color: "white",
      cursor: state.isDisabled ? "not-allowed" : "default",
      "&:active": {
        ...base[":active"],
        backgroundColor: COLOR.secondary,
        opacity: 0.8,
      },
    }),
    singleValue: (base, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...base, opacity, transition };
    },
    placeholder: (base, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...base, opacity, transition };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "#333333",
      "&:hover": {
        color: COLOR.secondary,
      },
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      backgroundColor: COLOR.secondary,
    }),
  };

  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={"Select Option"}
      onChange={(e) => onChange(e)}
      isMulti={false}
      value={value}
      isSearchable={true}
      getOptionValue={(e) => e.id}
      getOptionLabel={(e) => {
        return <span>{e.name}</span>;
      }}
      isClearable={true}
      options={options}
      styles={customStyles}
    />
  );
};
