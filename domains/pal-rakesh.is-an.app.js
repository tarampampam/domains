addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'pal-rakesh',
  owner: {
    repo: 'https://github.com/pal-rakesh/pal-rakesh.github.io',
    email: ' rakesh.pal@truestaz.com',
  },
  record: {
    CNAME: 'pal-rakesh.github.io',
  },
  proxy: false,
})
