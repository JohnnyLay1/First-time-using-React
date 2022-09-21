import "./App.css";
import Todo from "./Componenets/Todo.jsx";
import Title from "./Componenets/Title.jsx";
import Modal from "./Componenets/Modal.jsx";
import React, { useState } from "react";
import Counter from "./Componenets/Counter.jsx";


function App() {

  return <Counter />
 
  const [showModal, setShowModal] = useState(false)

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
        <Todo title="Finish Frontend Simplified"></Todo>
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>
      {showModal && <Modal title="Are you sure?"></Modal>}
    </div>
  );
}

export default App;
