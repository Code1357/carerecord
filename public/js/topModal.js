'use strict';
{
  const openProfile = document.getElementById('open_modal1');
  const closeProfile = document.getElementById('close');
  const modalProfile = document.getElementById('modal');
  const mask = document.getElementById('mask');
  openProfile.addEventListener('click', function () {
    modalProfile.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  closeProfile.addEventListener('click', function () {
    modalProfile.classList.add('hidden');
    mask.classList.add('hidden');
  });

  const openRequirements = document.getElementById('open_modal2');
  const closeRequirements = document.getElementById('close2');
  const modalRequirements = document.getElementById('modal2');
  // const mask = document.getElementById('mask');
  openRequirements.addEventListener('click', function () {
    modalRequirements.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  closeRequirements.addEventListener('click', function () {
    modalRequirements.classList.add('hidden');
    mask.classList.add('hidden');
  });

  const openEr = document.getElementById('open_modal3');
  const closeEr = document.getElementById('close3');
  const modalEr = document.getElementById('modal3');
  // const mask = document.getElementById('mask');
  openEr.addEventListener('click', function () {
    modalEr.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  closeEr.addEventListener('click', function () {
    modalEr.classList.add('hidden');
    mask.classList.add('hidden');
  });
}
