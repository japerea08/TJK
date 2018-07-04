module.exports = function(sequelize, DataTypes) {

  var Underwriter = sequelize.define("Underwriter", {
    uid:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
  });

  return Underwriter;
};