import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},
  issueHead: {
    border: "1px solid #d0d6df",
    padding: "5px 10px",
    borderRadius: "5px 5px 0 0",
    backgroundColor: "#f5f5f5",
  },
  issue: {
    borderLeft: "1px solid #d0d6df",
    borderRight: "1px solid #d0d6df",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));

function IssueItem({ issue }) {
  const classes = useStyles();
  const colors = ["primary", "secondary", "error", "warning", "success"];

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <List
        sx={{ width: "99.8%", bgcolor: "background.paper" }}
        className={classes.issue}
      >
        <ListItem>
          <ListItemIcon>
            <CircleOutlinedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            style={{ maxWidth: "70%" }}
            primary={
              <>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{ display: "inline-flex", paddingRight: "15px" }}
                >
                  <b>{issue.title}</b>
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  style={{ display: "inline-flex" }}
                >
                  {issue.labels.map((lbl) => (
                    <Chip
                      key={lbl.id}
                      label={lbl.name}
                      size="small"
                      color={randomColor()}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </>
            }
            secondary={`#${issue.number} opened 2 hours ago by ${issue.user.login}`}
          />
        </ListItem>
      </List>
    </>
  );
}

export default IssueItem;
