import * as React from "react";
import * as dateFormat from "dateformat";
import Events from "./events";
import { Caregiver } from "@App/models/Caregiver";

const CareGivers = (props: any) => {
    const {
        items,
        valueProperty,
        dateProperty,
        eventsProperty
    } = props;

    const css = `    
    .events {
        margin-top: 25px
    }
    .list-group-item{
        margin-top: 25px
    }
    `;

    return (
        <ul className="care-givers">
            <style>{css}</style>

            {items.map((item: Caregiver) => (
                <li
                    key={item[valueProperty]}
                    className="list-group-item"
                >
                    <div className="row">
                        <div className="col-9">Care Giver {items.findIndex((e: Caregiver) => {
                            return e[valueProperty] === item[valueProperty];
                        }) + 1} ({item[valueProperty]})</div>
                        <div className="col-3">{dateFormat(item[dateProperty], "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
                    </div>
                    <div className="events">
                        <Events items={item[eventsProperty]} />
                    </div>

                </li>
            ))}
        </ul>
    );
};
CareGivers.defaultProps = {
    valueProperty: "id",
    dateProperty: "timestamp",
    eventsProperty: "events"
};

export default CareGivers;
