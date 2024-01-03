addSubDomain({
    description: 'Website, docs, of my discord bot (https://top.gg/bot/808825161226780773)',
    domain: 'is-an.app',
    subdomain: 'daya',
    owner: {
        email: 'alphaevelio@gmail.com',
    },
    record: {
         A: ["216.24.57.1"],
    },
    proxy: true,
    nested: [
        {
            subdomain: "docs",
            record: {
                CNAME: "74f89ed3f2-hosting.gitbook.io"
            },
            proxy: true
        }
    ]
})
