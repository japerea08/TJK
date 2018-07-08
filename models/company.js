module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    cid:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    company_name:{type: DataTypes.STRING},
    address:{type: DataTypes.STRING, allowNull: false},
    city:{type: DataTypes.STRING, allowNull: false},
    state:{type: DataTypes.STRING, allowNull: false},
    zipcode:{type: DataTypes.STRING, allowNull: false},
    email:{type: DataTypes.STRING, validate:{isEmail: true}},
    phone_number:{type: DataTypes.STRING}
  });

  Company.associate = function(models){
    Company.hasMany(models.Survey); 
  };
  return Company;
};