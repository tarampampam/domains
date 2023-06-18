addSubDomain({
  description: 'A recipe sharing app',
  domain: 'is-an.app',
  subdomain: 'dishdiscovery',
  owner: {
    email: 'notnotrachit@gmail.com',
    twitter: '@notnotrachit'
  },
  record: {
    CNAME: 'cname.vercel-dns.com'
  },
  proxy: false
});
