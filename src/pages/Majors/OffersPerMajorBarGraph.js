import React from "react";
import ChartHelper from "../../components/ChartHelper";

const getAvgWageForMajor = (offers, students, major) => {
  let n_students = students.edges.filter(student => student.major === major)
    .length;

  let total_wage = offers.edges.reduce((total, offer) => {
    let student = students.edges.filter(s => s.id === offer.student_id)[0];
    if (student?.major === major) {
      total += offer.wage_value;
      return total;
    } else {
      return total;
    }
  }, 0);

  return total_wage / n_students;
};

const getNumOffersForMajor = (offers, students, major) => {
  let n_offers = 0;
  let major_students = students.edges
    .filter(student => student.major === major)
    .map(student => {
      return student.id;
    });

  for (let i in offers.edges) {
    if (major_students.includes(offers.edges[i].student_id)) {
      n_offers += 1;
    }
  }

  return n_offers;
};

const OffersPerMajorBarGraph = ({ majors, students, offers }) => {
  let avgWages = [];
  let numStudents = [];
  let numOffers = [];
  majors.forEach((major, i) => {
    numStudents.push(
      students.edges.filter(student => student.major === major).length
    );
    avgWages.push(getAvgWageForMajor(offers, students, major));
    numOffers.push(getNumOffersForMajor(offers, students, major));
  });
  return (
    <div>
      <ChartHelper
        data={numOffers}
        labels={majors}
        title={"Number of Student Offers Received By Major"}
        pointLabel={"Number of Student Offers"}
        type={"bar"}
      />
      {/* TODO: Show this chart as well */}
      {/* <ChartHelper
                data={avgWages}
                labels={majors}
                title={"Average Student Salaries By Major"}
                pointLabel={"Average Salary"}
                type={"bar"}
            /> */}
    </div>
  );
};

export default OffersPerMajorBarGraph;
