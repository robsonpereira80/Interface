require([
    'TWOverflow/ready',
    'TWOverflow/Interface'
], function (
    ready,
    Interface
) {
    if (Interface.isInitialized()) {
        return false
    }

    ready(function () {
        Interface.init()
    })
})
