import effectsMap from './effectsMap';

const animation = () => {

  Object.keys(effectsMap).forEach(effectClass => {
    const elements = document.querySelectorAll(`.${effectClass}`);
    elements.forEach(element => {
      const delay = element.getAttribute('data-delay') || '0s';
      const duration = element.getAttribute('data-duration') || '1s';

      element.style.animationDelay = delay;
      element.style.animationDuration = duration;

      const animationNames = Array.from(element.classList)
        .map(className => effectsMap[className])
        .filter(Boolean)
        .join(', ');
      if (animationNames) {
          element.style.animationName = animationNames;
      }
    });
});
}

export default animation;
