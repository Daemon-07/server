const subCategoryRepository = require('../../../repository/common/categories/subCategory.repo');
const uploadFile = require('../../../Utils/fileUpload');
const fs = require("fs");
const Path = require('path');


exports.addsubCategory = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fileUpload = await uploadFile(req, res);
            let subCategoryDetail = req.body;
            if (req.filePath) {
                subCategoryDetail = req.body;
                delete subCategoryDetail['photo'];
                subCategoryDetail.imageUrl = "/images/" + req.filePath;
                subCategoryDetail.categoryId = parseInt(subCategoryDetail.categoryId);
            }
            let responseData = await subCategoryRepository.insertsubCategoryData(subCategoryDetail);
            resolve(responseData);
        } catch (error) {
            reject(error);
        }
    });
};

exports.updatesubCategory = (req, res) => {
    var imageResponse;
    return new Promise(async (resolve, reject) => {
        try {
            let subCategoryDetail;
            let fileUpload = await uploadFile(req, res);
            subCategoryDetail = req.body;
            // console.log(subCategoryDetail);
            if (req.filePath) {
                let getsubCategorydata = await subCategoryRepository.getAsubCategoryData(subCategoryDetail);
                if (getsubCategorydata != null) {
                    let imageResponse = 'uploads/' + getsubCategorydata.imageUrl;
                    const path = Path.join(imageResponse)
                    if (fs.existsSync(path)) {
                        fs.unlink(imageResponse, (err) => {
                            if (err) {
                                resolve(err);
                            }
                        });
                    }
                    subCategoryDetail = req.body;
                    delete subCategoryDetail['photo'];
                    subCategoryDetail.imageUrl = "/images/" + req.filePath;
                    subCategoryDetail.categoryId = parseInt(subCategoryDetail.categoryId);
                }
            } else {
                subCategoryDetail = req.body;
            }
            let responseData = await subCategoryRepository.updatesubCategoryData(subCategoryDetail);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};

exports.getsubCategory = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await subCategoryRepository.getsubCategoryData(req);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};

exports.deletesubCategory = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let subcategoryId = req.query.subcategoryId;
            let responseData = await subCategoryRepository.deletesubCategoryData(subcategoryId);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};