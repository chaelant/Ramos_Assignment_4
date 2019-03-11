import React from "react";
import Downloader from './download_component';
import HtmlComponent from './html_component';
import MdComponent from './markdown_component';

const showdown = require('showdown');
const converter = showdown.Converter();

class Main extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MdComponent/>
                    </div>
                    <div className="col">
                        <HtmlComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Downloader/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
