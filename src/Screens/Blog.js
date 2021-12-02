import React, {useEffect , useState} from 'react'

import { Box, Typography ,CardContent } from "@mui/material"
import { borderLeft } from '@mui/system'
import { Colors } from '../Colors/Colors'


function Blog(item) {

    const [isLoading, setLoading] = useState(true)
    const [Blog, setBlog] = useState()

    useEffect(() => {

        const URL = "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/" + item.location.state['id'];

        fetch(URL)
        .then((res) => res.json())
        .then((Data => {
            setBlog(Data)
            setLoading(false)
        }))
        .catch( error => {
            alert(error)
        })

    }, [])


    if(isLoading){

        return <h1>Loading</h1>
    
    }else{

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1em',
                    padding: '2em 0 2em 0',
                    fontFamily: 'Manrope'
                }}
            >

                <Box 
                    sx={{
                        width: '40vw',
                        minWidth: '300px',
                    }}
                >
                    <CardContent
                        sx={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            gap: '1em'
                        }}
                    >
                        <Typography 
                            fontSize= '0.7em' 
                            variant="p"
                        >
                            Posted on October 6th 2021   
                        </Typography>

                        <Box>
                            <Typography 
                                variant="h5"
                                fontWeight="600"
                                color= {Colors.black}
                            >
                                {Blog.Title}
                            </Typography>

                            <Typography 
                                fontSize= '0.7em' 
                                variant="p"
                            >
                                {Blog.Subtitle}
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
                {/* First Section End */}
                
                <Box>
                        <Box 
                            sx={{
                                width: '80vw',
                                minWidth: '300px'
                            }}
                            component="img"
                            src= {Blog.Image}
                        />
                </Box>
                {/* Second Section End */}

                <Box 
                    sx={{
                        width: '40vw',
                        minWidth: '300px'
                    }}
                >
                    <CardContent
                        sx={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            gap: '1em'
                        }}
                    >
                        <Typography 
                            variant="h5"
                            fontWeight="600"
                        >
                            This is a blog post headline
                        </Typography>

                        <Typography 
                            fontSize= '0.7em' 
                            variant="p"
                        >
                        {Blog.Article}
                        </Typography>
                    </CardContent>
                </Box>
                {/* Thirds Section End */}

                <Box>
                        <Box 
                            sx={{
                                width: '40vw',
                                minWidth: '300px'
                            }}
                            component="img"
                            src= {Blog.Image}
                        />
                </Box>
                {/* First Section End */}

                <Box 
                    sx={{
                        width: '40vw',
                        minWidth: '300px'
                    }}
                >
                    <CardContent
                        sx={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            gap: '1em'
                        }}
                    >
                        <Typography 
                            variant="h5"
                            fontWeight="600"
                        >
                            This is a small blog post headline
                        </Typography>

                        <Typography 
                            fontSize= '0.7em' 
                            variant="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
                            Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. 
                            Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
                        </Typography>
                        <Typography
                            fontSize= '0.7em' 
                            variant="p" 
                            sx={{
                                borderLeft: '2px solid black'
                            }}
                            paddingLeft= '1em'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam.
                            Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
                        </Typography>
                        <Typography
                            fontSize= '0.7em' 
                            variant="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam.
                            Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
                        </Typography>
                    </CardContent>
                </Box>
                {/* First Section End */}

            </Box>
        )
    }
}



export default Blog
