const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const elementsToAnimate = document.querySelectorAll('.container');
  
  elementsToAnimate.forEach((element) => {
    element.style.animationPlayState = 'paused'; 
    observer.observe(element);
  });