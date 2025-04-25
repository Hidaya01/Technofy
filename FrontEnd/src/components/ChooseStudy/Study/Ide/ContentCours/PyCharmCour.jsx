import React from 'react';

function PyCharmCour() {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3 ">
        
        {/* Header */}
        <div className="chapter-header3">
          <img
            src="/pycharm.png"
            alt="PyCharm"
            className="chapter-icon3"
          />
        </div>

        {/* Introduction */}
        <div className="course-section3 vs">
          <h5>Introduction</h5>
          <p>
            PyCharm is a professional IDE from JetBrains, designed specifically for Python developers. It enhances productivity with intelligent code assistance, debugging, testing, and more.
          </p>
        </div>

        {/* Installation */}
        <div className="course-section3">
          <h2 className="vsTitles">🛠️ Installation</h2>
          <ol className="list3">
            <li>Go to <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer" className="wave-link">jetbrains.com/pycharm</a></li>
            <li>Choose the Community Edition (free) or Professional</li>
            <li>Download and run the installer</li>
            <li>Follow the setup instructions and launch PyCharm</li>
          </ol>
        </div>

        {/* Key Features */}
        <div className="course-section3">
          <h2 className="vsTitles">🎯 Key Features</h2>
          <ul className="list3">
            <li>Smart code completion and code inspections</li>
            <li>Built-in terminal and version control integration</li>
            <li>Visual debugger and test runner</li>
            <li>Support for Django, Flask, and other frameworks</li>
            <li>Powerful refactoring tools</li>
          </ul>
        </div>

        {/* Shortcuts */}
        <div className="course-section3">
          <h2 className="vsTitles">⌨️ Useful Shortcuts</h2>
          <ul className="list3">
            <li><strong>Shift + Shift</strong>: Search everywhere</li>
            <li><strong>Ctrl + Space</strong>: Basic code completion</li>
            <li><strong>Ctrl + /</strong>: Comment/uncomment lines</li>
            <li><strong>Alt + Enter</strong>: Quick fixes</li>
            <li><strong>Ctrl + Shift + F10</strong>: Run current file</li>
          </ul>
        </div>

        {/* Simple Project Example */}
        <div className="course-section3">
          <h2 className="vsTitles">📁 Simple Project Example (Python)</h2>
          <ol className="list3">
            <li>Open PyCharm and click "New Project"</li>
            <li>Choose a location and name for your project</li>
            <li>Create a new Python file: <code>hello.py</code></li>
            <li>Write this code:</li>
            <pre className="code-block3">
{`print("Hello, PyCharm!")`}
            </pre>
            <li>Right-click the file and select "Run 'hello'"</li>
          </ol>
        </div>

        {/* Tips & Tricks */}
        <div className="course-section3">
          <h2 className="vsTitles">💡 Tips & Tricks</h2>
          <ul className="list3">
            <li>Use virtual environments for each project</li>
            <li>Try the Python Console for quick testing</li>
            <li>Use plugins like Material Theme UI for customization</li>
            <li>Use the TODO feature to track unfinished work</li>
            <li>Configure linting with flake8 or pylint</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="footer-note3">
          🎉 Congrats! You've completed the PyCharm course.
        </footer>
      </div>
    </div>
  );
}

export default PyCharmCour;
