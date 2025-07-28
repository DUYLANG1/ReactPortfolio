import { useState, useEffect } from "react";
import "./HeaderRight.scss";

const HeaderRight = () => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping((prev) => !prev);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="header-right">
      <div className="border-top"></div>
      <div className="first">
        <div className="circle bg-first" title="Close"></div>
        <div className="circle bg-second" title="Minimize"></div>
        <div className="circle bg-third" title="Maximize"></div>
        <span className="terminal-title">~/developer-profile.js</span>
      </div>
      <div className="second">
        <code className="text-white-0">
          <div className="code-line">
            <span className="line-number">1</span>
            <span className="me-2 text-pink-100">const</span>
            <span className="me-2">developer</span>
            <span className="me-2 text-pink-100">=</span>
            <span>{"{"}</span>
          </div>
          <div className="code-line">
            <span className="line-number">2</span>
            <span className="ms-4 me-2">name:</span>
            <span className="text-yellow-500">
              {`"`}DUY LĂNG{`",`}
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">3</span>
            <span className="ms-4 me-2">role:</span>
            <span className="text-yellow-500">
              {`"`}Full Stack Developer{`",`}
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">4</span>
            <span className="ms-4 me-2">location:</span>
            <span className="text-yellow-500">
              {`"`}Vietnam{`",`}
            </span>
          </div>
          <div className="code-line">
            <span className="line-number">5</span>
            <span className="ms-4 me-2 text-white-0">skills:</span>
            <span className="text-pink-200">[</span>
          </div>
          <div className="code-line">
            <span className="line-number">6</span>
            <span className="ms-5 text-yellow-500">{`"React", "TypeScript", "Node.js",`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">7</span>
            <span className="ms-5 text-yellow-500">{`"Next.js", "Express", "NestJS",`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">8</span>
            <span className="ms-5 text-yellow-500">{`"SQL", "NoSQL", "AWS"`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">9</span>
            <span className="ms-4 text-pink-200">],</span>
          </div>
          <div className="code-line">
            <span className="line-number">10</span>
            <span className="ms-4 me-2">experience:</span>
            <span className="text-yellow-500">{`"1+ years",`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">11</span>
            <span className="ms-4 me-2">hardWorker:</span>
            <span className="text-red-500">true</span>
            <span>,</span>
          </div>
          <div className="code-line">
            <span className="line-number">12</span>
            <span className="ms-4 me-2">quickLearner:</span>
            <span className="text-red-500">true</span>
            <span>,</span>
          </div>
          <div className="code-line">
            <span className="line-number">13</span>
            <span className="ms-4 me-2">problemSolver:</span>
            <span className="text-red-500">true</span>
            <span>,</span>
          </div>
          <div className="code-line">
            <span className="line-number">14</span>
            <span className="ms-4 me-2 text-green-700">hireable:</span>
            <span className="text-blue-100">function</span>
            <span>{"() {"}</span>
          </div>
          <div className="code-line">
            <span className="line-number">15</span>
            <span className="ms-5 me-2 text-blue-100">return</span>
            <span>{`(`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">16</span>
            <span className="ms-6 text-blue-100">this.</span>
            <span className="me-2">hardWorker</span>
            <span className="text-pink-100">&amp;&amp;</span>
          </div>
          <div className="code-line">
            <span className="line-number">17</span>
            <span className="ms-6 text-blue-100">this.</span>
            <span className="me-2">problemSolver</span>
            <span className="text-pink-100">&amp;&amp;</span>
          </div>
          <div className="code-line">
            <span className="line-number">18</span>
            <span className="ms-6 text-blue-100">this.</span>
            <span className="me-2">skills.length</span>
            <span className="me-2 text-pink-100">&gt;</span>
            <span className="text-red-500">5</span>
          </div>
          <div className="code-line">
            <span className="line-number">19</span>
            <span className="ms-5 me-2">{`);`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">20</span>
            <span className="ms-4">{`}`}</span>
          </div>
          <div className="code-line">
            <span className="line-number">21</span>
            <span>{`};`}</span>
          </div>
          <div className="code-line terminal-cursor">
            <span className="line-number">22</span>
            <span className="cursor-line">
              <span className="text-green-700">console</span>
              <span>.</span>
              <span className="text-blue-100">log</span>
              <span>(developer.hireable());</span>
              {isTyping && <span className="cursor">|</span>}
            </span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default HeaderRight;
