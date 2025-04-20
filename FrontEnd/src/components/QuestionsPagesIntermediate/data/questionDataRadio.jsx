const questionPagesDataRadio = {
  question1: {
    question: "Are you currently working on any projects?",
    options: [
      "Yes, personal projects",
      "Yes, professional projects",
      "No, just exploring"
    ],
    nextRoute: "/question/radio/question2"
  },
  question2: {
    question: "How do you prefer solving technical problems?",
    options: [
      "Watching video tutorials",
      "Reading technical documentation",
      "Trial and error on live projects"
    ],
    nextRoute: "/question/radio/question3"
  },
  question3: {
    question: "Do you prefer starting from theory or diving into practice?",
    options: ["Practice", "Theory"],
    nextRoute: (option) => {
      return option === "Practice" ? "/CourseHas" : "/question/radio/question4";
    }
  },
  question4: {
    question: "How old are you?",
    options: [
      "under 18",
      "18-24",
      "25-34",
      "35-44",
      "over 45"
    ],
    nextRoute: "/DoneAge"
  },
  question5: {
    question: "Where did you hear about us?",
    options: [
      "By Friend",
      "Social media",
      "At School",
      "At Work",
      "Other source"
    ],
    nextRoute: "/ThankYou"
  },
  question6: {
    question: "What is your goal for joining this platform?",
    options: [
      "Learn a new skill",
      "Build personal projects",
      "Advance in your career",
      "Other"
    ],
    nextRoute: "/question/radio/question7"
  },
  question7: {
    question: "What kind of learning approach works best for you?",
    options: [
      "Step-by-step video guides",
      "Text-based resources & articles",
      "Interactive tutorials"
    ],
    nextRoute: "/question/radio/question8"
  },
  question8: {
    question: "How much time per week can you dedicate to learning?",
    options: [
      "Less than 2 hours",
      "2-5 hours",
      "More than 5 hours"
    ],
    nextRoute: "/question/Q3"
  }
};

export default questionPagesDataRadio;
