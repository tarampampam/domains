addSubDomain({
  description: 'I want to publish my app for test',
  domain: 'is-an.app',
  subdomain: 'beegobee',
  owner: {
    email: 'ommarkkarim@gmail.com',
  },
  record: {
    NS: ['mary.ns.cloudflare.com', 'newt.ns.cloudflare.com'],
  },
  proxy: true,
})
