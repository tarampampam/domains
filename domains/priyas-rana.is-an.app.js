addSubDomain({
    description: 'I want to publish my profile',
    domain: 'is-an.app',
    subdomain: 'priyas-rana',
    owner: {
      repo: 'https://github.com/priyas-rana/priyas-rana.github.io',
      email: 'priyas.rana@truestaz.com',
    },
    record: {
      CNAME: 'priyas-rana.github.io',
    },
    proxy: false,
  })