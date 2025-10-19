import calculator from './Image/investmentCalculator.png';
import Tic from './Image/TicTacToe.png';
import studyManager from './Image/studyManager.png';
import food from './Image/food.png';
import quiz from './Image/quiz.png';

export const projectList = [
    {
        id: 0,
        name: 'Study Manager',
        tool: 'React, Firebase, Material-UI, Netlify',
        link: 'https://spectacular-kitten-70df1d.netlify.app/',
        githubLink: 'https://github.com/Wenwei-Zhou/Homework_Manager.git',
        src: studyManager,
        alt: 'Study Manager',
        description: 'Study Manager is a React-based web application that helps students organize and manage their learning activities. It integrates online courses, assignment tracking, timetables, and performance statistics into a single intuitive platform. Built with React and Material UI, the app focuses on enhancing productivity and providing a clear overview of study progress.'
    },
    {
        id: 1,
        name: 'Food Order App',
        tool: 'React, Node.js, Netlify, Render',
        link: 'https://quickorderfoodapp.netlify.app/',
        githubLink: 'https://github.com/Wenwei-Zhou/FoodOrderApp.git',
        src: food,
        alt: 'Food Order App',
        description: 'This application is a digital food ordering solution for restaurants, designed to streamline the ordering process, enhance customer convenience, and enable full digital transformation of in-restaurant dining. A simple React-based Food Ordering Application that allows users to browse meals, add items to a cart, and place orders. The app demonstrates state management with Context, form handling, async requests, and modal dialogs.'
    },
    {
        id: 2,
        name: 'Quiz Game',
        tool: 'React, Netlify',
        link: 'https://reactexamquizapp.netlify.app/',
        githubLink: 'https://github.com/Wenwei-Zhou/Quiz-App.git',
        src: quiz,
        alt: 'Quiz Game',
        description: 'This is a dynamic and interactive Quiz Application built with React.js. Users can test their knowledge by answering a series of multiple-choice questions with real-time feedback and a countdown timer.'
    },
    {
        id: 3,
        name: 'Tic-Tac-Toe Game',
        tool: 'React, Netlify',
        link: 'https://tictactoewenwei.netlify.app',
        githubLink: 'https://github.com/Wenwei-Zhou/EssentialsGame',
        src: Tic,
        alt: 'Tic-TacToe',
        description: 'This is a simple Tic Tac Toe (also known as Noughts and Crosses) game built using React. The game allows two players to take turns marking a 3×3 grid with "X" and "O". The first player to align three of their marks in a horizontal, vertical, or diagonal row wins the game. If all nine squares are filled without a winner, the game ends in a draw. Deployed the application on Netlify, ensuring continuous updates and smooth deployment.'
    },
    {
        id: 4,
        name: 'Investment Calculator',
        tool: 'React, Netlify',
        link: 'https://manageinvestmentcalculator.netlify.app',
        githubLink: 'https://github.com/Wenwei-Zhou/investment-calculator',
        src: calculator,
        alt: 'investment calculator',
        description: 'The Investment Calculator helps users estimate the outcome of their investments by taking into account factors such as the initial investment amount, annual contributions, expected return rate, and investment duration. It provides a clear projection of potential growth over time, making it easier to plan and understand long-term financial goals. Deployed the application on Netlify, ensuring continuous updates and smooth deployment.'
    },
]