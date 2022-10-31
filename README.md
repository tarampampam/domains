<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/tarampampam/free-domains/image?description=1&font=Raleway&forks=1&issues=1&owner=0&pulls=1&pattern=Solid&stargazers=1&theme=Dark">
    <img src="https://socialify.git.ci/tarampampam/free-domains/image?description=1&font=Raleway&forks=1&issues=1&owner=0&pulls=1&pattern=Solid&stargazers=1&theme=Light">
  </picture>
  <br/>
  <br/>

[![Tests Status][badge-tests]][actions]
[![Deploy Status][badge-deploy]][deploy]
</div>

Free subdomains for personal sites, open-source projects, and more. Here is a list of supported domain names:

|              Domain name              |                         Features                          |
|:-------------------------------------:|:---------------------------------------------------------:|
| ⚡ [`*.is-an.app`](https://is-an.app/) | ![cf][badge-cf] ![dnssec][badge-dnssec] ![ssl][badge-ssl] |
|             ⚡ `*.1bt.uk`              |          ![cf][badge-cf] ![dnssec][badge-dnssec]          |

[badge-cf]:https://shields.io/badge/%20-cloudflare-blue?logo=cloudflare&style=plastic?cacheSeconds=3600
[badge-dnssec]:https://shields.io/badge/%20-DNSSEC-blue?logo=moleculer&logoColor=white&style=plastic?cacheSeconds=3600
[badge-ssl]:https://shields.io/badge/SSL-Required-blue?style=plastic?cacheSeconds=3600

# How to get one?

1. [Fork](https://github.com/tarampampam/free-domains/fork) this repository
2. Add a new file called `your-domain-name.json` in the `./domains` folder to register `your-domain-name` subdomain
3. Edit it:

```json5
{
  "$schema": "../schemas/domain.schema.json",
  "description": "My personal project",
  "domain": "is-an.app", // or "1bt.uk"
  "subdomain": "your-domain-name",
  "owner": {
    "repo": "https://github.com/user/repo",
    "email": "my@email.com" // optional
  },
  "record": {
    "CNAME": "user.github.io.",
    //"TXT": ["..."],
    //"A": ["127.0.0.1"],
    //"AAAA": ["::1"],
    //"NS": ["..."],
  },
  "proxy": false // disable CF proxy
}
```

4. Your pull request will be reviewed and merged. _Make sure to keep an eye on it in case we need you to make any changes!_
5. After the pull request is merged, please allow up to 24 hours for the changes to propagate _(usually, it takes 5..15 minutes)_
6. Enjoy your new domain!

### A few similar services worth checking out

- [js.org](https://github.com/js-org/js.org)
- [is-a.dev](https://github.com/is-a-dev/register)
- [thedev.id](https://github.com/fransallen/thedev.id)
- [js.cool](https://github.com/js-cool/js.cool)
- [mod.land](https://github.com/denosaurs/mod.land)

[badge-tests]:https://img.shields.io/github/workflow/status/tarampampam/free-domains/tests?label=tests&logo=github&style=for-the-badge
[badge-deploy]:https://img.shields.io/github/workflow/status/tarampampam/free-domains/deploy?label=deploy&logo=github&style=for-the-badge

[actions]:https://github.com/tarampampam/free-domains/actions
[deploy]:https://github.com/tarampampam/free-domains/actions/workflows/deploy.yml
