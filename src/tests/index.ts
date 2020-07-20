import { LicenseComparer } from '../index'

const comparer = new LicenseComparer()
comparer.init()
  .then(() => {

    console.log(comparer.compareLicense('MIT License'))  

  })