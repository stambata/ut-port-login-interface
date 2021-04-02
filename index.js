module.exports = function({registerErrors, joi}) {
    const errors = registerErrors(require('./errors'));
    const validations = require('./validations')(joi);
    const interfaceMethods = Object.keys(validations);
    return class loginInterface extends require('ut-port-script')(...arguments) {
        get defaults() {
            return {
                namespace: ['identity', 'permission'],
                imports: ['identity', 'permission']
            };
        }

        validations() {
            return validations;
        }

        async start(...params) {
            const result = await super.start(...params);
            const notImplemented = interfaceMethods.filter(method => !this.findHandler(method)).join(', ');
            if (notImplemented) throw errors['port.loginInterfaceNotImplemented']({params: {notImplemented}});
            return result;
        }
    };
};
