import React, { useState } from "react";
import '../styles/ShoppingList.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, { id: Date.now(), text: input, bought: false }]);
    setInput("");
  };

  const toggleBought = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id, newText) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem} className="add-btn">Add</button>
      </div>
      <ul>
        {items.map(item => (
          <li 
            key={item.id} 
            className={item.bought ? "bought" : ""}
            onClick={() => toggleBought(item.id)}
          >
            <span>{item.text}</span>
            <div className="buttons">
              <button className="edit-btn" onClick={(e) => { e.stopPropagation(); editItem(item.id, prompt("Edit item:", item.text) || item.text); }}>Edit</button>
              <button className="remove-btn" onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
