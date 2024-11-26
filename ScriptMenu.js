document.addEventListener("DOMContentLoaded", function() {
    // Datos de las comidas por estado
    const comidasPorEstado = {
        "Aguascalientes": [
            { 
                comida: "Carnitas", 
                receta: "Las carnitas se preparan con cerdo cocido en su propia grasa, servido con cebolla, cilantro y salsa.", 
                imagen: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/07/carnitas-estilo-michoacan-receta-tradicional.jpeg" // Asegúrate de que la URL de la imagen sea correcta
            },
            { 
                comida: "Pan de elote", 
                receta: "El pan de elote es un postre dulce elaborado con maíz tierno, azúcar, mantequilla y huevos.",
                imagen: "https://bunny-wp-pullzone-igwhdjali4.b-cdn.net/wp-content/uploads/2021/11/Pan-de-Elote-1.jpg" // Asegúrate de que la URL de la imagen sea correcta
            }
        ],
        "Baja California": [
            { 
                comida: "Tacos de pescado", 
                receta: "Los tacos de pescado están hechos con filete de pescado rebozado, salsa de crema y vegetales.", 
                imagen: "https://www.hola.com/horizon/landscape/59ab2aba7fe1-baja-california-tepic-t.jpg"
            },
            { 
                comida: "Langosta", 
                receta: "La langosta se prepara a la parrilla con mantequilla derretida y ajo.",
                imagen: "https://bajacalifornia.travel/wp-content/uploads/2022/04/langosta-estilo-puerto-nuevo-baja-california-2.jpg"
            }
        ],
        "Baja California Sur": [
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos de pescado al estilo Baja, con pescado empanizado o frito, acompañados de ensalada y salsa.", 
                imagen: "https://www.maricruzavalos.com/wp-content/uploads/2023/07/tacos-de-pescado.webp"
            },
            { 
                comida: "Pescado zarandeado", 
                receta: "Pescado entero marinado y cocido a la parrilla con salsa especial.", 
                imagen: "https://www.gob.mx/cms/uploads/article/main_image/69998/pescado_zarandeado.jpg"
            }
        ],
        "Campeche": [
            { 
                comida: "Panuchos", 
                receta: "Panuchos son tortillas de maíz rellenas con frijoles, acompañados de carne de pollo o cerdo, cebolla morada y salsa.", 
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7G67PjvOtwdGSfj8pU1ZJA3zOZUWiYUx93g&s"
            },
            { 
                comida: "Cochinita pibil", 
                receta: "Carne de cerdo marinada con achiote y cocida en un horno bajo tierra, servido con cebolla morada encurtida.",
                imagen: "https://www.gob.mx/cms/uploads/article/main_image/25270/blog-cochinita-22-sep-fb.jpg"
            }
        ],
        "Chiapas": [
            { 
                comida: "Tamal de chipilín", 
                receta: "Tamal relleno de chipilín, una planta local, envuelto en hoja de plátano.",
                imagen: "https://lossaboresdemexico.com/wp-content/uploads/2021/08/chipilin.jpeg"
            },
            { 
                comida: "Sopa de pan", 
                receta: "Sopa espesa hecha con pan de bolillo, jitomate, especias y caldo de pollo.",
                imagen: "https://img-global.cpcdn.com/recipes/f4a8b23bb3a95413/680x964cq70/sopa-de-pan-chiapas-foto-principal.webp"
            }
        ],
        "Chihuahua": [
            { 
                comida: "Chimichangas", 
                receta: "Tortillas rellenas de carne y queso, luego fritas hasta quedar crujientes.",
                imagen: "https://elsouvenir.com/wp-content/uploads/2018/07/Chimichangas-Chihuahua-Foto-Rick-217.jpg"
            },
            { 
                comida: "Carne asada", 
                receta: "Carne de res cocida a la parrilla, acompañada de guarniciones como arroz, frijoles y tortillas.",
                imagen: "https://www.pueblosmexico.com.mx/public/img/arton31809.webp"
            }
        ],
        "Coahuila": [
            { 
                comida: "Tacos de carne asada", 
                receta: "Carne de res a la parrilla, cortada en trozos pequeños y servida en tortillas.",
                imagen: "https://media.admagazine.com/photos/642b5757514e94833674f396/master/w_1600%2Cc_limit/los-mejores-tacos-al-carb%25C3%25B3n.jpg"
            },
            { 
                comida: "Pechuga a la mexicana", 
                receta: "Pechuga de pollo cocida con jitomate, cebolla, chile y especias.",
                imagen: "https://cocinamia.com.mx/wp-content/uploads/2022/11/IMG_1321-500-1-1100x500.jpg"
            }
        ],
        "Colima": [
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos de pescado estilo Colima, con pescado empanizado o frito, servido con salsa y ensalada.",
                imagen: "https://www.lashijasdelatostada.com/img/menu/tacos/mar-tierra.jpg"
            },
            { 
                comida: "Ceviche", 
                receta: "Ceviche preparado con pescado o mariscos frescos, jugo de limón, cebolla, cilantro y chile.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/3/1/7/ceviche_colima_35713_600_square.jpg"
            }
        ],
        "Durango": [
            { 
                comida: "Baleadas", 
                receta: "Tortilla de harina rellena de frijoles, queso y crema.",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Baleada.jpg/228px-Baleada.jpg"
            },
            { 
                comida: "Carne a la tampiqueña", 
                receta: "Carne de res a la parrilla, acompañada de arroz, frijoles y ensalada.",
                imagen: "https://www.viajabonito.mx/wp-content/uploads/2023/07/TAMPIQUENA_VIAJA_BONITO_01.webp"
            }
        ],
        "Guanajuato": [
            { 
                comida: "Enchiladas mineras", 
                receta: "Enchiladas rellenas de pollo o carne, bañadas en una salsa roja y acompañadas de cebolla y queso.",
                imagen: "https://www.imer.mx/radio710/wp-content/uploads/sites/17/enchiladas-mineras.jpg"
            },
            { 
                comida: "Panza de res", 
                receta: "Sopa espesa hecha con panza de res, chile y especias.",
                imagen: "https://cocina-casera.com/mx/wp-content/uploads/2018/07/pancita-res-guajillo.jpg"
            }
        ],
        "Guerrero": [
            { 
                comida: "Pozole", 
                receta: "Sopa espesa hecha con maíz hominy y carne de cerdo o pollo, servida con rábanos, orégano y limón.",
                imagen: "https://acapulco.pro/wp-content/uploads/2022/02/pozole-guerrero-.jpg"
            },
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos de pescado frito o asado, servidos con salsa de ajo y repollo.",
                imagen: "https://www.turimexico.com/wp-content/uploads/2016/08/Receta-Tacos-de-Pescado-Rebosado.jpg"
            }
        ],
        "Hidalgo": [
            { 
                comida: "Pastes", 
                receta: "Pastes son empanadas rellenas de carne de res, papas y zanahorias.",
                imagen: "https://i0.wp.com/goula.lat/wp-content/uploads/2023/07/pastes.jpg?fit=1000%2C662&ssl=1"
            },
            { 
                comida: "Mixiotes", 
                receta: "Carne de pollo o cordero cocida en una salsa de chiles y especias, envuelta en una hoja.",
                imagen: "https://i.blogs.es/7127a7/whatsapp_image_2018-12-27_at_14.09.34/650_1200.jpg"
            }
        ],
        "Jalisco": [
            { 
                comida: "Birria", 
                receta: "Estofado de carne de chivo, cocido con chiles y especias.",
                imagen: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2021/07/receta-de-birria-de-res-estilo-jalisco-ingredientes.jpg"
            },
            { 
                comida: "Torta ahogada", 
                receta: "Torta de carnitas bañada en salsa picante, típica de Guadalajara.",
                imagen: "https://i.blogs.es/27f9e0/template-blog-no-carrusel-48/1366_2000.png"
            }
        ],
        "Mexico": [
            { 
                comida: "Tacos de carnitas", 
                receta: "Carnitas de cerdo cocidas lentamente, servidas en tortillas con cebolla y cilantro.",
                imagen: "https://www.elgrafico.mx/sites/default/files/styles/v2022_detalle_nota_1200x740/public/2019/02/01/tacos_carnitas_banquetera_cdmx.jpg?itok=gpwqZ4ZY"
            },
            { 
                comida: "Chiles en nogada", 
                receta: "Chiles poblanos rellenos de picadillo, bañados en una salsa de nuez y adornados con granada.",
                imagen: "https://media.admagazine.com/photos/64b1ca36ce2de05ad6080555/4:3/w_2000,h_1500,c_limit/chiles-en-nogada.jpg"
            }
        ],
        "Michoacán": [
            { 
                comida: "Carnitas", 
                receta: "Cerdo cocido en su propia grasa, servido con cebolla y salsa.",
                imagen: "https://animalgourmet.com/wp-content/uploads/2024/01/Carnitas-estilo-Michoacan-en-Olla-Express3-jpeg.jpg"
            },
            { 
                comida: "Uchepos", 
                receta: "Tamales de maíz tierno, rellenos de queso y envueltos en hoja de maíz.",
                imagen: "https://img-global.cpcdn.com/recipes/5d748d54baa49c98/680x482cq70/uchepos-michoacanos-foto-principal.jpg"
            }
        ],
        "Morelos": [
            { 
                comida: "Ceviche", 
                receta: "Ceviche preparado con pescado fresco marinado en limón, acompañado de cebolla, cilantro y chile.",
                imagen: "https://www.elsoldecuernavaca.com.mx/doble-via/2z1x2t-ceviches-en-cuernavaca.jpg/alternates/LANDSCAPE_640/ceviches-en-cuernavaca.jpg"
            },
            { 
                comida: "Tlacoyos", 
                receta: "Tortillas gruesas rellenas de frijoles y acompañadas de salsa.",
                imagen: "https://www.mexicoenmicocina.com/wp-content/uploads/2017/06/6-14-1024x683.jpg"
            }
        ],
        "Nayarit": [
            { 
                comida: "Pescado zarandeado", 
                receta: "Pescado marinado y cocido a la parrilla, acompañado de salsas y guarniciones.",
                imagen: "https://hotelesfray.com/wp-content/uploads/2022/01/PescadoZarandeado.jpg"
            },
            { 
                comida: "Tacos de camarón", 
                receta: "Tacos rellenos de camarón frito o asado, acompañados de ensalada y salsa.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/7/4/0/tacos_dorados_de_camaron_75047_orig.jpg"
            }
        ],
        "Nuevo León": [
            { 
                comida: "Cabrito", 
                receta: "Cabrito asado en un horno, acompañado de salsa y cebolla.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-W8TPnkkI3m4D_Q5jrHj1NRg4WaTJZphEQ&s"
            },
            { 
                comida: "Tacos de machaca", 
                receta: "Tacos rellenos de carne deshebrada y acompañados de guarniciones.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRdUDhal8DQ0hVYpB4b6Al9upRI9Z_ioGlA&s"
            }
        ],
        "Oaxaca": [
            { 
                comida: "Mole oaxaqueño", 
                receta: "Pollo cubierto con una salsa espesa de chiles y especias.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/5/4/6/mole_negro_76645_orig.jpg"
            },
            { 
                comida: "Tlayudas", 
                receta: "Tortillas grandes cubiertas con frijoles, queso, carne y salsa.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/5/9/8/tlayudas_de_oaxaca_74895_orig.jpg"
            }
        ],
        "Puebla": [
            { 
                comida: "Chiles en nogada", 
                receta: "Chiles poblanos rellenos de picadillo, bañados en una salsa de nuez y adornados con granada.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/5/5/0/chiles_en_nogada_estilo_puebla_56055_paso_7_600.jpg"
            },
            { 
                comida: "Mole poblano", 
                receta: "Salsa espesa de chiles, chocolate y especias, típicamente servida con pollo.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSxvTDdZnOvKNwY7mCPdXMwnEYD9YLOak2g&s"
            }
        ],
        "Querétaro": [
            { 
                comida: "Queso de tuna", 
                receta: "Queso fresco elaborado con tuna, una fruta típica de la región.",
                imagen: "https://gourmetdemexico.com.mx/wp-content/uploads/2022/07/queso-de-tuna.jpg"
            },
            { 
                comida: "Enchiladas queretanas", 
                receta: "Enchiladas rellenas de pollo, bañadas con salsa roja y acompañadas de crema.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/6/4/1/enchiladas_queretanas_38146_600_square.jpg"
            }
        ],
        "Quintana Roo": [
            { 
                comida: "Ceviche de camarón", 
                receta: "Camarones frescos marinados en jugo de limón, acompañados de cebolla, cilantro y tomate.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuClIURyEW1OxF-yoMD8dRbAlLVPSYe5jQRg&s"
            },
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos con pescado empanizado o frito, servidos con salsa picante.",
                imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/86/77/e3/los-de-pescado.jpg?w=1200&h=-1&s=1"
            }
        ],
        "San Luis Potosí": [
            { 
                comida: "Enchiladas potosinas", 
                receta: "Enchiladas rellenas de carne y bañadas en salsa roja, acompañadas de cebolla y crema.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/6/1/8/enchiladas_potosinas_73816_600.jpg"
            },
            { 
                comida: "Zacahuil", 
                receta: "Tamale gigante relleno de carne de cerdo o pollo, cocido en hojas de plátano.",
                imagen: "https://www.mexicoenmicocina.com/wp-content/uploads/2013/10/Zacahuil1ab_thumb2.jpg"
            }
        ],
        "Sinaloa": [
            { 
                comida: "Camarones culichis", 
                receta: "Camarones preparados con mayonesa, queso y especias, horneados hasta quedar dorados.",
                imagen: "https://tvpacifico.mx/recetas/intranet/images/recipes/275-291.jpg"
            },
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos con pescado frito o a la parrilla, acompañado de repollo y salsa.",
                imagen: "https://www.gastrolabweb.com/u/fotografias/m/2021/1/10/f850x638-6961_84450_5050.jpg"
            }
        ],
        "Sonora": [
            { 
                comida: "Carne asada", 
                receta: "Carne de res cocida a la parrilla, servida con guarniciones.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKILsKnpaCdMCh9HE59mgnBkJpzwKjGyFBXA&s"
            },
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos con pescado frito o asado, acompañados de ensalada.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRju0v0dfD3QtO9J86D_NRhgveECwH6OU0Mwg&s"
            }
        ],
        "Tabasco": [
            { 
                comida: "Pescado a la tabasqueña", 
                receta: "Pescado cocinado con salsa de tomate, chile y especias.",
                imagen: "https://img-global.cpcdn.com/recipes/5f03a949a73fc7c8/680x482cq70/caldo-de-pescado-de-mama-tabasquena-foto-principal.jpg"
            },
            { 
                comida: "Tamal de frijol", 
                receta: "Tamal relleno de frijoles negros, envuelto en hoja de plátano.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv0OZAWSDAoXEEm18A1marjQ9e9O50ohVQw&s"
            }
        ],
        "Tamaulipas": [
            { 
                comida: "Tampiqueña", 
                receta: "Carne asada acompañada de arroz, frijoles y ensalada.",
                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carne_a_la_tampique%C3%B1a.jpg/220px-Carne_a_la_tampique%C3%B1a.jpg"
            },
            { 
                comida: "Pescado a la veracruzana", 
                receta: "Pescado cocinado con salsa de tomate, ajo y olivas.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/3/8/9/pescado_a_la_veracruzana_74983_orig.jpg"
            }
        ],
        "Tlaxcala": [
            { 
                comida: "Tacos de mixiote", 
                receta: "Carne de pollo o cordero cocido con una salsa de chiles y especias.",
                imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaprqdhzv2nu7e-Mcl4vGSixY2qm_xn3A-sQ7VKPonOTpylCW2zoRDR3pwGi2vNRE3kEGTtIjuKZa64ApTI9GXRM0Bs-MY_RXuTloksakg658aSyJXxM-z379dQXtplxrYj2W1NFS0nxMf/s1600/cochinita2.JPG"
            },
            { 
                comida: "Papalotes", 
                receta: "Tortillas rellenas de frijoles o carne, típicas de la región.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBvoXB7osX_8TQQ5Eom2B-qdCO9jTNDEllg&s"
            }
        ],
        "Veracruz": [
            { 
                comida: "Pescado a la veracruzana", 
                receta: "Pescado cocinado con salsa de jitomate, olivas y alcaparras.",
                imagen: "https://cdn0.recetasgratis.net/es/posts/3/8/9/pescado_a_la_veracruzana_74983_orig.jpg"
            },
            { 
                comida: "Tacos de pescado", 
                receta: "Tacos con pescado frito o a la parrilla, servidos con salsa y ensalada.",
                imagen: "https://www.turimexico.com/wp-content/uploads/2015/11/tacos-de-pescado-estilo-ensenada-900x500.jpg"
            }
        ],
        "Yucatán": [
            { 
                comida: "Cochinita pibil", 
                receta: "Carne de cerdo marinada con achiote y cocida en un horno bajo tierra.",
                imagen: "https://img-global.cpcdn.com/recipes/267a2bfc0c4bbdd5/1200x630cq70/photo.jpg"
            },
            { 
                comida: "Papadzules", 
                receta: "Tortillas bañadas en salsa de pepita, rellenas de huevo y bañadas con salsa de tomate.",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVcq3b2tUKyeidiCShSGYhAn0jcEDARn1nQ&s"
            }
        ],
        "Zacatecas": [
            { 
                comida: "Asado de boda", 
                receta: "Carne cocida en salsa roja con chiles y especias.",
                imagen: "https://www.pueblosmexico.com.mx/public/img/arton31765.webp"
            },
            { 
                comida: "Enchiladas zacatecanas", 
                receta: "Enchiladas rellenas de pollo, bañadas en salsa roja.",
                imagen: "https://i.ytimg.com/vi/3qjOLgwZ8bA/sddefault.jpg"
            }
        ]
        
    };

    const selectEstado = document.getElementById("estado");
    const comidasLista = document.getElementById("comidas-lista");

    // Función para llenar el select con los estados
    function llenarEstados() {
        const estados = Object.keys(comidasPorEstado);  // Obtener los nombres de los estados
        console.log("Estados disponibles:", estados);  // Verifica que los estados se estén cargando correctamente
        
        // Verifica si el "select" está en el HTML
        if (selectEstado) {
            estados.forEach(estado => {
                const option = document.createElement("option");
                option.value = estado;
                option.textContent = estado;
                selectEstado.appendChild(option);
            });
        } else {
            console.log("No se encuentra el elemento selectEstado");
        }
    }

    // Función para mostrar las comidas según el estado seleccionado
    function mostrarComidas() {
        const estadoSeleccionado = selectEstado.value;
        console.log("Estado seleccionado:", estadoSeleccionado);  // Verifica si el estado se está seleccionando correctamente

        // Limpiar la lista de comidas antes de mostrar nuevas
        comidasLista.innerHTML = "";

        if (estadoSeleccionado && comidasPorEstado[estadoSeleccionado]) {
            const comidas = comidasPorEstado[estadoSeleccionado];
            comidas.forEach(comida => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${comida.comida}:</strong> ${comida.receta}
                    <br>
                    <img src="${comida.imagen}" alt="${comida.comida}" style="width: 200px; height: auto; border-radius: 8px; margin-top: 10px;">
                `;
                comidasLista.appendChild(li);
            });
        } else {
            console.log("No hay comidas para el estado seleccionado.");
        }
    }

    // Llamar a la función para llenar los estados al cargar la página
    llenarEstados();

    // Evento para mostrar las comidas cuando se selecciona un estado
    selectEstado.addEventListener("change", mostrarComidas);
});
