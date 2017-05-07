/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

let activeuser;

class main {
    constructor() {
        main.hidePages();
        main.refreshComments();
        main.addComment();
        main.switchPages();
        main.handleSignup();
    }

    static hidePages() {
        document.getElementById('signupPage').style.display = "none"
    }

    static handleSignup() {
        document.getElementById('signupSubmit').addEventListener('click', () => {
            if (document.getElementById('signupPassword').value === '' || document.getElementById('signupEmail').value === '' || ! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('signupEmail').value)) {
                alert(`You must provide a proper email address and password to continue.`)
            } else if (document.getElementById('signupPassword').value != document.getElementById('confirmPassword').value) {
                alert(`Your passwords don't match. Want to fix that?`)
            } else {
                main.performAjax('XMLHttpRequest2', JSON.stringify([document.getElementById('signupEmail').value, document.getElementById('signupPassword').value, document.getElementById('username').value]), (response) => {
                    if (response == '1') {
                        alert('There\'s already a user with that email address.')
                    } else {
                        document.getElementById('signupPage').style.display = "none";
                        document.getElementById('mainPage').style.display = "block";
                        alert('Welcome to I.F., ' + document.getElementById('username').value + '!');
                        activeuser = document.getElementById('signupEmail').value + ',' + document.getElementById('username').value;
                        document.getElementById('signupEmail').value = '';
                        document.getElementById('signupPassword').value = '';
                        document.getElementById('confirmPassword').value = '';
                        document.getElementById('username').value = '';
                    }
                });
            }
        });
    }

    static switchPages() {
        document.getElementById('registerButton').addEventListener('click', () => {
            document.getElementById('signupPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none"
        });
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
                let sendaway = '<div>' + document.getElementById('commentText').value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\\/g, "&#92;") + '</div><br>';
                document.getElementById('commentText').value = '';
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