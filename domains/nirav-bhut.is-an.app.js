addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'nirav-bhut',
  owner: {
    repo: 'https://github.com/nirav-bhut/nirav-bhut.github.io',
    email: 'nirav.bhut@truestaz.com',
  },
  record: {
    CNAME: 'nirav-bhut.github.io',
  },
  proxy: false,
})