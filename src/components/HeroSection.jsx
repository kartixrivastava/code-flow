import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, ArrowRight, Play } from "lucide-react";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40% )`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto  text-center relative w-full ">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 ">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300 ">
                Introducing CodeFlow AI
              </span>
            </div>

            <h1 className="text-5xl sm:text-3xl md:4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 text-transparent bg-clip-text block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 text-transparent bg-clip-text block mb-1 sm:mb-2">
                With CodeFlow AI
              </span>
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duratoin -700 delay-200 leading-relaxed">
              Acclerate your development workflow with intelligent code
              completion, automated testing and smart debugging. Ship
              production-ready code 10x faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 " />
              </button>
              <button className="group w-full sm:w-auto sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
                </div>
                <span>Watch demo</span>
              </button>
            </div>
          </div>
          <div className="relative order-2 w-full ">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-70 sm:h-87.5 lg:h-112.5 border border-white/5">
                {/* IDE HEADER */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex sm:space-x-2 space-x-1 items-center ">
                    <div className="flex sm:space-x-2 space-x-1 items-center ">
                      <div className="w-2 h-2 rounded-full bg-red-500 sm:w-3 sm:h-3" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500 sm:w-3 sm:h-3" />
                      <div className="w-2 h-2 rounded-full bg-green-500 sm:w-3 sm:h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 ">
                      CodeFlow AI
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>

                <div className="p-3 sm:p-4 relative h-full ">
                  {/* File Tabs */}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "text-white text-grey-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "text-white text-grey-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "text-white text-grey-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>

                  {/* Code Content */}
                  <div className="relative overflow-hidden grow">
                    <SyntaxHighlighter
                      language="Javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        height: "100%",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${floatingCards[activeTab].iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {floatingCards[activeTab].icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${floatingCards[activeTab].textColor} `}
                  >
                    {floatingCards[activeTab].title}
                  </span>
                </div>
                <div
                  className={`text-sm text-left ${floatingCards[activeTab].contentColor} `}
                >
                  {floatingCards[activeTab].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
