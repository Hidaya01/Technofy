import React from 'react';

function VsCodeCour() {
  return (
    <div className="question-page pageVsc">
      <div className="main-container3">
        
        {/* Header */}
        <div className="chapter-header3">
          <img
            src="/vscode.png"
            alt="VS Code"
            className="chapter-icon3"
          />
        </div>

        {/* Introduction */}
        <div className="course-section3 vs">
          <h5>Introduction</h5>
          <p>
            Visual Studio Code (VS Code) is a free, lightweight, and powerful source-code editor developed by Microsoft. It supports development in multiple programming languages with robust features and an active extension ecosystem.
          </p>
        </div>

        {/* Installation */}
        <div className="course-section3">
          <h2 className="vsTitles">🛠️ Installation</h2>
          <ol className="list3">
            <li>Visit <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="wave-link">code.visualstudio.com</a></li>
            <li>Download the installer for your OS (Windows, macOS, Linux)</li>
            <li>Run the installer and follow setup instructions</li>
            <li>Launch VS Code and install recommended extensions</li>
          </ol>
        </div>

        {/* Key Features */}
        <div className="course-section3">
          <h2 className="vsTitles">🎯 Key Features</h2>
          <ul className="list3">
            <li>Fast, lightweight, and open-source</li>
            <li>Integrated terminal and Git support</li>
            <li>IntelliSense for smart code completion</li>
            <li>Extensions for Python, JavaScript, C++, and more</li>
            <li>Built-in debugger and live server support</li>
          </ul>
        </div>

        {/* Shortcuts */}
        <div className="course-section3">
          <h2 className="vsTitles">⌨️ Useful Shortcuts</h2>
          <ul className="list3">
            <li><strong>Ctrl + P</strong>: Quick file navigation</li>
            <li><strong>Ctrl + Shift + P</strong>: Command Palette</li>
            <li><strong>Ctrl + `</strong>: Toggle terminal</li>
            <li><strong>Alt + Click</strong>: Multi-cursor editing</li>
            <li><strong>Ctrl + B</strong>: Toggle sidebar</li>
          </ul>
        </div>

        {/* Simple Project Example */}
        <div className="course-section3">
          <h2 className="vsTitles">📁 Simple Project Example (HTML + JS)</h2>
          <ol className="list3">
            <li>Create a folder and open it in VS Code</li>
            <li>Add an <code>index.html</code> file with this content:</li>
            <pre className="code-block3">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Hello VS Code</title>
  </head>
  <body>
    <h1>Hello from VS Code!</h1>
    <script src="app.js"></script>
  </body>
</html>`}
            </pre>
            <li>Create an <code>app.js</code> file with this code:</li>
            <pre className="code-block3">
{`console.log("VS Code is awesome!");`}
            </pre>
            <li>Use Live Server extension to preview the result</li>
          </ol>
        </div>

        {/* Tips & Tricks */}
        <div className="course-section3">
          <h2 className="vsTitles">💡 Tips & Tricks</h2>
          <ul className="list3">
            <li>Use themes like "Dracula" or "Material Theme" for better visuals</li>
            <li>Install Prettier for automatic code formatting</li>
            <li>Use GitLens extension for powerful Git insights</li>
            <li>Enable autosave in settings</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="footer-note3">
          🚀 Great job! You've finished the VS Code intro course.
        </footer>
      </div>
    </div>
  );
}

export default VsCodeCour;
