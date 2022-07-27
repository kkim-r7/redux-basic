import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };

    this.handleChange = this.handleChange.bind(this); // now the function is only bound once!
  }

  handleChange(event) {
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
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
      </form>
    );
  }
}

export default CoursesPage;
