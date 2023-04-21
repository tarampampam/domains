addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'ravi-pate',
  owner: {
    repo: 'https://github.com/ravi-pate/ravi-pate.github.io',
    email: ' ravi.patel@truestaz.com',
  },
  record: {
    CNAME: 'ravi-pate.github.io',
  },
  proxy: false,
})
