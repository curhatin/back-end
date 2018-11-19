const posts = (sequelize, DataTypes) => {
  return sequelize.define('posts',{
      id_user :{
          type : DataTypes.INTEGER(11),
          allowNull: false,
          foreignKey:true,
          references :{
              model : "users",
              key:"id"
          }
      },
      id_tag :{
        type : DataTypes.INTEGER(11),
        allowNull: false,
        foreignKey:true,
        references :{
            model : "tags",
            key:"id"
        }
      },
      shared :{
          type : DataTypes.STRING(2550),
          allowNull: false
      }
  })
}

module.exports = posts