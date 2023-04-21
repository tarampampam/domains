addSubDomain({
    description: 'Website, cdn, docs, etc of my discord bot (https://top.gg/bot/808825161226780773)',
    domain: 'is-an.app',
    subdomain: 'daya',
    owner: {
        email: 'alphaevelio@gmail.com',
    },
    record: {
        CNAME: "daya.is-an.app.gigalixirdns.com",
    },
    proxy: false,
    nested: [
        {
            subdomain: "docs",
            record: {
                CNAME: "74f89ed3f2-hosting.gitbook.io"
            },
            proxy: false
        }
    ]
})
