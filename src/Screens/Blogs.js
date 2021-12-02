import React, {useEffect , useState} from 'react'

import { 
    Box, 
    Typography, 
    Card,  
    CardMedia, 
    CardContent,
    Grid,
    Button
} from "@mui/material"

import { Colors } from '../Colors/Colors'
import SingleBlog from '../Components/SingleBlog'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Blogs() {

    const [Blogs, setBlogs] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [more, setMore] = useState(10)
    const [Full, setFull] = useState(false)

    useEffect(() => {

        const URL = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"

        fetch(URL)
        .then((res) => res.json())
        .then((Data => {
            setBlogs(Data)
            setLoading(false)
        }))
        .catch( error => {
            alert(error)
        })

    }, [])

    const seeMore = () => {

        if(more + 10 <= Blogs.length){
            setMore((more + 10))
        }
        else{
            setFull(true)
        }

    }

    if(isLoading){
        return(
            <h1>Loading</h1>
        )
    }else{
        return (
            <Box
                sx={{
                    fontFamily: 'Manrope'
                }}
            >
                
                <Box
                    component= "div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            width: '50vw',
                            height: '50vh',
                            position: 'relative',
                            display: 'flex'
                        }}
                    >
                        <Box
                            component="img"
                            src= { process.env.PUBLIC_URL + "./Assets/Image.png"}
                            sx={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                zIndex: -1,
                                filter: 'brightness(45%)'
                            }}
                        />
                        <Typography
                            variant= "h4"
                            fontWeight= "600"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: Colors.white
                            }}
                        >
                            Our Blog
                        </Typography>
                    </Box>

                    <Box
                        component="div"
                        sx={{
                            width: '50vw',
                            height: '50vh',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: Colors.black,
                            color: Colors.white,
                            padding: '0 1em 0 2em',
                            textAlign: 'left'
                        }}
                    >
                        <Box
                            sx={{
                                width: '80%',
                            }}
                        >
                            <Typography
                                variant= "h5"
                            >
                                Diagnose Car Problems If You Don’t Know Much About Cars
                            </Typography>

                            <br/>

                            <Typography
                                variant="p"
                            >
                                We provide a full range of front end mechanical repairs for all makes and models of cars, 
                                no matter the cause. This includes, We provide a full range of front end mechanical.
                            </Typography>
                        </Box>
                        
                    </Box>

                </Box>
                        
                        {/* First Section End */}

                <Box
                    sx={{
                        backgroundColor: Colors.lightGrey,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '3em 1em 3em 1em',
                        boxSizing: 'border-box'
                    }}
                >
                    <Card
                        sx={{ 
                            width: '50vw',
                            minWidth: '400px',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1em'
                        }}
                    >
                        <Box
                            sx={{
                                minWidth:"200px"
                            }}
                        >
                            <CardMedia
                                component= "img"
                                image= {process.env.PUBLIC_URL + "./Assets/Avatar.png"}
                                alt= "Blog"
                                height= "100%"
                            />
                        </Box>
                            
                        <CardContent
                                sx={{
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    display: "flex",
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    gap: '1.5em'
                                }}
                            >
                                <Box
                                     sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}
                                >
                                    <Typography 
                                        fontSize= '0.7em' 
                                        variant="p"
                                    >
                                        Posted on October 6th 2021 
                                    </Typography>
                                    <Typography 
                                        fontSize= '0.7em' 
                                        variant= "p"
                                        color= {Colors.orange}
                                        letterSpacing= '2px'
                                    >
                                        Featured 
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography 
                                        variant="h5"
                                        fontWeight="600"
                                    >
                                        Should I Buy a New Car or Lease a New Car in 2021?
                                    </Typography>

                                    <Typography 
                                        fontSize= '0.7em' 
                                        variant="p"
                                    >
                                        We provide a full range of front end mechanical repairs for all makes and models of cars, 
                                        no matter the cause. This includes, We provide a full range of front end mechanical.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography
                                        fontWeight="600"
                                        fontSize= "0.7em"
                                    >
                                        Read more
                                    </Typography>

                                    <ArrowRightAltIcon/>
                                </Box>
                            </CardContent>      

                    </Card>       
                </Box>

                        {/* Second Section End */}


                <Box
                    sx={{
                        width: '80vw',
                        padding: '3em 0 3em 0',
                        margin: 'auto'
                    }}
                >
                    <Grid 
                        container 
                        spacing={{ xs: 2, md: 3 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {Blogs.slice(0,more).map((blog, index) => (

                            <SingleBlog
                                blog= {blog}
                                key= {index}
                            />
                            
                        ))}
                    </Grid>
                    
                    {
                        Full 
                        ?
                            <></>
                        :
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    padding: '2em'
                                }}
                            >
                                <Button
                                    variant="contained" 
                                    disableRipple
                                    sx={{
                                        backgroundColor: Colors.black,
                                        color: Colors.white
                                    }}
                                    onClick={seeMore}
                                >
                                    See More
                                </Button>
                            </Box>
                    }
                    
                </Box>

                        {/* Third Section End */}


            </Box>
        )
    }
}


export default Blogs
