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

export const products: IProduct[] = [
  {
    id: 1,
    name: {
      en: "Frying Oil",
      bg: "Масло за пържене",
      ua: "Олія Фритюрна:",
    },
    image: "/images/frying-oil.jpg",
    description: {
      en: `DEEP FRYING OIL – is a product adapted to modern culinary trends for deep-frying. It heats up quickly and allows you to prepare delicious dishes with a golden crust, but without excess fat and specific odors. The oil is designed for multiple uses, even when frying different products consecutively – their smells do not mix. 
      \n\n DEEP FRYING OIL is produced using a unique recipe from the finest sunflower oil, which undergoes an extra-refining process (RDBW). The addition of an antifoaming agent (E900) and antioxidants (E320, E321) makes the oil thermally stable, with a smoke point of 225°C and above. 
      The optimal continuous frying time, when the oil is used correctly, is 48 hours.`,
      bg: `DEEP FRYING OIL – е продукт, адаптиран към съвременните кулинарни тенденции за пържене. Загрява бързо и позволява приготвянето на вкусни ястия със златиста коричка, но без излишни мазнини и специфични миризми. Олиото е предназначено за многократна употреба, дори при пържене на различни продукти последователно – техните аромати не се смесват.
      \n\n DEEP FRYING OIL се произвежда по уникална рецепта от най-финото слънчогледово олио, което преминава процес на допълнителна рафинация (RDBW). Добавянето на обезпеняващ агент (E900) и антиоксиданти (E320, E321) прави олиото термично стабилно, с точка на димене 225°C и повече. 
      Оптималното време за непрекъснато пържене, при правилна употреба на олиото, е 48 часа.`,
      ua: `DEEP FRYING OIL –це продукт це продукт, адаптований до сучасних кулінарних тенденцій для приготування страв у фритюрнику, швидко нагрівається і дозволяє приготувати смачні страви зі золотистою скоринкою, але без зайвого жиру та специфічного запаху. Олія
      призначена для багаторазового використання, навіть при смаженні різних продуктів поспіль – їх запахи не змішуються. 
      \n\n DEEP FRYING OIL - виготовляється за унікальною рецептурою, з найкращої соняшникової олії яка проходить процес екстра-рафінації (RDBW). Додавання піногасного агента (Е900) та антиоксидантів (Е320, Е321) - робить олію термостабільною, з температурою димоутворення – від 225°С.
      Оптимальний термін безперервного смаження, при правильному використанні олії – 48годин.`,
    },
  },
  {
    id: 2,
    name: {
      en: "Culinary Oil",
      bg: "Кулинарно олио",
      ua: "Олія Кулінарна:",
    },
    image: "/images/sun-flower.jpg",
    description: {
      en: `REFINED SUNFLOWER OIL – a premium-class oil designed for frying foods (meat, fish, vegetables), adding to baked goods, as well as for salad dressings and sauce preparation. It can be used for dietary and vegetarian nutrition. Contains beneficial vitamins A, E, and D, as well as a high amount of polyunsaturated fatty acids. 
      \n\n REFINED SUNFLOWER OIL - Produced from selected sunflower seeds through raw pressing, which preserves the maximum amount of beneficial nutrients. It undergoes deep refining, as well as deodorization, sedimentation, and winterization processes. The oil has a clear consistency without any sediment or impurities, and thanks to deodorization, it has no seed smell or taste.`,
      bg: `Слънчогледово масло RDBW – Рафинирано Дезодорирано Слънчогледово масло под марката KOROLIVSKYI SMAK – е висококачествено масло с най-висока степен на пречистване, предлагащо неутрален вкус и аромат. 
      \n\n REFINED SUNFLOWER OIL - Произвежда се от подбрани слънчогледови семена чрез сурово пресоване, което позволява запазването на максимално количество полезни вещества. Подлага се на дълбоко рафиниране, както и на процеси на дезодориране, утаяване и зимуване. Олиото има прозрачна консистенция без утайка или примеси, а благодарение на дезодорацията няма мирис или вкус на семена.`,
      ua: `REFINED SUNFLOWER OIL – олія вищого класу, призначена для смаження продуктів (м'яса, риби, овочів), додавання у випічку, а також для заправки салатів та приготування соусів. Можна використовувати для дієтичного та вегетаріанського харчування. Містить корисні для організму вітаміни A, E та D, а також високу кількість поліненасичених жирних кислот.. 
      \n\n REFINED SUNFLOWER OIL - Виготовляється з добірного насіння соняшника, шляхом сирого пресування, що дозволяє зберегти максимальну кількість корисних речовин. Проходить очистку шляхом глибокої рафінації, та процеси – дезодорації, осадження та виморозки. Олія має прозору консистенцію без будь-якого осаду або домішок, завдяки дезодорації у олії відсутній запах і присмак насіння.`,
    },
  },
  {
    id: 3,
    name: {
      en: "High-Oleic Oil",
      bg: "Високоолеиново Oлио",
      ua: "Олія Високоолеїнова:",
    },
    image: "/images/palm-oil.jpg",
    description: {
      en: `HIGH OLEIC OIL - A product rich in beneficial oleic acid, widely used in cooking: baking, frying, deep-frying, and in bread, confectionery, salads, sauces, and appetizers. It is also consumed as a dietary supplement, a multivitamin source, and for topical treatment. 
      \n\n HIGH OLEIC OIL - Made from special sunflower varieties with high oleic acid (76-90%), it stands out among vegetable oils. It contains low saturated fats (10%) and is rich in vitamin E – a natural antioxidant. Omega-3 lowers cholesterol and strengthens immunity, while Omega-9 supports heart function. Easily absorbed, it is a natural preventive remedy. Thanks to high polyunsaturated acid content, it has excellent heat resistance (smoke point 240°C) and a shelf life of up to 24 months.`,
      bg: `ВИСОКООЛЕИНОВО ОЛИО - Продукт с високо съдържание на олеинова киселина, използван в готвенето: печене, пържене, дълбоко пържене, хляб, сладкарски изделия, салати, сосове и предястия. Също се консумира като добавка, източник на мултивитамини и за локално приложение. 
      \n\n ВИСОКООЛЕИНОВО ОЛИО - Произведено от специални слънчогледови сортове с високо съдържание на олеинова киселина (76-90%), има предимства сред растителните масла. Отличава се с ниско съдържание на наситени мазнини (10%) и високо съдържание на витамин E – естествен антиоксидант. Омега-3 намалява холестерола и укрепва имунитета, докато Омега-9 подпомага работата на сърцето и кръвоносните съдове. Усвоява се лесно и се счита за естествено профилактично средство. Благодарение на високото съдържание на полиненаситени киселини, то има термоустойчивост (240°C) и се съхранява до 24 месеца.`,
      ua: `HIGH OLEIC OIL - Продукт із високим вмістом олеїнової кислоти, широко застосовується у випіканні, смаженні, фритюрі, хлібопекарстві, кондитерських виробах, салатах, соусах і закусках. Також використовується як дієтична добавка, джерело мультивітамінів та для місцевого застосування. 
      \n\n HIGH OLEIC OIL - Виготовлена зі спеціальних сортів соняшника з високим вмістом олеїнової кислоти (76-90%), має переваги серед рослинних олій. Відзначається низьким рівнем насичених жирів (10%) і високим вмістом вітаміну E – природного антиоксиданту. Омега-3 знижує холестерин і зміцнює імунітет, а Омега-9 покращує роботу серця і судин. Добре засвоюється організмом і є природним профілактичним засобом. Завдяки високому рівню поліненасичених кислот має термостійкість (240°C) і зберігається до 24 місяців.`,
    },
  },
  {
    id: 4,
    name: {
      en: "Sugar",
      bg: "Палмово масло и маргарин",
      ua: "Пальмове масло і маргарин",
    },
    image: "/images/sugar.jpg",
    description: {
      en: `Sugar of the highest quality from UB Market LTD is a product that meets all standards and quality norms.

      \n\n Our sugar is certified and comes with all necessary documents confirming its safety and compliance with international requirements. This sugar is ideal for use in the food industry as well as at home. Thanks to strict quality control, our customers receive only pure, white sugar without impurities.

      \n\n Order sugar from UB Market LTD and get a high-quality product on favorable terms. We guarantee timely delivery and professional service. UB Market LTD – your reliable supplier!`,
      bg: `Захар с най-високо качество от UB Market LTD е продукт, който отговаря на всички стандарти и норми за качество.
      
      \n\nНашата захар е сертифицирана и идва с всички необходими документи, потвърждаващи нейната безопасност и съответствие с международните изисквания. Тази захар е идеална за употреба в хранителната индустрия, както и в дома. Благодарение на строгия контрол на качеството, нашите клиенти получават само чиста, бяла захар без примеси.
      
      \n\nПоръчайте захар от UB Market LTD и получете висококачествен продукт на изгодни условия. Гарантираме навременна доставка и професионално обслужване. UB Market LTD – вашият надежден доставчик!`,
      ua: `Цукор найвищої якості від UB Market LTD — це продукт, який відповідає всім стандартам і нормам якості.
      
      \n\nНаш цукор сертифікований і має всі необхідні документи, що підтверджують його безпеку та відповідність міжнародним вимогам. Цей цукор ідеально підходить для використання в харчовій промисловості, а також вдома. Завдяки строгому контролю якості, наші клієнти отримують тільки чистий, білий цукор без домішок.
      
      \n\nЗамовте цукор від UB Market LTD і отримайте високоякісний продукт на вигідних умовах. Гарантуємо своєчасну доставку та професійне обслуговування. UB Market LTD — ваш надійний постачальник!`,
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
