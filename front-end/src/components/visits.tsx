import * as React from "react";
import ListGroup from "./common/listGroup";

import { getCareRecipients } from "../services/careRecipientService";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export interface VisitsProps { }

export interface VisitsState {
  careRecipients: String[];
  selectedCareRecipient: string;
  startDate: Date;
  endDate: Date;

}

class Visits extends React.Component<VisitsProps, VisitsState> {
  state: VisitsState;

  constructor(props: VisitsProps) {
    super(props);
    this.state = {
      careRecipients: [],
      selectedCareRecipient: "0",
      startDate: new Date(),
      endDate: new Date()

    };

    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);

  }

  async componentDidMount() {
    const { data: careRecipients } = await getCareRecipients();
    this.setState({ careRecipients });
  }

  handleChangeStartDate = (date: Date) => {
    this.setState({
      startDate: date
    });
  }

  handleChangeEndDate = (date: Date) => {
    this.setState({
      endDate: date
    });
  }

  handleCareRecipientSelect = (careRecipient: string) => {
    this.setState({ selectedCareRecipient: careRecipient });
  }

  render() {
    const css = `
    .start-date {
      margin-top: 20px 
    }
    .button {
      margin-top: 20px 
    }`;

    return (
      <div className="row">
        <style>{css}</style>
        <div className="col-3">
          <ListGroup
            items={this.state.careRecipients}
            selectedItem={this.state.selectedCareRecipient}
            onItemSelect={this.handleCareRecipientSelect}
          />
          <div className="start-date">
            <div>From :</div>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStartDate}
            />
          </div>

          <div className="end-date">
            <div>To :</div>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEndDate}
            />
          </div>

        </div>

        <div className="col">
          visits
        </div>
      </div>
    );
  }
}

export default Visits;
