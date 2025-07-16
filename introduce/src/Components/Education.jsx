import aws from '../Image/aws.png'
import university from '../Image/university.png'
import Grid from "@mui/material/Grid";
import { FaLink } from "react-icons/fa";
import '../App.css'


export default function Education() {
    return(
        <Grid container spacing={2} sx={{width: '80%', position:'relative', marginLeft:'auto', marginRight:'auto', display:'flex', alignItems:'center', justifyContent:'center', paddingTop: '5%'}}>
            <Grid size={6} sx={{position:'relative', marginLeft:'auto', marginRight:'auto', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <article>
                <h2>Deakin University</h2>
                <time>2020 - 2024</time>
                <p class="line-clamp-3">
                    Bachelor of Computer Science
                </p>
                </article>
            </Grid>
            <Grid size={6}>
                <img id='edu-image' src={university} alt='education' />
            </Grid>

            <Grid size={6}>
                <img id='edu-image' src={aws} alt='aws' />
            </Grid>
            <Grid size={6} sx={{position:'relative', marginLeft:'auto', marginRight:'auto', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <article>
                <h2>AWS Certified Cloud Practitioner</h2>
                <time>May 2025</time>
                <p class="line-clamp-3">
                    <a style={{textDecoration:'none', color: 'DarkSlateGray', display:'flex', alignItems:'center'}} href='https://www.credly.com/badges/e746545b-0503-4034-a9df-ede35cc2ea74/linked_in_profile'><FaLink />Credential</a>
                </p>
                </article>
            </Grid>
        </Grid>
    )
}