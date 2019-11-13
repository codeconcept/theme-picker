import React, { Component } from "react";
import {
  getAllActivities,
  getEventsByTown
} from "./services/activitiesService";
class Schedule extends Component {
  state = { isLoading: true, town: "", activities: [] };
  componentDidMount() {
    const { params } = this.props.match;
    if (params.town) {
      getEventsByTown(params.town).then(activities => {
        this.setState({
          isLoading: false,
          town: params.town,
          activities
        });
      });
    } else {
      getAllActivities().then(data => {
        this.setState({ activities: data });
      });
    }
  }

  render() {
    console.log(this.props);
    const { town, activities } = this.state;
    return (
      <>
        <h1>{town ? `Programmes de ${town}` : "Programmes"}</h1>
        <div>
          <pre>
            <code>{JSON.stringify(activities, null, 4)}</code>
          </pre>
        </div>
      </>
    );
  }
}

export default Schedule;
