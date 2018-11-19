const comments = (sequelize, DataTypes) => {
    return sequelize.define('comments',{
        comments :{
            type : DataTypes.TEXT('long')
        },
    })
  }
  
  module.exports = comments