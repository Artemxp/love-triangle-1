/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count=0, love = 0;
    for(let i=0; i<preferences.length; i++) {
        love = (preferences[(preferences[(preferences[i]-1)]-1)]-1);
        love==i?count++:null;
    }
    return Math.floor(count / 3);
};



