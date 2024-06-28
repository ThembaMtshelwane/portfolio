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

    const gitHubLink = document.createElement('a')
    gitHubLink.href = element.githublink
    gitHubLink.textContent = 'See the repo'
    gitHubLink.classList.add('seeRepo')

    const gitHubListItem = document.createElement('li')
    gitHubListItem.appendChild(gitHubLink)
    tasks.appendChild(gitHubListItem)

    projectInfo.appendChild(tasks)

    const projectTech = document.createElement('ul')
    projectTech.classList.add('project-tech')
    element.techStack.forEach((tech) => {
      const li = document.createElement('li')
      li.textContent = tech
      projectTech.appendChild(li)
    })
    projectInfo.appendChild(projectTech)
  })

  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    emailjs.sendForm('contact_service', 'contact_form', form).then(
      () => {
        const successMessage = document.createElement('p')
        successMessage.textContent = 'Message received'
        successMessage.classList.add('success')

        const messageContainer = document.getElementById('messageContainer')
        messageContainer.classList.add('messageContainer')
        messageContainer.appendChild(successMessage)
        setTimeout(() => {
          messageContainer.classList.add('displayNone')
        }, 1500)
      },
      (error) => {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = 'Error: ' + error
        errorMessage.classList.add('failure')

        const messageContainer = document.getElementById('messageContainer')
        messageContainer.classList.add('messageContainer')
        messageContainer.appendChild(errorMessage)
        setTimeout(() => {
          messageContainer.classList.add('displayNone')
        }, 1500)
      }
    )
    form.reset()
  })
})
