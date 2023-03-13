addSubDomain({
  description: 'i want this domain', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'chatex', // desired subdomain name
  owner: {
    repo: 'https://github.com/TRIPLR1RRT/free-domains/',
    email: 'sahil@spicydevs.me',
  },
  record: {
    CNAME: '0a0c4f91-9522-42f2-845e-4460e9358968.id.repl.co', // e.g.: <your-github-account>.github.io
    TXT: ['replit-verify=0a0c4f91-9522-42f2-845e-4460e9358968'],
    A: ['...'],
    AAAA: ['...'],
    NS: ['...'],
  },
