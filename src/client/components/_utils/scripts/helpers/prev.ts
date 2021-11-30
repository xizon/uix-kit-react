
	
/*
* Returns the Element immediately prior to the specified one in its parent's children list, 
* or null if the specified element is the first one in the list.
*
* @param  {String} s       - A string containing a selector expression to match elements against.
* @return {Array}          - Contains only a collection of HTML elements.
*/
function prev(this: any, s ) {

    const el = this.previousElementSibling;

    if (s === undefined) {
        if ( el !== null ) return el;
    } else {
        if (
            el !== null && 
            //Determine whether the ID, class and HTML nodes match
            ( el.nodeName.toLowerCase() === s || el.classList.contains( s.replace(/\./g,'') ) || '#' + el.id === s )
        ) {
            return el;
        } else {
            return [];
        }
        
    }

    
}



export default prev;