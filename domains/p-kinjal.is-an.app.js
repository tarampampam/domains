addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'p-kinjal',
  owner: {
    repo: 'https://github.com/p-kinjal/p-kinjal.github.io',
    email: 'kinjal.patel@truestaz.com',
  },
  record: {
    CNAME: 'p-kinjal.github.io',
  },
  proxy: false,
})
