import React from "react";
import Select from "react-select";
import { HStack, VStack } from "./BootstrapStack";
import { FiSlash } from "react-icons/fi";
const DynamicSelect = ({ options, type, isRequired = false }) => {
  const [value, setValue] = React.useState(null);

  const onChange = (e) => {
    setValue(e);
  };

  return (
    <Select
      placeholder={
        isRequired ? (
          "Select Option"
        ) : (
          <HStack>
            <FiSlash className="text-danger mt-1" />
            <span style={{ marginLeft: 5 }}>
              No Thanks ! I don't need this.{" "}
            </span>
          </HStack>
        )
      }
      value={value}
      options={options}
      isClearable={true}
      isSearchable={true}
      onChange={onChange}
      getOptionValue={(e) => e.id}
      maxMenuHeight={200}
      menuPortalTarget={document.body}
      getOptionLabel={(e) => (
        <VStack>
          <HStack>
            <img src={e.image} alt={e.name} style={{ width: 30, height: 30 }} />
            <span style={{ marginLeft: 5 }}>{e.name}</span>
          </HStack>
          <span style={{ marginLeft: 35, fontSize: 12, color: "grey" }}>
            <strong>${e.price}</strong>
          </span>
        </VStack>
      )}
    />
  );
};

export default DynamicSelect;
