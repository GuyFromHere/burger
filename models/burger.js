const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        })
    },
    create: (data, cb) => {
        orm.insertOne(data, (res) => {
            cb(res);
        });
    },
    update: (data, cb) => {
        orm.updateOne(data, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
