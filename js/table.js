$('.new-register').on('click', () => {
  $('#table').fadeOut();
  $('.andress-container').fadeOut();
  $('#form input').removeClass('valid');
  $('.form-bg').fadeIn();
});

$(document).on('click', '.remover', ({ target }) => {
  const line = '#l-' + target.id;
  $(line).fadeOut(500, () => $(line).remove());
});

$(document).on('click', '.editar', ({ target }) => {
  const line = '#l-' + target.id;

  $('#name').val($(line).find('.name').html());
  $('#cpf').val($(line).find('.cpf').html());
  $('#email').val($(line).find('.email').html());
  $('#phone').val($(line).find('.phone').html());
  $('#cep').val($(line).find('.cep').html());
  $('#andress').val($(line).find('.andress').html());
  $('#number').val($(line).find('.number').html());
  $('#complement').val($(line).find('.complement').html());
  $('#district').val($(line).find('.district').html());
  $('#city').val($(line).find('.city').html());
  $('#state').val($(line).find('.state').html());

  $(line).remove();
  $('#table').fadeOut();
  $('.form-bg').fadeIn();
});
