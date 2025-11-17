// Data
const posts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        excerpt: "Deep dive into one of JavaScript's most powerful features and how to use closures effectively in your code.",
        tag: "JavaScript",
        date: "Nov 16, 2025",
        readTime: "5 min"
    },
    {
        id: 2,
        title: "Building Scalable APIs with Node.js",
        excerpt: "Best practices for designing and implementing RESTful APIs that can handle growth and maintain performance.",
        tag: "Backend",
        date: "Nov 10, 2025",
        readTime: "8 min"
    },
    {
        id: 3,
        title: "CSS Grid vs Flexbox: When to Use Each",
        excerpt: "A practical guide to choosing the right layout system for your web projects with real-world examples.",
        tag: "CSS",
        date: "Nov 5, 2025",
        readTime: "6 min"
    },
    {
        id: 4,
        title: "Introduction to TypeScript",
        excerpt: "Why TypeScript is becoming essential for modern JavaScript development and how to get started.",
        tag: "TypeScript",
        date: "Nov 2, 2025",
        readTime: "7 min"
    }
];

const lessons = [
    { title: "Debugging is a Superpower", excerpt: "Learning to debug effectively changed how I approach problems.", date: "Oct 28, 2025" },
    { title: "Write Code for Humans First", excerpt: "Clean code isn't about being clever, it's about being clear.", date: "Oct 20, 2025" },
    { title: "Test Early, Test Often", excerpt: "The cost of fixing bugs grows exponentially with time.", date: "Oct 15, 2025" }
];

const businessEssays = [
    { title: "Building Products Users Actually Want", excerpt: "Why talking to customers is more important than writing code.", date: "Nov 1, 2025" },
    { title: "The Myth of the 10x Developer", excerpt: "Great teams beat great individuals every time.", date: "Oct 18, 2025" },
    { title: "Pricing Your SaaS Product", excerpt: "Lessons learned from launching three products.", date: "Oct 5, 2025" }
];

const projects = [
    { title: "TaskFlow - Project Management Tool", tech: "React, Node.js, PostgreSQL", description: "A lightweight project management tool for small teams." },
    { title: "CodeSnippet Manager", tech: "Electron, SQLite", description: "Desktop app for organizing and searching code snippets." },
    { title: "API Monitor Dashboard", tech: "Vue.js, Express", description: "Real-time monitoring dashboard for REST APIs." }
];

const readingList = [
    { title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt" },
    { title: "Clean Code", author: "Robert C. Martin" },
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
    { title: "The Lean Startup", author: "Eric Ries" },
    { title: "Zero to One", author: "Peter Thiel" }
];

// Render Recent Article
function renderRecentArticle() {
    const container = document.getElementById('recentArticle');
    const recent = posts[0];
    
    container.innerHTML = `
        <h3>${recent.title}</h3>
        <div class="meta">
            <span class="tag">${recent.tag}</span>
            ${recent.date} • ${recent.readTime} read
        </div>
        <p class="excerpt">${recent.excerpt}</p>
        <a href="#" class="read-more">Read Full Article →</a>
    `;
}

// Render Posts
function renderPosts() {
    const container = document.getElementById('postsGrid');
    
    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post-item';
        div.innerHTML = `
            <h3>${post.title}</h3>
            <div class="meta">
                <span class="tag">${post.tag}</span>
                ${post.date} • ${post.readTime} read
            </div>
            <p>${post.excerpt}</p>
        `;
        div.onclick = () => alert(`Opening: ${post.title}`);
        container.appendChild(div);
    });
}

// Render Lessons
function renderLessons() {
    const container = document.getElementById('lessonsGrid');
    
    lessons.forEach(lesson => {
        const div = document.createElement('div');
        div.className = 'lesson-item';
        div.innerHTML = `
            <h3>${lesson.title}</h3>
            <div class="meta">${lesson.date}</div>
            <p>${lesson.excerpt}</p>
        `;
        div.onclick = () => alert(`Opening: ${lesson.title}`);
        container.appendChild(div);
    });
}

// Render Business Essays
function renderBusinessEssays() {
    const container = document.getElementById('businessGrid');
    
    businessEssays.forEach(essay => {
        const div = document.createElement('div');
        div.className = 'business-item';
        div.innerHTML = `
            <h3>${essay.title}</h3>
            <div class="meta">${essay.date}</div>
            <p>${essay.excerpt}</p>
        `;
        div.onclick = () => alert(`Opening: ${essay.title}`);
        container.appendChild(div);
    });
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = `
            <h3>${project.title}</h3>
            <div class="meta">
                <span class="tag">${project.tech}</span>
            </div>
            <p>${project.description}</p>
        `;
        div.onclick = () => alert(`Opening: ${project.title}`);
        container.appendChild(div);
    });
}

// Render Reading List
function renderReadingList() {
    const container = document.getElementById('readingList');
    
    readingList.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
        `;
        container.appendChild(li);
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Hamburger menu toggle
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('wikiNav');
    
    if (hamburger && nav) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.id = 'menuOverlay';
        document.body.appendChild(overlay);
        
        // Toggle menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        });
        
        // Close menu when clicking overlay
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
        
        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    
    // Initialize hamburger menu
    initHamburger();
    
    // Load page content
    if (page === '' || page === 'index.html') {
        renderRecentArticle();
    } else if (page === 'posts.html') {
        renderPosts();
    } else if (page === 'reading-list.html') {
        renderReadingList();
    } else if (page === 'lessons.html') {
        renderLessons();
    } else if (page === 'business.html') {
        renderBusinessEssays();
    } else if (page === 'projects.html') {
        renderProjects();
    }
});
