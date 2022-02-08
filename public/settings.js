const Store = require('electron-store');
const storage = new Store();

// Get & Save Window Size
getWinSettings = () => {
    const default_size = [760, 485];
    
    // Check if storage has window-size
    const size = storage.get("window-size");
    if (size) return size;
    else {
        storage.set("window-size", default_size);
        return default_size;
    }
}

saveWinSettings = (current_size) => {
    storage.set("window-size", current_size);
}

// Get & Save Window Position
getWinPos = () => {
    const default_pos = [980, 500]; 

    const pos = storage.get("window-pos");
    if(pos) return pos;
    else {
        storage.set("window-pos", default_pos);
        return default_pos;
    }
}

saveWinPos = (current_pos) => {
    storage.set("window-pos", current_pos);
}

module.exports =  {
    getWinSettings: getWinSettings,
    saveWinSettings: saveWinSettings,
    
    getWinPos: getWinPos,
    saveWinPos: saveWinPos,
}