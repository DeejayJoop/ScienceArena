(() => {
  const el = document.getElementById('arenaConsole');
  if (!el) return;

  const lines = [
    '[ScienceArena] boot sequence…',
    'Initializing hologrid renderer… OK',
    'Spawning agent bays… OK',
    'Loading science problem queue… (placeholder)',
    '',
    'Next: We will wire up battles, matchmaking, and problem sets.',
  ];

  let i = 0;
  function tick(){
    if (i >= lines.length) return;
    el.textContent += (i === 0 ? '' : '\n') + lines[i];
    i++;
    const delay = 220 + Math.random()*220;
    setTimeout(tick, delay);
  }

  // Start typing after a short beat.
  setTimeout(tick, 350);

  // Easter: click the logo to re-run the boot text.
  const logo = document.getElementById('logoBtn');
  if (logo){
    logo.addEventListener('click', () => {
      el.textContent = '';
      i = 0;
      tick();
    });
  }
})();
