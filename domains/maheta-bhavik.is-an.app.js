addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'maheta-bhavik',
  owner: {
    repo: 'https://github.com/maheta-bhavik/maheta-bhavik.github.io',
    email: 'mehta.bhavik@truestaz.com',
  },
  record: {
    CNAME: 'maheta-bhavik.github.io',
  },
  proxy: false,
})