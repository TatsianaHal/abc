function configSerialize() {
  return function serialize(user, done) {
    done(null, user.id);
  };
}

module.exports = configSerialize;
