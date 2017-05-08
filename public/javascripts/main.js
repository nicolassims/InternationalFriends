/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

class main {
    constructor() {
        main.hidePages();
        main.refreshComments();
        main.addComment();
        main.switchPages();
        main.handleSignup();
        main.handleLogin();
        main.preventEnterKeys();
        main.handleAboutMe();
    }

    static hidePages() {
        document.getElementById('signupPage').style.display = "none";
        document.getElementById('loginPage').style.display = "none";
        document.getElementById('activeuser').style.display = "none";
        document.getElementById('activeemail').style.display = "none";
        document.getElementById('userPage').style.display = "none";
        document.getElementById('talkbubble').style.display = "none";
        document.getElementById('otherUserPage').style.display = "none";
    }

    static handleSignup() {
        document.getElementById('signupSubmit').addEventListener('click', () => {
            if (document.getElementById('signupPassword').value === '' || document.getElementById('signupEmail').value === '' || ! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('signupEmail').value)) {
                alert(`You must provide a proper email address and password to continue.`)
            } else if (document.getElementById('signupPassword').value != document.getElementById('confirmPassword').value) {
                alert(`Your passwords don't match. Want to fix that?`)
            } else {
                main.performAjax('XMLHttpRequest2', JSON.stringify([document.getElementById('signupEmail').value, document.getElementById('signupPassword').value, document.getElementById('username').value]), (response) => {
                    console.log(response);
                    if (response == '1') {
                        alert('There\'s already a user with that email address.')
                    } else {
                        response = JSON.parse(response);
                        document.getElementById('signupPage').style.display = "none";
                        document.getElementById('mainPage').style.display = "block";
                        alert('Welcome to I.F., ' + response[2] + '!');
                        document.getElementById('activeuser').innerHTML = response[2];
                        document.getElementById('activeemail').innerHTML = response[0];
                        document.getElementById('signupEmail').value = '';
                        document.getElementById('signupPassword').value = '';
                        document.getElementById('confirmPassword').value = '';
                        document.getElementById('username').value = '';
                        document.getElementById('talkbubble').style.display = 'block';
                        document.getElementById('activeuser').style.display = 'block';
                        document.getElementById('loginButton').style.display = 'none';
                        document.getElementById('registerButton').style.display = 'none';
                    }
                });
            }
        });
    }

    static handleLogin() {
        document.getElementById('loginSubmit').addEventListener('click', () => {
            if (document.getElementById('password').value === '' || document.getElementById('email').value === '' || ! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('email').value)) {
                alert(`Mm, that information doesn't seem right. You need a proper password and email address, okay?`)
            } else {
                main.performAjax('XMLHttpRequest3', JSON.stringify([document.getElementById('email').value, document.getElementById('password').value]), (response) => {
                    if (response == '1') {
                        alert('You don\'t appear to be registered with our system. Or maybe your password\'s wrong.')
                    } else {
                        response = JSON.parse(response);
                        document.getElementById('loginPage').style.display = "none";
                        document.getElementById('mainPage').style.display = "block";
                        alert('Welcome back to I.F., ' + response[2] + '!');
                        document.getElementById('activeuser').innerHTML = response[2];
                        document.getElementById('activeemail').innerHTML = response[0];
                        document.getElementById('email').value = '';
                        document.getElementById('password').value = '';
                        document.getElementById('activeuser').style.display = 'block';
                        document.getElementById('talkbubble').style.display = 'block';
                        document.getElementById('loginButton').style.display = 'none';
                        document.getElementById('registerButton').style.display = 'none';
                    }
                });
            }
        });
    }

    static handleAboutMe() {
        document.getElementById('userpageSubmit').addEventListener('click', () => {
            main.performAjax('XMLHttpRequest4', JSON.stringify([document.getElementById('activeemail').innerHTML, document.getElementById('hobby').value, document.getElementById('job').value, document.getElementById('goal').value, document.getElementById('identity').value]), () => {
                alert('Data updated! Future chat partners will gradually be made aware of this information when you chat. If you\'re not okay with that, just put in new information and re-submit.');
                document.getElementById('hobby').value = '';
                document.getElementById('job').value = '';
                document.getElementById('goal').value = '';
                document.getElementById('identity').value = '';
            });
        });
    }

    static switchPages() {
        document.getElementById('registerButton').addEventListener('click', () => {
            document.getElementById('signupPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('loginPage').style.display = "none";
        });
        document.getElementById('loginButton').addEventListener('click', () => {
            document.getElementById('loginPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('signupPage').style.display = "none";
        });
        document.getElementById('activeuser').addEventListener('click', () => {
            document.getElementById('userPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('otherUserPage').style.display = "none";
            document.getElementById('userpageTitle').innerHTML = 'So, ' + document.getElementById('activeuser').innerHTML + ', what\'s your story?';
        });
        document.getElementById('shortName').addEventListener('click', () => {
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('loginPage').style.display = "none";
            document.getElementById('userPage').style.display = "none";
            document.getElementById('signupPage').style.display = "none";
            document.getElementById('otherUserPage').style.display = "none";
        });
        document.getElementById('fullName').addEventListener('click', () => {
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('loginPage').style.display = "none";
            document.getElementById('userPage').style.display = "none";
            document.getElementById('signupPage').style.display = "none";
            document.getElementById('otherUserPage').style.display = "none";
        });
        document.getElementById('talkbubble').addEventListener('click', () => {
            document.getElementById('otherUserPage').style.display = "block";
            document.getElementById('userPage').style.display = "none";
            document.getElementById('mainPage').style.display = "none";
            main.performAjax('XMLHttpRequest5', JSON.stringify(document.getElementById('activeemail').innerHTML), (response) => {
                if (response == 1) {
                    alert('Well, this is embarrassing. Turns out there are no other online users right now. Sorry!');
                    document.getElementById('mainPage').style.display = "block";
                    document.getElementById('otherUserPage').style.display = "none";
                } else {
                    response = JSON.parse(response);
                    document.getElementById('otheruserpageTitle').innerHTML = response[0];
                }
            });
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
                let sendaway = '<div style="text-align: center;border-bottom: 1px black solid">' + document.getElementById('commentText').value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\\/g, "&#92;") + '</div><br>';
                document.getElementById('commentText').value = '';
                main.performAjax('XMLHttpRequest1', JSON.stringify(sendaway), (response) => {
                    response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '');
                    document.getElementById('comments').innerHTML = response;
                });
            }
        });
    }

    static preventEnterKeys() {
        document.getElementById('commentText').addEventListener('keypress', (evt) => {
            if (evt.which === 13) {
                evt.preventDefault();
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