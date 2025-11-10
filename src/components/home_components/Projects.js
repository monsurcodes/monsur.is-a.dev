"use client"

import { Github, Star, GitFork } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const Projects = () => {
  const projects = [
    { username: "monsurcodes", reponame: "password-manager" },
    { username: "monsurcodes", reponame: "movies-downloader" },
    { username: "monsurcodes", reponame: "telegram_assistant_bot" },
    { username: "minkxx", reponame: "MultiForwarderTGBot" },
    { username: "minkxx", reponame: "LMS" },
    { username: "minkxx", reponame: "spotify-readme" },
  ]

  const [projectData, setProjectData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProjectData = async () => {
      setLoading(true);
      try {
        const fetchPromises = projects.map(project =>
          fetch(`/api/repodata?username=${project.username}&reponame=${project.reponame}`)
            .then(res => {
              if (!res.ok) {
                throw new Error(`Failed to fetch ${project.username}/${project.reponame}`);
              }
              return res.json();
            })
        );

        const datas = await Promise.all(fetchPromises);

        setProjectData(datas);
      } catch (error) {
        console.error('Error fetching project data:', error);
        setProjectData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  if (loading) {
    return (
      <div id="projects" className="my-18 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-10 sm:mx-26">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-500 mb-4 font-semibold">Featured Projects</h2>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
          <p className="ml-3 text-slate-400">Loading projects...</p>
        </div>
      </div>
    )
  }

  if (!projectData || projectData.length === 0) {
    return (
      <div id="projects" className="my-18 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-10 sm:mx-26">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-500 mb-4 font-semibold">Featured Projects</h2>
        <p className="text-slate-400 text-center py-12">No projects found.</p>
      </div>
    )
  }

  return (
    <div id="projects" className="my-18 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mx-10 sm:mx-26">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-500 mb-8 font-semibold text-center md:text-left">
        Featured Projects
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {projectData.map((data, idx) => (
          <div
            key={idx}
            className="
              group
              flex flex-col gap-4
              bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900
              border border-slate-600
              p-5 sm:p-6
              min-h-[280px]
              shadow-lg shadow-green-500/10
              hover:shadow-xl hover:shadow-green-500/25
              hover:border-green-500/60
              hover:from-green-900/20 hover:via-slate-800 hover:to-slate-900
              transform hover:scale-[1.02] hover:-translate-y-1
              transition-all duration-500 ease-out
              cursor-pointer
              backdrop-blur-sm
            "
          >
            {/* Project Header */}
            <div className="flex-shrink-0">
              <h3 className="text-lg sm:text-xl text-white font-semibold mb-2 group-hover:text-green-100 transition-colors duration-300 line-clamp-2">
                {data.name || "Unnamed project"}
              </h3>
              {data.description && (
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300 line-clamp-3">
                  {data.description}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {data.tags &&
                data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                    text-xs sm:text-sm 
                    bg-slate-700/80 
                    text-slate-300 
                    px-2 sm:px-3 py-1 
                    rounded
                    border border-slate-600/50
                    group-hover:bg-green-800/30 
                    group-hover:text-green-200
                    group-hover:border-green-500/30
                    transition-all duration-300
                    backdrop-blur-sm
                  "
                  >
                    {tag}
                  </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50 group-hover:border-green-500/30 transition-colors duration-300">
              <div className="flex gap-4 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="flex gap-1 items-center text-sm hover:text-green-400 transition-colors duration-200">
                  <Star size={16} className="group-hover:text-yellow-400 transition-colors duration-300" />
                  <span className="font-medium">{data.stars}</span>
                </div>
                <div className="flex gap-1 items-center text-sm hover:text-green-400 transition-colors duration-200">
                  <GitFork size={16} className="group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="font-medium">{data.forks}</span>
                </div>
              </div>

              <Link
                href={data.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-green-400 
                  hover:text-green-300 
                  hover:scale-110
                  transition-all duration-300 
                  p-2 
                  rounded-full 
                  hover:bg-green-500/10
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-green-500/50
                "
                onClick={(e) => e.stopPropagation()}
              ><Github size={20} /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
