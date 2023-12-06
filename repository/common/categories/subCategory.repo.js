const db = require('../../../models');
const {
    Op
} = require("sequelize");
exports.insertsubCategoryData = async (subCategoryData) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.subcategory.create(subCategoryData).then(subCategoryDetail => {
                resolve(subCategoryDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.updatesubCategoryData = async (subCategoryData) => {
    return new Promise(async (resolve, reject) => {
        let subcategoryId = subCategoryData.subcategoryId;
        delete subCategoryData.subcategoryId;
        delete subCategoryData.categoryId;
        console.log(subCategoryData);
        try {
            db.subcategory.update(subCategoryData, {
                where: {
                    subcategoryId: subcategoryId
                }
            }).then(subCategoryDetail => {
                resolve(subCategoryDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};

exports.getsubCategoryData = async (req) => {
    return new Promise(async (resolve, reject) => {
        let where = {};
        if (req.query.categoryId) {
            where = {
                categoryId: req.query.categoryId
            }
        }
        try {
            db.subcategory.findAll({
                where: where,
                attributes: ['subcategoryId', 'categoryId', 'subcategoryName', 'imageUrl', 'activeStatus']
            }).then(subcategories => {
                resolve(subcategories);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });

};
exports.getAsubCategoryData = async (subcategoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.subcategory.findOne({
                attributes: ['subcategoryId', 'categoryId', 'subcategoryName', 'imageUrl', 'activeStatus']

            }).then(subcategories => {
                resolve(subcategories);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            reject(error);
        }
    });
};


exports.deletesubCategoryData = async (subcategoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            db.subcategory.destroy({
                where: {
                    subcategoryId: subcategoryId
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