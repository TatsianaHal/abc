module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: Sequelize.STRING,
    prev: Sequelize.TEXT,
    body: Sequelize.TEXT,
  });
  return Post;
};
