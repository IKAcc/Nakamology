/**
 * Will Replace English Numerals With Farsi Equivalent
 * @method  toFarsiDigits
 * @param   {String}    value
 * @returns {String}
 */
export function toFarsiDigits(value = '') {
    return (value + '').replace(/[0-9]/g, (digit) => {
        return String.fromCharCode(digit.charCodeAt(0) + 1728);
    });
};
