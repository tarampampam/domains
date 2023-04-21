addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'mausami-parmar',
  owner: {
    repo: 'https://github.com/mausami-parmar/mausami-parmar.github.io',
    email: 'mausami.parmar@truestaz.com',
  },
  record: {
    CNAME: 'mausami-parmar.github.io',
  },
  proxy: false,
})