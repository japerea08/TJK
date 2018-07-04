module.exports = function(sequelize, DataTypes) {

  var Elevation = sequelize.define("Elevation", {
    elev_id:{type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    flood_zone:{type: DataTypes.STRING, allowNull: false},
    base_flood:{type: DataTypes.INTEGER, allowNull: false},
    community_number:{type: DataTypes.INTEGER, allowNull: false},
    panel:{type: DataTypes.STRING, allowNull: false},
    date_of_index:{type: DataTypes.STRING, allowNull: false},
  });
  return Elevation;

};