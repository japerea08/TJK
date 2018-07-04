module.exports = function(sequelize, DataTypes) {

  var Underwriter = sequelize.define("Underwriter", {
    uid:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
  });

   Underwriter.associate = function(models){

    Underwriter.belongsTo(models.Survey, {
      foreignKey:{ allowNull: false},
      onDelete: "cascade"
    });

  };

  return Underwriter;
};