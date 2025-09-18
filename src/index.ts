declare var define: any;

const TRUTHY_VALUES = String.prototype.split.call('y yes t true', new RegExp('\\s'));

function toBoolean(value: any): boolean {
  // undefined and null are considered falsy values
  if (value === undefined || value === null) {
    return false;

  // Empty string is considered a falsy value
  } else if (typeof value === 'string' && !value.trim().length) {
    return false;

  // Any number above zero is considered a truthy value
  } else if (!isNaN(Number(value))) {
    return value > 0;

  // Non-empty array are considered truthy value
  } else if (Array.isArray(value)) {
    return value.length > 0;

  // Non-empty object are considered truthy value
  } else if (typeof value === 'object') {
    return Object.keys(value).length > 0;

  // Any value not marked as a truthy value is automatically falsy
  } else {
    return TRUTHY_VALUES.includes(value.toString().trim().toLowerCase());
  }
}

if (typeof define === 'function' && define.amd) {
  define(function() { return toBoolean; });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = toBoolean;
}

export default toBoolean;
