import './Todo.css'


function Todo( {title} ) {
    return (
        <div className='todo'>
            <h2>{title}</h2>
            <button>Delete</button>
        </div>
    )
}

export default Todo