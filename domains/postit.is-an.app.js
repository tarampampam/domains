addSubDomain({
  description: 'An App to create simple, beautiful, smart and professional posts for LinkedIn, powered by OpenAI API.', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'postit', // desired subdomain name
  owner: {
    repo: 'https://github.com/Sammy970/linkedin-post-maker',
    email: 'jainsamyak2002.sj@gmail.com',
  },
  record: {
      CNAME: 'cname.vercel-dns.com'
  }
})
