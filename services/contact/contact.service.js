const contactRepository = require('../../repository/contact/contact.repo');

exports.addContactDetail = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await contactRepository.insertContactDetail(req.body);
            resolve(responseData);
        }
        catch (error) {
            reject(error)
        };
    });
};

exports.getcontactDetails = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            var responseData;
            if (req.query.id) {
                responseData = await contactRepository.getContactData(req.query.id);
            } else {
                responseData = await contactRepository.getContactData(req.body);
            }
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};
