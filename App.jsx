import "./App.css";
import Todo from "./Componenets/Todo.jsx";
import Title from "./Componenets/Title.jsx";
import Modal from "./Componenets/Modal.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo__wrapper">
        <Todo title='Finish Frontend Simplified'></Todo>
        <Todo title='Finish Interview Section' />
        <Todo title='Land a $100k Job' />
      </div>
      {/* <Modal title='Are you sure?'></Modal> */}
    </div>
  );
}

export default App;
