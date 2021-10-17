import React from 'react';
import './FolderView.css'

const Client = require('ftp');

class FolderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ftpClient: new Client()}
    }

    render() {
        return (
            <div className='FolderView'>
                <p>bonjour</p>
            </div>
        );
    }
}

export default FolderView;