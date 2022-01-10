module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    group: {
      type: Sequelize.INTEGER,
      // allowNull: false,
    },
    posted_url: {
      type: Sequelize.STRING,
    },
    brief: {
      type: Sequelize.TEXT,
    },
    updates: {
      type: Sequelize.TEXT,
    },
    focus_keywords: {
      type: Sequelize.STRING,
    },
    wordpress_url: {
      type: Sequelize.STRING,
    },
    doc_url: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM({
        values: [
          // start Here, KEVIN!
        ]
      })
    },
    contributor: {
      // foreign key to user
      type: Sequelize.STRING,
    },
  });

  return Article;
};