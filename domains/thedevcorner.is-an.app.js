addSubDomain({
  description: 'I want to publish my code snippet service (ignore the repo name)',
  domain: 'is-an.app',
  subdomain: 'thedevcorner',
  owner: {
    repo: 'https://github.com/VienDeveloper/.VienBlog',
    email: 'vien@courvix.com',
  },
  record: {
    A: ['75.2.69.226'],
    TXT: ['deta-verification=gJN23d4CwbDfamznozqH3m9fvCB1EfD8']
  },
  proxy: false,
})
