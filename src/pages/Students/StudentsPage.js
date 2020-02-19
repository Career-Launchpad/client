import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";
import Typography from '@material-ui/core/Typography';

import ClosableDialog from "../../components/ClosableDialog";
import Layout from "../../components/Layout";
import StudentTable from "./StudentTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  },
  dialogContent: {
    padding: theme.spacing(2)
  }
}));

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const styles = useStyles();

  const openDialog = (studentId) => {
    setOpen(true);
    setStudentId(studentId);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogExited = () => {
    setStudentId(null);
  }

  return (
    <Layout loading={loading}>
      <QueryRenderer
        environment={environment}
        query={query}
        cacheConfig={{ force: true }}
        render={({ props }) => {
          setLoading(!props);
          if (!props) return <div />;
          return (
            <div className={styles.content}>
              <StudentTable students={props.store.students} onStudentClicked={openDialog}/>
            </div>
          );
        }}
      />
      <ClosableDialog onClose={handleClose} open={open} title="Student Information" onExited={handleDialogExited}>
      <Typography className={styles.dialogContent}>Student ID: {studentId} Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Typography>
      </ClosableDialog>
    </Layout>
  );
};

const query = graphql`
  query StudentsPage_Query {
    store {
      students {
        ...StudentTable_students
      }
    }
  }
`;

export default Students;
