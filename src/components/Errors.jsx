import React from "react";

const Errors = ({ errors }) => {
  return (
    <>
      {errors.isErrors && (
        <div className="mt-2 text-red-800">
          <ul>
            {errors.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export { Errors };
