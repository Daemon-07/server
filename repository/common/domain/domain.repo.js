const db = require('../../../models');

exports.insertDomainData = async (domainData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.domain.create(domainData).then(domainDetail => {
                resolve(domainDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.updateDomainData = async (domainData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.domain.update(domainData, {
                where: {
                    domainId: domainData.domainId
                }
            }).then(domainDetail => {
                resolve(domainDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.getDomainData = async (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.domain.findAndCountAll({
                attributes: ['domainId', 'domainName','domainImage','activeStatus']
            }).then(domain => {
                resolve(domain);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};

exports.deleteDomainData = async (domainId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.domain.destroy({
                where: {
                    domainId: domainId
                }
            }).then(num => {
                resolve(num);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};