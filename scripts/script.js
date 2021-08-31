
$(document).ready(function(){
    $("#contenidoprincipal").show();
    $("#contenidosecundario").hide();
    $("#contenidotercero").hide();
    $("#contenidocuarto").hide();
    $("#titulo3").text("titulo no disponible");
    $("#descripcion_3").text("pagina bajo construccion...  ");
    $("#inicio").click(function(){
        $("#contenidoprincipal").show();
        $("#contenidosecundario").hide();
        $("#contenidotercero").hide();
        $("#contenidocuarto").hide();
        
     });
     $("#perfil").click(function(){
        $("#contenidoprincipal").hide();
        $("#contenidosecundario").show();
        $("#contenidotercero").hide();
        $("#contenidocuarto").hide();
        
     });
     $("#proyectos").click(function(){
        $("#contenidoprincipal").hide();
        $("#contenidosecundario").hide();
        $("#contenidotercero").show();
        $("#contenidocuarto").hide();
        
     });
     $("#contacto").click(function(){
        $("#contenidoprincipal").hide();
        $("#contenidosecundario").hide();
        $("#contenidotercero").hide();
        $("#contenidocuarto").show();
        
     });
     $('#btnenviarformulario').click(function(){
        $('#nombres').text("averniasd");
        $('#apellidos').text("");
        $('#email').text("");
        $('#numero').text("");
        $('#campo').text("");
    });

});





const li =document.querySelectorAll('.lista-pesta')


li.forEach((cadaLi,i)=>{
    
    li[i].addEventListener('click',()=>{

        li.forEach((cadaLi,i)=>{
            li[i].classList.remove('active')

        })
            li[i].classList.add('active')
            var idclass=li[i].getAttribute('id')
            
            if(idclass==1){
                //card 1
                $("#img1").attr("src","img/marptech.png");
                $("#titulo1").text("Marptech inv");
                $('#link1').attr('href', 'https://marptechgroup.herokuapp.com/login/?next=/');
                $("#descripcion_1").text("sistema web desarrollado en python con django y postgresql ,sistema de inventarios y facturacion  ");
                //card2
                $("#img2").attr("src","img/codigris.png");
                $("#titulo2").text("Codigris");
                $("#descripcion_2").text("sistema web para la presentacion de cursos ");
                //card3
                $("#img3").attr("src","img/img1.jpg");
                $("#titulo3").text("titulo no disponible");
                $("#descripcion_3").text("bla bla bla lorem lrem lrem ");
            }
            else if (idclass==2){
    
                $("#img1").attr("src","img/movil.jpg");
                $("#titulo1").text("titulo no disponible");
                $("#descripcion_1").text("pagina bajo construccion");

                $("#img2").attr("src","img/movil.jpg");
                $("#titulo2").text("titulo no disponible");
                $("#descripcion_2").text("pagina bajo construccion");

                $("#img3").attr("src","img/movil.jpg");
                $("#titulo3").text("titulo no disponible");
                $("#descripcion_3").text("pagina bajo construccion");
                  
            }
            else if (idclass==3){
    
                $("#img1").attr("src","img/clima.png");
                $("#titulo1").text("climatico");
                $('#link1').attr('href', 'https://fleyvag.github.io/app_clima/');
                $("#descripcion_1").text(" app que usa una api para saber el clima solo disponible en tamaño para celulares");

                $("#img2").attr("src","img/api.jpg");
                $("#titulo2").text("titulo no disponible");
                $("#descripcion_2").text("pagina bajo construccion");

                $("#img3").attr("src","img/api.jpg");
                $("#titulo3").text("titulo no disponible");
                $("#descripcion_3").text("pagina bajo construccion");
                  
            }
            else if (idclass==4){
    
                $("#img1").attr("src","img/desktop.png");
                $("#titulo1").text("titulo no disponible");
                $("#descripcion_1").text("pagina bajo construccion");

                $("#img2").attr("src","img/desktop.png");
                $("#titulo2").text("titulo no disponible");
                $("#descripcion_2").text("pagina bajo construccion");

                $("#img3").attr("src","img/desktop.png");
                $("#titulo3").text("titulo no disponible");
                $("#descripcion_3").text("pagina bajo construccion");
                  
            }
    
    })
   
})

