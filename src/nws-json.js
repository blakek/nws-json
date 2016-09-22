export function isSetupCorrectly () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ status: 'OK' }), 500)
  })
}

export default {
  isSetupCorrectly
}
