
const Modal = ({handleClose, open, children, title}) => {
    return(
        <div onClose={handleClose} open={open}>
            <div>
                <div>{title}</div>
                {children}
            </div>
        </div>
    )
}

export default Modal