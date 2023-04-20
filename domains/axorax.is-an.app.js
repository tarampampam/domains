addSubDomain({
  description: 'Personal website',
  domain: 'is-an.app',
  subdomain: 'axorax',
  owner: {
    repo: 'https://github.com/axorax/axorax.github.io',
    email: 'axoraxmail@gmail.com',
  },
  record: {
    CNAME: 'axorax.github.io',
  },
  proxy: false,
})
