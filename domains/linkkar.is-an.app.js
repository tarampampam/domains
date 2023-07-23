addSubDomain({
  description: 'An App to create short links with added preview changes and easy analytics.', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'linkkar', // desired subdomain name
  owner: {
    repo: 'https://github.com/Sammy970/linkkar-FrontEnd',
    email: 'jainsamyak2002.sj@gmail.com',
  },
  record: {
      CNAME: 'cname.vercel-dns.com'
  }
})
