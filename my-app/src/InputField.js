import React from "react";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (this.props.onChange) this.props.onChange(event.target.value);
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        if (this.props.onSubmit) this.props.onSubmit(this.state.value);
        this.setState({value: ""});
        event.preventDefault()
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>{this.props.label} </label>
            <input type="text" onChange={this.handleChange} value={this.state.value} autoFocus={this.props.autoFocus}/>
        </form>)
    }
}
export {InputField}