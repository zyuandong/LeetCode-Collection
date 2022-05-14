/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (Math.abs(first.length - second.length) > 1) return false;
  let ff = 0,
    fl = first.length - 1,
    sf = 0,
    sl = second.length - 1,
    loop = 0;
  while (fl - ff > 0 || sl - sf > 0) {
    if (first.charAt(ff) === second.charAt(sf)) {
      ff++;
      sf++;
    }
    if (first.charAt(fl) === second.charAt(sl)) {
      fl--;
      sl--;
    }
    if ((ff === fl && sf - sl === 1) || (ff - fl === 1 && sf === sl)) {
      return true;
    }

    loop++;
    if (loop > Math.min(first.length, second.length)) return false;
  }
  return true;
};
