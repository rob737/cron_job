/**
 * This will create a new object assigning length property to value 16
 * and this would be assigned to this new object and will be returned
 * and reference of this would be stored in hashMap variable.
 */

const INITIAL_BUCKET_SIZE = 16;
const bucketArray = new Array(INITIAL_BUCKET_SIZE);

/**
 * Operations :
 * 1. Initialize hashmap
 * 2. get operation
 * 3. set operation
 */

// this&object-prototypes chapters 3 and 4 for getters, setters and oops for step 1 implementation.

const setValue = function () {};

const getValue = function (key) {
  hashCode(key);
  return key;
};

const setBucketSize = function (size) {
  console.log(size);
};

const hashCode = function (key) {
  console.log("size", this.size);
  return key % this.size;
};

const equal = function () {};

const hashMap = {
  size: INITIAL_BUCKET_SIZE,
  set: setValue,
  get: getValue,
  setSize: setBucketSize,
};

module.exports.hashMap = hashMap;
