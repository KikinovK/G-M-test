const scrollToMovement = () => {
  const block = document.querySelector('.movingBlock');
  const maxOffset = window.innerWidth;
  let isScrolling = false;

  const updateBlockPosition = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const offsetX = Math.min((scrollTop / maxScroll) * maxOffset, maxOffset);

    block.style.transform = `translateX(${offsetX}px)`;

    isScrolling = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(updateBlockPosition);
    }
  });
};

export default scrollToMovement;
