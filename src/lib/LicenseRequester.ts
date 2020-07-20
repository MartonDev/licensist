import axios from 'axios'
import { LicenseMetadata, License } from '../types'

export async function downloadLicenseMetas (): Promise<Array<LicenseMetadata>> {

  let licenses: Array<LicenseMetadata> = []

  await axios
    .get('https://api.github.com/licenses')
    .then(res => {

      licenses = res.data

    })
    .catch(err => {

      throw new Error(`Could not get license metadatas\n${ err }`)

    })

  return licenses

}

export async function downloadLicenses (licenses: Array<LicenseMetadata>): Promise<Array<License>> {

  let licensesWithInfo: Array<License> = []

  console.log(licenses)  

  for(const license of licenses) {    

    await axios
      .get(`https://api.github.com/licenses/${ license.key }`)
      .then(res => {

        const {

          key, 
          name, 
          description, 
          spdx_id, 
          html_url, // url
          implementation,
          permissions,
          conditions,
          limitations,
          body, // template
          url // template url
        
        } = res.data

        licensesWithInfo.push({ key, name, description, spdx_id, url: html_url, implementation, permissions, conditions, limitations, template: body, templateURL: url })

      })
      .catch(error => {
        
        throw new Error(`Could not get or parse ${ license.name } info. \n${ error }`)

      })

  }

  return licensesWithInfo

}