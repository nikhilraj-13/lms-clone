export const students = [
  {
    uid: "108459",
    password: "123456",
    name: "Nikhil Raj",
    email: "nikhil0001007@gmail.com",
    mobile: "9999999991",
    university: "SUxCG 714",

    image: "https://res.cloudinary.com/dkiez6yqc/image/upload/v1770272960/Nikhil_sffwbv.png",

    attendance: [
      {
        semester: "Semester 1",
        present: 128,
        total: 253,
        bonus: 0,
        percentWithBonus: 851,
        percentLabel: 51,
        startDate: "01/08/2025",
        endDate: "28/12/2026",
      },
      {
      semester: "Semester 2",
      present: 166,
      total: 216,
      bonus: 26,
      percentWithBonus: 90,
      percentLabel: 77,
      startDate: "29/01/2026",
      endDate: "30/06/2026",
    },
    ],

    subjects: [
      "SU11 - GIT & GITHUB",
      "SU12 - C Language",
      "SU13 - HTML/CSS/JS",
      "SU14 - UI/UX FIGMA",
      "SU15 - MATHS",
      "SU16 - JavaScript",
      "SU0201 - ReactJS",
      "SU0202 - NodeJS",
      "SU0203 - NoSQL",
      "SU0204 - OOPS",
      "SU0205 - Maths 2",
      "SU0206 - EVS",
      "SU0207 - IR 01",
      "SU0208 - IR 02",
    ],

    mentors: [
      {
        name: "Ankita",
        batch: "SUxCG 714",
      },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],
  },
];
export const loginDetails = (uid, password) => {
  const student = students.find(
    (s) => s.uid === uid && s.password === password,
  );

  if (!student) return false;

  localStorage.setItem("user", JSON.stringify(student));

  return true;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const checkAuth = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};