import _Set from './_Set' ;
import _set from './_set' ;

const NativeSet = Set ; // Use native implementation of set

Set = _Set( NativeSet ) ; // overwrite native implementation

const set = _set( Set ) ;

export default set ;

export {
	set ,
	Set ,
	_set ,
	_Set ,
} ;
