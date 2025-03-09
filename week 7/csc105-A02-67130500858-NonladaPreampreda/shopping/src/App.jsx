import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const savedItems = localStorage.getItem('shoppingItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { text: newItem, bought: false }]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const toggleBought = (index) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index].text);
  };

  const saveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedItems = [...items];
      updatedItems[editIndex].text = editValue;
      setItems(updatedItems);
      setEditIndex(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    }
  };

  return (
    <div className="shopping-list-container">
      <h1>Shopping List</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new item"
          style={{ color: 'black' }}
        />
        <button className="add-btn" onClick={addItem}>Add</button>
      </div>
      
      <ul className="items-list">
        {items.map((item, index) => (
          <li key={index} className={`shopping-item ${item.bought ? 'bought' : ''}`}>
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyPress={handleEditKeyPress}
                autoFocus
                style={{ color: 'black' }}
              />
            ) : (
              <span 
                onClick={() => toggleBought(index)} 
                style={{ color: 'black', fontWeight: '400', display: 'block' }}
              >
                {item.text}
              </span>
            )}
            
            <div className="item-buttons">
              {editIndex === index ? (
                <button className="edit-btn" onClick={saveEdit}>Save</button>
              ) : (
                <button className="edit-btn" onClick={() => startEdit(index)}>Edit</button>
              )}
              <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;