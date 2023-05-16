addSubDomain({
  description: 'A custom chat app',
  domain: 'is-an.app',
  subdomain: 'the-basement',
  owner: {
    repo: 'https://github.com/MartinTintin3/the-basement',
    email: 'maroymart@gmail.com',
  },
  record: {
    CNAME: '2c05111e-1da3-42fe-a34d-5f952c83cfd4.id.repl.co',
    TXT: 'replit-verify=2c05111e-1da3-42fe-a34d-5f952c83cfd4',
  },
  proxy: false,
});
