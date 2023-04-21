addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'chirag-parikh',
  owner: {
    repo: 'https://github.com/chirag-parikh/chirag-parikh.github.io',
    email: 'chirag.parikh@truestaz.com',
  },
  record: {
    CNAME: 'chirag-parikh.github.io',
  },
  proxy: false,
})
