import * as React from "react";
import ListGroup from "./common/listGroup";
import { getCareRecipients } from "../services/careRecipientService";

export interface VisitsProps { }

export interface VisitsState {
  careRecipients: String[];
  selectedCareRecipient: string;

}

class Visits extends React.Component<VisitsProps, VisitsState> {
  state: VisitsState;

  constructor(props: VisitsProps) {
    super(props);
    this.state = {
      careRecipients: [],
      selectedCareRecipient: "0",
    };

  }

  async componentDidMount() {
    const { data: careRecipients } = await getCareRecipients();
    this.setState({ careRecipients });
  }

  handleCareRecipientSelect = (careRecipient: string) => {
    this.setState({ selectedCareRecipient: careRecipient });
  }

  render() {

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.careRecipients}
            selectedItem={this.state.selectedCareRecipient}
            onItemSelect={this.handleCareRecipientSelect}
          />
        </div>

        <div className="col">
          visits
        </div>
      </div>
    );
  }
}

export default Visits;
