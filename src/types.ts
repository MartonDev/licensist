export interface License {

  // github info about license
  key: string // license github id / key
  name: string // name of the license
  description: string // license description
  spdx_id: string
  url: string // choosealicense.com url
  implementation: string // how to use the license according to github
  permissions: string[] // license permissions
  conditions: string[] // license conditions
  limitations: string[] // license limitations

  // additional info
  template: string // license template from github
  templateURL: string // github choosealicense link

}

export interface LicenseMetadata {

  key: string // license id / key
  name: string // license name
  spdx_id: string
  api_url: string // github api url for this license

}