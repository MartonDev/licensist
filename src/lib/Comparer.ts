import { License, LicenseMetadata } from '../types'

export class LicenseComparer {

  currentLicenseText: string // the last compared license's text
  licenseMetadatas: Array<LicenseMetadata>
  licenses: Array<License>

  // download licenses from github
  public init () {

    

  }

  // compares license to the licenses provided by github
  public compareLicense (licenseText: string): License | null {

    this.currentLicenseText = licenseText
    
    let licenseName = this.findByName()

    if(licenseName !== null)
      return this.licenses.find((license: License) => license.name === licenseName) // got name, lets find the full license data

    return null // could not identify license

  }

  // attempts to find the name of any license in the license text
  // returns the license key
  private findByName (): string | null {

    for(const licenseMeta of this.licenseMetadatas)
      if(this.currentLicenseText.toLowerCase().trim().includes(licenseMeta.name))
        return licenseMeta.name

    return null

  }

}