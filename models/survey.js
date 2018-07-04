module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    snum:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    buyer:{type: DataTypes.STRING},
    cost:{type: DataTypes.DOUBLE, defaultValue: '400'},
    date_delivered:{type: DataTypes.DATEONLY},
    date_field:{type: DataTypes.DATEONLY},
    date_drafted:{type: DataTypes.DATEONLY},
    address:{type: DataTypes.STRING, allowNull: false},
    city:{type: DataTypes.STRING, allowNull: false},
    state:{type: DataTypes.STRING, allowNull: false},
    zipcode:{type: DataTypes.STRING, allowNull: false},
  },
  {
    timestamps: false
  });

  Survey.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Survey.hasOne(models.Elevation, {
      onDelete: "cascade"
    });

    Survey.hasOne(models.Legal_Desc, {
      onDelete: "cascade"
    });

    Survey.hasOne(models.Lender, {
      onDelete: "cascade"
    });

    Survey.hasOne(models.Underwriter, {
      onDelete: "cascade"
    });    
  };

  return Survey;
};
