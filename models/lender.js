module.exports = function(sequelize, DataTypes) {

  var Lender = sequelize.define("Lender", {
    lid:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
  });

  return Lender;
};