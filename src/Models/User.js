const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      lastname:{
        type: DataTypes.STRING,
        allowNull: false,

      
      },
    
      email: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          isEmail: true
        }

      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      googleId: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false
    }
  )
}
