addSubDomain({
    description: 'Website, cdn, docs, etc of my discord bot (https://top.gg/bot/808825161226780773)',
    domain: 'is-an.app',
    subdomain: 'daya',
    owner: {
        email: 'alphaevelio@gmail.com',
    },
    record: {
        CNAME: "daya-web.onrender.com",
    },
    proxy: false,
    nested: [
        {
            subdomain: "cdn",
            record: {
                A: ["76.223.55.44"]
            },
            proxy: false
        },
        {
            subdomain: "docs",
            record: {
                CNAME: "74f89ed3f2-hosting.gitbook.io"
            },
            proxy: false
        },
        {
            subdomain: "_deta",
            record: {
                TXT: ["deta-verification=FyNGhQWyjbuGPU9W5Hix9bppVQAJgGAe"]
            },
            proxy: false
        }
    ]
})
