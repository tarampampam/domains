addSubDomain({
  description: 'For education purpose, doing lab on AWS environment',
  domain: 'is-an.app',
  subdomain: 'browny-edu',
  owner: {
    repo: 'https://github.com/hungnt1412/browny-edu-free-domain',
    email: 'brownytech@outlook.com',
  },
  record: {
    NS: [
      'ns-794.awsdns-35.net.',
      'ns-1569.awsdns-04.co.uk.',
      'ns-453.awsdns-56.com.',
      'ns-1385.awsdns-45.org.',
    ]
  },
  proxy: false,
})
