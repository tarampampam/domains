addSubDomain({
  description: 'A free hosting website with a lot of features and good uptime', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'freewh', // desired subdomain name
  owner: {
    email: 'contact@onion.is-a.dev',
  },
  record: {
    NS: ['ns1.freewh.in.eu.org', 'ns2.freewh.in.eu.org'],
  },
  proxy: false
})
