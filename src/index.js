import _Set from './_Set.js';
import _set from './_set.js';
import NativeSet from './NativeSet.js'; // Use native implementation of set

const Set = _Set(NativeSet); // Overwrite native implementation

const set = _set(Set);

export {set, Set};
export {default as _set} from './_set.js';
export {default as _Set} from './_Set.js';
export {KeyError} from '@failure-abstraction/error';
