import searchAndress from './search-andress.js';
import addRow from './add-row.js';

const inputConfig = {};
inputConfig.name = {
  validation: /^[A-Za-z\s]*$/,
};
inputConfig.cpf = {
  validation: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
  formatation: /(\d{3})(\d{3})(\d{3})(\d{2})/g,
  format: '$1.$2.$3-$4',
  digits: 11,
};
inputConfig.email = {
  validation: /^\w+@\D+\.\D+$/,
};
inputConfig.phone = {
  validation: /^(\(?[0-9]{2}\)?)\s?([9]{1})\s?([0-9]{4})-?([0-9]{4})$/,
  formatation: /(\d{2})([9]{1})(\d{4})(\d{4})/g,
  format: '($1) $2 $3-$4',
  digits: 11,
};
inputConfig.cep = {
  validation: /^\d{5}-?\d{3}$/,
  formatation: /(\d{5})(\d{3})/g,
  format: '$1-$2',
  digits: 8,
};

$('#form').on('change', ({ target }) => {
  $(target).removeClass('valid');
  const id = target.id;
  if (['cpf', 'phone', 'cep'].includes(id)) {
    format(target, id);
  }
  if ($(target).is('[required]')) validate(target, id);

  if (id === 'cep' && $('#cep').hasClass('valid')) {
    const cepClean = $(target).val().replace(/\D/g, '');
    searchAndress(cepClean);
  }
});

$('.btn-submit').on('click', (event) => {
  event.preventDefault();

  if ($('#name,#cpf,#email,#phone,#cep').filter('.valid').length === 5) {
    $('.form-bg').fadeOut();
    addRow();
    $('#table').fadeIn();
  } else {
    console.log('invalido');
  }
});

function format(element, id) {
  const cleaned = $(element)
    .val()
    .replace(/\D/g, '')
    .slice(0, inputConfig[id].digits);

  const formated = cleaned.replace(
    inputConfig[id].formatation,
    inputConfig[id].format,
  );

  element.value = formated;
}

function validate(element, id) {
  let value = $(element).val();

  if (value != '' && inputConfig[id].validation.test(value)) {
    $(element).addClass('valid');
    if ($(element).hasClass('invalid')) {
      $(element).removeClass('invalid');
      $('.invalid-msg').fadeOut();
      setTimeout(() => $('span').remove('.invalid-msg'), 500);
    }
  } else if (!$(element).hasClass('invalid') && value != '') {
    $(element).addClass('invalid');
    $(element).after('<span class="invalid-msg">Campo inválido.</span>');
    $('.invalid-msg').fadeIn();
  }
}
