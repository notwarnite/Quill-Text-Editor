import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import "./App.css";

function Home() {
  const [documents, setDocuments] = useState([]);

  const handleNewDocument = () => {
    const newDocId = uuidV4();
    // Open the link in a new tab
    window.open(`/docs/${newDocId}`, "_blank");

    // Add the new document to the list
    setDocuments((prevDocuments) => [
      ...prevDocuments,
      { id: newDocId, name: `Document ${prevDocuments.length + 1}` },
    ]);
  };

  return (
    <div>
      <header>
        <h1>Document Manager</h1>
      </header>
      <main>
        <div className="card">
          <h2>Create New Document</h2>
          <button onClick={handleNewDocument}>Start New Document</button>
        </div>
        {documents.map((doc) => (
          <div className="card" key={doc.id}>
            <h2>{doc.name}</h2>
            <Link to={`/docs/${doc.id}`}>Open Document</Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
