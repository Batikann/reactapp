import { useState } from "react";
import { Avatar, Box, Grid, IconButton } from "@mui/material";
import { FavoriteBorder, FavoriteOutlined, ShareOutlined, ShareRounded } from "@mui/icons-material";
import avatar from "./avatar_test.png";

const styleOpts = {
    Box:{
        width:"40vw",
        paddingBottom:"1em",
        margin:"1em",
        backgroundColor:"#0a97d9"
    },
    CommentContent:{
        padding: "16px",
        margin:0
    },
    CommentMiscs:{
        direction:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0 auto",
        maxWidth:"38vw"
    }
}

export default function Comment() { 

    const [likeStatus, setLikeStatus] = useState(false);

    const changeLikeStatus = () => setLikeStatus(!likeStatus);

    return (
        <Box 
            sx={styleOpts.Box} 
            className="comment-box"
        >
            <p 
                style={styleOpts.CommentContent} 
                className="comment-content"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repellat hic quasi accusamus harum ex, sed maiores inventore ipsa id vel exercitationem praesentium architecto saepe blanditiis voluptas similique. Aperiam, cumque!
            </p>
            <Grid 
                container 
                className="comment-misc"
                sx={styleOpts.CommentMiscs}
            >
                <Grid 
                    item 
                    className="comment-misc-buttons" 
                >
                    <IconButton aria-label="like" onClick={changeLikeStatus} color={likeStatus ? "error" : "default"}>
                        {
                            likeStatus ?
                                <FavoriteOutlined style={{color:'red'}}/> :
                                <FavoriteBorder style={{color:'#fff'}}/>
                        }
                        
                    </IconButton>
                    <IconButton aria-label="share" color="default">
                        <ShareOutlined style={{ color: "white" }} />
                    </IconButton>
                </Grid>
                <Grid   
                    container 
                    item 
                    direction="row" 
                    justifyContent="center" 
                    sx={{
                        width:"fit-content"
                    }} 
                >
                    <Grid item>
                        <Avatar src={avatar} />
                    </Grid>
                    <Grid item>
                        <Grid item ml={1} className="comment-misc-user-info" color="#fff">
                            <Grid item className="user-name">User</Grid>
                            <Grid item className="comment-date">14.06.2023</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
