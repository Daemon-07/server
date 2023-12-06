const ConsultationRepository = require('../../repository/common/consultation.repo');

exports.addConsultation = function (req) {
    return new Promise(async function (resolve, reject) {
        let consultationDetail = req.body;

            let responseData = await ConsultationRepository.insertConsultationData(consultationDetail);
            resolve(responseData);

    });
};

exports.updateConsultation = function (req) {
    return new Promise(async function (resolve, reject) {
        let consultationDetail = req.body;

            let responseData = await ConsultationRepository.updateConsultationData(consultationDetail);
            resolve(responseData);

    });
};

exports.getConsultation = function (req) {
    return new Promise(async function (resolve, reject) {

            let responseData;
            if (req.query.consultationId) {
                responseData = await ConsultationRepository.getConsultationData( req.query.consultationId);
            } else {

                responseData = await ConsultationRepository.getConsultationData(req.body);
            }

            resolve(responseData);

    });
};

exports.deleteConsultation = function (req) {
    return new Promise(async function (resolve, reject) {
        let consultationId = req.query.consultationId;

            let responseData = await ConsultationRepository.deleteConsultationData(consultationId);
            resolve(responseData);

    });
};