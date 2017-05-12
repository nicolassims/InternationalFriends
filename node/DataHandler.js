"use strict";

let comments = [];
let users = [];
let worldWideComments = [];

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
        let tries = 0;
        while (tries < 5) {
            let min = Math.ceil(0);
            let max = Math.floor(users.length - 1);
            let partnerID = Math.floor(Math.random() * (max - min + 1)) + min;
            if (data == JSON.stringify(users[partnerID][0])) {
                tries++
            } else {
                return users[partnerID];
            }
        }
        return 1;
    }

    static chatWithPartner(data) {
        data = JSON.parse(data);
        console.log(data);
        if (worldWideComments.length == 0) {
            worldWideComments[0] = data;
            return worldWideComments[0][2];
        } else {
            for (let i = 0; i < worldWideComments.length; i++) {
                if (data[0] == worldWideComments[i][0] && data[1] == worldWideComments[i][1] || data[0] == worldWideComments[i][1] && data[1] == worldWideComments[i][0]) {
                    worldWideComments[i][2].unshift(data[2]);
                    worldWideComments[i][3] = data[3];
                    return worldWideComments[i][2];
                }
            }
            worldWideComments[worldWideComments.length] = data;
        }
        return worldWideComments[worldWideComments.length][2];
    }

    static checkMessages(data) {
        for (let i = 0; i < worldWideComments.length; i++) {
            if (data == worldWideComments[i][0] || data == worldWideComments[i][1]) {
                if (worldWideComments[i][3] != data) {
                    return 1;
                }
            }
        }
    }

    static resumeConvo(data) {
        for (let i = 0; i < worldWideComments.length; i++) {
            if (data == worldWideComments[i][0] || data == worldWideComments[i][1]) {
                if (worldWideComments[i][3] != data) {
                    return worldWideComments[i];
                }
            }
        }
    }
}

module.exports = DataHandler;