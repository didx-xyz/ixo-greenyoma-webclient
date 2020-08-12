import React from "react";

const Settings = (props: any): JSX.Element => {
  return (
    <svg
      width={props.width || 18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6 7.15L15.4 7a6.12 6.12 0 00-.5-1.2l.7-1c.4-.3.3-.9-.1-1.3l-1-1a1.08 1.08 0 00-.7-.3 1.42 1.42 0 00-.6.2l-1 .7a6.12 6.12 0 00-1.2-.5l-.2-1.2A1.17 1.17 0 009.7.45H8.2a1 1 0 00-1 .9L7 2.55a6.12 6.12 0 00-1.2.5l-1-.7c-.1-.2-.3-.2-.6-.2a1.08 1.08 0 00-.7.3l-1.1 1a1.21 1.21 0 00-.1 1.4l.7 1a5.64 5.64 0 00-.4 1.2l-1.2.2a1 1 0 00-.9 1v1.5a1 1 0 00.9 1l1.2.2a6.12 6.12 0 00.5 1.2l-.7 1a1.07 1.07 0 00.1 1.4l1 1a1.08 1.08 0 00.7.3 1.42 1.42 0 00.6-.2l1-.7c.4.2.7.3 1.1.5l.2 1.2a1.06 1.06 0 001 .9h1.5a1 1 0 001-.9l.2-1.2A6.12 6.12 0 0012 15l1 .7a1.42 1.42 0 00.6.2.91.91 0 00.7-.3l1.2-1.1a1.06 1.06 0 00.1-1.4l-.7-1a6.12 6.12 0 00.5-1.2l1.2-.2a1.06 1.06 0 00.9-1V8.25a1.09 1.09 0 00-.9-1.1zm-.1 2.5l-1.6.3c-.2 0-.3.2-.4.4a4.71 4.71 0 01-.6 1.5.45.45 0 000 .5l.9 1.2v.1l-1.1 1.1h-.2l-1-.8a.45.45 0 00-.5 0 4.71 4.71 0 01-1.5.6c-.2 0-.3.2-.4.4l-.3 1.5a.1.1 0 01-.1.1H8.3a.1.1 0 01-.1-.1L8 15c0-.2-.2-.3-.4-.4a4.71 4.71 0 01-1.5-.6.35.35 0 01-.2-.1.37.37 0 00-.3.1l-1.2.9h-.2l-1.1-1.1v-.1l.9-1.2a.45.45 0 000-.5 4.71 4.71 0 01-.6-1.5c0-.2-.2-.3-.4-.4l-1.5-.2a.1.1 0 01-.1-.1V8.25a.1.1 0 01.1-.1L3 8c.2 0 .3-.2.4-.4A4.71 4.71 0 014 6.05a.45.45 0 000-.5l-.9-1.3v-.1l1.1-1.1h.2L5.5 4A.45.45 0 006 4l1.5-.6c.2 0 .3-.2.4-.4l.2-1.5a.1.1 0 01.1-.1h1.5a.1.1 0 01.1.1L10 3c0 .2.2.3.4.4a4.71 4.71 0 011.5.6.45.45 0 00.5 0l1.2-.9h.2l1.1 1.1v.1L14 5.45A.45.45 0 0014 6a4.71 4.71 0 01.6 1.5c0 .2.2.3.4.4l1.5.3a.1.1 0 01.1.1l-.1 1.4zm-7.4-4.4a3.6 3.6 0 103.6 3.6 3.65 3.65 0 00-3.6-3.6zm0 6.3a2.7 2.7 0 112.7-2.7 2.75 2.75 0 01-2.7 2.7z"
        fill={props.fill || "#fff"}
      />
    </svg>
  );
};

export default Settings;
