const monthMapping = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sept': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12,
};
const content = Array.from(document.querySelectorAll('body>section'))

function hideContent() {
    content
        .slice(1)
        .forEach(x => x.style.display = 'none');
}

hideContent();

document.getElementById('years').addEventListener('click', (e) => {
    let year = takeIdParam(e.target);
    if (year === undefined) return;
    hideContent();
    const id = 'year-' + year;
    document.getElementById(id).style.display = 'block';
});

Array.from(document.querySelectorAll('.monthCalendar'))
    .forEach(section => section.addEventListener('click', showDays));

function showDays(e) {
    let month = monthMapping[takeIdParam(e.target)];
    if (month === undefined) return;
    console.log(month);
    const year = e.currentTarget.id.split('-')[1];
    const id = 'month-' + year + '-' + month;
    hideContent()
    e.currentTarget.style.display='block'
    document.getElementById(id).style.display = 'block';
}

function takeIdParam(target) {
    if (target.tagName.toLowerCase() === 'td') {
        return target.firstElementChild.textContent;
    }
    if (target.tagName.toLowerCase() === 'div') {
        return target.textContent;
    }
}