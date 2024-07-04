// Get the current time in UTC
function getCurrentTimeUTC() {
    const now = new Date();
    const utcTime = now.toUTCString();
    return utcTime;
}

// Get the current day of the week
function getCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayIndex = now.getDay();
    return daysOfWeek[dayIndex];
}

// Update the time and day elements
function updateTimeAndDay() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const dayElement = document.querySelector('[data-testid="currentDay"]');

    timeElement.textContent = getCurrentTimeUTC();
    dayElement.textContent = getCurrentDay();
}

// Call the updateTimeAndDay function every second
setInterval(updateTimeAndDay, 1000);