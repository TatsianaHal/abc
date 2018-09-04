function configDeserialize(User) {
  return function deserialize(id, done) {
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  };
}

module.exports = configDeserialize;
