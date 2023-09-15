// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'A digital currency project with zero fees and ease of use', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'atcoin', // desired subdomain name
  owner: {
    repo: 'https://github.com/familycomicsstudios/atcoin',
    email: 'themadpunter10@gmail.com',
  },
  record: {
    CNAME: '89c4cc2d-c519-4490-99d0-2ebc45f3ce20.id.repl.co', // e.g.: <your-github-account>.github.io
    TXT: ['replit-verify=89c4cc2d-c519-4490-99d0-2ebc45f3ce20']
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
