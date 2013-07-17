module.exports = {
  all: {
    src: [
      'Gruntfile.js',
      'tmp/**/*.js',
      '!tmp/container.js',
      '!tmp/public/test.js',
      '!tmp/public/vendor/**'
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  },
  test: {
    src: [
      'tmp/test/**/*.js', '!tmp/test/vendor/**'
    ]
  }
};
