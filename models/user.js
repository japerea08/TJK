module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    uuid:{type: DataTypes.STRING, primaryKey: true},
    company:{type: DataTypes.STRING, allowNull: false},
    first_name:{type: DataTypes.STRING, allowNull: false},
    last_name:{type: DataTypes.STRING, allowNull: false},
    address:{type: DataTypes.STRING, allowNull: false},
    city:{type: DataTypes.STRING, allowNull: false},
    state:{type: DataTypes.STRING, allowNull: false},
    zipcode:{type: DataTypes.STRING, allowNull: false},
    email:{type: DataTypes.STRING, validate:{isEmail: true}},
    phone_number:{type: DataTypes.STRING},
    admin:{type: DataTypes.BOOLEAN, defaultValue: false}
  },{timestamps: false});

  User.associate = function(models) {
    User.hasMany(models.Survey);  
  };


  return User;
};