addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 's-kunjan',
  owner: {
    repo: 'https://github.com/s-kunjan/s-kunjan.github.io',
    email: 'kunjan.shah@truestaz.com',
  },
  record: {
    CNAME: 's-kunjan.github.io',
  },
  proxy: false,
})
