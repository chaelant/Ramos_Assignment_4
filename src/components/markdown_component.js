import React from 'react';
const showdown = require('showdown');
const converter = new showdown.Converter();

function HtmlComponent(props) {
    return (
        <div className="form-group">
            <label className="h1" htmlFor="htmlTextArea">HTML</label>
            <textarea value={props.converted} className="form-control" id="htmlTextArea" rows="20"/>
        </div>
    )
}

class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter Markdown notes here',
            html: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({html: converter.makeHtml(event.target.value)})
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label className="h1" htmlFor="mdTextArea">Markdown</label>
                        <textarea value={this.state.value} onChange={this.handleChange} className="form-control" id="mdTextArea" rows="20"/>
                    </div>
                </div>
                <div className="col">
                    <HtmlComponent converted={this.state.html}/>
                </div>
            </div>
        )
    }
}

export default EditorComponent;
