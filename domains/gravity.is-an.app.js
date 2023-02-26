addSubDomain({
    description: 'A website to share file using a server', 
    domain: 'is-an.app', 
    subdomain: 'anyshare', 
    owner: {
      email: 'varshithvh@gmail.com',
    },
    record: {
      CNAME: 'cname.vercel-dns.com',
      TXT: 'vc-domain-verify=anyshare.is-an.app,aa2d72333b67a4dd5f79'
    },
   
  })