import * as React from "react";
import * as dateFormat from "dateformat";
import CareGivers from "./careGivers";
import { Visit } from "@App/models/Visit";

export interface CardsProps { }

const Cards = (props: any) => {
  const { items, valueProperty, timestampProperty, caregiversProperty } = props;
  const css = `
  .cards {
    list-style-type: none
  }
  .card {
    margin-bottom: 25px
  }
  `;

  return (
    <div>
      <style>{css}</style>
      <ul className="cards">
        {items.map((item: Visit) => (
          <li key={item[valueProperty]}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">Visit {items.findIndex((e: Visit) => e.id === item.id) + 1}</div>
                  <div className="col-6">{dateFormat(item[timestampProperty], "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                </div>

                <CareGivers items={item[caregiversProperty]} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
Cards.defaultProps = {
  // textProperty: "id",
  valueProperty: "id",
  timestampProperty: "timestamp",
  caregiversProperty: "caregivers"
};

export default Cards;
