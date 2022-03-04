import React from 'react'

import PageHeader from './PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    

    return (
        <>
            <PageHeader
                title="ICTAK Hall  Resevation  Form"
                subTitle="Hall Reservation Form"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            
        </>
    )
}
