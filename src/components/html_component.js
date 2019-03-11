import React from 'react';

class HtmlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'HTML appears here'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newValue) {
        this.setState({value: newValue});
    }

    render() {
        return (
            <div className="form-group">
                <label className="h1" htmlFor="htmlTextArea">HTML</label>
                <textarea value={this.state.value} className="form-control" id="htmlTextArea" rows="20" disabled />
            </div>
        )
    }
}

export default HtmlComponent;
