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
    update: (devourState, id, cb) => {
        // pass devourState from browser > controller > model and finally to orm
        orm.updateOne(devourState, id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
