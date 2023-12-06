exports.sendResponseObj = (statusCode, responseCode, message, res, output = '') => {
//   console.log(res);
// console.log(output);
    res.status(statusCode).json({
        'responseCode': responseCode,
        'message': message,
        'data': output 
    });
}
exports.sendGetResponseObj = (output,statusCode,res) => {
    res.status(statusCode).json(output);
}