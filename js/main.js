$(document).ready(function () {
  $("#carousel-images").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#phone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      car: {
        required: false,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: "Por favor, insira um nome",
      email: "Por favor, insira um email válido",
      phone: "Por favor, insira seu número de telefone celular",
      message: "Qual a sua dúvida?",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (e, validator) {
      let invalidsFields = validator.numberOfInvalids();
      alert(`Existem ${invalidsFields} campos incorretos!`);
    },
  });

  $(".car-list button").click(function () {
    const destiny = $("#contact");

    const carName = $(this).parent().find("h3").text();

    $("#car").val(carName);
    $("html").animate(
      {
        scrollTop: destiny.offset().top,
      },
      1000
    );
  });

  //end
});
