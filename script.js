// ============================================
// EDIT THIS: set it to the date you got together
// Format: new Date(YYYY, MONTH_INDEX, DAY, HOUR, MINUTE)
// Note: MONTH_INDEX is 0-based (0 = January, 11 = December)
// ============================================
const START_DATE = new Date(2023, 0, 1, 0, 0); // <-- change this

function pad(num, size = 2) {
  return String(num).padStart(size, "0");
}

function updateCounter() {
  const now = new Date();
  const diffMs = now - START_DATE;

  if (diffMs < 0) {
    // Start date is in the future — just show zeros, no crash.
    document.getElementById("numDays").textContent = "0000";
    document.getElementById("numHours").textContent = "00";
    document.getElementById("numMins").textContent = "00";
    document.getElementById("numSecs").textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  document.getElementById("numDays").textContent = pad(days, 4);
  document.getElementById("numHours").textContent = pad(hours);
  document.getElementById("numMins").textContent = pad(mins);
  document.getElementById("numSecs").textContent = pad(secs);
}

function renderStartDateLabel() {
  const label = document.getElementById("startDateLabel");
  if (!label) return;
  label.textContent = START_DATE.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

renderStartDateLabel();
updateCounter();
setInterval(updateCounter, 1000);
