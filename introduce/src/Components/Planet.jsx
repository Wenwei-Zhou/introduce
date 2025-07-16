import { Box } from "@mui/material";
import skill from '../Image/skill.png'
import logo0 from '../Logo/asp.png'
import logo1 from '../Logo/c3.png'
import logo2 from '../Logo/firebase.png'
import logo3 from '../Logo/git.png'
import logo4 from '../Logo/github.png'
import logo5 from '../Logo/githubDesktop.png'
import logo6 from '../Logo/JavaScript.png'
import logo7 from '../Logo/microsoft.png'
import logo8 from '../Logo/Postgresql.png'
import logo9 from '../Logo/python.png'
import logo10 from '../Logo/React.png'

const planetLogos = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

export default function Planet() {
  const radius = 300; // 环绕半径
  const centerSize = 300;
  const planetSize = 100;

  return (
    <Box
      sx={{
        position: 'relative',
        width: radius * 2 + centerSize,
        height: radius * 2 + centerSize,
        margin: '0 auto',
        paddingTop: '5%',
      }}
    >
      {/* 中心 logo */}
      <Box
        sx={{
          width: centerSize,
          height: centerSize,
          borderRadius: '50%',
          backgroundColor: '#ffcc00',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={skill} alt="center" style={{ width: '60%', height: '60%', borderRadius:'50%' }} />
      </Box>

      {/* 环绕图标 */}
      {planetLogos.map((logo, index) => {
        const angle = (360 / planetLogos.length) * index;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: planetSize,
              height: planetSize,
              borderRadius: '50%',
              top: `calc(50% + ${y}px - ${planetSize / 2}px)`,
              left: `calc(50% + ${x}px - ${planetSize / 2}px)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#eee',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
              },
            }}
          >
            <img src={logo} alt={`planet-${index}`} style={{ width: '60%', height: '60%' }} />
          </Box>
        );
      })}
    </Box>
  );
}
