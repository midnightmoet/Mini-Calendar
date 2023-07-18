const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');


const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const dayNum = date.getDate();
const year = date.getFullYear();


monthNameEl.innerText = date.toLocaleString("en-US", { month: "long" });
dayNameEl.innerText = date.toLocaleString("en-US", { weekday: "long" });
dayNumEl.innerText = date.toLocaleString("en-US", { day: "numeric" });
yearEl.innerText = date.toLocaleString("en-US", { year: "numeric" });

// Another option to replace lines 14-17

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// monthNameEl.innerText = months[month];
// dayNameEl.innerText = days[day];
// dayNumEl.innerText = dayNum;
// yearEl.innerText = year;