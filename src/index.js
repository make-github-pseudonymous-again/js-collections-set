import _Set from './_Set.js' ;
import _set from './_set.js' ;
import NativeSet from './NativeSet.js' ;  // Use native implementation of set

const Set = _Set( NativeSet ) ; // overwrite native implementation

const set = _set( Set ) ;

export default set ;

export {
	set ,
	Set ,
	_set ,
	_Set ,
} ;
