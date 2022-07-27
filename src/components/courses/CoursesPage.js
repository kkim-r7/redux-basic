import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange(event) {
    debugger;
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }
  render() {
    return (
      <form>
        <h2>Course</h2>
        <h4>Add Course</h4>
        <input
          type="text"
          onChange={this.handleChange.bind(this)} // new function is allocated on every render so need to change
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
      </form>
    );
  }
}

export default CoursesPage;
