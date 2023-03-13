// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: '...', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'group', // desired subdomain name
  owner: {
    repo: '<https://github.com/Berlin-Daemon/free-domains/new/master/domains>',
    email: '<hitch@id.snowdon.sec.nl.am>',
  },
  record: {
    NS: ['group', 'georgia.ns.cloudflare.com', 'henrik.ns.cloudflare.com'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
