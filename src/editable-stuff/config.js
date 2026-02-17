// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Srikhar",
  middleName: "Bashyam",
  lastName: "Padmanabhan",
  message: " Hey! Welcome to my page. Scroll or click the tabs above to learn more about me and some projects I've done. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/srikharpadmanabhan",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/srikharpadmanabhan/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/srikharpadmanabhan/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sri_image.png"),
  imageSize: 375,
  message:
    "Hey! My name is Srikhar Padmanabhan and I am a recent graudate of the MPCS at the University of Chicago. Before that, I was a TDP at Capital One in the San Francisco office from August 2023 to September 2024. I completed my undergraduate at the University of Michigan receiving a Bachelor's degree in Computer Science and Economics. I am passionate about software engineering, machine learning and its applications. In my free time, I like to go play basketball, kick a soccer ball, or throw a frisbee",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "srikharpadmanabhan", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["personal-portfolio-site", "react-website-first", "kaggle-duplicate-quora", "todo-list-and-recipe-application", "marvel-api-displayer"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 93 },
    { name: "Data Structures", value: 99 },
    { name: "C/C++", value: 87 },
    { name: "TensorFlow", value: 65 },
    { name: "Keras", value: 70 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 35 },
    { name: "HTML/CSS", value: 50 },
    { name: "MATLAB", value: 60 },
    { name: "Golang", value: 70 },
    { name: "AWS", value: 60 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 99 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 95 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, please feel free to email me at",
  email: "srikhedu@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
