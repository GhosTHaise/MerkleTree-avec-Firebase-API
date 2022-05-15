const firebase = require('../db');

const ref = firebase.firestore().collection('WhiteList');

module.exports = {
    ref
}
