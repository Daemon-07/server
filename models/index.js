const dbConfig = require('../config')().db;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user/user.model")(sequelize, Sequelize);
db.country = require("./common/location/country.model")(sequelize, Sequelize);
db.state = require("./common/location/state.model")(sequelize, Sequelize);
db.contact = require("./contact/contact.model")(sequelize, Sequelize);
db.city = require("./common/location/city.model")(sequelize, Sequelize);
db.locality = require("./common/location/locality.model")(sequelize, Sequelize);
db.training = require("./training/training.model")(sequelize, Sequelize);
db.module = require("./training/module.model")(sequelize, Sequelize);
db.chapter = require("./training/chapter.model")(sequelize, Sequelize);
db.batch = require("./training/batch.model")(sequelize, Sequelize);
db.topic = require("./training/topic.model")(sequelize, Sequelize)
db.payment = require("./training/payment.model")(sequelize, Sequelize);
db.domain = require("./common/domain.model")(sequelize, Sequelize);
// db.batch = require("./common/batch.model")(sequelize, Sequelize);
db.language = require("./common/language.model")(sequelize, Sequelize);
db.alumniFeedback = require("./common/alumni.model")(sequelize, Sequelize);
db.image = require("./common/image.model")(sequelize, Sequelize);
db.consultation = require("./common/consultation.model")(sequelize, Sequelize);
db.testimonial = require("./website/testimonial.model")(sequelize, Sequelize);
db.mentors = require("./website/mentors.model")(sequelize, Sequelize);

db.users.hasOne(db.testimonial, { foreignKey: 'userId', as: 'user' });
db.testimonial.belongsTo(db.users, { foreignKey: 'userId', as: 'user' });


db.category = require("./common/category/category.model")(sequelize, Sequelize);
db.subcategory = require("./common/category/subcategory.model")(sequelize, Sequelize);


db.category.hasMany(db.subcategory, { foreignKey: 'categoryId', as: 'category' });
db.subcategory.belongsTo(db.category, { foreignKey: 'categoryId', as: 'category' });


db.domain.hasMany(db.category, { foreignKey: 'domainId', as: 'domain' });
db.category.belongsTo(db.domain, { foreignKey: 'domainId', as: 'domain' });

db.state.hasMany(db.city, { foreignKey: 'stateId', as: 'state' });
db.city.belongsTo(db.state, { foreignKey: 'stateId', as: 'state' });


db.country.hasMany(db.state, { foreignKey: 'countryId', as: 'country' });
db.state.belongsTo(db.country, { foreignKey: 'countryId', as: 'country' });

db.state.hasMany(db.users, { foreignKey: 'stateId', as: 'userState' });
db.users.belongsTo(db.state, { foreignKey: 'stateId', as: 'userState' });

db.domain.hasMany(db.training, { foreignKey: 'domainId', as: 'trainingDomain' });
db.training.belongsTo(db.domain, { foreignKey: 'domainId', as: 'trainingDomain' });

db.language.hasMany(db.training, { foreignKey: 'languageId', as: 'language' });
db.training.belongsTo(db.language, { foreignKey: 'languageId', as: 'language' });

db.training.hasMany(db.batch, { foreignKey: 'trainingId', as: 'batch' });
db.batch.belongsTo(db.training, { foreignKey: 'trainingId', as: 'batch' });

db.training.hasMany(db.module, { foreignKey: 'trainingId', as: 'module' });
db.module.belongsTo(db.training, { foreignKey: 'trainingId', as: 'module' });

db.module.hasMany(db.chapter, { foreignKey: 'moduleId', as: 'chapter' }); 
db.chapter.belongsTo(db.module, { foreignKey: 'moduleId', as: 'chapter' });

db.chapter.hasMany(db.topic, { foreignKey: 'chapterId', as: 'topics' });
db.topic.belongsTo(db.chapter, { foreignKey: 'chapterId', as: 'topics' }); 

db.training.hasMany(db.payment, { foreignKey: 'trainingId', as: 'training' });
db.payment.belongsTo(db.training, { foreignKey: 'trainingId', as: 'training' });



db.sequelize.sync();
module.exports = db; 