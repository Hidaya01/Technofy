import React from 'react';

function VisualStudioCour() {
  return (
    <div className="question-page pageVs"><div className="main-container3  ">
        <div className="chapter-header3">
  <img
    src="/visuelstudio.png"
    alt="Visual Studio"
    className="chapter-icon3"
  />
  
</div>
     

        <div className="course-section3 vs">
          <h5 > Introduction</h5>
          <p >
            Visual Studio is a powerful integrated development environment (IDE) from Microsoft used to build applications in C#, .NET, C++, Python, and more.
          </p>
        </div>

        <div className="course-section3">
          <h2 className='vsTitles'>🛠️ Installation</h2>
          <ol className="list3">
            <li>Go to <li>
  Go to <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer" className="wave-link">visualstudio.microsoft.com</a>
</li>
</li>
            <li>Download the Community Edition (free)</li>
            <li>Run the installer and select workloads (e.g., .NET desktop development, Python)</li>
            <li>Finish and launch Visual Studio</li>
          </ol>
        </div>

        <div className="course-section3">
          <h2 className='vsTitles'>🎯 Key Features</h2>
          <ul className="list3">
            <li>IntelliSense (smart code completion)</li>
            <li>Powerful debugger with breakpoints and watches</li>
            <li>Live Share for collaboration</li>
            <li>Built-in Git integration</li>
            <li>NuGet package manager</li>
          </ul>
        </div>

        <div className="course-section3">
          <h2 className='vsTitles'>⌨️ Useful Shortcuts</h2>
          <ul className="list3">
            <li><strong>Ctrl + .</strong>: Quick fix / Import namespace</li>
            <li><strong>F5</strong>: Start debugging</li>
            <li><strong>Ctrl + K, Ctrl + C</strong>: Comment selected code</li>
            <li><strong>Ctrl + K, Ctrl + U</strong>: Uncomment</li>
          </ul>
        </div>

        <div className="course-section3">
          <h2 className='vsTitles'>📁 Simple Project Example (C# Console App)</h2>
          <ol className="list3">
            <li>Click "Create a new project"</li>
            <li>Choose "Console App (.NET)"</li>
            <li>Click Next, name your project, and click Create</li>
            <li>In <code>Program.cs</code>, write:</li>
            <pre className="code-block3">
{`using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, Visual Studio!");
    }
}`}
            </pre>
            <li>Run it using the green "Start" button or <strong>F5</strong></li>
          </ol>
        </div>

        <div className="course-section3">
          <h2 className='vsTitles'>💡 Tips & Tricks</h2>
          <ul className="list3">
            <li>Use Live Share for real-time pair programming</li>
            <li>Set breakpoints to debug smarter, not harder</li>
            <li>Use Extensions like "CodeMaid" to auto-format and clean up</li>
          </ul>
        </div>

        <footer className="footer-note3">
          🎉 Congrats! You've completed the Visual Studio intro course.
        </footer>
      </div>
    </div>
  );
}

export default VisualStudioCour;
