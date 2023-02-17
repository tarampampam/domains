addSubDomain({
    description: 'A website to generate code screenshots', // describe your project in this field
    domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
    subdomain: 'gravity', // desired subdomain name
    owner: {
      email: 'hariskumar.eth@gmail.com',
    },
    record: {
      CNAME: 'cname.vercel-dns.com', // e.g.: <your-github-account>.github.io
    },
   
  })