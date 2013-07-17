module.exports = {
  scripts: {
    files: ['lib/**/*', 'test/**/*'],
    tasks: ['lock', 'build_test', 'unlock'],
    options: {
      nospawn: true
    }
  }
};
