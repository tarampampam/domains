addSubDomain({
  description: 'Hi there,My blog and golang project website', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'ltd', // desired subdomain name
  owner: {
    repo: '<https://github.com/Berlin-Daemon/ltd>',
    email: '<hitch@id.snowdon.sec.nl.am>',
  },
  record: {
    NS: ['group', 'georgia.ns.cloudflare.com', 'henrik.ns.cloudflare.com'],
  },
    proxy: false, 
})
 
