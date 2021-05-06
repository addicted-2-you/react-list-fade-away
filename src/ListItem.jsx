import React from "react";

function ListItem(props) {
  const { id, title, deleteItem } = props;

  const [isFadingOut, setIsFadingOut] = React.useState(false);

  function fadeOut(callback) {
    setIsFadingOut(true);
    callback();
  }

  function handleRemoveItem(itemId) {
    setIsFadingOut(false);
    deleteItem(itemId);
  }

  return (
    <div className={`list-item ${isFadingOut ? "--fading-out" : ""}`}>
      <button
        type="button"
        onClick={() =>
          fadeOut(() => setTimeout(() => handleRemoveItem(id), 300))
        }
      >
        X
      </button>

      <p className="list-item__title">{title}</p>
    </div>
  );
}

export default ListItem;
