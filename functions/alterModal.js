export default function alterModal(id1, id2) {
  const idModal = document.querySelector(id1);

  idModal.classList.remove('close');

  document.body.style.overflow = 'hidden';

  const modalPrivacy = document.querySelector(id2);
  modalPrivacy.scrollTo({ top: 0 });
}
