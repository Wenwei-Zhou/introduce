import '../App.css';
import Button from '@mui/material/Button';

export default function Navbar({onScroll}) {
    return (
        <nav className='nav'>
            <ul>
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
                {/* <li>
                    <Button variant="text"
                        sx={{
                            color: 'black',
                            boxShadow: 'none',
                            '&:hover': {
                                boxShadow: 'none',
                                color: 'grey',
                            }
                        }}
                        onClick={() => {
                        onScroll('profile')
                    }}>
                        About me
                    </Button>
                </li> */}
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
        </nav>

        //不建议用这个！！！！！！！！！！！！！！！！！！！
        // <nav className="nav">
        //     <ul>
        //         <li>
        //             <a href="#" onClick={(e) => {
        //                 e.preventDefault(); // 阻止默认跳转行为
        //                 onScroll('hello');   // 自定义行为：比如平滑滚动
        //             }}>  
        //                 Hello
        //             </a>
        //         </li>
        //         <li>
        //             <a href='#' onClick={(e) => {
        //                 e.preventDefault();
        //                 onScroll('profile');
        //             }}>
        //                 About me
        //             </a>
        //         </li>
        //         <li>
        //             <a href='#' onClick={(e) => {
        //                 e.preventDefault();
        //                 onScroll('project');
        //             }}>
        //                 Project Experience
        //             </a>
        //         </li>
        //         <li>
        //             <a href='#' onClick={(e) => {
        //                 e.preventDefault();
        //                 onScroll('education');
        //             }}>
        //                 Education & Certification
        //             </a>
        //         </li>
        //         <li>
        //             <a href='#' onClick={(e) => {
        //                 e.preventDefault();
        //                 onScroll('skill');
        //             }}>
        //                 Technical Skills
        //             </a>
        //         </li>
        //         {/* onScroll('about'): 点击时调用 onScroll，并传 'about' ✅ 是 */}
        //         {/* onClick={onScroll = 'about'}	试图赋值，不是函数	❌ 错误 */}

        //         {/* href="#" 是为了：
        //         让 <a> 保持 HTML 标准语义（是个链接）
        //         可被键盘聚焦
        //         可被屏幕阅读器识别
        //         但是我们不想它真的跳转，所以用 e.preventDefault() 阻止它 */}

        //         {/* 加上 href="#" 并阻止默认跳转
        //             # 本身指的是“当前页面的顶部”
        //             href="#"：确保它是个真正的“链接”
        //             e.preventDefault()：阻止默认跳转
        //             提供 onClick 回调：执行滚动或其它行为
        //         */}

        //         {/*  <Navbar />在App.js执行，点击之后通过onClick()，把onScroll，作为parameter传到App.js, 然后在App.js是onScroll={scrollToSection} */}
        //         {/* 点击哪个<a>，onScroll就等于哪个 */}
        //     </ul>
        // </nav>
    )
}