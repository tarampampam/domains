

addSubDomain({
  description: 'For my college project', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'abhirockz', // desired subdomain name
  owner: {
    repo: 'https://github.com/yopremium21',
    email: 'yopremium21@gmail.com',
  },
  record: {
    TXT: ['google-site-verification=jfgLu1F8eWye93xVPU99SQt4MpCx6O_Sq8DAYz6hfFA']
  },
    proxy: true,
})
