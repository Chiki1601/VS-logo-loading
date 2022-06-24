const timeline = anime.timeline({
  loop: true,
  duration: 450,
  easing: 'easeInOutQuart'
});

timeline
  .add({ targets: '.p1', d: { value: 'M 3 115 L 112 6 L 148 21 L 16 120 L 3 115 Z', delay: 400 }})
  .add({ targets: '.p2', d: { value: 'M 112 6 L 148 21 L 150 136 L 112 152 L 112 6 Z' }})
  .add({ targets: '.p3', d: { value: 'M 148 135 L 112 152 L 3 43 L 17 37 L 148 135 Z' }})
  .add({ targets: '.p3', d: { value: 'M 148 135 L 112 152 L 112 152 L 148 135 L 148 135 Z', delay: 400 }})
  .add({ targets: '.p2', d: { value: 'M 112 6 L 148 21 L 148 21 L 112 6 L 112 6 Z' }})
  .add({ targets: '.p1', d: { value: 'M 3 115 L 3 115 L 16 120 L 16 120 L 3 115 Z' }});