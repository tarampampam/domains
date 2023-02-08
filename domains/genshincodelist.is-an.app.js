addSubDomain({
  description: 'mainpage for my api',
  domain: 'is-an.app',
  subdomain: 'genshincodelist',
  owner: {
    repo: 'https://github.com/gamersindo1223/mainpage-genshincodelist',
    email: 'mrgamers11223@gmail.com',
  },
  record: {
    CNAME: 'naughty-goat-slacks.cyclic.app',
  },
  proxy: false,
  nested: [
    {
      subdomain: '_075a4c48096f10794b57ce7389fa9ccf',
      record: {
        CNAME: '_9019eb834c94e142316892786d75c686.pmgvbzmzyk.acm-validations.aws',
      },
      proxy: false,
    },
    {
      subdomain: 'api',
      record: {
        CNAME: 'lime-average-parrot.cyclic.app',
      },
      proxy: false,
    },
    {
      subdomain: '_a030c2aa8e930ddd1bcc689bf2c7e414.api',
      record: {
        CNAME: '_1ab961f86c492f6defeec4e182057671.pmgvbzmzyk.acm-validations.aws',
      },
      proxy: false,
    },
  ],
})
