module.exports = {
  safeBump: false,
  git: {
    commit: true,
    commitArgs: ['-n'],
    commitMessage: ':tada:: v${version}',
    push: true,
    requireCleanWorkingDir: false,
    requireUpstream: false,
    tagName: 'v${version}',
  },
  npm: {
    publish: true,
    skipChecks: true,
  },
  github: {
    update: true,
    release: true,
    releaseName: '🚀 🎊 🎉 Release v${version} 🎉 🎊 🚀',
  },
  hooks: {
    'before:init': 'git fetch --prune --prune-tags origin',
    'after:git:release': 'git push origin HEAD',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
    },
  },
};
