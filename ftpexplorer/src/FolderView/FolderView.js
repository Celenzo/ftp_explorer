import React from 'react';
import './FolderView.css'
import { io } from 'socket.io-client';

class FolderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folderList: {}
        }
    }

    componentDidMount() {
        const socket = io('http://127.0.0.1:8002', {transports: ['websocket']});
        socket.on('connect', () => {
            socket.on('ftp:dirlist', res => {
                this.folderList = <ul> { res.map(elem => <li key={elem.name}>{ elem.name }</li>) }</ul>;
                this.forceUpdate();
            });

            socket.emit('ftp:dirlist', {
                //credentials
            }, (res) => console.log(res));
        });
    }

    render() {
        return (
            <div className='FolderView'>
                { this.folderList }
            </div>
        );
    }
}

export default FolderView;