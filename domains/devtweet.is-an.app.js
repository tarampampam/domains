addSubDomain({
  description: 'A microblogging web app',
  domain: 'is-an.app',
  subdomain: 'devtweet',
  owner: {
    email: 'oyepriyansh@hotmail.com',
  },
  record: {
    CNAME: 'cname.vercel-dns.com'
  },
  proxy: false
});
