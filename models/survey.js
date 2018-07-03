module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    
  });

  Survey.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Survey;
};
