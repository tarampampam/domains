addSubDomain({
  description: 'Blog for java and spring framework', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'congnhanlaptrinh', // desired subdomain name
  owner: {
    repo: 'https://github.com/nguyenvh2k/nguyenvh2k.github.io',
    email: 'nguyenvh2k@gmail.com',
  },
  record: {
    CNAME: 'nguyenvh2k.github.io', // e.g.: <your-github-account>.github.io
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
