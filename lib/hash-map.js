/**
 * This will create a new object assigning length property to value 16
 * and this would be assigned to this new object and will be returned
 * and reference of this would be stored in hashMap variable.
 */

const INITIAL_BUCKET_SIZE = 16;

/**
 * Operations :
 * 1. Initialize hashmap
 * 2. get operation
 * 3. set operation
 */

// this&object-prototypes chapters 3 and 4 for getters, setters and oops for step 1 implementation.

let hashMap = function () {
  (size = INITIAL_BUCKET_SIZE),
    (ele = new Array(this.size)),
    (get = function (key) {}),
    (set = function (key) {});
};

module.exports.hashMap = hashMap;
