function browserHistory(object, array){
    let browserObject = {};
    browserObject.openTabs = [];
    browserObject.recentlyClosed =[];
    browserObject.browserLogs = [];

    let keys = Object.keys(object);
    for (let index = 0; index < keys.length; index++) {
        if(keys[index] === 'Browser Name'){
            browserObject.name = object[keys[index]];
        }else if(keys[index] ==='Open Tabs'){
            let openTabs = object[keys[index]];
            openTabs.forEach((tab) => {browserObject.openTabs.push(tab)});
        }else if(keys[index] === 'Recently Closed'){
            let recentlyClosed = object[keys[index]];
            openTabs.forEach(tab => {browserObject.openTabs.push(tab);
            });
        }else{
            let browserLogs = object[keys[index]];
            browserLogs.forEach((log)=> {browserObject.browserLogs.push(log)});
        }
    }


}