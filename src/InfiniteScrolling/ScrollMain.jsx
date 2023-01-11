import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from './Loading'

const ScrollMain = () => {
    const [user, setUser] = useState([])
    const [count, setCount] = useState(12)
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${count}`);
            console.log(data)
            setUser(()=> [ ...data])
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [count])

    const infiniteScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        console.log(scrollHeight)
        const innerHeight = window.innerHeight;
        console.log(innerHeight)
        const scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop)
        try {
            if (innerHeight + scrollTop + 1 >= scrollHeight) {
                console.log('sahi')
                setCount(count + 9)
                setLoading(true)
                console.log(count)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);

    }, [user])

    return (
        <Grid container style={{paddingLeft:60}} spacing={4} >
            {
                user.map((users) => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        < Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={users.thumbnailUrl}
                                    alt="thumbnail"
                                />
                                <CardContent>
                                    <Typography>{users.id}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {users.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
            {
                loading && <Loading/>
            }
        </Grid>
    )
}

export default ScrollMain