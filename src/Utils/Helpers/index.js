/**
 * get length of json array variables
 * @param json
 * @param orArr
 * @returns {any}
 */
export function length (json, orArr) {
    if (orArr === undefined || orArr === null) {
        orArr = false;
    }
    let arr = [];
    if (json !== []) {
        for (var x in json) {
            arr.push(json[x]);
        }
    }
    return !orArr ? arr.length : arr;
}
