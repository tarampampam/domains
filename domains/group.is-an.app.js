addSubDomain({
  description: 'Hi there', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'group', // desired subdomain name
  owner: {
    repo: '<https://github.com/Berlin-Daemon/free-domains>',
    email: '<hitch@id.snowdon.sec.nl.am>',
  },
  record: {
    NS: ['group', 'georgia.ns.cloudflare.com', 'henrik.ns.cloudflare.com'],
  },
    proxy: false, 
})
