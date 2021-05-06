import React from "react";

import ListItem from "./ListItem";

import "./index.css";

function App() {
  const [list, setList] = React.useState([]);

  function deleteItem(itemId) {
    setList(list.filter((item) => item.id !== itemId));
  }

  function addItem() {
    setList([{ id: Date.now() }, ...list]);
  }

  return (
    <div className="app">
      <button type="button" onClick={addItem}>
        Add
      </button>

      <ul className="list">
        {list.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            title={listItem.id}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
