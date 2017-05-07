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
}

module.exports = DataHandler;