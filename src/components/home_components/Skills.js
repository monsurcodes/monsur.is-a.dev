import { Code2, Globe, Monitor, FileText, Database, Wrench, Bot, Terminal, TabletSmartphone } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "C", "JavaScript"],
      color: "text-blue-400",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["React", "Next.js", "Express.js", "Tailwind CSS"],
      color: "text-cyan-400",
    },
    {
      title: "Desktop Development",
      icon: Monitor,
      skills: ["Electron.js"],
      color: "text-purple-400",
    },
    {
      title: "Android Development",
      icon: TabletSmartphone,
      skills: ["React Native", "Android SDK"],
      color: "text-slate-400",
    },
    {
      title: "Code Editors",
      icon: FileText,
      skills: ["VS Code", "PyCharm", "WebStorm"],
      color: "text-orange-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "text-green-400",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Postman", "Git", "MongoDB Compass"],
      color: "text-yellow-400",
    },
    {
      title: "AI Tools",
      icon: Bot,
      skills: ["ChatGPT", "Perplexity", "V0"],
      color: "text-pink-400",
    },
  ]

  return (
    <div id="skills" className="my-18 mx-10 lg:mx-40">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-500 mb-8 font-semibold text-center md:text-left">
        Skills & Technologies
      </h2>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon
          return (
            <div
              key={categoryIndex}
              className="
                group
                bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900
                border border-slate-600
                p-6
                shadow-lg shadow-green-500/10
                hover:shadow-xl hover:shadow-green-500/25
                hover:border-green-500/60
                hover:from-green-900/20 hover:via-slate-800 hover:to-slate-900
                transform hover:scale-[1.02] hover:-translate-y-1
                transition-all duration-500 ease-out
                backdrop-blur-sm
              "
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-700/50 group-hover:bg-green-500/20 transition-colors duration-300">
                  <IconComponent
                    size={24}
                    className={`${category.color} group-hover:text-green-400 transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-green-100 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="
                      flex items-center gap-2
                      text-slate-300 
                      group-hover:text-slate-200
                      transition-colors duration-300
                    "
                  >
                    <div className="w-2 h-2 bg-slate-500 group-hover:bg-green-400 transition-colors duration-300"></div>
                    <span className="text-md font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Skill Count Badge */}
              <div className="mt-4 pt-4 border-t border-slate-700/50 group-hover:border-green-500/30 transition-colors duration-300">
                <span className="text-xs text-slate-400 group-hover:text-green-300 transition-colors duration-300">
                  {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-600 px-6 py-3 shadow-lg shadow-green-500/10">
          <Terminal className="text-green-400" size={20} />
          <span className="text-slate-300 font-medium">
            Total Skills: {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Skills
