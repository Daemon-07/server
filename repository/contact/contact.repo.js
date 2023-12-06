const db = require('../../models');
const {
    Op
} = require("sequelize");

exports.insertContactDetail = async (contactData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.contact
                .bulkCreate(contactData)
                .then(contactDetail => {
                    resolve(contactDetail);
                }).catch(error => {
                    resolve(error);
                });
        } catch (error) {
            reject(error);
        };
    });
};

exports.getContactData = async (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page = 1;
            let limit = 1;
            let offset = 0;
            let where = {};
            if (payload.pagination) {
                page = payload.pagination.page;
                limit = payload.pagination.limit;
                offset = limit * (page - 1);

            }
            else {
                where = { contactId: payload };
            }
            db.contact.
                findAndCountAll({
                    attributes: ['contactId', 'contactName'],
                    where: where,
                    limit: limit,
                    offset: offset
                }).then(countries => {
                    resolve(countries);
                }).catch(error => {
                    resolve(error);
                });
        } catch (error) {
            reject(error);
        };
    });
};



