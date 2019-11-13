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
      this.retrieveEventsByTown(params.town);
    } else {
      this.retrieveAllEvents();
    }
  }
  //!\ make it an arrow function so that inside the function, 'this' is the Schedule component
  retrieveEventsByTown = town => {
    getEventsByTown(town).then(activities => {
      this.setState({
        isLoading: false,
        town,
        activities
      });
    });
  };

  //!\ make it an arrow function so that inside the function, 'this' is the Schedule component
  retrieveAllEvents = () => {
    getAllActivities().then(data => {
      this.setState({ activities: data, town: "" });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // if we navigated to all programs
    if (
      prevProps.match.params.town === undefined &&
      this.props.match.params.town === undefined
    ) {
      return;
    } else if (!this.props.match.params.town) {
      this.retrieveAllEvents();
    } else if (prevProps.match.params.town !== this.props.match.params.town) {
      this.retrieveEventsByTown(this.props.match.params.town);
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
