import React, { useState } from "react";
import "../css/Editor.css"
export default function Editor(props) {
  const { displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className={`editor-container ${open ? "" : `collapsed`}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
        </button>
      </div>
      <textarea
        onChange={handleChange}
        value={value}
        className="textarea-wrapper"
        style={{
          width: "100%",
          height: "100%",
          resize: "none",
          fontFamily: "monospace",
          background: "#2d2d2d",
          color: "#f8f8f2",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}
