const DomainRepository = require("../../../repository/common/domain/domain.repo");
const uploadFile = require("../../../Utils/fileUpload");

exports.addDomain = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let fileUpload = await uploadFile(req, res);
      let domainDetail = req.body;
      delete domainDetail["photo"];
      domainDetail.domainImage = "/images/" + req.filePath;
      let responseData = await DomainRepository.insertDomainData(domainDetail);
      resolve(responseData);
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateDomain = (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      let fileUpload = await uploadFile(req, res);
      let domainDetail = req.body;
      delete domainDetail["photo"];
      domainDetail.domainImage = "/images/" + req.filePath;
      let responseData = await DomainRepository.updateDomainData(domainDetail);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.getDomain = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let responseData = await DomainRepository.getDomainData(req);
      resolve(responseData);
    } catch (error) {
      reject(error);
    };
  });
};

exports.deleteDomain = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let domainId = req.query.domainId;
      let responseData = await DomainRepository.deleteDomainData(domainId);
      resolve(responseData);
    } catch (error) {
      reject(error)
    };
  });
};
