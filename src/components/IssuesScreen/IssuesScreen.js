import React, { useState, useEffect } from "react";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import TabBar from "./TabBar";
import {
  Button,
  ButtonGroup,
  Grid,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import AssistantDirectionOutlinedIcon from "@mui/icons-material/AssistantDirectionOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import IssueItem from "./IssueItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import {
  fetchIssues,
  sortNewest,
  sortOldest,
} from "../../redux/issues/issueAction";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 0px",
    maxWidth: "1200px !important",
  },
  issueHead: {
    border: "1px solid #d0d6df",
    padding: "5px 10px",
    borderRadius: "5px 5px 0 0",
    backgroundColor: "#f5f5f5",
  },
  button: {
    "&:hover": {
      color: "blue",
    },
  },
}));

function IssuesScreen({ issues, fetchIssues, sortNewest, sortOldest }) {
  // const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchIssues(page);
  }, [page, fetchIssues]);
  console.log(issues);

  const classes = useStyles();
  return (
    <>
      <Header />
      <TabBar />
      <Container className={classes.root}>
        <Grid
          container
          xs={12}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <ButtonGroup variant="outlined" className={classes.buttonGroup}>
            <Button endIcon={<ArrowDropDownIcon />}>Filters</Button>
            <TextField
              variant="outlined"
              value=" is:issue is:open"
              style={{ width: "42vw" }}
              inputProps={{
                style: {
                  padding: "5px",
                  color: "grey",
                  width: "100%",
                },
              }}
            />
          </ButtonGroup>
          <ButtonGroup variant="outlined" className={classes.buttonGroup}>
            <Button startIcon={<LabelOutlinedIcon />}>Labels</Button>
            <Button startIcon={<AssistantDirectionOutlinedIcon />}>
              Milestones
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" className={classes.buttonGroup}>
            <Button
              variant="contained"
              color="secondary"
              style={{ color: "white" }}
            >
              New Isuue
            </Button>
          </ButtonGroup>
        </Grid>
        <br />
        <br />
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          className={classes.issueHead}
        >
          <Grid
            container
            xs={3}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <CircleOutlinedIcon />
            <Button variant="text" className={classes.button}>
              1,054 Open
            </Button>
            <CheckOutlinedIcon />
            <Button variant="text" className={classes.button}>
              1,054 Closed
            </Button>
          </Grid>
          <Grid container xs={9} justifyContent="flex-end" alignItems="center">
            <Button variant="text" endIcon={<ArrowDropDownIcon />}>
              Author
            </Button>
            <Button variant="text" endIcon={<ArrowDropDownIcon />}>
              Label
            </Button>
            <Button variant="text" endIcon={<ArrowDropDownIcon />}>
              Project
            </Button>
            <Button variant="text" endIcon={<ArrowDropDownIcon />}>
              Milestone
            </Button>
            <Button
              variant="text"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleClick}
            >
              Sort
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={sortNewest}>Newest</MenuItem>
              <MenuItem onClick={sortOldest}>Oldest</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <InfiniteScroll
          dataLength={issues.length}
          next={() => {
            console.log("ok");
            setPage((page) => page + 1);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {issues.length !== 0 &&
            issues
              .filter((issue) => issue.state === "open")
              .map((issue) => <IssueItem key={issue.id} issue={issue} />)}
        </InfiniteScroll>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIssues: (page) => dispatch(fetchIssues(page)),
    sortNewest: () => dispatch(sortNewest()),
    sortOldest: () => dispatch(sortOldest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesScreen);
