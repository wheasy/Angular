/**
 * @module ui/my-component.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MyComponent
 * @extends Component
 */
exports.MyComponent = Component.specialize(/** @lends MyComponent# */ {
    constructor: {
        value: function MyComponent() {
            this.super();
        }
    }
});
