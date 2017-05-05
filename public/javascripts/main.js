/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

class main {
    constructor() {
        main.refreshComments();
        main.addComment();
    }

    static refreshComments() {
        document.getElementById('hearComments').addEventListener('click', () => {
            main.performAjax('XMLHttpRequest0', 'refresh', (response) => {
                if (response != '[]') {
                    response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '');
                    document.getElementById('comments').innerHTML = response;
                } else {
                    alert('Seems no one else is talking... why don\'t you start a conversation?');
                }
            });
        });
    }

    static addComment() {
        document.getElementById('addComment').addEventListener('click', () => {
            if (document.getElementById('commentText').value == '') {
                alert('Cat got your tongue?');
            } else {
                let sendaway = '<div>' + document.getElementById('commentText').value + '</div><br>';
                main.performAjax('XMLHttpRequest1', JSON.stringify(sendaway), (response) => {
                    response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '');
                    document.getElementById('comments').innerHTML = response;
                });
            }
        });
    }

    static performAjax(requestNum, sendToNode, callback) {
        let bustCache = '?' + new Date().getTime();
        const XHR = new XMLHttpRequest();
        XHR.open('POST', document.url + bustCache, true);
        XHR.setRequestHeader('X-Requested-with', requestNum);
        XHR.send(sendToNode);
        XHR.onload = () => {
            if (XHR.readyState == 4 && XHR.status == 200 && callback) {
                return callback(XHR.responseText);
            }
        };
    }
}

window.onload = function() {
    new main();
};