
import getStyle from './_internal/getStyle';

/**
 * Get or set the current computed height for elenments
 *
 * @param  {?String|?Number} val         - An integer representing the number of pixels, or 
 *                                         an integer along with an optional unit of measure appended (as a string).
 * @return {Void|Number}                 -  Get the current computed height for the first element in the set of matched elements.
 */
 function height(this: any, val) {
    const rootObject = this;
    let res = 0;

    this.each(function (this: any) {
        const self = this;
        if (typeof (val) !== 'undefined') {
            self.style.height = !isNaN(val) ? val + 'px' : val;
            res = rootObject;
        } else {
            res = getStyle(self, 'height');
        }


    });
    return res;

}

export default height;