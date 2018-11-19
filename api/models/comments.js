const comments = (sequelize, DataTypes) => {
    return sequelize.define('comments',{
        categories :{
            type : DataTypes.STRING(2550),
            allowNull: false,
            unique:true
        },
    })
  }
  
  module.exports = comments