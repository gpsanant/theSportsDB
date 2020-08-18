# theSportsDB
Library for The Sports DB API

# Example Usage
```js script
const theSportsDB = require('theSportsDB');
(async() => {
    theSportsDB.setApiKey(808) //defaults to 1, set for Patreon
    //works with space, underscores, or "%20"s
    var goat = await theSportsDB.getPlayerByName("michael jordan")
    var kobe = await theSportsDB.getPlayerByName("kobe_bryant") 
    //replace unused parameters with null
    var events = await theSportsDB.getEventsOnDay("2014-10-10", null, "Australian_A-League")
    //ids can be either numbers or strings
    var nextEvents = await theSportsDB.getNext5EventsByTeamId(133602)
})()
```
