"use strict";

const IO = require('fs');

let comments = [];
let users = [];

class DataHandler {
    static refreshComments() {
        return comments;
    }

    static addComments(data) {
        if (comments.length == 0) {
            comments[0] = data;
        } else {
            comments.unshift(data);
        }
        if (comments.length >= 100) {
            comments[100] = null;
        }
        return comments;
    }

    static handleUserSignup(data) {
        data = JSON.parse(data);
        data = data.toString().split(/,/);
        for (let i = 0; i < users.length; i++) {
            if (data[0] == users[i][0]) {
                return 1;
            }
        }
        users[users.length] = data;
        return users[users.length - 1];
    }

    static handleUserLogin(data) {
        data = JSON.parse(data);
        data = data.toString().split(/,/);
        for (let i = 0; i < users.length; i++) {
            if (data[0] == users[i][0] && data[1] == users[i][1]) {
                return users[i];
            }
        }
        return 1;
    }

    static handleUserIdentity(data) {
        data = JSON.parse(data);
        data = data.toString().split(/,/);
        for (let i = 0; i < users.length; i++) {
            if (data[0] == users[i][0]) {
                if (data[1] != '') {
                    users[i][3] = data[1]
                }
                if (data[1] != '') {
                    users[i][4] = data[2]
                }
                if (data[1] != '') {
                    users[i][5] = data[3]
                }
                if (data[1] != '') {
                    users[i][6] = data[4]
                }
            }
        }
    }

    static getChatPartner(data) {
        let partnerID = Math.floor(Math.random() * (users.length - 1));
        console.log(partnerID);
        console.log(data);
        console.log(users[partnerID][0]);
        if (data == JSON.stringify(users[partnerID][0])) {
            partnerID++;
            if (users[partnerID][0] == null) {
                partnerID = partnerID - 2;
                if (users[partnerID][0] == null) {
                    return 1;
                }
            }
        }
        return users[partnerID];
    }
}

module.exports = DataHandler;