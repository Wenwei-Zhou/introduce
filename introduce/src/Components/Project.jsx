// import CardActionArea from '@mui/material/CardActionArea';
import "../App.css";
import { projectList } from "../ProjectList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  animate,
  hover,
} from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Project() {
  // const cardRef = useRef(null);

  // 用useRef可以避免冲突，用className如果有多个className等于box，就会有冲突，但是用useRef只能一个 Card 能执行动画，每一个Card都要有一个useRef
  // useEffect(() => {
  //     if(cardRef.current) {
  //         hover(cardRef.current, (element) => {
  //             animate(element, { scale: 1.3 });

  //             return () => animate(element, { scale: 1 });
  //         });
  //     }
  // }, []);

  // 在组件首次挂载后执行一次，只绑定一次 hover 事件，防止重复。就是当鼠标移动到那的时候execute

  useEffect(() => {
    hover(".card", (element) => {
      animate(element, { scale: 1.1 }, { duration: 0.4, easing: "ease-out" }); // 将元素放大到原来的 1.3 倍大小，duration 表示 动画持续的时间，单位是 秒（s） 或 毫秒（ms）。easing不同类型的动画节奏

      return () => animate(element, { scale: 1 }); // 这个 return 的函数就是**“清理函数”**，当鼠标离开时执行，它将元素恢复到原始大小（scale = 1）
    });
  }, []);

  return (
    <div id="project">
      <Grid container spacing={3}>
        {projectList.map((project) => (
          <Grid size={4}>
            <Card
              className="card"
              sx={{
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "solid",
                borderColor: "white",
                "&:hover": { borderColor: "Bisque" },
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  sx={{ height: 140 }}
                  image={project.src}
                  alt={project.alt}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">
                    {project.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    sx={{ color: "text.primary" }}
                  >
                    Tools: {project.tool}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Box>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "SandyBrown",
                    "&:hover": { backgroundColor: "Bisque" },
                  }}
                  component="a"
                  href={project.link}
                >
                  WEB APPLICATION
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "LightSlateGrey",
                    "&:hover": { backgroundColor: "LightGrey" },
                  }}
                  component="a"
                  href={project.githubLink}
                >
                  GITHUB LINK
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
