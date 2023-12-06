const db = require('../../../models');
const {
    Op
} = require("sequelize");
exports.insertCategoryData = async function (categoryData) {
    return new Promise(async function (resolve, reject) {

        try {
            db.category.create(categoryData).then(categoryDetail => {
                resolve(categoryDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};

exports.updateCategoryData = async function (categoryData) {
    return new Promise(async function (resolve, reject) {
        
        try {
            db.category.update(categoryData, {
                where: {
                    categoryId: categoryData.categoryId
                }
            }).then(categoryDetail => {
                resolve(categoryDetail);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};

exports.getCategoryData = async function (req) {

    return new Promise(async function (resolve, reject) {
        let where= {}
    
        try {
            if(req.query.domainId){
                where={
                    domainId : req.query.domainId
                };
            }
            db.category.findAndCountAll({
                logger:true,
                where :where,
                attributes: ['categoryId', 'categoryName', 'imageUrl','activeStatus'],
                include: [{
                    model: db.domain,
                    as: "domain",
                    attributes: ['domainId', 'domainName'],
                }],
            }).then(categories => {
             
                resolve(categories);
            }).catch(error => {
               
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};
exports.getACategoryData = async function (categoryId) {

    return new Promise(async function (resolve, reject) {
        let outputResponse = {};
        try {
            db.category.findOne({
                attributes: ['categoryId', 'categoryName', 'imageUrl'],
                include: [{
                    model: db.domain,
                    as: "domain",
                    attributes: ['domainId', 'domainName'],
                }],
            }).then(categories => {
                

                resolve(categories);
            }).catch(error => {

                resolve(error);
            });
        } catch (error) {
            outputResponse = {};
            resolve(outputResponse);
        }
    });

};


exports.deleteCategoryData = async function (categoryId) {

    return new Promise(async function (resolve, reject) {
   
        try {
            db.category.destroy({
                where: {
                    categoryId: categoryId
                }
            }).then(num => {
                resolve(num);
            }).catch(error => {
                resolve(error);
            });
        } catch (error) {
            resolve(error);
        }
    });

};