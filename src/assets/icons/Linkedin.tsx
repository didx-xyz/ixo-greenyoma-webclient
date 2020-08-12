import React from "react";

const Linkedin = (props: any): JSX.Element => {
  return (
    <svg
      width={props.width || 18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.45 6H1a.27.27 0 00-.3.3v11a.27.27 0 00.3.3h3.5a.27.27 0 00.3-.3v-11q-.2-.35-.35-.3zM2.75.45a2.24 2.24 0 00-2.3 2.2A2.33 2.33 0 002.75 5a2.33 2.33 0 002.3-2.3A2.38 2.38 0 002.75.45zm10.3 5.2a3.85 3.85 0 00-3 1.3v-.8a.27.27 0 00-.3-.3h-3.2a.27.27 0 00-.3.3v11a.27.27 0 00.3.3H10a.27.27 0 00.3-.3v-5.4c0-1.8.5-2.5 1.8-2.5s1.5 1.1 1.5 2.6v5.3a.27.27 0 00.3.3h3.4a.27.27 0 00.3-.3v-6c-.1-2.7-.6-5.5-4.5-5.5z"
        fill={props.fill || "#fff"}
      />
    </svg>
  );
};

export default Linkedin;
