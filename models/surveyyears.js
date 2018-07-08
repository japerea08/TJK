module.exports = function(sequelize, DataTypes) {

  var SurveyYears = sequelize.define("SurveyYears", {
    year:{type: DataTypes.INTEGER, allowNull: false},
  },{timestamps: false});

  return SurveyYears;

};