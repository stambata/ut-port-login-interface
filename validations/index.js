module.exports = joi => ({
    'permission.map': require('./permission.map')(joi),
    'identity.closeSession': require('./identity.closeSession')(joi),
    'identity.check': require('./identity.check')(joi),
    'permission.claim': require('./permission.claim')(joi),
    'identity.checkInternal': require('./identity.checkInternal')(joi)
});