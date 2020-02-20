import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";
import Typography from "@material-ui/core/Typography";

import ClosableDialog from "../../components/ClosableDialog";
import Layout from "../../components/Layout";
import StudentTable from "./StudentTable";
import OfferTable from "../Offers/OfferTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  },
  dialogContent: {
    padding: theme.spacing(2)
  },
  studentInfoModal: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column"
  },
  modalUpper: {
    display: "flex",
    flexDirection: "row"
  },
  upperLeftContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginRight: "2rem"
  },
  studentName: {
    paddingLeft: "0rem"
  },
  noPadding: {
    padding: "0rem"
  },
  avatarImage: {
    width: "8rem",
    height: "8rem"
  }
}));

const Dialog = ({ open, student, onExited, onClose }) => {
  const styles = useStyles();
  console.log(student);
  return (
    <ClosableDialog
      onClose={onClose}
      open={open}
      title="Student Information"
      onExited={onExited}
    >
      <span className={styles.studentInfoModal}>
        <span className={styles.modalUpper}>
          <span className={styles.upperLeftContainer}>
            <Typography
              variant="h5"
              className={(styles.dialogContent, styles.studentName)}
            >
              {student && `${student.firstname} ${student.lastname}`}
            </Typography>
            <Typography className={(styles.dialogContent, styles.noPadding)}>
              <strong>Major: </strong>
              {student && student.major}
            </Typography>
            <Typography className={(styles.dialogContent, styles.noPadding)}>
              <strong>Academic Year: </strong>
              {student && student.academic_year}
            </Typography>
          </span>
          <img
            alt="avatar placeholder"
            className={styles.avatarImage}
            src={"/avatar.png"}
          />
        </span>
        <span className={styles.modalLower}>
          {/* {student && <OfferTable offers={student.offers} />} */}
        </span>
      </span>
    </ClosableDialog>
  );
};

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState(null);
  const styles = useStyles();

  const openDialog = student => {
    setOpen(true);
    document.getElementById("root").classList.add("blur-effect");
    setStudent(student);
  };
  const handleClose = () => {
    document.getElementById("root").classList.remove("blur-effect");
    setOpen(false);
  };

  const handleDialogExited = () => {
    setStudent(null);
  };

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
            <>
              <div className={styles.content}>
                <StudentTable
                  students={props.store.students}
                  onStudentClicked={openDialog}
                />
              </div>
              <Dialog
                student={student}
                open={open}
                onClose={handleClose}
                onExited={handleDialogExited}
              />
            </>
          );
        }}
      />
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
