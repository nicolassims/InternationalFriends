/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

class main {
    constructor() {
        main.randomizeQuestion();
        main.hidePages();
        main.refreshComments();
        main.addComment();
        main.switchPages();
        main.handleSignup();
        main.handleLogin();
        main.preventEnterKeys();
        main.handleAboutMe();
        main.sendDM();
        main.manualCheckMessages();
        main.respondToMessages();
        main.handleAboutSite();
        alert('Welcome to I.F.; Welcome to International Friends! As this website is still under development, it is likely to work much more effectively on certain systems than others. It is not yet configured correctly for mobile browsers, for example, so please bear with me while I update the site over time. Bug reports can be sent to sableye.nico@gmail.com. Thank you!')
    }

    static hidePages() {
        document.getElementById('signupPage').style.display = "none";
        document.getElementById('loginPage').style.display = "none";
        document.getElementById('activeuser').style.display = "none";
        document.getElementById('activeemail').style.display = "none";
        document.getElementById('userPage').style.display = "none";
        document.getElementById('talkbubble').style.display = "none";
        document.getElementById('otherUserPage').style.display = "none";
        document.getElementById('messagebox').style.display = "none";
        document.getElementById('messagebox2').style.display = "none";
    }

    static randomizeQuestion() {
        setInterval(() => {
            let min = 0;
            let max = 35;
            let randomVar = Math.floor(Math.random() * (max - min + 1)) + min;
            if (randomVar == 0) {
                document.getElementById('activeQuestion').innerHTML = 'If you could invite anyone in the world to dinner, who would it be?'
            } else if (randomVar == 1) {
                document.getElementById('activeQuestion').innerHTML = 'Would you like to be famous? In what way?'
            } else if (randomVar == 2) {
                document.getElementById('activeQuestion').innerHTML = 'Before making a telephone call, do you ever rehearse what you are going to say?'
            } else if (randomVar == 3) {
                document.getElementById('activeQuestion').innerHTML = 'What would you call a perfect day?'
            } else if (randomVar == 4) {
                document.getElementById('activeQuestion').innerHTML = 'When was the last time you sang to yourself, or someone else?'
            } else if (randomVar == 5) {
                document.getElementById('activeQuestion').innerHTML = 'What do you most want to protect?'
            } else if (randomVar == 6) {
                document.getElementById('activeQuestion').innerHTML = 'How are you going to die?'
            } else if (randomVar == 7) {
                document.getElementById('activeQuestion').innerHTML = 'What do you want your soulmate to be able to do?'
            } else if (randomVar == 8) {
                document.getElementById('activeQuestion').innerHTML = 'What are you most grateful for?'
            } else if (randomVar == 9) {
                document.getElementById('activeQuestion').innerHTML = 'Do you have any advice for those younger than you?'
            } else if (randomVar == 10) {
                document.getElementById('activeQuestion').innerHTML = 'What\'s your life, in four words?'
            } else if (randomVar == 11) {
                document.getElementById('activeQuestion').innerHTML = 'What do you want to master, if it took only a day?'
            } else if (randomVar == 12) {
                document.getElementById('activeQuestion').innerHTML = 'What truth do you search for?'
            } else if (randomVar == 13) {
                document.getElementById('activeQuestion').innerHTML = 'What is your greatest and most impossible dream?'
            } else if (randomVar == 14) {
                document.getElementById('activeQuestion').innerHTML = 'What is your greatest accomplishment?'
            } else if (randomVar == 15) {
                document.getElementById('activeQuestion').innerHTML = 'What do you value most in a friend?'
            } else if (randomVar == 16) {
                document.getElementById('activeQuestion').innerHTML = 'What is your most treasured memory?'
            } else if (randomVar == 17) {
                document.getElementById('activeQuestion').innerHTML = 'What do you not want to remember?'
            } else if (randomVar == 18) {
                document.getElementById('activeQuestion').innerHTML = 'If you only had a year left to live, what would you do?'
            } else if (randomVar == 19) {
                document.getElementById('activeQuestion').innerHTML = 'What is a friendship, to you?'
            } else if (randomVar == 20) {
                document.getElementById('activeQuestion').innerHTML = 'Who loves you most?'
            } else if (randomVar == 21) {
                document.getElementById('activeQuestion').innerHTML = 'What is the best characteristic of your best friend?'
            } else if (randomVar == 22) {
                document.getElementById('activeQuestion').innerHTML = 'What do you think of your family?'
            } else if (randomVar == 23) {
                document.getElementById('activeQuestion').innerHTML = 'How would you describe your mother?'
            } else if (randomVar == 24) {
                document.getElementById('activeQuestion').innerHTML = 'How would you describe your father?'
            } else if (randomVar == 25) {
                document.getElementById('activeQuestion').innerHTML = 'What do you want your friends to know?'
            } else if (randomVar == 26) {
                document.getElementById('activeQuestion').innerHTML = 'What is your name?'
            } else if (randomVar == 27) {
                document.getElementById('activeQuestion').innerHTML = 'What is your quest?'
            } else if (randomVar == 28) {
                document.getElementById('activeQuestion').innerHTML = 'What is the airspeed velocity of an unladen swallow?'
            } else if (randomVar == 29) {
                document.getElementById('activeQuestion').innerHTML = 'How important is honesty to you?'
            } else if (randomVar == 30) {
                document.getElementById('activeQuestion').innerHTML = 'What is an embarrassing moment you can now laugh about?'
            } else if (randomVar == 31) {
                document.getElementById('activeQuestion').innerHTML = 'When did you last cry?'
            } else if (randomVar == 32) {
                document.getElementById('activeQuestion').innerHTML = 'Is there someone on this website you\'ve grown fond of?'
            } else if (randomVar == 33) {
                document.getElementById('activeQuestion').innerHTML = 'What, if anything, is too serious to be joked about?'
            } else if (randomVar == 34) {
                document.getElementById('activeQuestion').innerHTML = 'If your house started to burn down, what would you save?'
            } else if (randomVar == 35) {
                document.getElementById('activeQuestion').innerHTML = 'Why are you on this website?'
            }
        }, 15000);
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
                        document.getElementById('messagebox').style.display = 'block';
                        document.getElementById('activeuser').style.display = 'block';
                        document.getElementById('loginButton').style.display = 'none';
                        document.getElementById('registerButton').style.display = 'none';
                        document.getElementById('versionbox').style.display = "none";
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
                        document.getElementById('messagebox').style.display = 'block';
                        document.getElementById('loginButton').style.display = 'none';
                        document.getElementById('registerButton').style.display = 'none';
                        document.getElementById('versionbox').style.display = "none";
                    }
                });
            }
            main.checkMessages();
        });
    }

    static handleAboutMe() {
        document.getElementById('userpageSubmit').addEventListener('click', () => {
            main.performAjax('XMLHttpRequest4', JSON.stringify([document.getElementById('activeemail').innerHTML, document.getElementById('hobby').value, document.getElementById('job').value, document.getElementById('goal').value, document.getElementById('identity').value]), () => {
                alert('Data updated! Future chat partners will not be made aware of this information when you chat. It may be used to match you up with partners who are unlike you. If you want the matching process to be completely random, as it is by default, then re-submit your answers with the fields blank.');
                document.getElementById('hobby').value = '';
                document.getElementById('job').value = '';
                document.getElementById('goal').value = '';
                document.getElementById('identity').value = '';

            });
            main.checkMessages();
        });
    }

    static switchPages() {
        document.getElementById('registerButton').addEventListener('click', () => {
            document.getElementById('signupPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('loginPage').style.display = "none";
            main.checkMessages();
        });
        document.getElementById('loginButton').addEventListener('click', () => {
            document.getElementById('loginPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('signupPage').style.display = "none";
            main.checkMessages();
        });
        document.getElementById('activeuser').addEventListener('click', () => {
            document.getElementById('userPage').style.display = "block";
            document.getElementById('mainPage').style.display = "none";
            document.getElementById('otherUserPage').style.display = "none";
            document.getElementById('userpageTitle').innerHTML = 'So, ' + document.getElementById('activeuser').innerHTML + ', what\'s your story?';
            main.checkMessages();
        });
        document.getElementById('shortName').addEventListener('click', () => {
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('loginPage').style.display = "none";
            document.getElementById('userPage').style.display = "none";
            document.getElementById('signupPage').style.display = "none";
            document.getElementById('otherUserPage').style.display = "none";
            main.checkMessages();
        });
        document.getElementById('fullName').addEventListener('click', () => {
            document.getElementById('mainPage').style.display = "block";
            document.getElementById('loginPage').style.display = "none";
            document.getElementById('userPage').style.display = "none";
            document.getElementById('signupPage').style.display = "none";
            document.getElementById('otherUserPage').style.display = "none";
            main.checkMessages();
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
                    alert('You\'re chatting! Have fun, and be nice!');
                    response = JSON.parse(response);
                    document.getElementById('otheruserpageTitle').innerHTML = response[0];
                    document.getElementById('otheruserpageTitle').style.display = 'none';
                    main.performAjax('XMLHttpRequest10', JSON.stringify([document.getElementById('activeemail').innerHTML, document.getElementById('otheruserpageTitle').innerHTML]), (response) => {
                        response = JSON.stringify(response);
                        response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '').replace(/"\[\[/g, '').replace(/\\,\[/g, '').replace(/\\,/g, '').replace(/"\[/g, '').replace(/""/g, '');
                        document.getElementById('otherusercomments').innerHTML = response;
                    });
                }
            });
            main.checkMessages();
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
            main.checkMessages();
        });
    }

    static addComment() {
        document.getElementById('addComment').addEventListener('click', () => {
            if (document.getElementById('commentText').value == '') {
                alert('Cat got your tongue?');
            } else {
                let sendaway = '<div style="text-align: center">' + document.getElementById('commentText').value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\\/g, "&#92;") + '</div><br>';
                document.getElementById('commentText').value = '';
                main.performAjax('XMLHttpRequest1', JSON.stringify(sendaway), (response) => {
                    response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '');
                    document.getElementById('comments').innerHTML = response;
                });
            }
            main.checkMessages();
        });
    }

    static sendDM() {
        document.getElementById('otheruseraddcomment').addEventListener('click', () => {
            if (document.getElementById('otherusercommentText').value == '') {
                alert('Don\'t be shy, now!');
            } else {
                let sendaway = '<div style="text-align: center">' + document.getElementById('otherusercommentText').value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\\/g, "&#92;") + '</div><br>';
                document.getElementById('otherusercommentText').value = '';
                main.performAjax('XMLHttpRequest6', JSON.stringify([document.getElementById('activeemail').innerHTML, document.getElementById('otheruserpageTitle').innerHTML, [sendaway], document.getElementById('activeemail').innerHTML]), (response) => {
                    response = JSON.stringify(response);
                    response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '').replace(/"\[\[/g, '').replace(/\\,\[/g, '').replace(/\\,/g, '').replace(/"\[/g, '');
                    document.getElementById('otherusercomments').innerHTML = response;
                });
            }
            main.checkMessages();
        });
    }

    static manualCheckMessages() {
        document.getElementById('messagebox').addEventListener('click', () => {
            main.performAjax('XMLHttpRequest7', document.getElementById('activeemail').innerHTML, (response) => {
                if (response != 1) {
                    document.getElementById('messagebox').style.display = "none";
                    document.getElementById('messagebox2').style.display = "block";
                    document.getElementById('otheruserpageTitle').innerHTML = response;
                } else {
                    document.getElementById('messagebox').style.display = "block";
                    document.getElementById('messagebox2').style.display = "none";
                    alert('No new messages yet. Hang tight, though, something is sure to come through!');
                }
            });
        });
    }

    static checkMessages() {
        main.performAjax('XMLHttpRequest7', document.getElementById('activeemail').innerHTML, (response) => {
            if (response != 1) {
                document.getElementById('messagebox').style.display = "none";
                document.getElementById('messagebox2').style.display = "block";
                document.getElementById('otheruserpageTitle').innerHTML = response;
            } else {
                document.getElementById('messagebox').style.display = "block";
                document.getElementById('messagebox2').style.display = "none";
            }
        });
    }

    static respondToMessages() {
        document.getElementById('messagebox2').addEventListener('click', () => {
            document.getElementById('otherUserPage').style.display = "block";
            document.getElementById('userPage').style.display = "none";
            document.getElementById('mainPage').style.display = "none";
            main.performAjax('XMLHttpRequest8', JSON.stringify(document.getElementById('activeemail').innerHTML), (response) => {
                alert('You\'re chatting! Have fun, and be nice!');
                response = JSON.parse(response);
                document.getElementById('otheruserpageTitle').innerHTML = response[1];
                document.getElementById('otheruserpageTitle').style.display = 'none';
                document.getElementById('otherusercomments').innerHTML = response[2];
            });
            main.performAjax('XMLHttpRequest9', JSON.stringify([document.getElementById('activeemail').innerHTML, document.getElementById('otheruserpageTitle').innerHTML]), (response) => {
                response = JSON.stringify(response);
                response = response.replace(/"]/g, '').replace(/\["/g, '').replace(/\\"/g, '').replace(/","/g, '').replace(/"\[\[/g, '').replace(/\\,\[/g, '').replace(/\\,/g, '').replace(/"\[/g, '');
                document.getElementById('otherusercomments').innerHTML = response;
            });
            main.checkMessages();
        });
    }

    static preventEnterKeys() {
        document.getElementById('commentText').addEventListener('keypress', (evt) => {
            if (evt.which === 13) {
                evt.preventDefault();
            }
        });
        document.getElementById('otherusercommentText').addEventListener('keypress', (evt) => {
            if (evt.which === 13) {
                evt.preventDefault();
            }
        });
    }

    static handleAboutSite() {
        document.getElementById('versionbox').addEventListener('click', () => {
           alert('Welcome to I.F.; Welcome to International Friends! This website is designed to be a stress-free location for people all around the world, and from many different cultures, to exchange their thoughts.');
           alert('All communication on this website is 100% anonymous. Other people won\'t know your name, email address, age, location, or ANYTHING else. You are entirely in control of your public Persona here.');
           alert('There are currently two primary ways to communicate--on the basic homepage, here, where various discussion topics are offered up at random, or you can try a private chat, where you will be matched up with another random user of this website.');
           alert('If a person is not logged in, they may not respond to your messages right away. That\'s alright! Try chatting with someone new, or join the public chat. This website is going to be big soon, and I\'m so happy you\'re going to be part of it.');
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