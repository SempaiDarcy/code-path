/**
 * LeetCode 200 — Number of Islands
 *
 * Дан m x n двумерный массив grid, содержащий '1' (земля) и '0' (вода).
 * Верните количество островов.
 *
 * Остров — это группа соседних '1', соединённых по горизонтали или вертикали.
 * Все границы массива окружены водой.
 *
 * Пример 1:
 * Input:
 * [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 * Пример 2:
 * Input:
 * [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 * Ограничения:
 * - 1 <= m, n <= 300
 * - grid[i][j] === '0' или '1'
 */

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
//     // Реализация
// };

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Реализация
    const visited = grid.map(row=>row.map(cell => false))
    let islandCount = 0;

    for (let i = 0; i <grid.length; i++) {
        
    }
    return islandCount
};