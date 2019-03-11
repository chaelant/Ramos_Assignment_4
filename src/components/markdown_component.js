import React from 'react';

class MdComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter Markdown notes here'
        };

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form-group">
                <label className="h1" htmlFor="mdTextArea">Markdown</label>
                <textarea value={this.state.value} onChange={this.handleChange} className="form-control" id="mdTextArea" rows="20"/>
            </div>
       )
    }
}

export default MdComponent;
