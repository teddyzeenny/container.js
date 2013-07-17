module.exports = {
  main: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['**/*.js'],
      dest: 'tmp/amd'
    }]
  },
  test: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'test/',
      src: ['**/*.js', '!vendor/**/*'],
      dest: 'tmp/test/'
    }]
  }
};
