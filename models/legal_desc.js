module.exports = function(sequelize, DataTypes) {

  var Legal_Desc = sequelize.define("Legal_Desc", {
    ldid:{type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    plat_book:{type: DataTypes.STRING},
    page:{type: DataTypes.STRING},
    lot:{type: DataTypes.STRING},
    block:{type: DataTypes.STRING},
    long_legal:{type: DataTypes.BOOLEAN, defaultValue: false},
    subdivision:{type: DataTypes.STRING}
  }, {timestamps: false});

  Legal_Desc.associate = function(models){

    Legal_Desc.belongsTo(models.Survey, {
      foreignKey:{ allowNull: false},
      onDelete: "cascade"
    });

  };

  return Legal_Desc;
};