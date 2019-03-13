import React from "react";
import Downloader from './download_component';
import EditorComponent from './markdown_component';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <EditorComponent/>
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
