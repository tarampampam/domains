addSubDomain({
    description: 'A website to generate code screenshots', 
    domain: 'is-an.app', 
    subdomain: 'gravity', 
    owner: {
      repo: 'https://github.com/hariseth/gravity',
      email: 'hariskumar.eth@gmail.com',
    },
    record: {
      CNAME: 'cname.vercel-dns.com', 
      TXT: ['vc-domain-verify=gravity.is-an.app', '445390ca003f9dec81e5'],
    },
   
  })