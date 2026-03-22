const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  category: {
    type: DataTypes.STRING
  },
  tags: {
    type: DataTypes.STRING,
    get() {
      const raw = this.getDataValue('tags');
      return raw ? raw.split(',') : [];
    },
    set(val) {
      this.setDataValue('tags', Array.isArray(val) ? val.join(',') : val);
    }
  }
}, {
  timestamps: true
});

module.exports = Article;
