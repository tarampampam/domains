addSubDomain({
  description: '...', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'knolquestions', // desired subdomain name
  owner: {
    repo: 'https://github.com/Kelvin-Lamptey/KNOLquestions/',
    email: 'kelvinlamptey77@gmail.com,
  },
  record: {
    CNAME: 'kelvin-lamptey.github.io', // e.g.: <your-github-account>.github.io
  },
})
