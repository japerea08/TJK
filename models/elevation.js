module.exports = function(sequelize, DataTypes) {

  var Elevation = sequelize.define("Elevation", {
    elev_id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    flood_zone:{type: DataTypes.STRING, allowNull: false},
    base_flood:{type: DataTypes.STRING, allowNull: false},
    community_number:{type: DataTypes.INTEGER, allowNull: false},
    panel:{type: DataTypes.STRING, allowNull: false},
    date_of_index:{type: DataTypes.STRING, allowNull: false},
  },{timestamps: false});

  Elevation.associate = function(models){

    Elevation.belongsTo(models.Survey, {
      foreignKey:{ allowNull: false},
    });

  };

  return Elevation;

};