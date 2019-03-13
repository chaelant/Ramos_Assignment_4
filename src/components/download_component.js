import React from 'react';
import ReactDOMServer from 'react-dom/server';

function handleHtmlClick(e) {
    e.preventDefault();
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.style = "display: none";

    let styles = "<style>html {font-family: 'Helvetica Neue', 'sans-serif';} p {color: midnightblue;} h1, h2, h3, h4, h5, h6 {color: darkgreen;}</style>";
    let header = "<html><head><title>Your Download</title>" + styles + "</head><body>";
    let footer = "</body></html>";
    let html = header + document.getElementById('htmlTextArea').value + footer;
    let blob = new Blob([html], {type: 'text/html'});
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = document.getElementById('htmlFileName').value;
    a.click();
    window.URL.revokeObjectURL(url);

}

function handleMdClick(e) {
    e.preventDefault();
    let a = document.createElement('a');
    document.body.appendChild(a);

    let md = document.getElementById('mdTextArea').value;
    let blob = new Blob([md], {type: 'text/markdown'});
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = document.getElementById('mdFileName').value;
    a.click();
    window.URL.revokeObjectURL(url);
}

class Downloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdFile: '',
            htmlFile: ''
        };

        this.handleHtmlFnChange = this.handleHtmlFnChange.bind(this);
        this.handleMdFnChange = this.handleMdFnChange.bind(this);
    }

    handleMdFnChange(event) {
        this.setState({mdFile: event.target.value});
    }

    handleHtmlFnChange(event) {
        this.setState({htmlFile: event.target.value});
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="mdFileName">File Name:</label>
                            <input className="form-control" id="mdFileName" value={this.state.mdFile} onChange={this.handleMdFnChange}/>
                            <a className="btn btn-primary" onClick={handleMdClick} href="#">Download Markdown</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group" >
                            <label htmlFor="htmlFileName">File Name:</label>
                            <input className="form-control" id="htmlFileName" value={this.state.htmlFile} onChange={this.handleHtmlFnChange}/>
                            <a className="btn btn-primary" onClick={handleHtmlClick} href="#">Download HTML</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Downloader;
