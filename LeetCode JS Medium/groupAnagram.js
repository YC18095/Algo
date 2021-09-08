/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  let objectKey = {};
  let key = '';
  let objectCount = {
    a: '#',
    b: '#',
    c: '#',
    d: '#',
    e: '#',
    f: '#',
    g: '#',
    h: '#',
    i: '#',
    j: '#',
    k: '#',
    l: '#',
    m: '#',
    n: '#',
    p: '#',
    q: '#',
    g: '#',
    s: '#',
    t: '#',
    o: '#',
    u: '#',
    v: '#',
    w: '#',
    x: '#',
    y: '#',
    z: '#',
  };

  for (let i = 0; i < strs.length; i++) {
    let objectCountTemp = { ...objectCount };
    for (let j = 0; j < strs[i].length; j++) {
      objectCountTemp[strs[i][j]] = objectCountTemp[strs[i][j]] + '1';
    }

    for (const property in objectCountTemp) {
      key = key + objectCountTemp[property];
    }

    if (!objectKey[key]) {
      objectKey[key] = [strs[i]];
    } else {
      objectKey[key].push(strs[i]);
    }
    objectCountTemp = {};
    key = '';
  }

  for (const property in objectKey) {
    result.push(objectKey[property]);
  }
  return result;
};

// groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// groupAnagrams(["hos","boo",
// "nay","deb","wow","bop","bob","brr","hey","rye",
// "eve","elf","pup","bum","iva","lyx","yap","ugh","hem","rod",
// "aha","nam","gap","yea","doc","pen","job","dis","max","oho","jed","lye","ram",
// "pup","qua","ugh","mir","nap","deb","hog","let","gym","bye","lon","aft","eel","sol","jab"])
