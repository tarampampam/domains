addSubDomain({
  description: 'Backend routing for all my homelab projects',
  domain: 'is-an.app',
  subdomain: '*.homelab',
  owner: {
    repo: 'https://github.com/nileshsolanki?tab=repositories',
    email: 'nileshsolanki456@gmail.com',
  },
  record: {
    A: ['141.148.206.24'],
  },
  proxy: true,
})
