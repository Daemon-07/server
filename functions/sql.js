const mysql_pool = require('../resources/dbconnect').mysql_pool;
const errorObj = require('./error');
const errorCode = require('../variables/errorCodes');

exports.executeSql = (sqlQuery, callback) => {
    let outputResponse = {};
    outputResponse.errorStatus = false;
    outputResponse.errorCode = '';
    outputResponse.errorMessage = '';
    try {

        mysql_pool.getConnection((err, con) => {
            if (err) {
                outputResponse.errorStatus = true;
                outputResponse.errorCode = err.code;
                outputResponse.errorMessage = err.message;
                callback(outputResponse);
            } else {
                con.query(sqlQuery, (err, results, fields) => {
                    con.release();
                    if (err) {
                        outputResponse.errorStatus = true;
                        outputResponse.errorCode = err.code;
                        outputResponse.errorMessage = err.sqlMessage;
                        outputResponse.data = '';
                        callback(outputResponse);
                    } else {
                        if(results[0][0])
                        {
                            outputResponse.errorStatus = false;
                            outputResponse.errorCode = '';
                            outputResponse.errorMessage = '';
                            outputResponse.data = results[0];
                        }
                        else{
                            outputResponse.errorStatus = true;
                            outputResponse.errorCode = 'NO_DATA_FOUND';
                            outputResponse.errorMessage = 'Returns nothing from db';
                            outputResponse.data = {};
                        }
                        
                        callback(outputResponse);
                    }
                });
            }
        });
    } catch (error) {
        outputResponse.errorStatus = true;
        outputResponse.errorCode = error.code;
        outputResponse.errorMessage = error.message;
        outputResponse.data = '';
        callback(outputResponse);
    }
}