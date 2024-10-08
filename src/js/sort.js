export default function orderByProps(dict, KeyList) {
    let newList = []
    let newDict = {}

    for (let key in dict) {
        if ( KeyList.indexOf(key) >= 0 ) {
            newDict[key] = dict[key];
            newList.push({'key': key, 'value': dict[key],})
        }
    }

    Object.keys(dict).sort().forEach(function(key) {
        if ( newDict.hasOwnProperty(key) ) {
            null
        } else {
            newList.push({'key': key, 'value': dict[key],})
        }
    });

    return newList;
}
