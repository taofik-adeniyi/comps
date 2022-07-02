import React from "react";
import "./index.css";

const Input = (props) => {
  const { name, id, placeholder, onChange, onBlur, value, type, error, label, ...rest } = props;
  return (
    <div className="cmp-input">
      {label && <label></label>}

      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && (
        <small>Username cannot be empty and cannot contain spaces.</small>
      )}
    </div>
  );
};

export default Input;
