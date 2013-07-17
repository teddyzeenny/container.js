module.exports = {
  main: {
    files: [{
      src: ['tmp/container.js'],
      dest: 'dist/container.js'
    }]
  },
  test: {
    files: [
    {
      expand: true,
      cwd: 'vendor',
      src: ['**'],
      dest: 'tmp/vendor'
    },
    {
      expand: true,
      cwd: 'test',
      src: ['vendor/**'],
      dest: 'tmp/test'
    }, {
      expand: true,
      cwd: 'test',
      src: ['*.html'],
      dest: 'tmp/'
    }]
  }
};
