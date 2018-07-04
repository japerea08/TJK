module.exports = function(sequelize, DataTypes) {

  var Lender = sequelize.define("Lender", {
    lid:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
  });

  Lender.associate = function(models){

    Lender.belongsTo(models.Survey, {
      foreignKey:{ allowNull: false},
      onDelete: "cascade"
    });

  };

  return Lender;
};