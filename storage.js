
// ===============================
// Local Storage Helper
// ===============================

// Save any data
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Load data
function loadData(key) {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    }

    return null;
}

// Remove data
function removeData(key) {
    localStorage.removeItem(key);
}

// Clear everything
function clearAllData() {
    localStorage.clear();
}
