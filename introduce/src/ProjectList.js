import calculator from './Image/investmentCalculator.png';
import Tic from './Image/TicTacToe.png';
import onlineStore from './Image/onlineStore.png';

export const projectList = [
    {
        id: 0,
        name: 'Tic-Tac-Toe Game',
        tool: 'React, Netlify',
        link: 'https://tictactoewenwei.netlify.app',
        src: Tic,
        alt: 'Tic-TacToe',
        description: 'This is a simple Tic Tac Toe (also known as Noughts and Crosses) game built using React. The game allows two players to take turns marking a 3×3 grid with "X" and "O". The first player to align three of their marks in a horizontal, vertical, or diagonal row wins the game. If all nine squares are filled without a winner, the game ends in a draw. Deployed the application on Netlify, ensuring continuous updates and smooth deployment.'
    },
    {
        id: 1,
        name: 'Investment Calculator',
        tool: 'React, Netlify',
        link: 'https://manageinvestmentcalculator.netlify.app',
        src: calculator,
        alt: 'investment calculator',
        description: 'The Investment Calculator helps users estimate the outcome of their investments by taking into account factors such as the initial investment amount, annual contributions, expected return rate, and investment duration. It provides a clear projection of potential growth over time, making it easier to plan and understand long-term financial goals. Deployed the application on Netlify, ensuring continuous updates and smooth deployment.'
    },
    {
        id: 2,
        name: 'Online Store',
        tool: 'React, Firebase, Material-UI, Netlify',
        link: 'https://weweshop.netlify.app',
        src: onlineStore,
        alt: 'online store',
        description: 'Designed and implemented a dynamic product details page, allowing users to view detailed product information. Integrated user authentication, enabling secure registration and login functionality. Implemented a payment processing system using Stripe, allowing users to complete transactions securely. Built a responsive UI with Material-UI and optimized performance for a seamless user experience. Deployed the application on Netlify, ensuring continuous updates and smooth deployment.'
    },
]