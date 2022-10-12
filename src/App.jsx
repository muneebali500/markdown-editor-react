import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(``);
  const [targetValue, setTargetValue] = useState(`editor`);

  function handleChange(e) {
    setMarkdown(e.target.value);
    localStorage.setItem(`markdownData`, JSON.stringify(e.target.value));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`markdownData`)) || ``;
    setMarkdown(data);
  }, []);

  return (
    <>
      <header className="header">Markdown Editor</header>
      <main className="main">
        <section className="divider">
          <h2 onClick={() => setTargetValue(`editor`)} className="head2">
            Editor
          </h2>
          <textarea
            onChange={handleChange}
            className="editor"
            value={markdown}
            placeholder="Place your markdown content here..."
            style={{ zIndex: `${targetValue === `editor` ? 1 : 0}` }}
          ></textarea>
        </section>
        <section className="divider">
          <h2 className="head2" onClick={() => setTargetValue(`result`)}>
            Result
          </h2>
          <ReactMarkdown
            className="result"
            style={{ zIndex: `${targetValue === `result` ? 1 : 0}` }}
          >
            {markdown ? markdown : null}
          </ReactMarkdown>
        </section>
      </main>
    </>
  );
}

export default App;
