import React  from 'react'

import { 
    Grid,
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button
} from "@mui/material"

import { Link } from 'react-router-dom'
import { Colors } from '../Colors/Colors'
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useSelector, useDispatch } from "react-redux"
import { AddView } from "../Redux/Actions"

function SingleBlog({ blog }) {

    const state = useSelector((state) => state.Views);
    const dispatch = useDispatch();

    const CountView = (index) => {

        dispatch(AddView(index))

    }

    return (
                            <Grid item xs={4} sm={4} md={4} >
                                <Card
                                    sx={{
                                        height: '100%'
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            maxWidth: '20vw',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.5em',
                                            margin: 'auto'
                                        }}
                                    >
                                    
                                        <CardMedia
                                            component= "img"
                                            image= { blog.Image }
                                            alt= "Blog" 
                                        />
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
                                                variant="p"
                                                display='flex'
                                                alignItems='center'
                                                gap='5px'
                                            >
                                                Views:
                                                {   
                                                    state[blog.id] !== undefined &&
                                                    <>
                                                        {state[blog.id]['views']}
                                                        <VisibilityIcon 
                                                            color="disabled"
                                                            fontSize= '0.7em'
                                                        />
                                                    </>
                                                }
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            fontWeight="600"
                                        >
                                            <Link 
                                                onClick={ () => CountView(blog.id) }
                                                color= {Colors.black}
                                                to={{
                                                    pathname:"/Blog",
                                                    state:{id: blog.id},
                                                }}
                                            >
                                                { blog.Title }
                                            </Link>
                                        </Typography>
                                        <Typography 
                                            fontSize= '0.7em' 
                                            variant="p"
                                        >
                                            { blog.Subtitle }
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
    )
}

export default SingleBlog
