const tags = (sequelize, DataTypes) => {
    return sequelize.define('tags',{
        categories :{
            type : DataTypes.STRING(255),
            allowNull: false,
            unique:true
        },
    })
  }
  
  module.exports = tags