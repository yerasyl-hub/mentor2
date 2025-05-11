document.addEventListener('DOMContentLoaded', function () {
    const mentors = [
        {
            id: 1,
            name: "Emma Wilson",
            specialization: "Frontend Expert",
            bio: "Senior Frontend Developer (React/Vue) with 7+ years experience at Google and Shopify",
            image: "img/mentor1.jpg",
            tasks: [
                {
                    text: "Master CSS Grid layout",
                    links: [
                        { title: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
                        { title: "Grid Examples", url: "https://gridbyexample.com/examples/" }
                    ]
                },
                {
                    text: "Build React app with TypeScript",
                    links: [
                        { title: "React+TS Docs", url: "https://create-react-app.dev/docs/adding-typescript/" },
                        { title: "TS Handbook", url: "https://www.typescriptlang.org/docs/handbook/react.html" }
                    ]
                },
                {
                    text: "Learn state management with Redux",
                    links: [
                        { title: "Redux Essentials", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" },
                        { title: "Redux Toolkit", url: "https://redux-toolkit.js.org/tutorials/quick-start" }
                    ]
                },
                {
                    text: "Implement responsive design",
                    links: [
                        { title: "Responsive Web Design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
                        { title: "Media Queries", url: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp" }
                    ]
                },
                {
                    text: "Optimize frontend performance",
                    links: [
                        { title: "Web Performance", url: "https://web.dev/learn/#performance" },
                        { title: "Lighthouse Audit", url: "https://developers.google.com/web/tools/lighthouse" }
                    ]
                },
                {
                    text: "Learn component testing",
                    links: [
                        { title: "Jest Testing", url: "https://jestjs.io/docs/tutorial-react" },
                        { title: "React Testing", url: "https://testing-library.com/docs/react-testing-library/intro/" }
                    ]
                },
                {
                    text: "Master CSS animations",
                    links: [
                        { title: "CSS Animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations" },
                        { title: "Animation Examples", url: "https://animista.net/" }
                    ]
                },
                {
                    text: "Build accessible web apps",
                    links: [
                        { title: "W3C Accessibility", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
                        { title: "ARIA Guide", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" }
                    ]
                },
                {
                    text: "Learn GraphQL basics",
                    links: [
                        { title: "GraphQL Intro", url: "https://graphql.org/learn/" },
                        { title: "Apollo Client", url: "https://www.apollographql.com/docs/react/" }
                    ]
                },
                {
                    text: "Implement PWA features",
                    links: [
                        { title: "PWA Guide", url: "https://web.dev/progressive-web-apps/" },
                        { title: "Service Workers", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "James Rodriguez",
            specialization: "Backend Specialist",
            bio: "Node.js and Python expert with focus on high-performance APIs",
            image: "img/mentor2.jpg",
            tasks: [
                {
                    text: "Build REST API with Node.js",
                    links: [
                        { title: "Express.js Guide", url: "https://expressjs.com/en/starter/installing.html" },
                        { title: "REST API Best Practices", url: "https://www.freecodecamp.org/news/rest-api-best-practices/" }
                    ]
                },
                {
                    text: "Implement JWT authentication",
                    links: [
                        { title: "JWT Guide", url: "https://jwt.io/introduction/" },
                        { title: "Node.js JWT", url: "https://www.bezkoder.com/node-js-jwt-authentication-mysql/" }
                    ]
                },
                {
                    text: "Optimize database queries",
                    links: [
                        { title: "SQL Performance", url: "https://use-the-index-luke.com/" },
                        { title: "MongoDB Indexing", url: "https://www.mongodb.com/docs/manual/indexes/" }
                    ]
                },
                {
                    text: "Learn Docker basics",
                    links: [
                        { title: "Docker Tutorial", url: "https://docker-curriculum.com/" },
                        { title: "Docker Docs", url: "https://docs.docker.com/get-started/" }
                    ]
                },
                {
                    text: "Implement caching with Redis",
                    links: [
                        { title: "Redis Guide", url: "https://redis.io/docs/getting-started/" },
                        { title: "Node.js Redis", url: "https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis" }
                    ]
                },
                {
                    text: "Build real-time features with Socket.io",
                    links: [
                        { title: "Socket.io Guide", url: "https://socket.io/get-started/chat" },
                        { title: "Real-time Concepts", url: "https://ably.com/topic/real-time" }
                    ]
                },
                {
                    text: "Learn Python for backend",
                    links: [
                        { title: "Python Docs", url: "https://docs.python.org/3/tutorial/" },
                        { title: "Flask Framework", url: "https://flask.palletsprojects.com/en/2.0.x/tutorial/" }
                    ]
                },
                {
                    text: "Implement message queues",
                    links: [
                        { title: "RabbitMQ Tutorial", url: "https://www.rabbitmq.com/getstarted.html" },
                        { title: "Message Queue Patterns", url: "https://aws.amazon.com/message-queue/" }
                    ]
                },
                {
                    text: "Secure your API",
                    links: [
                        { title: "API Security", url: "https://owasp.org/www-project-api-security/" },
                        { title: "Node.js Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html" }
                    ]
                },
                {
                    text: "Learn GraphQL for APIs",
                    links: [
                        { title: "GraphQL Server", url: "https://graphql.org/learn/execution/" },
                        { title: "Apollo Server", url: "https://www.apollographql.com/docs/apollo-server/" }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Priya Patel",
            specialization: "Data Scientist",
            bio: "Machine learning engineer specializing in NLP and predictive models",
            image: "img/mentor3.jpg",
            tasks: [
                {
                    text: "Learn Python for data science",
                    links: [
                        { title: "Python Data Science", url: "https://www.datacamp.com/learn/python" },
                        { title: "NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" }
                    ]
                },
                {
                    text: "Master pandas library",
                    links: [
                        { title: "pandas Docs", url: "https://pandas.pydata.org/docs/getting_started/index.html" },
                        { title: "pandas Tutorial", url: "https://www.w3schools.com/python/pandas/default.asp" }
                    ]
                },
                {
                    text: "Learn data visualization",
                    links: [
                        { title: "Matplotlib Guide", url: "https://matplotlib.org/stable/contents.html" },
                        { title: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html" }
                    ]
                },
                {
                    text: "Build machine learning models",
                    links: [
                        { title: "scikit-learn", url: "https://scikit-learn.org/stable/user_guide.html" },
                        { title: "ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" }
                    ]
                },
                {
                    text: "Work with Jupyter notebooks",
                    links: [
                        { title: "Jupyter Docs", url: "https://jupyter.org/documentation" },
                        { title: "Notebook Basics", url: "https://www.dataquest.io/blog/jupyter-notebook-tutorial/" }
                    ]
                },
                {
                    text: "Learn SQL for data analysis",
                    links: [
                        { title: "SQL Tutorial", url: "https://www.w3schools.com/sql/" },
                        { title: "SQL for DS", url: "https://mode.com/sql-tutorial/" }
                    ]
                },
                {
                    text: "Explore NLP techniques",
                    links: [
                        { title: "NLTK Book", url: "https://www.nltk.org/book/" },
                        { title: "spaCy 101", url: "https://spacy.io/usage/spacy-101" }
                    ]
                },
                {
                    text: "Learn TensorFlow basics",
                    links: [
                        { title: "TensorFlow Guide", url: "https://www.tensorflow.org/learn" },
                        { title: "Keras Tutorial", url: "https://keras.io/getting_started/" }
                    ]
                },
                {
                    text: "Work with big data tools",
                    links: [
                        { title: "PySpark Guide", url: "https://spark.apache.org/docs/latest/api/python/getting_started/index.html" },
                        { title: "Dask Tutorial", url: "https://docs.dask.org/en/stable/" }
                    ]
                },
                {
                    text: "Deploy ML models",
                    links: [
                        { title: "Flask API", url: "https://flask.palletsprojects.com/en/2.0.x/tutorial/" },
                        { title: "ML Deployment", url: "https://www.coursera.org/learn/deploying-machine-learning-models" }
                    ]
                }
            ]
        },
    ];
    const mentorsContainer = document.getElementById('mentors-container');
    const goalInput = document.getElementById('goal-input');
    const setGoalBtn = document.getElementById('set-goal');
    const currentGoalDisplay = document.getElementById('current-goal-display');
    const tasksContainer = document.getElementById('tasks-container');
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const resourceTitle = document.getElementById('resource-title');
    const resourceUrl = document.getElementById('resource-url');
    const addResourceBtn = document.getElementById('add-resource');
    const resourcesContainer = document.getElementById('resources-container');
    const navLinks = document.querySelectorAll('nav a');
    let state = {
        selectedMentor: null,
        goal: '',
        tasks: [],
        resources: []
    };
    function init() {
        loadState();
        setupEventListeners();
        renderAll();
    }
    function loadState() {
        const savedState = localStorage.getItem('myMentorState');
        if (savedState) {
            state = JSON.parse(savedState);
        }
    }
    function saveState() {
        localStorage.setItem('myMentorState', JSON.stringify(state));
    }
    function setupEventListeners() {
        setGoalBtn.addEventListener('click', setGoal);
        goalInput.addEventListener('keypress', (e) => e.key === 'Enter' && setGoal());

        addTaskBtn.addEventListener('click', addTask);
        newTaskInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

        addResourceBtn.addEventListener('click', addResource);
        resourceUrl.addEventListener('keypress', (e) => e.key === 'Enter' && addResource());

        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    function renderAll() {
        renderMentors();
        renderGoal();
        renderTasks();
        renderResources();
    }
    function renderMentors() {
        mentorsContainer.innerHTML = '';
        mentors.forEach(mentor => {
            const mentorCard = document.createElement('div');
            mentorCard.className = `mentor-card ${state.selectedMentor?.id === mentor.id ? 'selected' : ''}`;
            mentorCard.innerHTML = `
                <img src="${mentor.image}" alt="${mentor.name}" class="mentor-img">
                <div class="mentor-info">
                    <h3>${mentor.name}</h3>
                    <span class="mentor-specialization">${mentor.specialization}</span>
                    <p>${mentor.bio}</p>
                </div>
            `;
            mentorCard.addEventListener('click', () => selectMentor(mentor));
            mentorsContainer.appendChild(mentorCard);
        });
    }
    function selectMentor(mentor) {
        state.selectedMentor = mentor;
        // Всегда заменяем задачи на задачи выбранного ментора
        state.tasks = mentor.tasks ? [...mentor.tasks] : [];
        saveState();
        renderAll();
    }
    function renderGoal() {
        if (state.goal) {
            currentGoalDisplay.innerHTML = `
                <h3><i class="fas fa-trophy"></i> Current Goal:</h3>
                <p>${state.goal}</p>
                <button id="edit-goal" class="edit-btn"><i class="fas fa-edit"></i> Edit Goal</button>
            `;
            document.getElementById('edit-goal').addEventListener('click', () => {
                goalInput.value = state.goal;
                state.goal = '';
                saveState();
                renderGoal();
            });
        } else {
            currentGoalDisplay.innerHTML = '<p><i class="fas fa-info-circle"></i> No goal set yet</p>';
        }
    }
    function setGoal() {
        const goal = goalInput.value.trim();
        if (goal) {
            state.goal = goal;
            goalInput.value = '';
            saveState();
            renderGoal();
        }
    }
    function renderTasks() {
        tasksContainer.innerHTML = '';

        if (state.tasks.length === 0) {
            tasksContainer.innerHTML = `
                <div class="task-item">
                    <p><i class="fas fa-info-circle"></i> No tasks yet. Select a mentor or add custom tasks.</p>
                </div>
            `;
            return;
        }

        state.tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';

            let linksHTML = '';
            if (task.links && task.links.length > 0) {
                linksHTML = `<div class="task-links">`;
                task.links.forEach(link => {
                    linksHTML += `<a href="${link.url}" target="_blank" class="task-link">${link.title}</a>`;
                });
                linksHTML += `</div>`;
            }

            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                <div class="task-content">
                    <div class="task-text ${task.completed ? 'task-completed' : ''}">${task.text}</div>
                    ${linksHTML}
                </div>
                <div class="task-actions">
                    <button class="task-btn edit-task" data-index="${index}"><i class="fas fa-edit"></i></button>
                    <button class="task-btn delete-task" data-index="${index}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            tasksContainer.appendChild(taskItem);
        });
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', toggleTaskComplete);
        });

        document.querySelectorAll('.edit-task').forEach(btn => {
            btn.addEventListener('click', editTask);
        });

        document.querySelectorAll('.delete-task').forEach(btn => {
            btn.addEventListener('click', deleteTask);
        });
    }
    function toggleTaskComplete(e) {
        const index = e.target.dataset.index;
        state.tasks[index].completed = e.target.checked;
        saveState();
        renderTasks();
    }
    function editTask(e) {
        const index = e.target.closest('button').dataset.index;
        const newText = prompt('Edit task:', state.tasks[index].text);
        if (newText && newText.trim()) {
            state.tasks[index].text = newText.trim();
            saveState();
            renderTasks();
        }
    }
    function deleteTask(e) {
        const index = e.target.closest('button').dataset.index;
        if (confirm('Delete this task?')) {
            state.tasks.splice(index, 1);
            saveState();
            renderTasks();
        }
    }

    function addTask() {
        const text = newTaskInput.value.trim();
        if (text) {
            state.tasks.push({
                text,
                completed: false,
                links: []
            });
            newTaskInput.value = '';
            saveState();
            renderTasks();
        }
    }
    function renderResources() {
        resourcesContainer.innerHTML = '';

        if (state.resources.length === 0) {
            resourcesContainer.innerHTML = `
                <div class="resource-card">
                    <div class="resource-content">
                        <p><i class="fas fa-info-circle"></i> No resources saved yet</p>
                    </div>
                </div>
            `;
            return;
        }

        state.resources.forEach((resource, index) => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'resource-card';
            resourceCard.innerHTML = `
                <div class="resource-content">
                    <div class="resource-title">${resource.title}</div>
                    <a href="${resource.url}" target="_blank" class="resource-url">${resource.url}</a>
                    <div class="resource-actions">
                        <button class="task-btn delete-resource" data-index="${index}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
            resourcesContainer.appendChild(resourceCard);
        });

        document.querySelectorAll('.delete-resource').forEach(btn => {
            btn.addEventListener('click', deleteResource);
        });
    }
    function addResource() {
        const title = resourceTitle.value.trim();
        const url = resourceUrl.value.trim();

        if (title && url) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                alert('Please enter a valid URL (starting with http:// or https://)');
                return;
            }

            state.resources.push({ title, url });
            resourceTitle.value = '';
            resourceUrl.value = '';
            saveState();
            renderResources();
        }
    }
    function deleteResource(e) {
        const index = e.target.closest('button').dataset.index;
        if (confirm('Delete this resource?')) {
            state.resources.splice(index, 1);
            saveState();
            renderResources();
        }
    }
    init();
});