    var $ = (jQuery),
    ggMap;

ymaps.ready(function() {
    openCity();
    openCopmaniesByType();

    if ($(window).innerWidth() > 767) {
        init();
        centerCity();
        centerPlace();
    } else {
        openCloseMobileMenu();
    }
});

function init() {
    ggMap = new ymaps.Map('map', {
        center: [62.6363139498408,76.47798899609371],
        zoom: 3,
        controls: ['zoomControl']
    });
    ggMap.geoObjects
        
        
        .add(new ymaps.Placemark([44.495650238300, 34.164169568800], {
            hintContent: '\u041c\u0438\u0445\u0430\u0438\u043b \u041b\u0430\u043d\u0435\u0446\u043a\u0438\u0439',
            balloonContentHeader:'\u041c\u0438\u0445\u0430\u0438\u043b \u041b\u0430\u043d\u0435\u0446\u043a\u0438\u0439',
            balloonContentBody: '\u003Cp\u003E\u042f\u043b\u0442\u0430\u003Cbr\u003E8-978-705-1866\u003Cbr\u003EDjemeron@gmail.com\u003Cbr\u003E\u003C\/p\u003E'
        }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([58.599884213500, 49.660120416000], {
            hintContent: 'Oasis Kirov',
            balloonContentHeader:'Oasis Kirov',
            balloonContentBody: '+7-953-675-5544\u003Cbr\u003ELunes – viernes 9:00 – 18:00\u003Cbr\u003Ekirov@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/dsvyatka\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
        }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([59.927869875400, 30.370724542300], {
            hintContent: 'Darkside Shop',
            balloonContentHeader:'Darkside Shop',
            balloonContentBody: 'Calle Poltávskaya, 8\u003Cbr\u003E+7-921-909-7800\u003Cbr\u003ELunes-viernes, 9:00 – 18:00\u003Cbr\u003Esábado 12:00 – 05:00\u003Cbr\u003Esale@darksideshop.com\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([48.705730680000, 44.517961415300], {
            hintContent: 'Tienda de shisha Oblako',
            balloonContentHeader:'Tienda de shisha Oblako',
            balloonContentBody: 'Avenida Gueróyev, 3\u003Cbr\u003E+7-8442-50-4007\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/vk.com\/oblako_shop\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([48.724352467300, 44.514093406700], {
            hintContent: 'Tienda de shisha Oblako',
            balloonContentHeader:'Tienda de shisha Oblako',
            balloonContentBody: 'Calle Rokossovski, 107\u003Cbr\u003E+7-8442-50-7307\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027HTTP:\/\/vk.com\/oblako_shop\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([60.936073003200, 76.624989415300], {
            hintContent: 'Tienda Kalyan House',
            balloonContentHeader:'Tienda Kalyan House',
            balloonContentBody: 'Calle Profsoyúznaya, 9\u003Cbr\u003E+7-982-195-5676\u003Cbr\u003E567-441@mail.ru\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/www.kalyan-house-nv.com\/\u0027\u003Ehttp:\/\/www.kalyan-house-nv.com\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([54.794215179220, 32.055921576760], {
            hintContent: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d Hookah Place',
            balloonContentHeader:'\u041c\u0430\u0433\u0430\u0437\u0438\u043d Hookah Place',
            balloonContentBody: 'u003Cp\u003E\u041d\u043e\u0432\u043e-\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f, 2\/8\u003Cbr\u003E+7-915-631-2811\u003Cbr\u003Esmolensk@oasiscoconutcoal.com\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([53.037314769900, 158.660340958000], {
            hintContent: 'Tienda Hookah House',
            balloonContentHeader:'Tienda Hookah House',
            balloonContentBody: 'Calle Pograníchnaya, 1\u003Cbr\u003E+7-4152-35-3388\u003Cbr\u003Ep-kamchatskiy@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahhouse_kam\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([50.591543157691, 36.587386410176], {
            hintContent: 'Oasis Bélgorod',
            balloonContentHeader:'Oasis Bélgorod',
            balloonContentBody: '+7-915-571-4335\u003Cbr\u003Ebelgorod@oasiscoconutcoal.com\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([56.013429649000, 92.856697084700], {
            hintContent: 'Tienda Boutigue Life',
            balloonContentHeader:'Tienda Boutigue Life',
            balloonContentBody: 'Calle Vavílova, 1, edificio 1, oficina 202\u003Cbr\u003E+7-391-217-9967\u003Cbr\u003Eboutique_life@bk.ru\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([55.993600068800, 92.911928330700], {
            hintContent: 'Tienda Boutigue Life',
            balloonContentHeader:'Tienda Boutigue Life',
            balloonContentBody: 'Calle Dzerzhinski, 26, oficina 306\u003Cbr\u003E+7-391-229-5482\u003Cbr\u003Eboutique_life@bk.ru\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
        .add(new ymaps.Placemark([56.479837946500, 84.981150457700], {
            hintContent: 'Empresa VDK al por mayor y al por menor',
            balloonContentHeader:'Empresa VDK al por mayor y al por menor',
            balloonContentBody: 'Avenida Komsomolsky, 39/4\u003Cbr\u003E+7-923-403-0474 wholesale; +7-3822-942-806 retail\u003Cbr\u003Etabak70@yandex.ru\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/www.tabak70.ru\/\u0027\u003Ehttp:\/\/www.tabak70.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([57.112617590900, 65.574081957700], {
            hintContent: 'Tienda Smokelab Tiumén',
            balloonContentHeader:'Tienda Smokelab Tiumén',
            balloonContentBody: 'Calle N. Gondatti, 1/2\u003Cbr\u003E+7-919-924-2115\u003Cbr\u003Etumen@oasiscoconutcoal.com\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([52.258658155600, 104.322201958000], {
            hintContent: 'KalyanClub Irkutsk',
            balloonContentHeader:'KalyanClub Irkutsk',
            balloonContentBody: 'Calle Baykálskaya, 188/1\u003Cbr\u003E+7-3952-76-8776\u003Cbr\u003Eirkutsk@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/kalyanclub.com\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([43.491601159400, 43.597780411700], {
            hintContent: 'Tienda de tabaco Kentucky',
            balloonContentHeader:'Tienda de tabaco Kentucky',
            balloonContentBody: 'Calle Kírov, 220\u003Cbr\u003E+7-963-281-0777\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.755331616000, 37.622215952600], {
            hintContent: 'Tienda en línea D-tobacco',
            balloonContentHeader:'Tienda en línea D-tobacco',
            balloonContentBody: '+7-495-120-09-03\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/d-tobacco.ru\/\u0027\u003Ehttp:\/\/d-tobacco.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([52.975896614083, 36.069243002441], {
            hintContent: 'Darkside ',
            balloonContentHeader:'Darkside ',
            balloonContentBody: '8-920-851-4000 ; 8-919-295-8375\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/vk.com\/darksidecentr \u0027\u003Ehttp:\/\/vk.com\/darksidecentr \u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([52.968323389879, 36.060246084656], {
            hintContent: 'Tienda Darkside Shop',
            balloonContentHeader:'Tienda Darkside Shop',
            balloonContentBody: '+7-920-851-4000 ; +7-919-295-8375\u003Cbr\u003E orel@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/vk.com\/darksidecentr \u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([48.477194132476, 135.080015015620], {
            hintContent: 'Oasis Jabárovsk',
            balloonContentHeader:'Oasis Jabárovsk',
            balloonContentBody: '8-914-772-79-34 ; 8(4212)363092\u003Cbr\u003Ekhabarovsk@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.307002713183, 48.386094314453], {
            hintContent: 'Oasis Uliánovsk',
            balloonContentHeader:'Oasis Uliánovsk',
            balloonContentBody: '+7-902-129-68-23\u003Cbr\u003E ulyanovsk@oasiscoconutcoal.com \u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([53.508136070965, 49.293458703705], {
            hintContent: 'SmokeDepo',
            balloonContentHeader:'SmokeDepo',
            balloonContentBody: '79a Stepana Razina Street\u003Cbr\u003E+7-939-705-9000\u003Cbr\u003Esmokedepo@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.870654071412, 35.912743296295], {
            hintContent: 'Tienda Drug Dyma',
            balloonContentHeader:'Tienda Drug Dyma',
            balloonContentBody: 'Calle Gorki, 137/6, avenida Chaikovski, 29, avenida Komsomolsky 11/1\u003Cbr\u003E+7-904-028-1583\u003Cbr\u003Etver@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/\u043a\u0430\u043b\u044c\u044f\u043d69.\u0440\u0444 \u0027\u003Ehttp:\/\/\u043a\u0430\u043b\u044c\u044f\u043d69.\u0440\u0444 \u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.858614813136, 35.922096380951], {
            hintContent: 'Hookah Place Tver',
            balloonContentHeader:'Hookah Place Tver',
            balloonContentBody: 'Calle Sovétskaya, 33\u003Cbr\u003E+7-999-981-71-41\u003Cbr\u003Ehptver@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/tver.hookahplace.ru\/Tver\u0027\u003Ehttps:\/\/tver.hookahplace.ru\/Tver\u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([43.102346074497, 131.914860873020], {
            hintContent: 'Oasis',
            balloonContentHeader:'Oasis',
            balloonContentBody: 'Calle Kalinin, 45\u003Cbr\u003E+7-914-965-9996\u003Cbr\u003Evladivostok@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.819884166566, 49.118906042328], {
            hintContent: 'Darkside Shop',
            balloonContentHeader:'Darkside Shop',
            balloonContentBody: 'Calle Chistópolskaya, 25\u003Cbr\u003E8-906-333-5550\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027kazan@oasiscoconutcoal.com\u0027\u003Ekazan@oasiscoconutcoal.com\u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([58.009441455899, 56.242074211639], {
            hintContent: 'Darkside Shop',
            balloonContentHeader:'Darkside Shop',
            balloonContentBody: 'Calle Yekateríninskaya, 75\u003Cbr\u003E+7-909-112-0828\u003Cbr\u003Eperm@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([53.353827394645, 83.774864084656], {
            hintContent: 'Hookah Market',
            balloonContentHeader:'Hookah Market',
            balloonContentBody: 'Calle Bréstskaya, 12\u003Cbr\u003E+7-964-508-2828\u003Cbr\u003Ebarnaul@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([51.540791594609, 46.028384034393], {
            hintContent: 'Darkside Shop',
            balloonContentHeader:'Darkside Shop',
            balloonContentBody: 'Calle Vólskaya, 127/133\u003Cbr\u003E+7-962-618-6006\u003Cbr\u003Esaratov@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([53.208793042920, 50.117357253967], {
            hintContent: 'Tienda HookahMarket Samara',
            balloonContentHeader:'Tienda HookahMarket Samara',
            balloonContentBody: 'Avenida Volzhski, 39\u003Cbr\u003E+7-927-009-5775\u003Cbr\u003Esamara@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/\u0425\u0443\u043a\u0430\u043c\u0430\u0440\u043a\u0435\u0442.\u0440\u0444\u0027\u003Ehttp:\/\/\u0425\u0443\u043a\u0430\u043c\u0430\u0440\u043a\u0435\u0442.\u0440\u0444\u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.895294123031, 60.613387669311], {
            hintContent: 'Royal Smoke Shop',
            balloonContentHeader:'Royal Smoke Shop',
            balloonContentBody: 'Avenida Kosmonávtov, 27\u003Cbr\u003E8-343-302-0717\u003Cbr\u003Eekb@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027ekb.royal-smoke.com\u0027\u003Eekb.royal-smoke.com\u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/rs_shop_ekb\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.896822069794, 52.2889627037051], {
            hintContent: 'Shisha Almet',
            balloonContentHeader:'Shisha Almet',
            balloonContentBody: '\u003Cp\u003E\u0417\u0430\u0441\u043b\u043e\u043d\u043e\u0432\u0430 9\u0430 \u003Cbr\u003E8-987-414-57-24\u003Cbr\u003E\u0441 12:00 \u0434\u043e 24:00 \r\n\u0411\u0435\u0437 \u043e\u0431\u0435\u0434\u0430 \u0438 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445\u003Cbr\u003Ealmetyevsk@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/shishaalmet\u0027\u003Ehttps:\/\/vk.com\/shishaalmet\u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.907467302318, 52.325980127061], {
            hintContent: 'Shisha Almet',
            balloonContentHeader:'Shisha Almet',
            balloonContentBody: '\u003Cp\u003E\u0422\u0435\u043b\u044c\u043c\u0430\u043d\u0430 55\u0431\u003Cbr\u003E8-987-414-57-24\u003Cbr\u003E \u0441 12:00 \u0434\u043e 22:00\r\n\u0411\u0435\u0437 \u043e\u0431\u0435\u0434\u0430 \u0438 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u003Cbr\u003Ealmetyevsk@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/shishaalmet\u0027\u003Ehttps:\/\/vk.com\/shishaalmet\u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([44.612109247196, 33.519995271164], {
            hintContent: 'Oasis Sevastópol',
            balloonContentHeader:'Oasis Sevastópol',
            balloonContentBody: 'Avenida Nahimova 12\u003Cbr\u003E+7-978-739-7540\u003Cbr\u003Ekrim@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027tabaki.24.ru\u0027\u003Etabaki.24.ru\u003C\/a\u003E\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
        }))
     
         .add(new ymaps.Placemark([39.737233542328, 54.628331170442], {
            hintContent: 'Hookah Shop',
            balloonContentHeader:'Hookah Shop',
            balloonContentBody: '1 Krasnoyarskaya Street\u003Cbr\u003E+7-920-977-4797\u003Cbr\u003Eryazan@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([48.699762249374, 44.503192915344], {
            hintContent: 'Tienda Doble Manzana',
            balloonContentHeader:'Tienda Doble Manzana',
            balloonContentBody: 'Calle Kanunnikova, 1\u003Cbr\u003E+7-917-640-5690\u003Cbr\u003Esmokedepo@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/yabloko22\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.469405675774, 84.958415330688], {
            hintContent: 'Hookah Shop & Lounge',
            balloonContentHeader:'Hookah Shop & Lounge',
            balloonContentBody: 'Calle Belinski, 40\u003Cbr\u003E+7-913-876-1635\u003Cbr\u003Ehookahshop@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([47.292831277800, 39.714786415344], {
            hintContent: 'Smoke Lab',
            balloonContentHeader:'Smoke Lab',
            balloonContentBody: 'Avenida Kosmonávtov, 24\u003Cbr\u003E+7-999-696-9099\u003Cbr\u003ELunes-jueves, domingo 12:00 – 03:00\u003Cbr\u003Eviernes-sábado 12:00 – 05:00\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/smokelabvape\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([53.244159571184, 34.364260288361], {
            hintContent: 'Tienda Darkside Shop',
            balloonContentHeader:'Tienda Darkside Shop',
            balloonContentBody: 'Avenida Lenin, 39\u003Cbr\u003E+7-920-851-4000\u003Cbr\u003Ebryansk@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/vk.com\/darksidecentr\u00a0\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([42.954327812982, 47.509484542328], {
            hintContent: 'HookahPlace05',
            balloonContentHeader:'HookahPlace05',
            balloonContentBody: 'Calle Gagarin, 41a\u003Cbr\u003E+7-928-249-54-44\u003Cbr\u003Emakhachkala@oasiscoconutcoal\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahplace_mahachkala \u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.479650820258, 53.797623000000], {
            hintContent: 'Jalta lounge bar',
            balloonContentHeader:'Jalta lounge bar',
            balloonContentBody: '\u003Cp\u003E\u0433. \u0421\u0430\u0440\u0430\u043f\u0443\u043b, \u0443\u043b. \u0421\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u0430, 78 \u003Cbr\u003E+7-999-228-42-42\u003Cbr\u003Eizhevsk@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/jalta18  \u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/jalta_lounge_official\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([56.340657650797, 43.952476746033], {
            hintContent: 'Eva Hookah shop',
            balloonContentHeader:'Eva Hookah shop',
            balloonContentBody: 'Calle Karl Marx, 58\u003Cbr\u003E+7-999-120-3091\u003Cbr\u003Enn@oasiscoconutcoal.com\u003Cbr\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([45.046412074572, 38.979288330688], {
            hintContent: 'Hookah Like',
            balloonContentHeader:'Hookah Like',
            balloonContentBody: 'Calle Krásnaya, 176\u003Cbr\u003E+7-903-447-22-55\u003Cbr\u003ELunes – Domingo, 10:00 – 22:00\u003Cbr\u003EHookahLike@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/hookah-like.ru\u0027\u003Ehttp:\/\/hookah-like.ru\u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/instagram.com\/hookah_like\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([55.352155843444, 86.088808034393], {
            hintContent: 'Kalyana Mama',
            balloonContentHeader:'Kalyana Mama',
            balloonContentBody: 'Calle Koloméytseva, 8, 9:00 AM – 5:00 PM;\u003Cbr\u003ECalle Shajtiórov, 87, 12:00 AM – 8:00 PM\u003Cbr\u003E+7-961-727-80-17\u003Cbr\u003E kemerovo@oasiscoconutcoal.com \u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/id307996438\u0027\u003Ehttps:\/\/vk.com\/id307996438\u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/kalyanamama\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
           .add(new ymaps.Placemark([54.725316472058, 55.938718753967], {
            hintContent: 'Hookah Place Ufá',
            balloonContentHeader:'Hookah Place Ufá',
            balloonContentBody: 'Calle Sverdlov, 92\u003Cbr\u003E+7-905-002-1173\u003Cbr\u003E12:00 – 23:00\u003Cbr\u003Eufa@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahplacemarket\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([57.626716055665, 39.885896042328], {
            hintContent: 'Shisha-bar Dom Kultury HZ',
            balloonContentHeader:'Shisha-bar Dom Kultury HZ',
            balloonContentBody: 'Calle Trefoleva, 24 a\u003Cbr\u003E+7 (920) 659-13-13\u003Cbr\u003ELunes-jueves 16:00 – 1:00\u003Cbr\u003Eviernes-sábado 16:00 – 3.00\u003Cbr\u003Edomingo 16:00 – 2:00\u003Cbr\u003Eyaroslavl@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027dkhz.ru \u0027\u003Edkhz.ru \u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahz\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
           .add(new ymaps.Placemark([51.764789014977, 55.116757007935], {
            hintContent: 'Hookah Place Oremburgo',
            balloonContentHeader:'Hookah Place Oremburgo',
            balloonContentBody: 'Calle Chkálov, 2\u003Cbr\u003E+7-987-858-2104\u003Cbr\u003Eorenburg@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahplaceoren\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
           .add(new ymaps.Placemark([51.764387863821, 55.094106126984], {
            hintContent: 'Hookah Place Oremburgo',
            balloonContentHeader:'Hookah Place Oremburgo',
            balloonContentBody: 'Calle Krasnoznaménnaya, 2\u003Cbr\u003E+7-987-858-2104\u003Cbr\u003Eorenburg@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahplaceoren\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([45.048043652310, 38.965395500000], {
            hintContent: 'Oficina de representantes de Oasis',
            balloonContentHeader:'Oficina de representantes de Oasis',
            balloonContentBody: 'Calle Ímeni Bábushkina, 218\u003Cbr\u003E+7-861-259-44-43\u003Cbr\u003E12:00 AM – 3:00 AM\u003Cbr\u003EKrasnodar@oasiscoconutcoal.com \u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/instagram.com\/hookahplacekrasnodar\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([61.788323925748, 34.359135169312], {
            
            balloonContentBody: '\u003Cp\u003E\u041f\u0440. \u041b\u0435\u043d\u0438\u043d\u0430, 23\u003Cbr\u003E+7-8142-634-754\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/centrlounge\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/centrptz\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
          .add(new ymaps.Placemark([55.789011618455, 37.634272000000], {
            hintContent: 'Tienda de shisha Smokiland',
            balloonContentHeader:'Tienda de shisha Smokiland',
            balloonContentBody: 'Avenida Mira, 73\u003Cbr\u003E+7 (958) 756-84-03\u003Cbr\u003Esmokyland@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027Smokyland.ru\u0027\u003ESmokyland.ru\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.745132276577, 37.651348788361], {
            hintContent: 'Tienda de shisha Smokiland',
            balloonContentHeader:'Tienda de shisha Smokiland',
            balloonContentBody: 'Callejón Tetérinski, 4, edificio 1\u003Cbr\u003E+7 (958) 756-84-03\u003Cbr\u003Esmokyland@oasiscoconutcoal.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027Smokyland.ru\u0027\u003ESmokyland.ru\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.032345597678, 82.933167026459], {
            hintContent: 'Tienda Smokehouse',
            balloonContentHeader:'Tienda Smokehouse',
            balloonContentBody: 'Calle Semyí Shamshinýj, 30\u003Cbr\u003E+7-383-375-72-55\u003Cbr\u003Esmokehouse@oasiscoconutcoal.com \u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027 http:\/\/instagram.com\/kalyan_oasis\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.114173102954, 47.463995415344], {
            hintContent: 'Evolution Hookah Shop',
            balloonContentHeader:'Evolution Hookah Shop',
            balloonContentBody: 'Calle Pionerskaya, 5\u003Cbr\u003E+7(961) 347-66-55\u003Cbr\u003E11:00 AM – 02:00 AM\u003Cbr\u003Eyaroslav.konovaloff789158@yandex.ru\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/vk.com\/evo.hookah.shop\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.316525889890, 48.392939457672], {
            hintContent: 'Hubble Bubble Shop',
            balloonContentHeader:'Hubble Bubble Shop',
            balloonContentBody: 'Calle Engels, 21\u003Cbr\u003E+7-927-272-9737 ; +7-908-475-3575\u003Cbr\u003Edomingo-jueves 14:00 – 2:00, viernes-sábado 14:00 – 4:00\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/kalyan_ulsk \u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/kalyan_sale_ulyanovsk\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.233127929105, 49.557100584656], {
            hintContent: 'Hubble Bubble Shop',
            balloonContentHeader:'Hubble Bubble Shop',
            balloonContentBody: 'Avenida Lenin, 28 \u003Cbr\u003E+7-927-272-9737; +7-908-475-3575\u003Cbr\u003ELunes-Domingo 10.00 – 20.00\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/kalyan_ulsk \u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/kalyan_sale_ulyanovsk \u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.030895093600, 73.285441500000], {
            hintContent: 'Tienda Absolem',
            balloonContentHeader:'Tienda Absolem',
            balloonContentBody: 'Calle Jímikov, 11 (al lado del centro comercial Kristall)\u003Cbr\u003E+7 (965) 985-00-80\u003Cbr\u003E499-660, viernes-sábado 12:00 – 03:00\u003Cbr\u003Edomingo – jueves 12:00  – 01:00\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/absolem.pro\/ , http:\/\/absolem-market.ru\/\u0027\u003Ehttp:\/\/absolem.pro\/ , http:\/\/absolem-market.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/absolempro\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/absolem.pro\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([65.986720516178, 57.556928500000], {
            hintContent: '\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f',
            balloonContentHeader:'\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f',
            balloonContentBody: '\u003Cp\u003E60 \u043b\u0435\u0442 \u041e\u043a\u0442\u044f\u0431\u0440\u044f, 8\u003Cbr\u003E+7(82144) 9-22-33\u003Cbr\u003Eusinsk@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/fireworks11111\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/sergey.apanovich\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([65.987327516594, 57.560195042328], {
            hintContent: '\u0424\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0022\u0424\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043a\u043e\u0432\u0022',
            balloonContentHeader:'\u0424\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0022\u0424\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043a\u043e\u0432\u0022',
            balloonContentBody: '\u003Cp\u003E60 \u043b\u0435\u0442 \u041e\u043a\u0442\u044f\u0431\u0440\u044f, 12\u003Cbr\u003E+7-912-956-50-50\u003Cbr\u003Eusinsk@oasiscoconutcoal.com\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/fireworks11111\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/sergey.apanovich\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.964631654173, 73.383419338623], {
            hintContent: 'Tienda «Davaj pokrepche»',
            balloonContentHeader:'Tienda «Davaj pokrepche»',
            balloonContentBody: 'Calle Karla Marksa 20\u0410\u003Cbr\u003E+7(3812) 486-684\u003Cbr\u003EAbsolemshop@oasiscoconutcoal.com \u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/absolem.pro\/   \u0027\u003Ehttp:\/\/absolem.pro\/   \u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/absolempro\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/absolem.pro\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, { 
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.982494638788, 73.316805880951], {
            hintContent: 'Tienda Absolem',
            balloonContentHeader:'Tienda Absolem',
            balloonContentBody: 'Calle 70 let Oktjabrja Street 13/3\u003Cbr\u003E+7(3812) 344-666\u003Cbr\u003Eviernes-sábado 12:00 – 03:00\u003Cbr\u003Edomingo – jueves 12:00  – 01:00\u003Cbr\u003EAbsolemshop@oasiscoconutcoal.com \u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/absolem.pro\/   \u0027\u003Ehttp:\/\/absolem.pro\/   \u003C\/a\u003E\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/absolempro\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/www.instagram.com\/absolem.pro\/\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.759220466600, 37.752421246000], {
            hintContent: '\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d  kalyan4you',
            balloonContentHeader:'\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d  kalyan4you',
            balloonContentBody: '\u003Cp\u003E\u0428\u043e\u0441\u0441\u0435 \u042d\u043d\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043e\u0432, 31, \u0441\u0442\u0440 38, \u043f\u0430\u0432. \u0410-14\u003Cbr\u003E8-495-514-6341\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/kalyan4you.ru\/\u0027\u003Ehttp:\/\/kalyan4you.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.792016247300, 37.808195000000], {
            hintContent: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u0438 \u0442\u0430\u0431\u0430\u043a\u0430 \u041a\u0430\u043b\u044c\u044f\u043d-\u0425\u0430\u0442',
            balloonContentHeader:'\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u0438 \u0442\u0430\u0431\u0430\u043a\u0430 \u041a\u0430\u043b\u044c\u044f\u043d-\u0425\u0430\u0442',
            balloonContentBody: '\u003Cp\u003E\u041d\u0438\u0436\u043d\u044f\u044f \u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0430\u044f, \u0434.45\u003Cbr\u003E8-495-210-1779\u003Cbr\u003Einfo@kalyan-hut.ru\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/shop.kalyan-hut.ru\/\u0027\u003Ehttp:\/\/shop.kalyan-hut.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.742329801700, 37.501808584700], {
            hintContent: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u0438 \u0442\u0430\u0431\u0430\u043a\u0430 \u041a\u0430\u043b\u044c\u044f\u043d-\u0425\u0430\u0442',
            balloonContentHeader:'\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u0438 \u0442\u0430\u0431\u0430\u043a\u0430 \u041a\u0430\u043b\u044c\u044f\u043d-\u0425\u0430\u0442',
            balloonContentBody: '\u003Cp\u003E\u0411\u0430\u0433\u0440\u0430\u0442\u0438\u043e\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0440., 7, \u043a\u043e\u0440\u043f 1, B2-253\u003Cbr\u003E8-495-210-1779\u003Cbr\u003Einfo@kalyan-hut.ru\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/shop.kalyan-hut.ru\/\u0027\u003Ehttp:\/\/shop.kalyan-hut.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.609815152700, 37.705992127000], {
            hintContent: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u041a\u0430\u043b\u044c\u044f\u043d\u0438\u0441.\u0440\u0443',
            balloonContentHeader:'\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u041a\u0430\u043b\u044c\u044f\u043d\u0438\u0441.\u0440\u0443',
            balloonContentBody: '\u003Cp\u003E\u041e\u0440\u0435\u0445\u043e\u0432\u044b\u0439 \u0431\u0443\u043b\u044c\u0432\u0430\u0440, 7\u043a1\u003Cbr\u003E8-800-775-2309\u003Cbr\u003Einfo@kalyanis.ru\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/kalyanis.ru\/\u0027\u003Ehttp:\/\/kalyanis.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.752936450100, 37.624988343700], {
            hintContent: 'Empresa de shisha HookOff',
            balloonContentHeader:'Empresa de shisha HookOff',
            balloonContentBody: '8-495-118-2085\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/hookoff.ru\/\u0027\u003Ehttp:\/\/hookoff.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.651107266700, 37.596285957700], {
            hintContent: '\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d GOA',
            balloonContentHeader:'\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d GOA',
            balloonContentBody: '\u003Cp\u003E\u0411.\u042e\u0449\u0443\u043d\u044c\u0441\u043a\u0430\u044f, 1\u0430, \u043a\u043e\u0440\u043f 4, \u043f\u0430\u0432 1506\u0411\u003Cbr\u003E8-926-398-3242\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([59.930562476700, 30.316564328100], {
            hintContent: 'Tienda en línea USA HOOKAH SHO',
            balloonContentHeader:'Tienda en línea USA HOOKAH SHOP',
            balloonContentBody: '8-812-900-2477\u003Cbr\u003Esales@usahookahshop.ru\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/usahookahshop.ru\/\u0027\u003Ehttp:\/\/usahookahshop.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([53.509002252761, 49.293481084656], {
            hintContent: 'SmokeDepo',
            balloonContentHeader:'SmokeDepo',
            balloonContentBody: 'Calle Stepán Razin, 79a\u003Cbr\u003E+7-939-705-9000\u003Cbr\u003Esmokedepo@oasiscoconutcoal.com\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([50.540621702323, 137.028201542330], {
            hintContent: 'Hookah Store',
            balloonContentHeader:'Hookah Store',
            balloonContentBody: 'Calle Pionérskaya, 20\u003Cbr\u003E+7-929-409-7709\u003Cbr\u003EValya_787@mail.ru\u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/instagram.com\/Hookah_Store_kms\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([45.029328926183, 38.973995957672], {
            hintContent: 'Oficina de representantes de Oasis',
            balloonContentHeader:'Oficina de representantes de Oasis',
            balloonContentBody: 'Calle Krasnoarméyskaya, 59\u003Cbr\u003E+7-925-277-3774\u003Cbr\u003E3:00 PM – 3:00 AM\u003Cbr\u003EKrasnodar@oasiscoconutcoal.com \u003Cbr\u003E\u003Cdiv class=\u0027social\u0027\u003E\u003Ca class=\u0027vk\u0027 target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/id367905786\u0027\u003E\u003C\/a\u003E\u003Ca class=\u0027insta\u0027 target=\u0027_blank\u0027 href=\u0027http:\/\/instagram.com\/r.f.handmade_hookahs\u0027\u003E\u003C\/a\u003E\u003C\/div\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.767587440200, 37.652042584700], {
            hintContent: '\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f HookahPlace Mansion',
            balloonContentHeader:'\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f HookahPlace Mansion',
            balloonContentBody: '\u003Cp\u003E\u0421\u0430\u0434\u043e\u0432\u0430\u044f-\u0427\u0435\u0440\u043d\u043e\u0433\u0440\u044f\u0437\u0441\u043a\u0430\u044f, 3\/7\u003Cbr\u003E8-916-082-5201\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hp_mansion\u0027\u003Ehttps:\/\/vk.com\/hp_mansion\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.755331616000, 37.624962534700], {
            hintContent: '\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u0430\u043b\u044c\u044f\u043d\u043d\u044b\u0439 \u043a\u043b\u0443\u0431 \u0428\u0438\u0448\u043a\u0430 Lounge',
            balloonContentHeader:'\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u0430\u043b\u044c\u044f\u043d\u043d\u044b\u0439 \u043a\u043b\u0443\u0431 \u0428\u0438\u0448\u043a\u0430 Lounge',
            balloonContentBody: '\u003Cp\u003E\u041c\u043e\u0441\u043a\u0432\u0430\u003Cbr\u003E8-495-357-2577\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/www.shishka-lounge.com\/\u0027\u003Ehttp:\/\/www.shishka-lounge.com\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
                  .add(new ymaps.Placemark([55.972752601600, 37.938606957700], {
            hintContent: 'Taller de shisha 1718',
            balloonContentHeader:'Taller de shisha 1718',
            balloonContentBody: 'Calle Jlebozavódskaya, 34\u003Cbr\u003E8-929-996-6606\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/1718.\u0440\u0444\u0027\u003Ehttp:\/\/1718.\u0440\u0444\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.940575111600, 37.502546457700], {
            hintContent: 'Mansarda hookah club \u0026 lounge',
            balloonContentHeader:'Mansarda hookah club \u0026 lounge',
            balloonContentBody: 'Calle Akadémika Lavréntieva, 8\u003Cbr\u003E8-495-543-5025\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/mansardalounge\u0027\u003Ehttps:\/\/vk.com\/mansardalounge\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.761148365400, 37.629934873000], {
            hintContent: '\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f HookahPlace',
            balloonContentHeader:'\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f HookahPlace',
            balloonContentBody: '\u003Cp\u003E\u0424\u0443\u0440\u043a\u0430\u0441\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a, 3\u003Cbr\u003E8-495-729-3175\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/1sthookahplace\u0027\u003Ehttps:\/\/vk.com\/1sthookahplace\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.651285101100, 37.745059415300], {
            hintContent: '\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f HookahPlace',
            balloonContentHeader:'\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f HookahPlace',
            balloonContentBody: '\u003Cp\u003E\u041b\u044e\u0431\u043b\u0438\u043d\u0441\u043a\u0430\u044f, 163\/1\u003Cbr\u003E8-905-748-1888\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hpmaryino\u0027\u003Ehttps:\/\/vk.com\/hpmaryino\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.751726374200, 37.597355169300], {
            hintContent: '\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f \u041f\u0440\u043e\u0435\u043a\u0442 6\/2',
            balloonContentHeader:'\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f \u041f\u0440\u043e\u0435\u043a\u0442 6\/2',
            balloonContentBody: '\u003Cp\u003E\u0410\u0440\u0431\u0430\u0442, 6\/2\u003Cbr\u003E8-926-578-6262\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027http:\/\/arbat62.ru\/\u0027\u003Ehttp:\/\/arbat62.ru\/\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([56.477063817900, 84.950539627000], {
            hintContent: 'FÁBRICA de shisha',
            balloonContentHeader:'FÁBRICA de shisha',
            balloonContentBody: 'Avenida Lenin, 77 a\u003Cbr\u003E8-3822-23-0252\u003Cbr\u003Ehookahfactory.tomsk@gmail.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahfactory_tomsk\u0027\u003Ehttps:\/\/vk.com\/hookahfactory_tomsk\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.984264069700, 73.373170500000], {
            hintContent: 'FÁBRICA de shisha',
            balloonContentHeader:'FÁBRICA de shisha',
            balloonContentBody: 'Calle Karl Liebknecht, 2\u003Cbr\u003E8-3812-38-2258\u003Cbr\u003Ehookahfactory.omsk@gmail.com\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/hookahfactory_omsk\u0027\u003Ehttps:\/\/vk.com\/hookahfactory_omsk\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([55.359368016700, 86.076734084700], {
            hintContent: 'Smoke House Hookah bar',
            balloonContentHeader:'Smoke House Hookah bar',
            balloonContentBody: 'Calle Kírov, 25\u003Cbr\u003E8-983-596-2463\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/sh_kem\u0027\u003Ehttps:\/\/vk.com\/sh_kem\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([52.265180733600, 104.259843042000], {
            hintContent: 'Smoke House Hookah bar',
            balloonContentHeader:'Smoke House Hookah bar',
            balloonContentBody: 'Calle Lérmontov, 81/2\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/sh_irkutsk\u0027\u003Ehttps:\/\/vk.com\/sh_irkutsk\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([64.544805025500, 40.523871915300], {
            hintContent: 'Shisha bar Smoke House',
            balloonContentHeader:'Shisha bar Smoke House',
            balloonContentBody: 'Calle Karl Marx, 15\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/sh_arhangelsk\u0027\u003Ehttps:\/\/vk.com\/sh_arhangelsk\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([51.670368914500, 39.204664084700], {
            hintContent: 'Shisha bar Smoke House',
            balloonContentHeader:'Shisha bar Smoke House',
            balloonContentBody: 'Calle Komissarzhévskaya, 7\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/shvoronezh\u0027\u003Ehttps:\/\/vk.com\/shvoronezh\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([54.777257973500, 56.029106542300], {
            hintContent: 'Smoke House Hookah bar',
            balloonContentHeader:'Smoke House Hookah bar',
            balloonContentBody: 'Avenida Oktiabriá, 91\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/shufa\u0027\u003Ehttps:\/\/vk.com\/shufa\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([50.596350979700, 36.585326473600], {
            hintContent: 'Shisha bar Smoke House',
            balloonContentHeader:'Shisha bar Smoke House',
            balloonContentBody: 'Bélgorod\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/sh_belgorod\u0027\u003Ehttps:\/\/vk.com\/sh_belgorod\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }))
         .add(new ymaps.Placemark([45.039862861300, 38.976915457700], {
            hintContent: 'Smoke House Hookah bar',
            balloonContentHeader:'Smoke House Hookah bar',
            balloonContentBody: 'Calle Sévernaya, 354\u003Cbr\u003E8-900-233-3101\u003Cbr\u003E\u003Ca target=\u0027_blank\u0027 href=\u0027https:\/\/vk.com\/smokehouse_krd\u0027\u003Ehttps:\/\/vk.com\/smokehouse_krd\u003C\/a\u003E\u003Cbr\u003E\u003C\/p\u003E'
    }, {
            preset: 'islands#yellowStarIcon',
            
            
        }));


    function makeCollection(group) {
        var collection = new ymaps.GeoObjectCollection({}, {preset: group.style});

        ggMap.geoObjects.add(collection);

        for (var j = 0, m = group.items.length; j < m; j++) {
            createGeoobjectsForCollection(group.items[j], collection);
        }
    }

    function createGeoobjectsForCollection(item, collection) {
        var geoObject = new ymaps.Placemark(item.center,{
                hintContent: item.name,
                balloonContentHeader: item.name,
                balloonContentBody: item.bodytext
            });
        collection.add(geoObject);
    }

}

function centerCity() {
    $(".city").on("click", function() {
        var coordinates = [
            $(this).attr("data-city-lat"),
            $(this).attr("data-city-lon")
        ];
        ggMap.setCenter(coordinates, 10);
    })
}

function centerPlace() {
    $(".adress").on("click", function() {
        var coordinates = [
            $(this).attr("data-place-lat"),
            $(this).attr("data-place-lon")
        ];
        ggMap.setCenter(coordinates, 16);
    })
}

function openCity() {
    $(".city").on("click", function() {
        if ($(".active-city").prev().attr("data-city-id") !== $(this).attr("data-city-id")) {
            $(".active-city").slideUp().removeClass("active-city");
            $(this).next().slideDown().addClass("active-city");
        } else {
            $(this).next().slideUp().removeClass("active-city");
            ggMap.setCenter([62.6363139498408,76.47798899609371], 3);
        }
        setTimeout(function() {
            $("#cities-wrap").scrollbar('resize');
        }, 500);
    })
}

function openCopmaniesByType() {
    $(".regular-header span").on("click", function() {
        var filterValue = $(this).attr("data-type-companies");
        $(this).toggleClass('active-button');
        $(this).parents(".regular-wrap").find(".place-item[data-company-type='"+filterValue+"']").parent().toggleClass('active-type-company');

        setTimeout(function() {
            $("#cities-wrap").scrollbar('resize');
        }, 500);
    })
}

function openCloseMobileMenu() {
    $(".mobile-menu").on("click", function() {
        var changeText = $(this).find("b");
        if ($(changeText).html() == "Открыть") {
            $("#navigation").animate({"top": "0"}, 500);
            $(changeText).html("Закрыть");
        } else {
            $("#navigation").animate({"top": "-185px"}, 500);
            $(changeText).html("Открыть");
        }
    })
}
$(window).on("ready resize", function() {
    var windowWidth = $(window).innerWidth();

    if (windowWidth > 767) {
        $("#map").css({width: (windowWidth - 321) + "px"});
        $("#cities-wrap").scrollbar();
    } else {
        $("#cities-wrap").scrollbar("destroy");
    }
})
$(document).on("ready", function() {

    $("a[href^='#']").each(function() {
        $(this).on("click", function(e) {
            var target = $(this).attr("href");
            $('html,body').stop().animate({ scrollTop: $("" + target).offset().top }, 1000);
            e.preventDefault();
        });
    });

    $(".city-wrap").each(function() {
        var retailPlaces = $(this).find(".place-item[data-company-type='retail']"),
            calianPlaces = $(this).find(".place-item[data-company-type='try']");
        if (retailPlaces.length < 2) {
            $(this).find("span[data-type-companies='retail']").hide();
            if (retailPlaces.length > 0) {
                $(retailPlaces).each(function() {$(this).parent().addClass("active-type-company")});
            }
        }
        if (calianPlaces.length < 2) {
            $(this).find("span[data-type-companies='try']").hide();
            if (calianPlaces.length > 0) {
                $(calianPlaces).each(function() {$(this).parent().addClass("active-type-company")});
            }
        }
    })
})
