import { Github, Send, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

const Contact = () => {
  const contactLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/monsurcodes",
      hoverColor: "hover:text-green-400",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/minkxx69",
      hoverColor: "hover:text-green-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/monsurcodes",
      hoverColor: "hover:text-green-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/monsurcodes",
      hoverColor: "hover:text-green-400",
    },
  ]

  return (
    <div id="contact" className="my-18 mx-10 lg:mx-40">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-500 mb-8 font-semibold text-center md:text-left">
        Contact Me
      </h2>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {contactLinks.map((contact, index) => {
          const IconComponent = contact.icon
          return (
            <Link
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex flex-col items-center justify-center gap-4
                bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900
                border border-slate-600
                p-6 sm:p-8
                min-h-[140px] sm:min-h-[160px]
                shadow-lg shadow-green-500/10
                hover:shadow-xl hover:shadow-green-500/25
                hover:border-green-500/60
                hover:from-green-900/20 hover:via-slate-800 hover:to-slate-900
                transform hover:scale-[1.05] hover:-translate-y-2
                transition-all duration-500 ease-out
                cursor-pointer
                backdrop-blur-sm
              "
            >
              {/* Icon */}
              <div className="flex items-center justify-center">
                <IconComponent
                  size={32}
                  className="
                    text-slate-400 
                    group-hover:text-green-400 
                    transition-all duration-300 
                    group-hover:scale-110
                    sm:w-10 sm:h-10
                  "
                />
              </div>

              {/* Name */}
              <span
                className="
                text-slate-300 
                group-hover:text-green-400 
                font-medium 
                text-sm sm:text-base
                transition-colors duration-300
                text-center
              "
              >
                {contact.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
