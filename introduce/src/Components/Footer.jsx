import { Avatar } from '@mui/material'
import { GiPositionMarker } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Button from '@mui/material/Button';
import '../App.css'

export default function Footer({onScroll}) {
    return(

        <footer id='footer'>
            <div className='footer-contain'>

            <div className='footer-image'>
                <Avatar sx={{width:'100px', height:'100px'}}>WZ</Avatar>
            </div>

            <div className='footer-link'>
                <h1>Navigate</h1>

                {/* <nav className='navFooter'> */}
                    <ul style={{listStyle:'none', padding: 0}}>
                        <li>
                            <Button variant="text"
                                sx={{
                                    color: 'DarkSlateGray',
                                    boxShadow: 'none',     // 默认无阴影
                                    '&:hover': {
                                        boxShadow: 'none',// hover 时也无阴影
                                        color: 'LightGrey',
                                    }
                                }}
                                onClick={() => {
                                onScroll('hello')
                            }}>
                                Hello
                            </Button>
                        </li>
                        <li>
                            <Button variant="text"
                                sx={{
                                    color: 'DarkSlateGray',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        color: 'LightGrey',
                                    }
                                }}
                                onClick={() => {
                                onScroll('project')
                            }}>
                                React Project
                            </Button>
                        </li>
                        <li>
                            <Button variant="text"
                                sx={{
                                    color: 'DarkSlateGray',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        color: 'LightGrey',
                                    }
                                }}
                                onClick={() => {
                                onScroll('education')
                            }}>
                                Education & Certification
                            </Button>
                        </li>
                        <li>
                            <Button variant="text"
                                sx={{
                                    color: 'DarkSlateGray',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        color: 'LightGrey',
                                    }
                                }}
                                onClick={() => {
                                onScroll('skill')
                            }}>
                                Technical Skills
                            </Button>
                        </li>
                    </ul>
                {/* </nav> */}
            </div>

            <div className='footer-link'>
                <h1>Contact</h1>
                <ul style={{listStyle:'none', padding: 0}}>
                    <li style={{ display: 'flex', alignItems:'center'}}><GiPositionMarker style={{ marginRight: '8px' }} /> Melbourne, VIC</li>
                    <li style={{ display: 'flex', alignItems:'center'}}><MdEmail style={{ marginRight: '8px' }} /> wenweizhou0@gmail.com</li>
                </ul>
            </div>

            </div>
        </footer>


        // <Grid container spacing={3}
        //     sx={{
        //         display: 'flex',
        //         alignTtems: 'center',
        //         justifyContent: 'center',
        //         position: 'relative',
        //         marginLeft: 'auto',
        //         marginRight: 'auto',
        //         maxWidth: '80%'
        //     }}>

        //     <Grid size={4}>
        //         <Avatar sx={{width:'100px', height:'100px'}}>WZ</Avatar>
        //     </Grid>

        //     <Grid size={4} container spacing={2}
        //         sx={{
        //             display: 'flex',
        //             alignTtems: 'center',
        //             justifyContent: 'center',
        //             position: 'relative',
        //             marginLeft: 'auto',
        //             marginRight: 'auto'
        //         }}>
        //         <h1 style={{color:'DarkSlateGray'}}>Navigate</h1>

        //         <nav className='navFooter'>
        //     <ul>
        //         <li>
        //             <Button variant="text"
        //                 sx={{
        //                     color: 'DarkSlateGray',
        //                     boxShadow: 'none',     // 默认无阴影
        //                     '&:hover': {
        //                         boxShadow: 'none',// hover 时也无阴影
        //                         color: 'LightGrey',
        //                     }
        //                 }}
        //                 onClick={() => {
        //                 onScroll('hello')
        //             }}>
        //                 Hello
        //             </Button>
        //         </li>
        //         <li>
        //             <Button variant="text"
        //                 sx={{
        //                     color: 'DarkSlateGray',
        //                     boxShadow: 'none',
        //                     '&:hover': {
        //                         boxShadow: 'none',
        //                         color: 'LightGrey',
        //                     }
        //                 }}
        //                 onClick={() => {
        //                 onScroll('project')
        //             }}>
        //                 React Project
        //             </Button>
        //         </li>
        //         <li>
        //             <Button variant="text"
        //                 sx={{
        //                     color: 'DarkSlateGray',
        //                     boxShadow: 'none',
        //                     '&:hover': {
        //                         boxShadow: 'none',
        //                         color: 'LightGrey',
        //                     }
        //                 }}
        //                 onClick={() => {
        //                 onScroll('education')
        //             }}>
        //                 Education & Certification
        //             </Button>
        //         </li>
        //         <li>
        //             <Button variant="text"
        //                 sx={{
        //                     color: 'DarkSlateGray',
        //                     boxShadow: 'none',
        //                     '&:hover': {
        //                         boxShadow: 'none',
        //                         color: 'LightGrey',
        //                     }
        //                 }}
        //                 onClick={() => {
        //                 onScroll('skill')
        //             }}>
        //                 Technical Skills
        //             </Button>
        //         </li>
        //     </ul>
        // </nav>

        //     </Grid>
        //     <Grid size={4}><img src={introduce} alt='HELLO' style={{width: '100px', height: '100px'}} /></Grid>

        // </Grid>
    )
}