import * as React from "react";

// tslint:disable-next-line:typedef
function getEventDescription(event: any) {
    if (event.event_type === "general_observation") {
        return event.note;
    } else if (event.event_type === "fluid_intake_observation") {
        return event.fluid + " fluid with volume " + event.consumed_volume_ml + "ml";
    } else if (event.event_type === "catheter_observation") {
        return event.note + "  " + event.volume_ml + "ml";
    } else if (event.event_type === "regular_medication_taken") {
        return event.note;
    } else if (event.event_type === "regular_medication_not_taken") {
        return "The " + event.medication_type + " medication is " +
            event.medication_failure_reason + " by care recepient. " + event.note;
    } else if (event.event_type === "food_intake_observation") {
        return "The meal was " + event.meal + ". " + event.note;
    } else if (event.event_type === "mood_observation") {
        return "The care recepient was " + event.mood + ".";
    }

}

const Events = (props: any) => {
    const {
        items,
        valueProperty,
        textProperty
    } = props;
    const css = `
    .event-type {
        font-weight: bold
    }`;

    return (
        <ul className="events">
            <style>{css}</style>
            {items.map((item: any) => (
                <li
                    key={item[valueProperty]}
                    className="events-item"
                >
                    <div className="row">
                        <div className="event-type col-3">{item[textProperty]}</div>
                        <div className="col">{getEventDescription(item)}</div>
                    </div>

                </li>
            ))}
        </ul>
    );
};
Events.defaultProps = {
    valueProperty: "id",
    textProperty: "event_type"
};

export default Events;
