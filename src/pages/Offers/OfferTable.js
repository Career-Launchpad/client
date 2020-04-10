import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import { DataTable, DataTableRow } from "../../components/DataTable";
import { makeStyles } from "@material-ui/styles";
import ChartHelper from "../../components/ChartHelper";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

export const columns = [
  { name: "Position", id: "position_title", type: "string" },
  { name: "Company Name", id: "company.name", type: "string" },
  {
    name: "Type",
    id: "position_type",
    type: ["Full time", "Part time", "Internship", "Contractor"]
  },
  {
    name: "Compensation Type",
    id: "wage_type",
    type: ["Salary", "Hourly", "On-completion"]
  },
  { name: "Compensation Value", id: "wage_value", type: "float" }
];

const OfferTable = ({ offers }) => {
  const styles = useStyles();
  return (
    <div>
      <DataTable headers={columns}>
        {offers.edges.map((offer, i) => {
          return (
            <DataTableRow key={offer.id || i} data={offer}>
              <TableRow>
                <TableCell>{offer.position_title}</TableCell>
                <TableCell>{offer.company.name}</TableCell>
                <TableCell>{offer.position_type}</TableCell>
                <TableCell>{offer.wage_type}</TableCell>
                <TableCell>
                  <NumberFormat
                    value={offer.wage_value}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                  />
                </TableCell>
              </TableRow>
            </DataTableRow>
          );
        })}
      </DataTable>
      <div className={styles.content}>
        <OffersPerCompanyBarGraph offers={offers}></OffersPerCompanyBarGraph>
      </div>
    </div>
  );
};

const OffersPerCompanyBarGraph = ({ offers }) => {
  let data = {};
  console.log(offers);
  const companyOffers = offers.edges?.map(o => o.company.name);
  for (let i in companyOffers) {
    if (data[companyOffers[i]]) {
      data[companyOffers[i]] += 1;
    } else {
      data[companyOffers[i]] = 1;
    }
  }
  return (
    <ChartHelper
      data={Object.values(data)}
      labels={Object.keys(data)}
      title={"Student Offers Per Company"}
      pointLabel={"Number of Student Offers"}
      type={"bar"}
    />
  );
};

// TODO: Add later
// const OfferSalariesLineGraph = ({ offers }) => {
//   console.log(offers.edges);
//   const data = offers.edges.map(o => o.wage_value);
//   const labels = offers.edges.map(o => o.company.name);
//   console.log(labels);
//   return (
//     <ChartHelper
//       data={data}
//       labels={labels}
//       pointLabel={"Average Salary"}
//       title={"Salaries by Company"}
//       type={"line"}
//     />
//   );
// };

export default createFragmentContainer(OfferTable, {
  offers: graphql`
    fragment OfferTable_offers on offerConnection {
      edges {
        id
        position_type
        position_title
        location {
          state
        }
        company {
          name
        }
        academic_year
        wage_type
        wage_value
      }
    }
  `
});
