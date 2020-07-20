import { License, LicenseMetadata } from '../types'
import { downloadLicenseMetas, downloadLicenses } from './LicenseRequester'

export class LicenseComparer {

  currentLicenseText: string // the last compared license's text
  licenseMetadatas: Array<LicenseMetadata>
  licenses: Array<License>

  // download licenses from github
  public async init () {

    this.licenseMetadatas = await downloadLicenseMetas()
    this.licenses = await downloadLicenses(this.licenseMetadatas)

  }

  // compares license to the licenses provided by github
  public compareLicense (licenseText: string): License | null {

    this.currentLicenseText = licenseText
    
    let licenseName = this.findByName()

    if(licenseName !== null)
      return this.licenses.find((license: License) => license.name.toLowerCase() === licenseName.toLowerCase()) // got name, lets find the full license data

    return null // could not identify license

  }

  public getLicenses = () => this.licenses
  public getLicenseMetas = () => this.licenseMetadatas

  // attempts to find the name of any license in the license text
  // returns the license key
  private findByName (): string | null {

    for(const licenseMeta of this.licenseMetadatas)
      if(this.currentLicenseText.toLowerCase().trim().includes(licenseMeta.name.toLowerCase()))
        return licenseMeta.name

    return null

  }

}