/**
 * Limit collection length.
 * ref: https://gist.github.com/jbmoelker/9693778
 *
 * @param   {string|array}  input   Input context
 * @param   {number}        limit   The amount to limit to.
 *
 * @return  {string|array}  Context reduced to limit amount.
 */
module.exports = (input, limit) => {
  if (typeof limit !== 'number') {
    return input;
  }

  if (typeof input === 'string') {
    if (limit >= 0) {
      return input.substring(0, limit);
    }

    return input.substring(limit);
  }

  if (Array.isArray(input)) {
    const minLimit = Math.min(limit, input.length);

    if (minLimit >= 0) {
      return input.slice(0, minLimit);
    }

    return input.slice(input.length + minLimit, input.length);
  }

  return input;
};
