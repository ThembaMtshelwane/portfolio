document.addEventListener('DOMContentLoaded', () => {
  const projectsSection = document.getElementById('projects-section')

  let data = []
  if (typeof projectData !== 'undefined') {
    data = projectData
  } else {
    data = []
  }

  data.forEach((element) => {
    const project = document.createElement('section')
    project.classList.add('project-n')
    projectsSection.appendChild(project)

    const a = document.createElement('a')
    a.href = element.website
    a.target = 'blank'
    a.classList.add('image')

    const projectImage = document.createElement('img')
    projectImage.classList.add('project-image')
    projectImage.src = element.image
    projectImage.alt = element.name
    a.appendChild(projectImage)
    project.appendChild(a)

    const projectInfo = document.createElement('section')
    projectInfo.classList.add('project-info')
    project.appendChild(projectInfo)

    const projectName = document.createElement('h3')
    projectName.classList.add('project-name')
    projectName.textContent = element.name
    projectInfo.appendChild(projectName)

    const projectSummary = document.createElement('p')
    projectSummary.classList.add('project-summary')
    projectSummary.textContent = element.summary
    projectInfo.appendChild(projectSummary)

    const tasks = document.createElement('ul')
    tasks.classList.add('responsibilities')
    element.responsibilities.forEach((task) => {
      const li = document.createElement('li')
      li.textContent = task
      tasks.appendChild(li)
    })
    projectInfo.appendChild(tasks)

    const toggleButton = document.createElement('button')
    toggleButton.classList.add('btn')
    toggleButton.textContent = '...Show More'
    projectInfo.appendChild(toggleButton)

    toggleButton.addEventListener('click', function () {
      hiddenItems.forEach((item) => {
        if (item.style.display === 'none' || item.style.display === '') {
          item.style.display = 'list-item'
          toggleButton.textContent = 'Show Less'
        } else {
          item.style.display = 'none'
          toggleButton.textContent = 'Show More'
        }
      })
    })
    const projectTech = document.createElement('ul')
    projectTech.classList.add('project-tech')
    element.techStack.forEach((tech) => {
      const li = document.createElement('li')
      li.textContent = tech
      projectTech.appendChild(li)
    })
    projectInfo.appendChild(projectTech)
  })
})
