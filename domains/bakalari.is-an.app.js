// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'An intuitive and user-friendly alternative frontend for Bakaláři, the Czech school app used by teachers and students to monitor grades and timetables.', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'bakalari', // desired subdomain name
  owner: {
    repo: 'https://github.com/danielsebesta/DastCMS',
    email: 'dast@smirkhat.org',
  },
  record: {
    A: ['http://194.163.149.155/'],
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
