const users = [
    { username: 'vansh', password: '12345' }
];

const monthlyActivities = [
    { id: 1, activity: "Create project file which contains tables between 12 to 19", subject: "Maths" },
    { id: 2, activity: "Write essay on environmental issues", subject: "English" }
];

document.getElementById('login-page-link').addEventListener('click', function() {
    showPage('login-page');
});

document.getElementById('register-page-link').addEventListener('click', function() {
    showPage('register-page');
});

document.getElementById('welcome-page-link').addEventListener('click', function() {
    showPage('welcome-page');
});

document.getElementById('profile-page-link').addEventListener('click', function() {
    showPage('profile-page');
    displayStudentInfo();
});

document.getElementById('timetable-page-link').addEventListener('click', function() {
    showPage('timetable-page');
});

document.getElementById('activity-page-link').addEventListener('click', function() {
    showPage('activity-page');
    displayMonthlyActivities();
});

function showPage(pageId) {
    const pages = ['login-page', 'register-page', 'welcome-page', 'profile-page', 'timetable-page', 'activity-page'];
    pages.forEach(page => {
        document.getElementById(page).style.display = (page === pageId) ? 'block' : 'none';
    });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('login-page-link').style.display = 'none';
        document.getElementById('register-page-link').style.display = 'none';
        document.getElementById('welcome-page-link').style.display = 'inline';
        document.getElementById('profile-page-link').style.display = 'inline';
        document.getElementById('timetable-page-link').style.display = 'inline';
        document.getElementById('activity-page-link').style.display = 'inline';
        showPage('welcome-page');
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (users.find(user => user.username === username)) {
        alert('Username already exists');
    } else {
        users.push({ username, password });
        alert('Registration successful');
        showPage('login-page');
    }
}

function displayStudentInfo() {
    const studentInfo = `
        Name: Vansh Mathur<br>
        Age: 16<br>
        Grade: 10th<br>
        Subjects: Math, Science, English
    `;
    document.getElementById('student-info').innerHTML = studentInfo;
}

function displayMonthlyActivities() {
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = '';
    monthlyActivities.forEach(activity => {
        const li = document.createElement('li');
        li.innerHTML = `${activity.subject}: ${activity.activity}`;
        activityList.appendChild(li);
    });
}

function showActivityPage() {
    document.getElementById('activity-page-link').click();
}