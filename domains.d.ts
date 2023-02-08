interface IRecord {
  TXT?: string[]
  A?: string[]
  AAAA?: string[]
  CNAME?: string
  NS?: string[]
}

interface ISubDomain {
  description: string
  domain: '1bt.uk' | 'is-an.app'
  subdomain: string
  owner?: {
    repo?: string
    email?: string
  }
  record: IRecord
  proxy?: boolean
  nested?: {
    subdomain: string
    record: IRecord
    proxy?: boolean
  }[]
}
