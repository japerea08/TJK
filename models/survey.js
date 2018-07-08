module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    snum:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    buyer:{type: DataTypes.STRING},
    address:{type: DataTypes.STRING, allowNull: false},
    city:{type: DataTypes.STRING, allowNull: false},
    state:{type: DataTypes.STRING, allowNull: false},
    zipcode:{type: DataTypes.STRING, allowNull: false},
    cost:{type: DataTypes.DOUBLE, defaultValue: '400'},
    date_ordered:{type: DataTypes.DATEONLY},
    date_needed:{type: DataTypes.DATEONLY},
    date_field:{type: DataTypes.DATEONLY},
    date_drafted:{type: DataTypes.DATEONLY},
    date_paid:{type: DataTypes.DATEONLY},
    comment:{type: DataTypes.TEXT},
    paid:{type: DataTypes.BOOLEAN, defaultValue: false},
    canceled:{type: DataTypes.BOOLEAN, defaultValue: false},
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

    Survey.hasMany(models.Employee);

    Survey.hasOne(models.Underwriter, {
      onDelete: "cascade"
    });   
  };

  return Survey;
};
