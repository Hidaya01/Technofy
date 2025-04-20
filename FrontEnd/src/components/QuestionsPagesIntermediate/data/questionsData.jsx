const questionsData = {
  Q1: {
    question: "What's your primary goal right now?",
    options: [
      "Gain certifications in my area",
      "Contribute to projects",
      "Specialize in a specific field",
      "Move to a higher-level role",
      "Other",
    ],
    next: "/question/Q2",
  },
  Q2: {
    question: "What topics do you want to dive deeper into?",
    options: [
      "Advanced algorithms in AI",
      "Backend development and APIs",
      "Cloud infrastructure",
      "UI/UX and motion design",
      "Other",
    ],
    next: "/question/radio/question3", 
  },
  Q3: {
    question: " What area are you most interested in exploring?",
    options: [
      "Web Development",
      "Artificial Intelligence",
      "Infrastructure and DevOps ",
      "Graphic Design",
      "Have no idea"
    ],
    next: "/question/radio/question3", 
  }
  
};

export default questionsData;
