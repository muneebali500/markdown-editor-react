import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(``);

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
          <h2 className="head2">Editor</h2>
          <textarea
            onChange={handleChange}
            className="editor"
            value={markdown}
            placeholder="Place your text here..."
          ></textarea>
        </section>
        <section className="divider">
          <h2 className="head2">Result</h2>
          <ReactMarkdown className="result">{markdown}</ReactMarkdown>
        </section>
      </main>
    </>
  );
}

export default App;
