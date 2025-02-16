document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Projects data
    const projects = [
        {
            title: 'Project 1',
            image: 'project1.jpg',
            description: 'Description of Project 1',
            github: 'https://github.com/yourusername/project1'
        },
        {
            title: 'Project 2',
            image: 'project2.jpg',
            description: 'Description of Project 2',
            github: 'https://github.com/yourusername/project2'
        },
        {
            title: 'Project 3',
            image: 'project3.jpg',
            description: 'Description of Project 3',
            github: 'https://github.com/yourusername/project3'
        }
    ];

    // Populate projects
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank">View on GitHub</a>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // LeetCode stats (you'll need to replace this with actual API calls or data)
    const leetcodeStats = {
        submissions: 500,
        rank: 10000,
        acceptanceRate: 65.5
    };

    document.getElementById('leetcode').innerHTML = `
        <h3>LeetCode Stats</h3>
        <p>Submissions: ${leetcodeStats.submissions}</p>
        <p>Rank: ${leetcodeStats.rank}</p>
        <p>Acceptance Rate: ${leetcodeStats.acceptanceRate}%</p>
    `;

    // Professional skills
    const skills = {
        Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
        Backend: ['Node.js', 'Express', 'Python', 'Django'],
        ML: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
        Others: ['Git', 'Docker', 'AWS']
    };

    const skillsContent = document.getElementById('skills');
    for (const [category, skillList] of Object.entries(skills)) {
        skillsContent.innerHTML += `
            <h3>${category}</h3>
            <ul>
                ${skillList.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
    }

    // Achievements
    const achievements = [
        'Won first place in XYZ Hackathon 2022',
        'Published a paper on ABC in DEF Conference',
        'Open-source contributor to GHI project'
    ];

    document.getElementById('achievements').innerHTML = `
        <h3>Notable Achievements</h3>
        <ul>
            ${achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
    `;

    // Contact form submission (you'll need to implement the actual form submission logic)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Embed resume (replace 'your-resume.pdf' with the actual path to your resume)
    document.getElementById('resume-viewer').innerHTML = `
        <iframe src="your-resume.pdf" width="100%" height="100%"></iframe>
    `;
});