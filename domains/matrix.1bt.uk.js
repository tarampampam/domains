  addSubDomain({
    description: 'I want to publish my profile',
    domain: '1bt.uk',
    subdomain: 'matrix',
    owner: {
      repo: 'https://github.com/maanimis/maanimis.github.io',
      email: 'maani.meisam@gmail.com',
    },
    record: {
      CNAME: 'maanimis.github.io',
    },
    proxy: true,
  })