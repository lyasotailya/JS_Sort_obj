export default function orderByProps(dict, KeyList) {
    let newDict = {}

    for (let key in dict) {
        if ( KeyList.indexOf(key) >= 0 ) {
            newDict[key] = dict[key];
        }
    }

    Object.keys(dict).sort().forEach(function(key) {
        if ( newDict.hasOwnProperty(key) ) {
            null
        } else {
            newDict[key] = dict[key];
        }
    });

    return newDict;
}
