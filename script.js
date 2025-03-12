function showSection(sectionId) {
    gsap.to('.section', { opacity: 0, scale: 0.9, duration: 0.6, onComplete: function() {
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        gsap.to('#' + sectionId, { opacity: 1, scale: 1, duration: 0.6});
    }});
}