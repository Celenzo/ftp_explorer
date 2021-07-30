'use strict';

global._ = require('lodash');
const io = require('socket.io')(3000);
const ftpClient = require('ftp');
const { pick } = require('lodash');



const client = new ftpClient();

const connectFtp = params => {
    client.connect(params);
}


io.on('connection', socket => {

    socket.emit('connected');

    socket.on('ftp-connect', params => {
        connectFtp(params);
    });

    socket.on('list', () => {
        client.on('ready', () => {
            client.list((err, res) => {
                if (err) throw err;
                socket.emit('dirlist', res);
                client.end();
            });
        });
    });

    socket.on('upload', () => {

    });

    socket.on('get', () => {

    });

    socket.on('delete', () => {

    });

    socket.on('rename', () => {

    });

    socket.on('put', () => {

    });

    socket.on('status', () => {

    });

    socket.on('cwd', () => {

    });

    socket.on('abort', () => {

    });

    socket.on('mkdir', () => {

    });

    socket.on('rmdir', () => {

    });

    socket.on('cdup', () => {

    });

    socket.on('pwd', () => {

    });

    


})