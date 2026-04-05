export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Kannur University",
    location: "Kannur, Kerala",
    duration: "2018 - 2021",
    grade: "7.82 CGPA",
    courses: [
      "Java",
      "C++",
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Web Development",
      "Cloud Computing",
      "Software Engineering",
    ],
    logo: "💻",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "College of Applied Science, Neruvambram",
    location: "Kannur, Kerala",
    duration: "2015 - 2018",
    grade: "81.53%",
    courses: [
      "Programming Fundamentals",
      "Computer Networks",
      "Operating Systems",
      "Discrete Mathematics",
      "OOP Concepts",
      "Web Technologies",
    ],
    logo: "🎓",
  },
].sort(
  (a, b) =>
    new Date(b.duration.split("-")[1]) - new Date(a.duration.split("-")[1])
);
