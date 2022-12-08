export default function searchAndress(cep) {
  $.getJSON('https://viacep.com.br/ws/' + cep + '/json/?callback=?', (data) => {
    $('.andress-container').fadeIn();

    $('#andress').val(data.logradouro);
    $('#district').val(data.bairro);
    $('#city').val(data.localidade);
    $('#state').val(data.uf);
  });
}
