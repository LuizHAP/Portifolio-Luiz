$(document).ready(function(){
    
});

$.getJSON("produtos.json", function(data) {
    var produto = data.produtos;

    $.each(produto,function(index,valor){
        var conteudo = '';
        console.log(conteudo);

        conteudo += '<a href="'+ valor.link + '">';
            conteudo += '<img src="'+ valor.thumbnail +'">';
            conteudo += '<div class="produtos">';
                conteudo += '<p class="produto-titulo">'+ valor.nome +'</p>';
                conteudo += '<hr>';
                conteudo += '<div class="produto-preco">';
                    conteudo += '<p>'+ valor.semJuros +'X <span>sem juros</span></p>';
                    conteudo += '<p> <sup>$</sup>'+ valor.parcelaSemJuros +'</p>';
                    conteudo += '<div class="pagamentos">';
                        conteudo += '<img src="img/pagamentos/visa.png"> <img src="img/pagamentos/mastercard.png">';
                    conteudo += '</div>';
                    conteudo += '<p>'+ valor.comJuros +'X <span>com juros</span></p>';
                    conteudo += '<p> <sup>$</sup>'+ valor.parcelaComJuros +'</p>';
                    conteudo += '<sub>ou $'+ valor.aVista +' à vista</sub>';
                conteudo += '</div>';
                conteudo += '<hr>';
            conteudo += '</div>';
        conteudo += '</a>';
        
        $(".section-products").append(conteudo);
    });   
    
    carousel();
});

function carousel() {
    $('.section-products').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            
        ]
    });
    
}
