import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React from "react";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { makeStyles } from "@mui/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f6f8fa",
  },
  blue: {
    color: "#3e40de",
    paddingLeft: "5px",
    // color: "red",
  },
  repoName: {
    padding: "1rem 0 1rem 2rem",
  },
  repoButtons: {
    padding: "1rem 2rem 1rem 0",
    fontSize: "10px",
  },
  tabBar: {
    paddingLeft: "2rem",
  },
  tabs: {
    fontSize: "13px !important",
    // padding: "0px 10px !important",
    margin: "0 !important",
  },
}));

function TabBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid flexDirection="row" container justifyContent="space-between">
        <Grid container xs={6} alignItems="center" className={classes.repoName}>
          <BookOutlinedIcon />
          <Typography
            variant="h6"
            className={classes.blue}
            style={{ paddingRight: "5px" }}
          >
            facebook
          </Typography>
          <Typography variant="h5">/</Typography>
          <Typography variant="h6" className={classes.blue}>
            <b>create-react-app</b>
          </Typography>
        </Grid>
        <Grid
          container
          xs={6}
          columnGap={1}
          alignItems="center"
          justifyContent="flex-end"
          className={classes.repoButtons}
        >
          <ButtonGroup variant="outlined">
            <Button
              startIcon={<FavoriteBorderIcon style={{ color: "#d10091" }} />}
            >
              Sponsor
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button startIcon={<RemoveRedEyeOutlinedIcon />}>Watch</Button>
            <Button>1.9k</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button startIcon={<StarBorderOutlinedIcon />}>Star</Button>
            <Button>91.4k</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button startIcon={<RestaurantOutlinedIcon />}>Fork</Button>
            <Button>23.2k</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className={classes.tabBar}
      >
        <Tabs value={1} aria-label="basic tabs example">
          <Tab
            label="Code"
            icon={<CodeIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
          <Tab
            label="Issues"
            icon={<CircleOutlinedIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
          <Tab
            label="Pull Requests"
            icon={<ArrowUpwardIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
          <Tab
            label="Discussions"
            icon={<ForumOutlinedIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
          <Tab
            label="Actions"
            icon={<PlayCircleFilledWhiteOutlinedIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
          <Tab
            label="Projects"
            icon={<NoteOutlinedIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
          <Tab
            label="Insights"
            icon={<InsightsOutlinedIcon />}
            iconPosition="start"
            className={classes.tabs}
          />
        </Tabs>
      </Box>
    </div>
  );
}

export default TabBar;
