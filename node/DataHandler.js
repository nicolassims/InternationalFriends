"use strict";

const IO = require('fs');

let comments = [];

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
}

module.exports = DataHandler;