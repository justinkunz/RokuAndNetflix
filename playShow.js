const Roku = require('rokujs');
const address = '[ROKU IP HERE]'; //replace with your roku IP Address. (find with discover.js)
const tvShow = 'The Office';
const tv = new Roku(address);

const playShow = () => {
    const navigateToSearch = ['select', 'left', 'up', 'select'];
    const selectTheOffice = ['right', 'right', 'select', 'down'];
    const upOrDown = Math.random() >= 0.50 ? 'up' : 'down';
    const episodeChange = Math.floor(Math.random()*20);
    console.log(`Turning on TV and loading random episode of ${tvShow}. . .`);
    tv.press('power');
    tv.delay(1000);
    tv.launch({name: 'Netflix'});   
    pressKeys(navigateToSearch, 1000);
    tv.type(tvShow);
    tv.press('enter');
    tv.delay(2000);
    pressKeys(selectTheOffice, 1000);
    tv.delay(1000);
    pressKeys(decideEpisode(upOrDown, episodeChange), 1000);
    
}

const pressKeys = (keys, delayTime) => {
    for(i=0;i<keys.length;i++){
        if(delayTime !== 0){
            tv.delay(delayTime);
        }
        tv.press(keys[i]);
    }
}

const decideEpisode = (direction, changeCount) => {
    const selectEpisodeKeys = ['select'];
    for(i=0;i<changeCount;i++){
        selectEpisodeKeys.push(direction)
    }
    selectEpisodeKeys.push('select');
    return selectEpisodeKeys
}

playShow();
