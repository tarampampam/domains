addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 's-nishit',
  owner: {
    repo: 'https://github.com/s-nishit/s-nishit.github.io',
    email: 'nishit.shah@truestaz.com',
  },
  record: {
    CNAME: 's-nishit.github.io',
  },
  proxy: false,
})
