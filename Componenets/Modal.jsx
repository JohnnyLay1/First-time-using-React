import './Modal.css'

function Modal({ title, onModalCancel }) {
    return (
        <div>
            <div className="modal">
                <p className="modal__title">{title}</p>                <div className="modal__buttons">
                    <button onClick={onModalCancel} className="btn btn__cancel">Cancel</button>
                    <button onClick={() => console.log('confirm')} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </div>
    )
}

export default Modal