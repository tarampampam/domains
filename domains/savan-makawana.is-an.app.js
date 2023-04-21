addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'savan-makawana',
  owner: {
    repo: 'https://github.com/savan-makawana/savan-makawana.github.io',
    email: 'savan.makawana@truestaz.com',
  },
  record: {
    CNAME: 'savan-makawana.github.io',
  },
  proxy: false,
})