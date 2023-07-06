addSubDomain({
  description: 'An open-source code sharing platform that’s better in every way.',
  domain: 'is-an.app',
  subdomain: 'board',
  owner: {
    repo: 'https://github.com/Rahuletto/CodeBoard',
    email: 'rahulmarban@gmail.com',
  },
  record: {
    TXT: ['vc-domain-verify=board.is-an.app,f8602906e1897b3123cf'],
    CNAME: 'cname.vercel-dns.com'
  },
})
