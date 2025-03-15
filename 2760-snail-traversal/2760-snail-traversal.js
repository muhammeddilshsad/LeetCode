/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) {
        return [];
    }
    const result = Array.from({ length: rowsCount }, () => Array(colsCount));

    for (let i = 0; i < rowsCount; i++) {
        for (let j = 0; j < colsCount; j++) {
            result[i][j] =
                j % 2 === 0
                    ? this[j * rowsCount + i]
                    : (result[i][j] = this[(j + 1) * rowsCount - i - 1]);
        }
    }
    return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */