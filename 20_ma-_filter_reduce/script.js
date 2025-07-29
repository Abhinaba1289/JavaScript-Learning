const courses = [
  {
    title: "JavaScript Basics",
    price: "Free",
    duration: "3h 20m",
    desc: "Master the fundamentals of JavaScript, including variables, functions, loops, and conditionals. Perfect for beginners looking to start their coding journey.",
    category: "Coding",
    courseCode: "JS101",
    thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg"
  },
  {
    title: "Web Development Bootcamp",
    price: "$49.99",
    duration: "12h 15m",
    desc: "Become a full-stack developer by learning HTML, CSS, JavaScript, and backend technologies. Build real-world projects and deploy them online.",
    category: "Development",
    courseCode: "WD202",
    thumbnail: "https://img.youtube.com/vi/Q33KBiDriJY/hqdefault.jpg"
  },
  {
    title: "Python for Data Science",
    price: "$59.99",
    duration: "8h 30m",
    desc: "Learn Python and how it is used in data science. Cover libraries like Pandas, NumPy, and Matplotlib with real data analysis projects.",
    category: "Data Science",
    courseCode: "DS303",
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg"
  },
  {
    title: "Machine Learning with Python",
    price: "$79.99",
    duration: "10h 45m",
    desc: "Dive into machine learning algorithms, training models, and making predictions using Scikit-learn and real-world datasets.",
    category: "Data Science",
    courseCode: "ML404",
    thumbnail: "https://img.youtube.com/vi/GwIo3gDZCVQ/hqdefault.jpg"
  },
  {
    title: "Advanced JavaScript Concepts",
    price: "$39.99",
    duration: "6h 10m",
    desc: "Go beyond the basics with closures, async/await, ES6 modules, and advanced event handling in JavaScript.",
    category: "Coding",
    courseCode: "JS201",
    thumbnail: "https://img.youtube.com/vi/PoRJizFvM7s/hqdefault.jpg"
  },
  {
    title: "ReactJS Complete Guide",
    price: "$45.00",
    duration: "9h 00m",
    desc: "Learn to build dynamic front-end apps using ReactJS, components, state management, hooks, and modern architecture.",
    category: "Development",
    courseCode: "REACT101",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
  },
  {
    title: "Data Structures in JavaScript",
    price: "$29.99",
    duration: "4h 50m",
    desc: "Understand core data structures such as arrays, stacks, queues, linked lists, trees, and graphs with JavaScript examples.",
    category: "Coding",
    courseCode: "DSJS202",
    thumbnail: "https://img.youtube.com/vi/t2CEgPsws3U/hqdefault.jpg"
  },
  {
    title: "Full Stack Development Project",
    price: "$69.00",
    duration: "11h 30m",
    desc: "Build a complete web app from scratch using Node.js, Express, MongoDB, and React. Learn authentication, APIs, and deployment.",
    category: "Development",
    courseCode: "FS303",
    thumbnail: "https://img.youtube.com/vi/4sosXZsdy-s/hqdefault.jpg"
  },
  {
    title: "SQL for Data Science",
    price: "Free",
    duration: "5h 00m",
    desc: "Learn how to query databases using SQL. Covers SELECT, JOIN, GROUP BY, and real-world data analysis queries.",
    category: "Data Science",
    courseCode: "SQLDS404",
    thumbnail: "https://img.youtube.com/vi/27axs9dO7AE/hqdefault.jpg"
  },
  {
    title: "Responsive Web Design",
    price: "$35.00",
    duration: "6h 20m",
    desc: "Design beautiful, responsive websites using HTML5, CSS3, Flexbox, and Grid. Includes hands-on layout projects.",
    category: "Development",
    courseCode: "RWD505",
    thumbnail: "https://img.youtube.com/vi/srvUrASNj0s/hqdefault.jpg"
  },
  {
    title: "JavaScript DOM Manipulation",
    price: "$25.00",
    duration: "3h 40m",
    desc: "Understand how to interact with the web page using JavaScript DOM methods, events, and dynamic content creation.",
    category: "Coding",
    courseCode: "DOM606",
    thumbnail: "https://img.youtube.com/vi/0ik6X4DJKCc/hqdefault.jpg"
  },
  {
    title: "Git & GitHub Essentials",
    price: "$19.99",
    duration: "2h 30m",
    desc: "Learn version control with Git and collaborate using GitHub. Covers branching, pull requests, and open-source contribution.",
    category: "Development",
    courseCode: "GIT707",
    thumbnail: "https://img.youtube.com/vi/RGOj5yH7evk/hqdefault.jpg"
  },
  {
    title: "Statistics for Data Science",
    price: "$49.99",
    duration: "7h 15m",
    desc: "Master statistical concepts like mean, median, standard deviation, hypothesis testing, and correlation essential for data science.",
    category: "Data Science",
    courseCode: "STAT808",
    thumbnail: "https://img.youtube.com/vi/xxpc-HPKN28/hqdefault.jpg"
  },
  {
    title: "JavaScript Projects for Beginners",
    price: "Free",
    duration: "5h 45m",
    desc: "Practice your JavaScript skills by building beginner-friendly projects like a calculator, to-do app, and quiz app.",
    category: "Coding",
    courseCode: "JSPJ909",
    thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg"
  },
  {
    title: "Data Analysis with Pandas",
    price: "$39.99",
    duration: "6h 50m",
    desc: "Analyze and manipulate large datasets using the Pandas library in Python. Includes hands-on analysis and visualizations.",
    category: "Data Science",
    courseCode: "PANDAS999",
    thumbnail: "https://img.youtube.com/vi/vmEHCJofslg/hqdefault.jpg"
  }
];




const btnContainer = document.querySelector(".btn-container");
const courseContainer = document.querySelector(".courses-container");



btnContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains("btn")){
        let allbtn = document.querySelectorAll(".btn");
        allbtn.forEach((item) => {
            item.classList.remove("selected");
        });
    }
    e.target.classList.add("selected");
})

btnContainer.addEventListener("click", (e) => {
   const code = e.target.innerText.trim();
   const value = courses.filter((item) => {
    if(code === "All") {
        return true; // Return all items if "All" is selected
    }
    return item.category.toLowerCase() == code.toLowerCase();
   })
   renderCourses(value)
});


function renderCourses(data){
    courseContainer.innerHTML="";
    let html = "";
    data.map(item => {
        html+= 
        `
        <div class="course">
            <img src="${item.thumbnail}" class="img" alt="courseImg" loading="lazy">
            <div class="head">
                <div class="title">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
            <div class="duration">${item.duration}</div>
            <div class="desc">${item.desc}</div>
        </div>
        `
    }).join('');

    courseContainer.innerHTML = html;
    
}

renderCourses(courses);

