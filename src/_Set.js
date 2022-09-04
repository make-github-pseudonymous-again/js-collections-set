import {KeyError} from '@failure-abstraction/error';

export default function _Set(BaseSet) {
	/* eslint-disable no-use-extend-native/no-use-extend-native */
	const Set = function (iterable = null) {
		this.container = new BaseSet(iterable);
	};

	Set.wrap = function (A) {
		if (A instanceof Set) return A;

		return new Set(A);
	};

	Set._operator = function (method) {
		return function (...args) {
			return method.apply(this, Array.from(args, Set.wrap));
		};
	};

	Set._inclusion = function (A, B) {
		return A._ispropersubset(B) ? -1 : B._ispropersubset(A) ? 1 : 0;
	};

	Set.inclusion = Set._operator(Set._inclusion);

	// eslint-disable-next-line no-multi-assign
	Set.prototype[Symbol.iterator] = Set.prototype.keys = function* () {
		yield* this.container;
	};

	Set.prototype.len = function () {
		return this.container.size;
	};

	Set.prototype.has = function (key) {
		return this.container.has(key);
	};

	Set.prototype._isdisjoint = function (other) {
		return this._commonkeys(other).next().done;
	};

	Set.prototype.isdisjoint = Set._operator(Set.prototype._isdisjoint);

	Set.prototype._isequal = function (other) {
		return this._issubset(other) && other._issubset(this);
	};

	Set.prototype.isequal = Set._operator(Set.prototype._isequal);

	Set.prototype._issubset = function (other) {
		if (this.len() > other.len()) return false;

		for (const key of this) if (!other.has(key)) return false;

		return true;
	};

	Set.prototype.issubset = Set._operator(Set.prototype._issubset);

	Set.prototype._ispropersubset = function (other) {
		return this._issubset(other) && !this._issuperset(other);
	};

	Set.prototype.ispropersubset = Set._operator(Set.prototype._ispropersubset);

	Set.prototype._issuperset = function (other) {
		return other._issubset(this);
	};

	Set.prototype.issuperset = Set._operator(Set.prototype._issuperset);

	Set.prototype._ispropersuperset = function (other) {
		return this._issuperset(other) && !this._issubset(other);
	};

	Set.prototype.ispropersuperset = Set._operator(
		Set.prototype._ispropersuperset,
	);

	// eslint-disable-next-line no-multi-assign
	Set.prototype.union = Set.prototype._union = function (...others) {
		return this.copy()._update(...others);
	};

	Set.prototype._commonkeys = function* (...others) {
		// eslint-disable-next-line no-labels
		keys: for (const key of this) {
			for (const other of others) {
				// eslint-disable-next-line no-labels
				if (!other.has(key)) continue keys;
			}

			yield key;
		}
	};

	Set.prototype._intersection = function (...others) {
		return new Set(this._commonkeys(...others));
	};

	Set.prototype.intersection = Set._operator(Set.prototype._intersection);

	// eslint-disable-next-line no-multi-assign
	Set.prototype.difference = Set.prototype._difference = function (...others) {
		return this.copy()._difference_update(...others);
	};

	// eslint-disable-next-line no-multi-assign
	Set.prototype.symmetric_difference = Set.prototype._symmetric_difference =
		function (other) {
			return this.copy()._symmetric_difference_update(other);
		};

	Set.prototype.copy = function () {
		return new Set(this);
	};

	// eslint-disable-next-line no-multi-assign
	Set.prototype.update = Set.prototype._update = function (...others) {
		for (const other of others) {
			for (const key of other) this.add(key);
		}

		return this;
	};

	Set.prototype._intersection_update = function (...others) {
		const intersection = this._intersection(...others);

		this.clear().update(intersection);

		return this;
	};

	Set.prototype.intersection_update = Set._operator(
		Set.prototype._intersection_update,
	);

	// eslint-disable-next-line no-multi-assign
	Set.prototype.difference_update = Set.prototype._difference_update =
		function (...others) {
			for (const other of others) {
				for (const key of other) this.discard(key);
			}

			return this;
		};

	Set.prototype.symmetric_difference_update =
		// eslint-disable-next-line no-multi-assign
		Set.prototype._symmetric_difference_update = function (other) {
			for (const key of other) {
				if (this.has(key)) this.discard(key);
				else this.add(key);
			}

			return this;
		};

	Set.prototype.add = function (key) {
		this.container.add(key);

		return this;
	};

	Set.prototype.remove = function (key) {
		if (!this.container.delete(key)) throw new KeyError();

		return this;
	};

	Set.prototype.discard = function (key) {
		this.container.delete(key);

		return this;
	};

	Set.prototype.pop = function () {
		if (this.len() === 0) throw new KeyError();

		const key = this.keys().next().value;

		this.discard(key);

		return key;
	};

	Set.prototype.clear = function () {
		this.container.clear();

		return this;
	};

	return Set;
	/* eslint-enable no-use-extend-native/no-use-extend-native */
}
