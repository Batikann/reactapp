import { useState } from "react";
import { Avatar, Box, Grid, IconButton } from "@mui/material";
import { FavoriteOutlined, ShareRounded } from "@mui/icons-material";
import avatar from "./avatar_test.png";

const styleOpts = {
    Box:{
        width:"40vw",
        border:"1px solid black",
        paddingBottom:"1em",
        margin:"1em",
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
        maxWidth:"35vw"
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
                    style={{
                        marginLeft:"16px"
                    }}
                >
                    <IconButton aria-label="like" onClick={changeLikeStatus} color={likeStatus ? "error" : "default"}>
                        <FavoriteOutlined style={{ color: likeStatus ? 'red' : 'gray' }}/>
                    </IconButton>
                    <IconButton aria-label="share" color="success">
                        <ShareRounded style={{ color: "green" }} />
                    </IconButton>
                </Grid>
                <Grid   
                    container 
                    item 
                    direction="row" 
                    justifyContent="center" 
                    sx={{
                        width:"fit-content",
                        marginRight:"16px"
                    }} 
                >
                    <Grid item>
                        <Avatar src={avatar} />
                    </Grid>
                    <Grid item>
                        <Grid item ml={1} className="comment-misc-user-info">
                            <Grid item className="user-name">User</Grid>
                            <Grid item className="comment-date">14.06.2023</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
