import React from 'react'

import { withStyles, Divider, Button, TextField } from '@material-ui/core'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import SendIcon from '@material-ui/icons/Send';

import './CSS/PostSection.scss'




const Accordion = withStyles({
    root: {
        backgroundColor: "inherit",
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'inherit',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const MytextField = withStyles({
    root: {
        width: "100%",
        "& label": {
            fontSize: ".9rem",
        },
        '& label.Mui-focused': {
            color: '#353a40',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: "5px 0 0 5px"
            },
            '&.Mui-focused fieldset': {
                borderColor: '#353a40',
            },
        },
        "& .MuiOutlinedInput-input": {
            padding: "15px",
        },
    }
})(TextField)

const MyBtn = withStyles({
    root: {
        width: "100%",
        backgroundColor: "#007aff",
        padding: '12.5px',
        borderRadius: "0 5px 5px 0"
    }
})(Button)

const PostSection = (props) => {

    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {
                props.data.map((props, index) => {
                    return (
                        <>
                            <div className="postsection_container" key={index}>
                                <Accordion square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <div className="postsection_box">
                                        <div className="avater">
                                            <img src={props.img} alt="ERROR" />
                                        </div>
                                        <div className="data">
                                            <div className="title">
                                                {props.title}
                                            </div>
                                            <div className="submit_info">
                                                submitted {props.date} ago by <span> {props.author} </span> from <span> {props.category} </span>
                                            </div>
                                            <div className="comment_info">
                                                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                                    {props.comments.length} comments save
                                                </AccordionSummary>
                                            </div>
                                        </div>
                                    </div>
                                    <AccordionDetails>
                                        <div className="comments">
                                            {
                                                props.comments.map((data, index) => {
                                                    return (
                                                        <>
                                                            <div key={index} style={{ margin: "1rem 0 " }}>
                                                                <h4 className="author">{data.author}</h4>
                                                                <div className="comment">
                                                                    {data.msg}                                                            </div>
                                                                <Divider />
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                            <div className="leave_comment">
                                                <h4>----- LEAVE A COMMENT -----</h4>
                                                <div className="submit_comment">
                                                    <MytextField variant="outlined" label="comment" />
                                                    <MyBtn style={{ width: "20%" }} endIcon={<SendIcon />}></MyBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default PostSection
