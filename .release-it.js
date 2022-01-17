module.exports = {
  safeBump: false,
  git: {
    commit: true,
    commitArgs: ['-n'],
    commitMessage: 'release(:tada:): ${version}',
    push: true,
    requireCleanWorkingDir: false,
    requireUpstream: false,
    tagName: 'v${version}',
  },
  npm: {
    publish: true,
  },
  github: {
    update: true,
    release: true,
    releaseName: '🚀 🎊 🎉 Release ${version} 🎉 🎊 🚀',
  },
  hooks: {
    'after:git:release': 'git push origin HEAD',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
    },
  },
};
