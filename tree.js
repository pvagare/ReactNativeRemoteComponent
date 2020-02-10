
var arr = [
    {
        "Source": "Health Insurance Market",
        "Target": "Agent Service Center",
        "calls": "122"
    },
    {
        "Source": "Health Insurance Market",
        "Target": "Agent Service Center Services",
        "name": "Test2"
    },
    {
        "Source": "Agent Service Center",
        "Target": "ASC Blue Diamond 5010",
        "name": "Test2"
    },
    {
        "Source": "Agent Service Center",
        "Target": "ASC Blue Diamond (5070)",
        "name": "Test2"
    },
    {
        "Source": "Agent Service Center Services",
        "Target": "ASC Blue Diamond1",
        "name": "Test2"
    },
    {
        "Source": "Agent Service Center Services",
        "Target": "ASC Blue Diamond2",
        "name": "Test2"
    },
    {
        "Source": "Health Insurance Market",
        "Target": "Agent Service Center Services1",
        "name": "Test2"
    },
    {
        "Source": "ASC Blue Diamond2",
        "Target": "ASC Blue Diamond223",
        "name": "Test2"
    },
    {
        "Source": "ASC Blue Diamond223",
        "Target": "ASC Blue Diamond223677",
        "name": "Test2"
    },
    {
        "Source": "ASC Blue Diamond223677",
        "Target": "ASC Blue Diamond223677788",
        "name": "Test2"
    },
    {
        "Source": "ASC Blue Diamond223677788",
        "Target": "ASC Blue Diamond223677788768768",
        "name": "Test2"
    },
    {
        "Source": "Health Insurance Market2",
        "Target": "Agent Service Center ty",
        "calls": "122"
    },
];


function convert(dataArray) {
    var treeObj = [];
    var dataLength = dataArray.length;
    var dataObject = null;
    var obj = null;
    for (var index = 0; index < dataLength; index++) {
        dataObject = dataArray[index];
        obj = placeIntoTree(treeObj, dataObject.Source);
        if (obj.children) {
            obj.children.push({
                name: dataObject.Target,
                children: []
            });
        } else {
            obj.push({
                name: dataObject.Source,
                children: [{
                    name: dataObject.Target,
                    children: []
                }]
            });
        }
    }

    return treeObj;
}

function placeIntoTree(treeObj, nodeName) {
    var obj = null;
    debugger;
    for (var index = 0; index < treeObj.length; index++) {
        obj = treeObj[index];
        if (obj.name == nodeName) {
            return obj;
        }

        if (obj.children) {
            for (var index1 = 0; index1 < obj.children.length; index1++) {
                let obj1 = placeIntoTree(obj.children, nodeName);
                if (!Array.isArray(obj1)) {
                    return obj1;
                }
            }
        }
    }

    return treeObj;
}


var json = convert(arr);

