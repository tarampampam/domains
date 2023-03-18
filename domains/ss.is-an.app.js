
addSubDomain({
  description: 'A sharex uploding site', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'ss', // desired subdomain name
  owner: {
    repo: '',
    email: 'server.cooper@gmail.com',
  },
  record: {
    CNAME: '32d13fba-9d9a-4a34-9d45-c615e098ce76.id.repl.co', // e.g.: <your-github-account>.github.io
    TXT: ['replit-verify=32d13fba-9d9a-4a34-9d45-c615e098ce76',
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
