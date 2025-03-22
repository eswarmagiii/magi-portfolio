function showProject(projectId) {
  let projects = {
    leadManagement: {
      title: "Salesforce Lead Management",
      description:
        "A Lead Management System built using Apextrigger,Reports & Dashboards, Data Import & Management and Flows.",
      link: "https://www.linkedin.com/posts/eswar-magi-87b493278_salesforce-leadmanagement-apextriggers-activity-7304632296630849536-ibxT",
    },
  };

  let project = projects[projectId];

  if (project) {
    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-description").innerText =
      project.description;

    let projectLink = document.getElementById("project-link");

    // Ensure the link is updated first before making it visible
    projectLink.style.display = "none"; // Temporarily hide
    projectLink.href = project.link; // Update link
    projectLink.style.display = "inline-block"; // Show again

    document.getElementById("project-details").style.display = "block";
  }
}

function showSection(sectionId) {
  const activeSection = document.querySelector(".section.active");
  const targetSection = document.getElementById(sectionId);

  if (activeSection !== targetSection) {
    gsap
      .timeline()
      .to(activeSection, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "power1.inOut",
      })
      .set(activeSection, { className: "-=active", display: "none" }) // Hide the previous section
      .set(targetSection, { className: "+=active", display: "block" }) // Show the new section
      .fromTo(
        targetSection,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power1.inOut" }
      );
  }
}
