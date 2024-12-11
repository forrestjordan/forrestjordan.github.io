document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("projects");
    const filterSelect = document.getElementById("filter");
  
    // Fetch projects from JSON
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        renderProjects(data);
  
        // filter functionality
        filterSelect.addEventListener("change", () => {
          const selectedFilter = filterSelect.value.toLowerCase();
          const filteredProjects =
            selectedFilter === "all"
              ? data
              : data.filter((project) =>
                  project.technologies.some((tech) =>
                    tech.toLowerCase().includes(selectedFilter)
                  )
                );
          renderProjects(filteredProjects);
        });
      })
      .catch((error) => console.error("Error loading projects:", error));
  
    // Render
    function renderProjects(projects) {
      projectContainer.innerHTML = "";
      projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
  
        projectCard.innerHTML = `
          <div class="image-container">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}">View Details</a>
        `;
  
        projectContainer.appendChild(projectCard);
      });
    }
  });
  