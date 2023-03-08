addSubDomain({
  description: 'ModdedStuffGuy\u0027s WebPage', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'moddedstuffguy', // desired subdomain name
  owner: {
    repo: 'https://github.com/ModdedStuffGuy/moddedstuffguy.github.io/',
    email: 'pruebecitasg2@gmail.com',
  },
  //record: {
    //CNAME: 'moddedstuffguy.github.io', // e.g.: <your-github-account>.github.io
    //TXT: ['list', 'of', 'required', 'txt', 'records'],
    //A: ['list', 'of', 'IPv4', 'addresses', 'like', 'a', '127.0.0.1'],
    //AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    //NS: ['list', 'of', 'nameservers'],
  //},
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
