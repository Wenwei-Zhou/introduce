import Grid from "@mui/material/Grid";
import introduce from '../Image/introduce.png';
import * as motion from "motion/react-client"
import Avatar from '@mui/material/Avatar';
import '../App.css';

export default function Profile() {
    return(
        <Grid container spacing={2} sx={{width: '90%', position: 'relative', marginLeft: 'auto', marginRight: 'auto', paddingTop: '5%'}}>
            <Grid size={6}>
                <motion.img
                          id='poster'
                          src={introduce} 
                          alt='Hi, my name is Wenwei'
                          initial={{ opacity: 0, scale: 0, }} //大到小
                          animate={{ opacity: 1, scale: 1 }} //小到大
                          transition={{
                              duration: 0.5,
                              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                          }}
                />
            </Grid>
            <Grid size={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px'}}>

            <article>
            {/* <time>Dec 29, 2023</time> */}
            <h2>Software Developer</h2>
            <p class="line-clamp-3">
                Software developer with Industry experience in Full Stack development, coding, testing, and 
                    application deployment.
                    
                    Proficient in ReactJS, Node.js, JavaScript, C#, ASP.NET, Python.
                    
                    Bachelor of Computer Science graduate from Deakin University with hands-on experience in academic 
                    projects involving both backend and frontend development, as well as machine learning.
                    
                    Strong time management skills through planning the project in the project development experience, and
                    Strong teamwork and problem-solving skills with a passion for continuous learning.
                    
                    Excellent communication and interpersonal skills through 2 years of experience in retail sales.
                    
                    Australian permanent resident.
            </p>
            <div>
                <Avatar>WZ</Avatar>
                Wenwei Zhou
            </div>
            </article>
            </Grid>
        </Grid>
    )
}