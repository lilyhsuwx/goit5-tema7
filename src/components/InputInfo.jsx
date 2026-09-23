import { Component } from "react";

class InputInfo extends Component {
    state = {
        info:  "",
    }

    handleInput = (evt) => {
        this.setState({
            info: evt.target.value
        })
        this.props.onFilter(this.state.info)
    }

    render() {
    
        
        return(
            
            <input onChange={this.handleInput} value={this.state.info} type="text" placeholder=" name" />
            
        )
    }
}

export default InputInfo