let config = require('./../config/config.json');

//static data to don't have to generate the config_data 2 times
let config_data = null;

module.exports = () => {

    // if the static data was already set. return it
    if (config_data != null && config_data != undefined) {
        // return config_data
    }

    config_data = {};

    //LOAD JSON
     let node_environment = "development";
    // let node_environment = "staging";
    // let node_environment = "production";
    if (node_environment == "development") {
        // console.log(config.development.server.host);
        config_data=config.development;
        // return config_data;
        // config_data = config.development;
        // config_data.server.host = config_data.server.ip;
        // config_data.server.port = process.env.PORT || config_data.server.port;
    } else if(node_environment == "production") {
        config_data=config.production;
        // config_data = config.production;
        // config_data.server.host = config_data.server.ip;
        // config_data.server.port = process.env.PORT || config_data.server.port;
    } else if(node_environment == "staging") {
        config_data=config.staging;
        // config_data = config.staging;
        // config_data.server.host = config_data.server.ip;
        // config_data.server.port = process.env.PORT || config_data.server.port;
    }
    return config_data;
};
