import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About This To-Do List App</h1>
      </header>
      <section className="about-section">
        <h2>Welcome!</h2>
        <p>
          This is a simple To-Do List application built with React. The purpose
          of this app is to help you manage your tasks and stay organized.
        </p>
      </section>
      <section className="about-section">
        <h2>Features</h2>
        <ul>
          <li>Add new tasks with ease.</li>
          <li>Remove tasks that are no longer needed.</li>
          <li>View your tasks in a clear and organized list.</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>How to Use</h2>
        <p>
          To get started, simply type your task into the input field and click
          "Add Task". Once a task is added, you can remove a task by click on
          "clear" button next to the task.
        </p>
      </section>
      <footer className="about-footer">
        <p>Thank you for using our To-Do List app!</p>
      </footer>
    </div>
  );
};

export default About;
