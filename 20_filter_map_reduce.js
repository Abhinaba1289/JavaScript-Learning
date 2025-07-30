let arr = ["Java", "JavaScript", "Python", "C++", "Ruby"];

// const values = arr.forEach((item) => {
//     return item;
// })

// console.log(values); not returning anything, undefined because foreach always returns undefined

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const value = newArr.filter((item) => {
    return item%2 === 0
});

// console.log(value)

const value2 = value.map((item) => {
    return item * 2;
});

// console.log(value2);    


// creating a new arr of objects with cources details 
const courses = [
    {
        courseCode: "Coding",
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

// console.log(newArr2);


// ============= Map()==============

// const newArr3 = courses.forEach((course) => {
//     course.time = "2 hours";
//     return course;
// })

// console.log(newArr3); // -> undefined because forEach does not return anything

const newArr3 = courses.map((course) => {
    course.time = "2 hours";
    return course;
})

console.log(newArr3); // -> returns a new array with the modified objects

// the difference between filter and map is that filter returns a new array with elements that pass the test implemented by the provided function, while map returns a new array with the results of calling a provided function on every element in the calling array.

// and map() and forEach() are similar in that they both iterate over an array, but map() creates a new array with the results of applying a function to each element, while forEach() simply executes a function on each element without returning anything.

// forEach Doesnot return anything 
// but map return a new array.


// now chaining filter and map multiple times
const filteredCourses = courses
    .filter(course => course.courseCode === "Coding")
    .map(course => {
        return {
            title: course.courseName,
            price: course.coursePrice,
            duration: course.courseDuration,
            desc: course.description
        };
    });

console.log(filteredCourses); // -> returns an array of objects with selected properties






// ============== Reduce() =============


const array1 = [1, 2, 3, 4, 5];

let initial = 0;
let total = array1.reduce(
    (acc, curr) => acc + curr, 
    initial
);
let total2 = array1.reduce(
    function (acc, curr) {
        return acc + curr;
        
    }, 0
);

console.log(total2) // -> returns the sum of all elements in the array, which is 15

// SO reduce() executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It can be used to sum numbers, concatenate strings, or even flatten arrays and more complex operations.

// lets add all the prices of my courses 
const totalPrice =  courses.reduce(
    function(acc, cur ){
        return acc + cur.coursePrice;
    }, 0
);

console.log(totalPrice);