const axios = require('axios');

var apiKey = 1;

module.exports = {
    setApiKey(key){
        apiKey = key
    },
    async getTeamByName(name){
        name = makeUrl(name)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchteams.php?t=${name}`)).data;
    },
    async getTeamByShortCode(code){
        code = makeUrl(code)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchteams.php?sname=${code}`)).data;
    },
    async getAllPlayersByTeam(name){
        name = makeUrl(name)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?t=${name}`)).data;
    },
    async getPlayerByName(name, team){
        name = makeUrl(name)
        team = makeUrl(team)
        var params = []
        params.push(`p=${name}`)
        if(team) params.push(`t=${team}`)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchplayers.php?${params.join('&')}`)).data;
    },
    async getEventByName(name, season){
        name = makeUrl(name)
        season = makeUrl(season)
        var params = []
        params.push(`e=${name}`)
        if(season) params.push(`s=${season}`)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchevents.php?${params.join('&')}`)).data;
    },
    async getSportsList(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_sports.php`)).data;
    },
    async getLeagueList(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_leagues.php`)).data;
    },
    async getCountryList(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_countries.php`)).data;
    },
    async getLeagueListByCountry(country, sport){
        country = makeUrl(country)
        sport = makeUrl(sport)
        var params = []
        params.push(`c=${country}`)
        if(sport) params.push(`s=${sport}`)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_leagues.php?${params.join('&')}`)).data;
    },
    async getSeasonsInLeagueById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_seasons.php?id=${id}`)).data;
    },
    async getTeamsByLeagueName(name){
        name = makeUrl(name)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?l=${name}`)).data;
    },
    async getTeamsByLeagueName(name){
        name = makeUrl(name)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?l=${name}`)).data;
    },
    async getTeamsByCountryAndSport(sport, country){
        country = makeUrl(country)
        sport = makeUrl(sport)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_teams.php?s=${sport}&c=${country}`)).data;
    },
    // async getTeamDetailsById(id){
    //     return axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`).data;
    // },
    async getPlayersByTeamId(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookup_all_players.php?id=${id}`)).data;
    },
    async getUsersLoved(user){
        user = makeUrl(user)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/searchloves.php?u=${user}`)).data;
    },
    async getLeagueDetailsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupleague.php?id=${id}`)).data;
    },
    async getTeamDetailsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupteam.php?id=${id}`)).data;
    },
    async getPlayerDetailsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupplayer.php?id=${id}`)).data;
    },
    async getEventDetailsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupevent.php?id=${id}`)).data;
    },
    async getPlayerHonoursById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuphonors.php?id=${id}`)).data;
    },
    async getPlayerFormerTeamsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupformerteams.php?id=${id}`)).data;
    },
    async getPlayerContractsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookupcontracts.php?id=${id}`)).data;
    },
    async getEventResultsById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventresults.php?id=${id}`)).data;
    },
    async getTvEventById(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptv.php?id=${id}`)).data;
    },
    async getLookupTableByLeagueIdAndSeason(id, season){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/lookuptable.php?l=${id}&s=${season}`)).data;
    },
    async getNext5EventsByTeamId(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsnext.php?id=${id}`)).data;
    },
    async getNext15EventsByLeagueId(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsnext.php?id=${id}`)).data;
    },
    async getPast5EventsByTeamId(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventslast.php?id=${id}`)).data;
    },
    async getPast15EventsByLeagueId(id){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventspastleague.php?id=${id}`)).data;
    },
    async getEventsInRound(id, round, season){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsround.php?id=${id}&r=${round}&s=${season}`)).data;
    },
    async getEventsOnDay(day, sport, name){
        sport = makeUrl(sport)
        name = makeUrl(name)
        var params = []
        if(day) params.push(`d=${day}`)
        if(name) params.push(`l=${name}`)
        if(sport) params.push(`s=${sport}`)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsday.php?${params.join('&')}`)).data;
    },
    async getTvEventsOnDay(day, sport, country){
        sport = makeUrl(sport)
        country = makeUrl(country)
        var params = []
        if(day) params.push(`d=${day}`)
        if(country) params.push(`a=${league}`)
        if(sport) params.push(`s=${sport}`)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventstv.php?${params.join('&')}`)).data;
    },
    async getTvEventsByChannel(channel){
        channel = makeUrl(channel)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventstv.php?c=${channel}`)).data;
    },
    async getEventsByLeagueIdAndSeason(id, season){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsseason.php?id=${id}&s=${season}`)).data;
    },
    async getImage(id){
        return (await axios.get(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg`)).data;
    },
    async getPreviewImage(id){
        return (await axios.get(`https://www.thesportsdb.com/images/media/league/fanart/${id}.jpg/preview`)).data;
    },
    async getYoutubeEventHighligts(day, league, sport){
        league = makeUrl(league)
        sport = makeUrl(sport)
        var x = []
        if(day) x.push(`d=${day}`)
        if(league) x.push(`l=${league}`)
        if(sport) x.push(`s=${sport}`)
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventshighlights.php?${x.join("&")}`)).data;
    },
    async getAllEventsByLeagueIdAndSeason(id, season){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/eventsseason.php?id=${id}&s=${season}`)).data;
    },
    async getSoccerLivescores(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestsoccer.php`)).data;
    },
    async getLivescoresBySport(sport){
        sport = makeUrl(sport)
        return (await axios.get(`https://www.thesportsdb.com/api/v2/json/${apiKey}/livescore.php?s=${sport}`)).data;
    },
    async getGolfLivescores(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestgolf.php`)).data;
    },
    async getBasketballLivescores(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestbasketball.php`)).data;
    },
    async getAmericanFootballLivescores(){
        return (await axios.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestamericanfootball.php`)).data;
    }
}

function makeUrl(x){
    if(!x) return x;
    return x.split(" ").join("_");
}