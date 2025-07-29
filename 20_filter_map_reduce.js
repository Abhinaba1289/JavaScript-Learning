let arr = ["Java", "JavaScript", "Python", "C++", "Ruby"];

// const values = arr.forEach((item) => {
//     return item;
// })

// console.log(values); not returning anything, undefined because foreach always returns undefined

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const value = newArr.filter((item) => {
    return item%2 === 0
});

console.log(value)

const value2 = value.map((item) => {
    return item * 2;
});

console.log(value2);    


// creating a new arr of objects with cources details 
const courses = [
    {
        courseCode: "coding",
        courseName: "JavaScript",
        courseDuration: "3 months",
        coursePrice: 300,
        description: "Learn JavaScript from scratch"
    },
    {
        courseCode: "dev",
        courseName: "Web Development",
        courseDuration: "6 months",
        coursePrice: 600,
        description: "Become a full-stack developer"
    },
    {
        courseCode: "ds",
        courseName: "Data Science",
        courseDuration: "4 months",
        coursePrice: 500,
        description: "Master data analysis and machine learning"
    },
    {
        courseCode: "Coding",
        courseName: "Python Programming",
        courseDuration: "3 months",
        coursePrice: 400,
        description: "Learn Python for data science and web development"
    },
    {
        courseCode: "Coding",
        courseName: "Java Programming",
        courseDuration: "3 months", 
        coursePrice: 350,
        description: "Learn Java for software development"
    },
    {
        courseCode: "Coding",
        courseName: "Ruby Programming",
        courseDuration: "3 months",
        coursePrice: 320,
        description: "Learn Ruby for web development"
    }, {
        courseCode: "Coding",
        courseName: "C++ Programming",
        courseDuration: "3 months",
        coursePrice: 360,
        description: "Learn C++ for system programming"
    },
    {
        courseCode: "dev",
        courseName: "Full Stack Development",
        courseDuration: "8 months", 
        coursePrice: 800,
        description: "Become a full-stack developer with front-end and back-end skills"
    },
    {
        courseCode: "ds",
        courseName: "Machine Learning",
        courseDuration: "5 months",
        coursePrice: 550,
        description: "Learn machine learning algorithms and applications"
    },{
        courseCode: "ds",
        courseName: "Deep Learning",
        courseDuration: "5 months",
        coursePrice: 600,
        description: "Master deep learning techniques and neural networks"
    },{
        courseCode: "dev",
        courseName: "Mobile App Development",
        courseDuration: "4 months",
        coursePrice: 700,
        description: "Learn to build mobile applications for Android and iOS"
    },
    {
        courseCode: "dev",
        courseName: "Game Development",
        courseDuration: "6 months",
        coursePrice: 750,
        description: "Create games using popular game development frameworks"
    }
]


const newArr2 = courses.filter((course) =>{
    return course.courseCode === "Coding";
})

console.log(newArr2);