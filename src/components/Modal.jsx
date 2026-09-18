import { Component } from "react";
import style from "./Modal.module.css"
console.log(style);

class Modal extends Component{

    render() {
        return(
            <div onClick={this.props.closeModal} className={style.backdrop}>
                <div className={style.modal}>
                    <img src={this.props.selectImg} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal