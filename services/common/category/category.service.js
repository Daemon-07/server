const CategoryRepository = require('../../../repository/common/categories/category.repo');
const uploadFile = require('../../../Utils/fileUpload');
const fs = require("fs");
const Path = require('path')



exports.addCategory = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            let categoryDetail = req.body;
            let fileUpload = await uploadFile(req, res);
            if (req.filePath) {
                categoryDetail = req.body;
                delete categoryDetail['photo'];
                categoryDetail.imageUrl = '/images/' + req.filePath;
            }
            let responseData = await CategoryRepository.insertCategoryData(categoryDetail);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.updateCategory = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            let categoryDetail = req.body;
            let fileUpload = await uploadFile(req, res);
            if (req.filePath) {
                console.log('image');
                let getCategorydata = await CategoryRepository.getACategoryData(categoryDetail);
                if (getCategorydata) {
                    let imageResponse = 'uploads/' + getCategorydata.imageUrl;
                    const path = Path.join(imageResponse)
                    if (fs.existsSync(path)) {
                        fs.unlink(imageResponse, (err) => {
                            if (err) {
                                resolve(err);
                            }
                        });
                    }
                    categoryDetail = req.body;
                    delete categoryDetail['photo'];
                    categoryDetail.imageUrl = '/images/' + req.filePath;
                }
            } else {
                categoryDetail = req.body;
            }
            let responseData = await CategoryRepository.updateCategoryData(categoryDetail);
            resolve(responseData);
        } catch (error) {
            reject(error);
        };
    });
};

exports.getCategory = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await CategoryRepository.getCategoryData(req);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};

exports.deleteCategory = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let responseData = await CategoryRepository.deleteCategoryData(req.query.categoryId);
            resolve(responseData);
        } catch (error) {
            reject(error)
        };
    });
};