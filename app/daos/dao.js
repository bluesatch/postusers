const daoCommon = require('./common/daoCommon')

const profileDao = {
    ...daoCommon, ...require('./api/profileDao')
}

module.exports = {
    profileDao
}