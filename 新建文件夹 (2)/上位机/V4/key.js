const crypto = require('crypto')

function createCommonToken(params) {
    const access_key = Buffer.from( params.author_key, "base64")

    const version = params.version
    let res = 'userid' + '/' + params.user_id
    const et = params.et || Math.ceil((Date.now() + 365 * 24 * 3600 * 1000) / 1000)
    const method = params.method || 'md5'

    const key = et + "\n" + method + "\n" + res + "\n" + version
    
    const hashAlgo = (method === 'sha1') ? 'sha1' : 'md5'
    let sign = crypto.createHmac(hashAlgo, access_key).update(key).digest().toString('base64')

    res = encodeURIComponent(res)
    sign = encodeURIComponent(sign)
    const token = `version=${version}&res=${res}&et=${et}&method=${method}&sign=${sign}`

    return token
}

module.exports = {
  createCommonToken
};

