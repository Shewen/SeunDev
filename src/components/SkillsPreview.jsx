import {
  FiCode,
  FiLayout,
  FiGitBranch,
  FiMonitor,
} from 'react-icons/fi'

function SkillsPreview() {
  const skillGroups = [
    {
      icon: FiCode,
      title: 'Frontend',
      description: 'Building interactive interfaces and web applications.',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Wordpress'],
    },
    {
      icon: FiLayout,
      title: 'UI & Styling',
      description: 'Creating clean, responsive and user-friendly interfaces.',
      skills: ['Tailwind CSS', 'Responsive Design', 'UI Implementation'],
    },
    {
      icon: FiGitBranch,
      title: 'Tools',
      description: 'Using modern tools to build and manage projects efficiently.',
      skills: ['Git', 'GitHub', 'Vite', 'VS Code'],
    },
    {
      icon: FiMonitor,
      title: 'Development',
      description: 'Building maintainable applications with reusable components.',
      skills: ['React Router', 'API Integration', 'Reusable Components'],
    },
  ]

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Skills & Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Tools I use to bring ideas to life.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            My development workflow combines modern frontend
            technologies with a strong focus on responsive design,
            usability, and clean code.
          </p>
        </div>

        {/* Skill cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <div
                key={group.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
              >

                <div className="flex items-start justify-between gap-6">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-medium text-slate-300">
                    0{skillGroups.indexOf(group) + 1}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {group.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            )
          })}

        </div>

        {/* Bottom statement */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            <span className="font-semibold text-slate-950">
              My approach:
            </span>{' '}
            I choose the right tools for each project rather than
            adding technology just for the sake of it.
          </p>
        </div>

      </div>
    </section>
  )
}

export default SkillsPreview