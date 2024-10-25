export interface IProduct {
  id: number;
  name: {
    en: string;
    bg: string;
    ua: string;
  };
  description: {
    en: string;
    bg: string;
    ua: string;
  };
  image: string;
}

// export const products: Product[] = [
//   {
//     id: 1,
//     name: "Sunflower Oil",
//     image: "/images/sun-flower.jpg",
//     description: `Sunflower Oil RDBW – Refined Deodorized Sunflower Oil under the KOROLIVSKYI SMAK brand – is a high-quality oil with the highest degree of purification, offering a neutral taste and aroma.

//     \n\n This refined oil is the perfect choice for culinary use, especially when cooking with heat. Due to its composition, RDBW oil is suitable for frying, extended cooking, and heat processing of various dishes and ingredients, while preserving their flavor qualities.

//     \n\n Choose KOROLIVSKYI SMAK for your kitchen and taste the difference!`,
//   },
//   {
//     id: 2,
//     name: "Palm Oil and Margarine",
//     image: "/images/palm-oil.jpg",
//     description: `\n\n Palm Oil and Margarine – are essential ingredients in many sectors of the food industry. They are widely used in the production of baked goods, confectionery, bread products, and various culinary creations. Palm oil, due to its thermal stability, is ideal for frying and baking, while margarine adds a delicate texture and rich flavor to baked goods.

//      \n\n UB Market LTD offers only high-quality products, collaborating with verified and reliable suppliers. We guarantee that our palm oil and margarine meet all quality and safety standards, making them an excellent choice for your production needs.

//      \n\n Order our products, and you will receive not only a top-quality product but also professional service. UB Market LTD – your trusted partner in the food ingredient market!`,
//   },
//   {
//     id: 3,
//     name: "Frying Oil",
//     image: "/images/frying-oil.jpg",
//     description: `\n\n Sunflower DEEP FRYING OIL – is a product tailored to modern culinary trends for deep frying, sautéing, and baking.

//       \n\n The oil heats up quickly and evenly, allowing you to prepare delicious dishes with an appetizing golden crust, without excess fat or an overpowering smell. This product is made from a unique recipe using sunflower oil, class P with the addition of an anti-foaming agent (E900) and antioxidants (E320, E321).

//       \n\n This technology makes the oil thermally stable and resistant to prolonged heat treatment, with a smoke point exceeding 225°C, making it ideal for deep frying.`,
//   },
//   {
//     id: 4,
//     name: "Sugar",
//     image: "/images/sugar.jpg",
//     description: `Sugar of the highest quality from UB Market LTD is a product that meets all standards and quality norms.

//       \n\n Our sugar is certified and comes with all necessary documents confirming its safety and compliance with international requirements. This sugar is ideal for use in the food industry as well as at home. Thanks to strict quality control, our customers receive only pure, white sugar without impurities.

//       \n\n Order sugar from UB Market LTD and get a high-quality product on favorable terms. We guarantee timely delivery and professional service. UB Market LTD – your reliable supplier!`,
//   },
//   {
//     id: 5,
//     name: "Powdered Milk",
//     image: "/images/dry-milk.jpg",
//     description: `UHT Milk 3.5%, 1L – is a top-quality product that provides a long shelf life without losing its nutritional properties.

//       \n\n Thanks to modern ultra-high-temperature (UHT) processing technology, the milk retains its natural taste, beneficial vitamins, and minerals. It is ideal for use in cooking, baking, preparing coffee, sauces, and many other dishes. This milk easily dissolves without leaving lumps and can be an indispensable assistant in the food industry’s production processes. You can purchase UHT Milk 3.5%, 1L from UB Market LTD.

//       \n\n We guarantee high product quality and offer favorable terms for cooperation. Choose a reliable supplier – UB Market LTD!`,
//   },
//   {
//     id: 6,
//     name: "Mayonnaise",
//     image: "/images/mayonnaise.jpg",
//     description: `Mayonnaise 67% PC-4.5 kg, KOROLIVSKIY SMAK – is a top-quality product designed to meet the needs of both home and professional kitchens.

//       \n\n With its rich flavor and thick consistency, this mayonnaise is perfect for preparing salads, sauces, marinades, and other culinary masterpieces. The product contains an optimal fat content (67%), providing dishes with a rich taste and a smooth texture.

//       \n\n The quality of KOROLIVSKIY SMAK is backed by years of consumer trust. You can purchase the 67% PC-4.5 kg mayonnaise from UB Market LTD at a competitive price.

//       \n\n We offer great terms for our customers and guarantee high-quality products and first-class service.`,
//   },
// ];

export const products: IProduct[] = [
  {
    id: 1,
    name: {
      en: "Sunflower Oil",
      bg: "Слънчогледово масло",
      ua: "Соняшникова олія",
    },
    image: "/images/sun-flower.jpg",
    description: {
      en: `Sunflower Oil RDBW – Refined Deodorized Sunflower Oil under the KOROLIVSKYI SMAK brand – is a high-quality oil with the highest degree of purification, offering a neutral taste and aroma. 
      \n\n This refined oil is the perfect choice for culinary use, especially when cooking with heat. Due to its composition, RDBW oil is suitable for frying, extended cooking, and heat processing of various dishes and ingredients, while preserving their flavor qualities. 
      \n\n Choose KOROLIVSKYI SMAK for your kitchen and taste the difference!`,
      bg: `Слънчогледово масло RDBW – Рафинирано Дезодорирано Слънчогледово масло под марката KOROLIVSKYI SMAK – е висококачествено масло с най-висока степен на пречистване, предлагащо неутрален вкус и аромат. 
      \n\n Това рафинирано масло е идеалният избор за кулинарна употреба, особено когато готвите с топлина. Поради своя състав, RDBW маслото е подходящо за пържене, продължително готвене и термична обработка на различни ястия и съставки, като същевременно запазва техните вкусови качества. 
      \n\n Изберете KOROLIVSKYI SMAK за вашата кухня и опитайте разликата!`,
      ua: `Соняшникова олія RDBW – Рафінована Дезодорована Соняшникова олія під маркою KOROLIVSKYI SMAK – це високоякісна олія з найвищим ступенем очищення, що має нейтральний смак і аромат. 
      \n\n Ця рафінована олія є ідеальним вибором для кулінарії, особливо під час приготування на вогні. Завдяки своєму складу, RDBW олія підходить для смаження, тривалого приготування та термічної обробки різних страв і інгредієнтів, зберігаючи їх смакові якості. 
      \n\n Виберіть KOROLIVSKYI SMAK для вашої кухні та відчуйте різницю!`,
    },
  },
  {
    id: 2,
    name: {
      en: "Palm Oil and Margarine",
      bg: "Палмово масло и маргарин",
      ua: "Пальмове масло і маргарин",
    },
    image: "/images/palm-oil.jpg",
    description: {
      en: `Palm Oil and Margarine – are essential ingredients in many sectors of the food industry. They are widely used in the production of baked goods, confectionery, bread products, and various culinary creations. Palm oil, due to its thermal stability, is ideal for frying and baking, while margarine adds a delicate texture and rich flavor to baked goods.
      \n\n UB Market LTD offers only high-quality products, collaborating with verified and reliable suppliers. We guarantee that our palm oil and margarine meet all quality and safety standards, making them an excellent choice for your production needs.
      \n\n Order our products, and you will receive not only a top-quality product but also professional service. UB Market LTD – your trusted partner in the food ingredient market!`,
      bg: `Палмово масло и маргарин – са незаменими съставки в много сектори на хранителната индустрия. Те се използват широко в производството на печива, сладкарски изделия, хлебни продукти и различни кулинарни творения. Палмовото масло, поради своята термична стабилност, е идеално за пържене и печене, докато маргаринът добавя нежна текстура и богат вкус на печивата.
      \n\n UB Market LTD предлага само висококачествени продукти, като си сътрудничи с проверени и надеждни доставчици. Гарантираме, че нашето палмово масло и маргарин отговарят на всички стандарти за качество и безопасност, което ги прави отличен избор за вашите производствени нужди.
      \n\n Поръчайте нашите продукти и ще получите не само продукт с високо качество, но и професионално обслужване. UB Market LTD – вашият надежден партньор на пазара на хранителни съставки!`,
      ua: `Пальмове масло і маргарин – це незамінні інгредієнти у багатьох галузях харчової промисловості. Вони широко використовуються в виробництві випічки, кондитерських виробів, хлібобулочних продуктів, а також у виготовленні різноманітних кулінарних виробів. Пальмове масло завдяки своїй термостабільності ідеально підходить для смаження і випікання, а маргарин додає випічці ніжну текстуру і насичений смак.
      \n\n UB Market LTD пропонує само високоякісні продукти, співпрацюючи з перевіреними і надійними постачальниками. Ми гарантуємо, що наше пальмове масло та маргарин відповідають усім стандартам якості та безпеки, що робить їх чудовим вибором для вашого виробництва.
      \n\n Замовляйте продукцію у нас, і ви отримаєте не тільки першокласний продукт, але й професійний сервіс. UB Market LTD — ваш надійний партнер на ринку харчових інгредієнтів!`,
    },
  },
  {
    id: 3,
    name: {
      en: "Frying Oil",
      bg: "Масло за пържене",
      ua: "Олія для смаження",
    },
    image: "/images/frying-oil.jpg",
    description: {
      en: `Sunflower DEEP FRYING OIL – is a product tailored to modern culinary trends for deep frying, sautéing, and baking. 
      \n\n The oil heats up quickly and evenly, allowing you to prepare delicious dishes with an appetizing golden crust, without excess fat or an overpowering smell. This product is made from a unique recipe using sunflower oil, class P with the addition of an anti-foaming agent (E900) and antioxidants (E320, E321). 
      \n\n This technology makes the oil thermally stable and resistant to prolonged heat treatment, with a smoke point exceeding 225°C, making it ideal for deep frying.`,
      bg: `Слънчогледово ДЪЛБОКО ПЪРЖЕНО МАСЛО – е продукт, съобразен с модерните кулинарни тенденции за дълбоко пържене, сотиране и печене. 
      \n\n Маслото се загрява бързо и равномерно, позволявайки ви да приготвяте вкусни ястия с апетитна златиста коричка, без излишни мазнини или доминираща миризма. Този продукт е произведен от уникална рецепта, използваща слънчогледово масло, клас P с добавка на анти-пенител (E900) и антиоксиданти (E320, E321). 
      \n\n Технологията прави маслото термично стабилно и устойчиво на продължителна термична обработка, с точка на димене, която надвишава 225°C, което го прави идеално за дълбоко пържене.`,
      ua: `Соняшникова ГЛИБОКОВАРКОВА ОЛІЯ – це продукт, спеціально розроблений для сучасних кулінарних тенденцій, таких як глибоке смаження, соте і випікання. 
      \n\n Олія швидко і рівномірно нагрівається, дозволяючи приготувати смачні страви з апетитною золотою скоринкою, без зайвих жирів і домінуючого запаху. Цей продукт виготовлений за унікальною рецептурою з використанням соняшникової олії класу P з додаванням антипінного агента (E900) та антиоксидантів (E320, E321). 
      \n\n Ця технологія робить олію термічно стабільною та стійкою до тривалого нагрівання, з температурою димлення понад 225°C, що робить її ідеальною для глибокого смаження.`,
    },
  },
  {
    id: 5,
    name: {
      en: "Powdered Milk",
      bg: "Сухо мляко",
      ua: "Порошкове молоко",
    },
    image: "/images/dry-milk.jpg",
    description: {
      en: `UHT Milk 3.5%, 1L – is a top-quality product that provides a long shelf life without losing its nutritional properties. 
      \n\n Thanks to modern ultra-high-temperature (UHT) processing technology, the milk retains its natural taste, beneficial vitamins, and minerals. It is ideal for use in cooking, baking, preparing coffee, sauces, and many other dishes. This milk easily dissolves without leaving lumps and can be an indispensable assistant in the food industry’s production processes. You can purchase UHT Milk 3.5%, 1L from UB Market LTD. 
      \n\n We guarantee high product quality and offer favorable terms for cooperation. Choose a reliable supplier – UB Market LTD!`,
      bg: `UHT Мляко 3.5%, 1L – е продукт с високо качество, който осигурява дълъг срок на годност, без да губи хранителните си свойства. 
      \n\n Благодарение на съвременната технология за ултрависокотемпературна (UHT) обработка, млякото запазва естествения си вкус, полезните витамини и минерали. Идеално е за употреба при готвене, печене, приготвяне на кафе, сосове и много други ястия. Това мляко лесно се разтваря, без да оставя бучки и може да бъде незаменим помощник в производствените процеси на хранителната индустрия. Можете да закупите UHT Мляко 3.5%, 1L от UB Market LTD. 
      \n\n Гарантираме високо качество на продукта и предлагаме изгодни условия за сътрудничество. Изберете надежден доставчик – UB Market LTD!`,
      ua: `UHT Молоко 3.5%, 1L – це продукт високої якості, який забезпечує тривалий термін зберігання без втрати своїх харчових властивостей. 
      \n\n Завдяки сучасній технології ультра-високої температурної (UHT) обробки, молоко зберігає свій природний смак, корисні вітаміни та мінерали. Ідеально підходить для використання у приготуванні їжі, випічці, приготуванні кави, соусів та багатьох інших страв. Це молоко легко розчиняється без утворення грудок і може бути незамінним помічником у виробничих процесах харчової промисловості. Ви можете придбати UHT Молоко 3.5%, 1L у UB Market LTD. 
      \n\n Ми гарантуємо високу якість продукції і пропонуємо вигідні умови для співпраці. Оберіть надійного постачальника – UB Market LTD!`,
    },
  },
  {
    id: 6,
    name: {
      en: "Mayonnaise",
      bg: "Майонеза",
      ua: "Майонез",
    },
    image: "/images/mayonnaise.jpg",
    description: {
      en: `Mayonnaise 67% PC-4.5 kg, KOROLIVSKIY SMAK – is a top-quality product designed to meet the needs of both home and professional kitchens. 
      \n\n With its rich flavor and thick consistency, this mayonnaise is perfect for preparing salads, sauces, marinades, and other culinary masterpieces. The product contains an optimal fat content (67%), providing dishes with a rich taste and a smooth texture. 
      The quality of KOROLIVSKIY SMAK is backed by years of consumer trust. You can purchase the 67% PC-4.5 kg mayonnaise from UB Market LTD at a competitive price. 
      \n\n We offer great terms for our customers and guarantee high-quality products and first-class service.`,
      bg: `Майонеза 67% PC-4.5 кг, KOROLIVSKIY SMAK – е продукт с високо качество, проектиран да отговори на нуждите както на домашните, така и на професионалните кухни. 
      \n\n Със своя богат вкус и гъста консистенция, тази майонеза е идеална за приготвяне на салати, сосове, маринати и други кулинарни шедьоври. Продуктът съдържа оптимално съдържание на мазнини (67%), осигурявайки на ястията богат вкус и гладка текстура. 
      Качеството на KOROLIVSKIY SMAK е подкрепено от години на доверие от потребителите. Можете да закупите майонеза 67% PC-4.5 кг от UB Market LTD на конкурентна цена. 
      \n\n Предлагаме отлични условия за нашите клиенти и гарантираме висококачествени продукти и обслужване от първа класа.`,
      ua: `Майонез 67% PC-4.5 кг, KOROLIVSKIY SMAK – це продукт високої якості, розроблений для задоволення потреб як домашніх, так і професійних кухонь. 
      \n\n Завдяки своєму багатому смаку та густій консистенції, цей майонез ідеально підходить для приготування салатів, соусів, маринадів та інших кулінарних шедеврів. Продукт містить оптимальний вміст жиру (67%), що надає стравам насиченого смаку та гладкої текстури. 
      Якість KOROLIVSKIY SMAK підтверджується багаторічною довірою споживачів. Ви можете придбати майонез 67% PC-4.5 кг у UB Market LTD за конкурентоспроможною ціною. 
      \n\n Ми пропонуємо чудові умови для наших клієнтів та гарантуємо високоякісні продукти та обслуговування першого класу.`,
    },
  },
];
