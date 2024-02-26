import React from "react";

export const Alert = (props) => {
  // Function to capitalize the first letter of a word
  const capitalise = (word) => {
    if (word === "danger") {
      word = "error";
    }

    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {/* Display the capitalized alert type and the message */}
        <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
        {/* Close button */}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
};
