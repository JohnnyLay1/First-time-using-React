import "./App.css";
import Todo from "./Componenets/Todo.jsx";
import Title from "./Componenets/Title.jsx";
import Modal from "./Componenets/Modal.jsx";
import React, { useState } from "react";
import Counter from "./Componenets/Counter.jsx";


function App() { 
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function onModalCancel() {
    setShowModal(false)
  }

  return (
    <div className="App">
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete= {onTodoDelete} title="Finish Frontend Simplified"></Todo>
        <Todo onTodoDelete= {onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete= {onTodoDelete} title="Land a $100k Job" />
      </div>
      {showModal && <Modal title="Are you sure?" onModalCancel={onModalCancel}></Modal>}
    </div>
  );
}

export default App;
