import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateCard(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
