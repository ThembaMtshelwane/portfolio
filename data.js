const projectData = [
  {
    name: 'Exam Prep - Lecturer Website',
    techStack: [
      'TypeScript',
      'React JS',
      'Next JS 13',
      'Chakra UI',
      'Firebase'
    ],
    summary: 'A full-stack website for lecturers to create and manage quizzes.',
    responsibilities: [
      'I designed the UI/UX.',
      ' I created and implemented the dashboard page, displaying the list of created quizzes.',
      'I developed the create quiz functionality, enabling lecturers to structure quizzes in a binary tree format.',
      'I devised and executed the preview and edit quiz feature, allowing lecturers to review and modify quiz questions.',
      'I designed and executed the delete quiz feature.',
      ' I implemented the student data collection feature, facilitating data collection that can also be downloaded in an Excel document.',
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://exam-prep-roan.vercel.app/',
    githublink: 'https://github.com/ThembaMtshelwane/exam-prep',
    image: '/images/lecturer/lecturer-1.PNG'
  },
  {
    name: 'Exam Prep - Student Website',
    techStack: ['TypeScript', 'ReactJS', 'NextJS 13', 'Chakra UI', 'Firebase'],
    summary: 'A full-stack website designed for students to answer quizzes.',
    responsibilities: [
      'I designed the UI/UX.',
      'I implemented the binary search functionality for answering questions. Correct answers proceed without branching, while incorrect answers generate two additional questions for response.',
      'I designed and implemented the student quiz result feature for end-of-quiz feedback, with the information forwarded to the lecturer.',
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://exam-prep-students.vercel.app',
    githublink: 'https://github.com/ThembaMtshelwane/exam-prep-students',
    image: '/images/student/student-1.PNG'
  },
  // {
  //   name: 'Wordle',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express'],
  //   summary: 'This is a simple clone of the Wordle game.',
  //   responsibilities: [
  //     'Implemented the UI.',
  //     'Allow a user to enter a word 5 letter word',
  //     'Word target word updates with each refresh.'
  //   ],
  //   website: '',
  //   githublink: 'https://github.com/ThembaMtshelwane/wordle-clone',
  //   image: '/images/wordle/wordle.PNG'
  // },
  {
    name: 'Lifestyle Survey',
    techStack: ['TypeScript', 'ReactJS 18', 'NextJS 14', 'CSS', 'Firebase'],
    summary:
      "This is a website used to collect data about people's lifestyle preferences. The more people participate the more information we will have about people's hobbies/activities., favorite foods and age.",
    responsibilities: [
      'Survey Form: This represents the first page. Here a user is asked to complete the form. Fill out all the required fields. Click the submit button to view the results',
      'Survey Results: This represents the second page. Here a user will see the results from all the data collected. From the number of participants, age range, popular food items and popular hobbies/activities.',
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://survey-beige-five.vercel.app/',
    githublink: 'https://github.com/ThembaMtshelwane/survey',
    image: '/images/survey/survey.PNG'
  },
  // {
  //   name: 'To-Do App',
  //   techStack: ['TypeScript', 'ReactJS 18', 'NextJS 14', 'CSS', 'Firebase'],
  //   summary:
  //     'This website is a simple To-Do App. A user can login and manage thier tasks',
  //   responsibilities: [
  //     'They can add, update and delete tasks.',
  //     "The tasks are stored on Google's Firestore database.",
  //     'Authentication is implemented using Firebases Authentication services.'
  //   ],
  //   website: 'https://blog-preview-card-main-neon.vercel.app/',
  //   githublink: 'https://github.com/ThembaMtshelwane/to-do-app',
  //   image: '/images/blog-post/blog-post.PNG'
  // },
  {
    name: 'Recipe Page',
    techStack: ['HTML', 'CSS'],
    summary:
      'This is a Frontend Mentor challenge where I had to build a Recipe Page and get it looking as close to the provided design as close as possible.',
    responsibilities: [
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://recipe-page-main-lake-seven.vercel.app/',
    githublink: 'https://github.com/ThembaMtshelwane/recipe-page-main',
    image: '/images/recipe-page/recipe-page.jpg'
  },
  {
    name: 'Blog Post Card',
    techStack: ['HTML', 'CSS'],
    summary:
      'This is a Frontend Mentor challenge where I had to build a Blog Post Card and get it looking as close to the provided design as close as possible.',
    responsibilities: [
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://blog-preview-card-main-neon.vercel.app/',
    githublink: 'https://github.com/ThembaMtshelwane/blog-preview-card-main',
    image: '/images/blog-post/blog-post.PNG'
  },
  {
    name: 'Results Summary Component',
    techStack: ['HTML', 'CSS'],
    summary:
      'This is a Frontend Mentor challenge where I had to build a Results Summary Component and get it looking as close to the provided design as close as possible.',
    responsibilities: [
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://results-summary-component-main-nine-bay.vercel.app/',
    githublink:
      'https://github.com/ThembaMtshelwane/results-summary-component-main',
    image: '/images/result-summary-component/result-summary-component.PNG'
  },
  {
    name: 'FAQ Accordion',
    techStack: ['HTML', 'CSS'],
    summary:
      'This is a Frontend Mentor challenge where I had to build a FAQ Accordion App and get it looking as close to the provided design as close as possible.',
    responsibilities: [
      'Hide/Show the answer to a question when the question is clicked',
      'Navigate the questions and hide/show answers using keyboard navigation alone',
      'I implemented responsive web design',
      'I implemented hover and focus states for all interactive elements on the page'
    ],
    website: 'https://faq-accordion-main-ecru.vercel.app/',
    githublink: 'https://github.com/ThembaMtshelwane/faq-accordion-main',
    image: '/images/faq-accordian/faq-a.PNG'
  },
  {
    name: 'Age Calculator App',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    summary:
      'This is a Frontend Mentor challenge where I had to build an Age Calculator App and get it looking as close to the provided design as close as possible.',
    responsibilities: [
      'View an age in years, months, and days after submitting a valid date through the form',
      'Implement validation errors',
      'See hover and focus states for all interactive elements on the page',
      "View the optimal layout for the interface depending on their device's screen size"
    ],
    website: 'https://age-calculator-app-main-blond.vercel.app/',
    githublink: 'https://github.com/ThembaMtshelwane/age-calculator-app-main',
    image: '/images/age-calculator/age-calculator.PNG'
  },
  {
    name: 'Newsletter sign-up form with success message',
    techStack: ['HTML', 'CSS'],
    summary:
      'This is a Frontend Mentor challenge where I had to build a News Letter Card and get it looking as close to the provided design as close as possible.',
    responsibilities: [
      'Add their email and submit the form',
      'See a success message with their email after successfully submitting the form',
      'See form validation messages ',
      "View the optimal layout for the interface depending on their device's screen size",
      'See hover and focus states for all interactive elements on the page'
    ],
    website:
      'https://newsletter-sign-up-with-success-message-main-lilac.vercel.app/',
    githublink:
      'https://github.com/ThembaMtshelwane/newsletter-sign-up-with-success-message-main',
    image: '/images/news-letter/news-letter.PNG'
  }
]
