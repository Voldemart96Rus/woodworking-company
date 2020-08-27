import {contacts} from './constants';

const initialState = {
    category: [
        {
            id: 0,
            title: 'Брус',
            img: '/img/catalog/Брус/brus-150x200.jpg',
            URL: '/category/Brus',
        },
        {
            id: 1,
            title: 'Брусок',
            img: '/img/catalog/Брусок/brusok-50x50-6m.jpg',
            URL: '/category/Brusok',
        },
        {
            id: 2,
            title: 'Необработанная доска',
            img:
                '/img/catalog/Необработанная доска/neobreznaya-doska-50-suhaya.jpg',
            URL: '/category/Neobrabotannaya_doska',
        },
        {
            id: 3,
            title: 'Обрезная доска',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-50.jpg',
            URL: '/category/Obreznaya_doska',
        },
    ],
    categoryItems: {
        Brus: {
            title: 'Брус',
            img: '/img/catalog/Брус/brus-price.jpg',
            description: [
                'В кровельных работах используется брус различных размеров, например, из бруса размером 100х100 мм делают маэралат, прогоны, стойки. Размер 100х150 мм подходит для устройства ригелей, а 100х200 – для монтажа ендовы.',
                'Для построек, в которых не планируется круглогодичное проживание (баня, гараж, дача), для стен подойдет брус 150х150 мм или 100х150 мм наряду с обрезной доской, для домов с постоянным проживанием для стен лучше использовать брус 150х200 мм или 200х200 мм.',
                'Для несущих конструкций, балок и лаговых систем в строении оптимально использовать брус 100х200 мм или 200х200 мм.',
                'Для внутренних отделочных работ, в частности таких крупных элементов, как лестницы, достаточно приобрести брус 150х150 мм.',
            ],
            // todo номер телефона доставать из константы
            footer: `Непрофессионалу в строительной области достаточно сложно разобраться с таким разнообразием размеров бруса: если у вас возникли вопросы, какой брус нужен именно вам, или вам сложно рассчитать необходимое количество кубов, достаточно позвонить по телефону ${contacts.tel} или воспользоваться формой обратной связи.`,
            items: [
                '100x100',
                '100x150',
                '150x150',
                '100x200',
                '150x200',
                '200x200',
            ],
        },
        Brusok: {
            title: 'Брусок',
            img: '/img/catalog/Брусок/brusok-price.jpg',
            description: [
                'Область применения бруска широка: его используют и в кровельных работах, и для производства мебели, довольно часто брусок выполняет функции несущих конструкций в малом строительстве. Брусок отлично подходит для создания каркасных конструкций, которые используются в отделочных, кровельных или других монтажных работах. Для монтажа рекламных вывесок в виде световых коробов обрезной брусок используется из-за отличных качеств лесоматериала и сравнительно низкой цены.',
                'Брусок – пиломатериал, пользующийся высоким спросом в строительстве, в ремонтно-отделочных работах, а также в мебельном и столярном производстве. Технология изготовления бруска схожа с распилом бруса, по своей сути этот тот же погонаж с плоскопараллельными поверхностями. Сечение бруска может быть квадратным или прямоугольным, во втором случае разница между сторонами не должна превышать 50%, иначе по нормам строительства такой пиломатериал называют доской.',
            ],
            footer: `Позвоните нам по тел. ${contacts.tel}, и мы посоветуем, какой брусок подходит под ваши нужды, а также рассчитаем необходимое количество кубов.`, // todo
            items: ['50x50-3m', '50x50-6m', '50x70'],
        },
        Neobrabotannaya_doska: {
            title: 'Необработанная доска',
            img: '/img/catalog/Необработанная доска/neobreznaya-doska.jfif',
            description: [
                'Более тонкая доска в 25 и 30 мм толщиной отлично подходит для утепления кровли, потолка, стен, фасада. Ее же чаще всего используют для строительства заборов.',
                'Необрезная доска 40 мм толщиной – достаточно крепкий материал, подходящий для чернового настила пола, обустройства строительных лесов или опалубки для фундамента.',
                'Доска толщиной 50 мм – пригодное сырье для производства столярных изделий и деревянной мебели.',
            ],
            footer: `Позвоните нам по тел. ${contacts.tel}, и мы посоветуем, какая необрезная подходит под ваши нужды, а также рассчитаем необходимое количество кубов.`,
            items: [
                'neobreznaya-doska-25',
                'neobreznaya-doska-30',
                'neobreznaya-doska-40',
                'neobreznaya-doska-50',
                'neobreznaya-doska-50-suhaya',
            ],
        },
        Obreznaya_doska: {
            title: 'Обрезная доска',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-price.jpg',
            description: [
                'На нашей пилораме налажено производство обрезной доски толщиной 25 мм как первого, так и второго сорта. И если первый идеально подходит для устройства кровли и чернового пола, то второй успешно используется для устройства опалубки под фундамент, строительства заборов и других черновых работ.',
                'Обрезная доска 40 мм применяется для чистового настила полов, формирования лестничных ступеней и перил.',
                'Толщина обрезной доски в 50 мм обладает всеми необходимыми характеристиками для возведения стен каркасных домов и бань.',
            ],
            footer: `Количество досок в одном кубе отличается от толщины пиломатериала: чем тоньше доска, тем больше единиц содержит куб. Рассчитать необходимое количество обрезной доски для ваших нужд поможет наш менеджер по телефону ${contacts.tel}.`,
            items: [
                'obreznaya-doska-25-1sort',
                'obreznaya-doska-25-2sort',
                'obreznaya-doska-40',
                'obreznaya-doska-40-2sort',
                'obreznaya-doska-50',
            ],
        },
    },
    items: {
        '100x100': {
            title: 'Брус 100х100х6000, 1 сорт',
            characteristic: '100Х150, естественной влажности',
            img: '/img/catalog/Брус/brus-100x100.jpg',
            URL: '/product/100x100',
            description: [
                'Подходит для кровельных работ, в частности для устройства мауэрлата, прогонов, стоек.',
                'Кроме того, брус 100х100 можно использовать для строительства малых строений, например, беседок, бань, сараев, других хозяйственных построек. Из бруса 100х100 сооружают каркас, который потом обшивается доской.',
                'Также брус 100х100 применяют для оформления дверных или оконных проемов, строительства лестниц, для настила пола, в этом случае брус выполняет роль лаг.',
            ],
        },
        '100x150': {
            title: 'Брус 100х150х6000, 1 сорт',
            characteristic: '100Х100, естественной влажности',
            img: '/img/catalog/Брус/brus-100x150.jpg',
            URL: '/product/100x150',
            description: [
                'Подходит для построек бань, гаражей, коттеджей; кровельных работ.',
                'Брус с сечением 100х150 считается полноценным строительным материалом, причем достаточно экономичным. При строительстве малых строений, таких как баня, сарай, беседка, можно сэкономить на количестве пиломатериала, устраивая ложе бруса в сторону 100 мм. А при строительстве жилых домов наоборот, что тоже выгоднее, чем использование бруса 150х150.',
                'В кровельных работах брус 100х150 используют для устройства стропил, такое сечение идеально подходит для этой цели, не даром брус с сечением 100х150 кровельщики прозвали «стропильным брусом».',
            ],
        },
        '150x150': {
            title: 'Брус 150х150х6000, 1 сорт',
            characteristic: '150Х150, естественной влажности',
            img: '/img/catalog/Брус/brus-150x150.jpg',
            URL: '/product/150x150',
            description: [
                'Подходит для создания крупных элементов внутри строения, в том числе лестниц, стропил, подпорок, окон, а также возведения саун, беседок, дачных домов.',
                'Он прекрасно подходит для возведения стен бытовки, дачи или летнего домика.',
                'Для строительства полноценного дома его использовать не стоит, так как сечение 150х150 слишком тонкое, и стены, выстроенные из подобного бруса, не смогут в полной мере защитить помещения от холода и обеспечить комфортное проживание. В случае, если стены жилого дома выстроены из такого бруса, необходимо продумать дополнительные способы утепления',
                'Сечение бруса 150х150 также подходит для строительства межкомнатных перегородок, из него собирают дверные коробки.',
                'Поскольку такой брус отличается прочностью и устойчивостью к механическим нагрузкам, из него собирают автомобильные прицепы и железнодорожные платформы. А если брус изготовлен из лиственницы, он легко найдет применение и в сфере судостроительства.',
            ],
        },
        '100x200': {
            title: 'Брус 100х200х6000, 1 сорт',
            characteristic: '100Х200, естественной влажности',
            img: '/img/catalog/Брус/brus-100x200.jpg',
            URL: '/product/100x200',
            description: [
                'Подходит для обустройства несущих конструкций, балок, лаговых систем домов и бань.',
                'Эксплуатационные характеристики бруса с сечением 100х200 делают его незаменимым в строительной сфере. Он широко применяется на различных этапах строительства. Из него изготавливают несущие конструкции крыш, опорные балки для веранд, навесов и межэтажные перекрытия, лаги для пола и лестничные каркасы.',
                'Стены дома из такого бруса практически неотличимы от тех, что выполнены из бруса других размеров: они прочны и устойчивы к деформациям. Плюс к этому его использование позволяет ощутимо сэкономить без ущерба для качества постройки.',
                'Применяется брус с сечением 100х200 при сборке мебели, оконных и дверных коробок, в декоративном оформлении помещений и т. д.',
            ],
        },
        '150x200': {
            title: 'Брус 150х200х6000, 1 сорт',
            characteristic: '150Х200, естественной влажности',
            img: '/img/catalog/Брус/brus-150x200.jpg',
            URL: '/product/150x200',
            description: [
                'Подходит для строительства стен жилых частных домов, бань.',
                'Брус сечением 150х200 широко востребован в различных сферах. Он успешно применяется при строительстве домов, хозяйственных построек, бань и саун, беседок и т. п. Такой брус весьма прочен, поэтому он подходит для возведения несущих конструкций, предполагающих значительные нагрузки, а также межэтажных перекрытий, лаг для пола, дверных и оконных коробов. Можно применять его и при закладке фундамента.',
                'Брус 150х200 достаточно легко монтировать, поэтому его часто используют в мебельном производстве, а эстетика деревянных текстур также позволяет воплощать с его помощью дизайнерские идеи в отделке внутренних пространств.',
                'Используется он и в промышленных сферах производства: машино-, вагоно- и судостроении',
            ],
        },
        '200x200': {
            title: 'Брус 200х200х6000, 1 сорт',
            characteristic: '200Х200, естественной влажности',
            img: '/img/catalog/Брус/brus-200x200.jpg',
            URL: '/product/200x200',
            description: [
                'Подходит для строительства стен жилых частных домов, бань.',
                'Поскольку брус сечением 200х200 отличается повышенной прочностью и долговечностью, он идеально подходит для строительства многоэтажных домов, коттеджей, сельскохозяйственных построек и сооружений любого типа, в том числе и крупных. Он незаменим при возведении несущих стен, опор и балок, стропильных систем, а также перекрытий между этажами и фундаментов при формировании нижней обвязки.',
                'Часто применяется в отделке помещений, создании элементов дизайна.',
                'Здания, построенные с помощью бруса такого сечения, не нуждаются в постоянном отоплении, а эстетичный внешний вид и особенности обработки позволяют сэкономить на отделке внутренних помещений.',
            ],
        },
        '50x50-3m': {
            title: 'Брусок 50х50-3м',
            characteristic: '50x50-3 м, естественной влажности',
            img: '/img/catalog/Брусок/brusok-50x50-3m.jpg',
            URL: '/product/50x50-3m',
            description: [
                'Используется в ремонтно-отделочных работах, а также в мебельном и столярном производстве.',
            ],
        },
        '50x50-6m': {
            title: 'Брусок 50х50-6м',
            characteristic: '50x50-6 м, естественной влажности',
            img: '/img/catalog/Брусок/brusok-50x50-6m.jpg',
            URL: '/product/50x50-6m',
            description: [
                'Используется в ремонтно-отделочных работах, а также в мебельном и столярном производстве.',
            ],
        },
        '50x70': {
            title: 'Брусок 50х70',
            characteristic: '50x70, естественной влажности',
            img: '/img/catalog/Брусок/brusok-50x70.jpg',
            URL: '/product/50x70',
            description: [
                'Используется в ремонтно-отделочных работах, а также в мебельном и столярном производстве.',
            ],
        },
        'neobreznaya-doska-25': {
            title: 'Доска необрезная 25ммХ6,0м',
            characteristic: 'толщина 25мм , естественной влажности',
            img: '/img/catalog/Необработанная доска/neobreznaya-doska-25.jpg',
            URL: '/product/neobreznaya-doska-25',
            description: [
                'Подходит для утепления кровли.',
                'Основное назначение необрезной доски толщиной 25 мм – монтаж обрешетки при возведении крышных конструкций, но это не единственная область ее применения.',
                '«Дюймовка» широко используется при строительстве домов и коттеджей, а также надворных и хозяйственных построек, времянок и других строений, имеющих кратковременный срок службы.',
                'Такая доска прекрасно подходит для монтажа настилов и полов, обшивки стен и перегородок, установки заборов и ограждений строительных объектов.',
            ],
        },
        'neobreznaya-doska-30': {
            title: 'Доска необрезная 30ммХ6,0м',
            characteristic: 'толщина 30мм, естественной влажности',
            img: '/img/catalog/Необработанная доска/neobreznaya-doska-30.jpg',
            URL: '/product/neobreznaya-doska-30',
            description: [
                'Подходит для утепления кровли, строительства заборов.',
            ],
        },
        'neobreznaya-doska-40': {
            title: 'Доска необрезная 40ммХ6,0м',
            characteristic: 'толщина 40мм, естественной влажности',
            img: '/img/catalog/Необработанная доска/neobreznaya-doska-40.jpg',
            URL: '/product/neobreznaya-doska-40',
            description: ['Подходит для изготовления настилов, перегородок.'],
        },
        'neobreznaya-doska-50': {
            title: 'Доска необрезная 50ммХ6,0м',
            characteristic: 'толщина 50мм, естественной влажности',
            img: '/img/catalog/Необработанная доска/neobreznaya-doska-50.jpg',
            URL: '/product/neobreznaya-doska-50',
            description: ['Подходит для изготовления мебели.'],
        },
        'neobreznaya-doska-50-suhaya': {
            title: 'Доска необрезная 50ммХ6,0м',
            characteristic: 'толщина 50мм, сухая, естественной влажности',
            img:
                '/img/catalog/Необработанная доска/neobreznaya-doska-50-suhaya.jpg',
            URL: '/product/neobreznaya-doska-50-suhaya',
            description: [
                'Сухая необрезная доска применяется для столярных работ.',
            ],
        },
        'obreznaya-doska-25-1sort': {
            title: 'Доска обрезная 25х100-150-200х3,0-6,0 м., 1 сорт',
            characteristic: 'толщина 25мм, 1 сорт, естественной влажности',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-25-1sort.jpg',
            URL: '/product/obreznaya-doska-25-1sort',
            description: [
                'Подходит для чернового настила подпола, кровельных работ.',
                'Обрезная доска толщиной 25 мм 1 сорта в основном используется при строительных работах, впоследствии не требующих дополнительной чистовой отделки, т. к. данный вид материала в силу своих эстетических качеств позволяет оформить жилое или какое-либо иное помещение без дополнительных затрат. Такой доской можно отделывать полы, стены, потолки и т. д.',
                'Часто такую доску используют при создании обрешетки, внутренних перегородок, временных строительных конструкций, для черновой отделки полов, а также для создания тары и упаковочных каркасов.',
                'Широко используется обрезная доска 25 мм 1 сорта и в мебельном производстве: из нее делают каркасы и декоративные элементы.',
            ],
        },
        'obreznaya-doska-25-2sort': {
            title: 'Доска обрезная 25х100-150-200х3,0-6,0 м., 2 сорт',
            characteristic: 'толщина 25мм, 2 сорт, естественной влажности',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-25-2sort.jpg',
            URL: '/product/obreznaya-doska-25-2sort',
            description: [
                'Подходит для сооружения опалубки под заливку бетонного фундамента.',
                'Обрезная доска толщиной 25 мм 2 сорта не обладает выраженными эстетическими характеристиками, но, тем не менее, является качественным и широко используемым материалом.',
                'Такую доску применяют в основном при черновых работах при сооружении полов, потолков и скатов крыш, при монтаже опалубки и скрытых каркасных конструкций.',
                'Подходит доска 25 мм 2 сорта и для возведения хозяйственных и надворных построек различного назначения, а также для использования в мебельном производстве и при изготовлении шпал.',
            ],
        },
        'obreznaya-doska-40': {
            title: 'Доска обрезная 40х100-150-200х3,0-6,0 м., 1 сорт',
            characteristic: 'толщина 40мм, 1 сорт, естественной влажности',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-40.jpg',
            URL: '/product/obreznaya-doska-40',
            description: [
                'Используется для настила полов, устройства балок, лестниц.',
                'Обрезная доска толщиной 40 мм обладает характеристиками, позволяющими успешно использовать ее при строительстве деревянных домов, а также различных хозяйственных построек: сараев, бань, беседок, помещений для содержания домашнего скота и птицы и т. п.',
                'Из такой доски можно сооружать опалубку, строительные леса, использовать при черновой укладке полов, при создании стропильных систем и несущих конструкций.',
                'Подходит она и для внутренней отделки жилых и нежилых помещений.',
            ],
        },
        'obreznaya-doska-40-2sort': {
            title: 'Доска обрезная 40х150х6,0 м, 2 сорт',
            characteristic: 'толщина 40мм, 2 сорт, естественной влажности',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-40-2sort.jpg',
            URL: '/product/obreznaya-doska-40-2sort',
            description: ['', '', ''],
        },
        'obreznaya-doska-50': {
            title: 'Брусок 50х70',
            characteristic: 'толщина 50мм, естественной влажности',
            img: '/img/catalog/Обрезная доска/obreznaya-doska-50.jpg',
            URL: '/product/obreznaya-doska-50',
            description: [
                'Подходит для возведения стен каркасных домов, строительства перегородок, стропил, изготовления мебели.',
                'Обрезная доска толщиной 50 мм – один из самых востребованных материалов в различных сферах, предполагающих работу с деревом.',
                'Такая доска незаменима при строительстве. Она прекрасно подходит для возведения стен каркасных домов, бань, капитальных хозяйственных построек, а также обрешеток и временных конструкций, требующих высокой прочности.',
                'Ее часто используют при чистовой укладке полов, в области декоративной отделки помещений, в мебельном производстве, для возведения фасадов, заборов и ограждений.',
                'Также обрезная доска 50 мм подходит для изготовления тары и упаковки.',
            ],
        },
    },
};

export default initialState;
