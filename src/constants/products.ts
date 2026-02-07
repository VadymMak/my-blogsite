// src/constants/products.ts
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
  safety?: {
    en: string;
    bg: string;
    ua: string;
  };
  alternative?: {
    en: string;
    bg: string;
    ua: string;
  };
}

export const products: IProduct[] = [
  {
    id: 1,
    name: {
      en: "Frying Oil",
      bg: "Олио за пържене",
      ua: "Олія Фритюрна:",
    },
    image: "/images/frying-oil.webp",
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
    safety: {
      en: "Do not heat past 225°C to avoid harmful smoke; limit reuse to 48 hours to prevent oil degradation.",
      bg: "Не загрявайте над 225°C, за да избегнете вреден дим; ограничете повторната употреба до 48 часа, за да предотвратите разграждането на олиото.",
      ua: "Не нагрівайте вище 225°C, щоб уникнути шкідливого диму; обмежте повторне використання до 48 годин, щоб запобігти деградації олії.",
    },
    alternative: {
      en: "Use High-Oleic Oil for higher heat resistance and longer frying time.",
      bg: "Използвайте високоолеиново масло за по-голяма устойчивост на топлина и по-дълго време за пържене.",
      ua: "Використовуйте високоолеїнову олію для кращої термостійкості та тривалішого смаження.",
    },
  },
  {
    id: 2,
    name: {
      en: "Culinary Oil",
      bg: "Кулинарно олио",
      ua: "Олія Кулінарна:",
    },
    image: "/images/sun-flower.webp",
    description: {
      en: `REFINED SUNFLOWER OIL – a premium-class oil designed for frying foods (meat, fish, vegetables), adding to baked goods, as well as for salad dressings and sauce preparation. It can be used for dietary and vegetarian nutrition. Contains beneficial vitamins A, E, and D, as well as a high amount of polyunsaturated fatty acids. 
      \n\n REFINED SUNFLOWER OIL - Produced from selected sunflower seeds through raw pressing, which preserves the maximum amount of beneficial nutrients. It undergoes deep refining, as well as deodorization, sedimentation, and winterization processes. The oil has a clear consistency without any sediment or impurities, and thanks to deodorization, it has no seed smell or taste.`,
      bg: `REFINED SUNFLOWER OIL - масло висок клас, предназначено за пържене на храни (мясо, риба, зеленчуци), добавяне в сладкарски изделия, както и за заправяне на салати и приготвяне на сосове. Може да се използва за диетично и вегетарианско хранене. Съдържа полезни за организма витамини А, Е и D, както и високо количество полиненаситени мастни киселини.
      \n\nREFINED SUNFLOWER OIL - произведено от висококачествени слънчогледови семена чрез студено пресоване, което позволява запазването на максимално количество хранителни вещества. Претърпява процес на дълбока рафинация и допълнителни етапи като дезодорация, утаяване и замразяване. Маслото има прозрачна консистенция, без утайка или примеси. Благодарение на дезодорацията, то няма мирис или вкус на семена.`,
      ua: `REFINED SUNFLOWER OIL – олія вищого класу, призначена для смаження продуктів (м'яса, риби, овочів), додавання у випічку, а також для заправки салатів та приготування соусів. Можна використовувати для дієтичного та вегетаріанського харчування. Містить корисні для організму вітаміни A, E та D, а також високу кількість поліненасичених жирних кислот.. 
      \n\n REFINED SUNFLOWER OIL - Виготовляється з добірного насіння соняшника, шляхом сирого пресування, що дозволяє зберегти максимальну кількість корисних речовин. Проходить очистку шляхом глибокої рафінації, та процеси – дезодорації, осадження та виморозки. Олія має прозору консистенцію без будь-якого осаду або домішок, завдяки дезодорації у олії відсутній запах і присмак насіння.`,
    },
    safety: {
      en: "Avoid using for deep frying at high temperatures (above 200°C); not suitable for prolonged reuse.",
      bg: "Избягвайте употреба за дълбоко пържене при високи температури (над 200°C); не е подходящо за продължителна повторна употреба.",
      ua: "Уникайте використання для глибокого смаження при високих температурах (понад 200°C); не підходить для тривалого повторного використання.",
    },
    alternative: {
      en: "Use Frying Oil for deep frying or High-Oleic Oil for higher heat stability.",
      bg: "Използвайте масло за пържене за дълбоко пържене или високоолеиново масло за по-голяма термична стабилност.",
      ua: "Використовуйте фритюрну олію для глибокого смаження або високоолеїнову олію для кращої термостійкості.",
    },
  },
  {
    id: 3,
    name: {
      en: "High-Oleic Oil",
      bg: "Високоолеиново Oлио",
      ua: "Олія Високоолеїнова",
    },
    image: "/images/palm-oil.webp",
    description: {
      en: `HIGH OLEIC OIL - A product rich in beneficial oleic acid, widely used in cooking: baking, frying, deep-frying, and in bread, confectionery, salads, sauces, and appetizers. It is also consumed as a dietary supplement, a multivitamin source, and for topical treatment. 
      \n\n HIGH OLEIC OIL -  Произведено от специални сортове слънчоглед с високо олеинова киселина (76-90%), то се отличава сред растителните масла. Съдържа малко наситени мазнини (10%) и е богат на витамин Е – естествен антиоксидант. Омега-3 понижава холестерола и укрепва имунитета, а Омега-9 подпомага сърдечната дейност. Лесно усвоим, той е естествено превантивно средство. Благодарение на високото съдържание на полиненаситени киселини, има отлична термоустойчивост (точка на дим 240°C) и срок на годност до 24 месеца.`,
      bg: `HIGH OLEIC OIL - Продукт, богат на полезна олеинова киселина, широко използван в кулинарията: печене, пържене, дълбоко пържене, както и в хляб, сладкарски изделия, салати, сосове и предястия. Консумира се и като хранителна добавка, източник на мултивитамини и за локално лечение.
      \n\nHIGH OLEIC OIL - Произведено от специални сортове слънчоглед с високо олеинова киселина (76-90%), то се отличава сред растителните масла. Съдържа малко наситени мазнини (10%) и е богат на витамин Е – естествен антиоксидант. Омега-3 понижава холестерола и укрепва имунитета, а Омега-9 подпомага сърдечната дейност. Лесно усвоим, той е естествено превантивно средство. Благодарение на високото съдържание на полиненаситени киселини, има отлична термоустойчивост (точка на дим 240°C) и срок на годност до 24 месеца.`,
      ua: `HIGH OLEIC OIL - Продукт із високим вмістом олеїнової кислоти, широко застосовується у випіканні, смаженні, фритюрі, хлібопекарстві, кондитерських виробах, салатах, соусах і закусках. Також використовується як дієтична добавка, джерело мультивітамінів та для місцевого застосування. 
      \n\n HIGH OLEIC OIL - Виготовлена зі спеціальних сортів соняшника з високим вмістом олеїнової кислоти (76-90%), має переваги серед рослинних олій. Відзначається низьким рівнем насичених жирів (10%) і високим вмістом вітаміну E – природного антиоксиданту. Омега-3 знижує холестерин і зміцнює імунітет, а Омега-9 покращує роботу серця і судин. Добре засвоюється організмом і є природним профілактичним засобом. Завдяки високому рівню поліненасичених кислот має термостійкість (240°C) і зберігається до 24 місяців.`,
    },
    safety: {
      en: "Do not exceed 240°C to maintain nutritional benefits; store in a cool, dark place to prevent oxidation.",
      bg: "Не превишавайте 240°C, за да запазите хранителните ползи; съхранявайте на хладно и тъмно място, за да предотвратите окисляване.",
      ua: "Не перевищуйте 240°C, щоб зберегти поживні властивості; зберігайте в прохолодному темному місці, щоб уникнути окислення.",
    },
    alternative: {
      en: "Use Frying Oil for cost-effective deep frying.",
      bg: "Използвайте масло за пържене за икономично дълбоко пържене.",
      ua: "Використовуйте фритюрну олію для економічного глибокого смаження.",
    },
  },
  {
    id: 4,
    name: {
      en: "Crystalline Sugar",
      bg: "Кристална Захар",
      ua: "Цукор Кристалічний",
    },
    image: "/images/sugar.webp",
    description: {
      en: `CRYSTALLINE SUGAR – Sugar of the 1st category (from sugar beets), which is a key ingredient in confectionery products. It is widely used as a sweetener for hot and cold beverages and also serves as a preservative for fruit and berry products such as jams, jellies, and marmalades. With its stable structure and high purity, this sugar ensures consistent sweetness and excellent product quality.
      \n\n CRYSTALLINE SUGAR – Obtained through deep purification and special refining, ensuring uniform crystals and the absence of foreign impurities. Due to its natural origin, it is easily absorbed by the body, maintaining the necessary energy levels and serving as an important source of carbohydrates that support brain activity and sustain vital processes.`,
      bg: `CRYSTALLINE SUGAR – Захар от 1-ва категория (от захарно цвекло), която е основна съставка в сладкарските изделия. Широко се използва като подсладител за топли и студени напитки, а също така изпълнява функцията на консервант за плодови и ягодови продукти като конфитюри, мармалади и желета. Благодарение на своята стабилна структура и висока чистота, тази захар осигурява постоянна сладост и отлично качество на продуктите.
      \n\nCRYSTALLINE SUGAR – Получава се чрез дълбоко пречистване и специална рафинация, което гарантира еднородност на кристалите и липса на чужди примеси. Благодарение на естествения си произход, тя лесно се усвоява от организма, поддържа необходимото ниво на енергия и е важен източник на въглехидрати, които подпомагат мозъчната дейност и осигуряват жизненоважни процеси.`,
      ua: `CRYSTALLINE SUGAR – Цукор 1 категорії (із цукрових буряків), який є основним інгредієнтом у кондитерських виробах, широко використовується як підсолоджувач для гарячих та холодних напоїв, а також виконує функцію консерванта для фруктових і ягідних продуктів, таких як варення, джеми, желе. Маючи стабільну структуру та високу чистоту, цей цукор забезпечує стійку солодкість та відмінну якість продуктів.
      \n\nCRYSTALLINE SUGAR – отримується шляхом глибокої очистки та спеціального рафінування, що гарантує однорідність кристалів та відсутність сторонніх домішок. Завдяки природному походженню, він легко засвоюється організмом, підтримуючи необхідний рівень енергії та є важливим джерелом вуглеводів, які сприяють активній роботі мозку та забезпечують життєві процеси.`,
    },
    safety: {
      en: "Avoid excessive consumption to prevent health issues; store in a dry place to avoid clumping.",
      bg: "Избягвайте прекомерна консумация, за да предотвратите здравословни проблеми; съхранявайте на сухо място, за да избегнете слепване.",
      ua: "Уникайте надмірного вживання, щоб запобігти проблемам зі здоров’ям; зберігайте в сухому місці, щоб уникнути злипання.",
    },
    alternative: {
      en: "Use stevia or honey for a healthier sweetener option.",
      bg: "Използвайте стевия или мед за по-здравословен подсладител.",
      ua: "Використовуйте стевію або мед як здоровішу альтернативу підсолоджувачу.",
    },
  },
  {
    id: 5,
    name: {
      en: "Mayonnaise",
      bg: "Майонеза",
      ua: "Майонез",
    },
    image: "/images/mayonnaise.webp",
    description: {
      en: `PREMIUM MAYONNAISE – a classic product used in the preparation of numerous dishes and salads, as well as a base for sauces or as a standalone sauce. It is a versatile ingredient that enhances dishes with a distinct flavor, delicate texture, and a harmonious balance between spiciness and smoothness.
      \n\n PREMIUM MAYONNAISE – is produced using a traditional recipe with natural ingredients, containing an optimal fat content of 67% and meeting high-quality standards. Only high-quality oil, fresh egg products, and natural spices are used in the production process. Full automation ensures a stable texture and impeccable product quality.
      \n\nThe assortment also includes a vegan mayonnaise, made from plant-based ingredients without any animal-derived products, making it an ideal choice for people following special diets.`,
      bg: `PREMIUM MAYONNAISE – класически продукт, използван в приготвянето на множество ястия и салати, както и като основа за сосове или самостоятелен сос. Това е универсална съставка, която придава на ястията изразителен вкус, нежна текстура и хармоничен баланс между пикантност и мекота. 
      \n\n PREMIUM MAYONNAISE – се произвежда по традиционна рецепта с натурални съставки, съдържа оптимално съдържание на мазнини 67% и отговаря на високи стандарти за качество. В процеса на производство се използват само висококачествено масло, пресни яйчни продукти и натурални подправки. Пълната автоматизация на производството осигурява стабилна текстура и безупречно качество на продукта.
      \n\nВ асортимента има и веган майонеза, направена на растителна основа без животински продукти, което я прави идеален избор за хора, които спазват специални диети.`,
      ua: `PREMIUM MAYONNAISE – класичний продукт, що використовується у приготуванні численних страв та салатів, а також як основа для соусів чи окремий соус. Це універсальний інгредієнт, що надає стравам вираженого смаку, ніжної текстури та гармонійного балансу між гостротою та м'якістю.
      \n\nPREMIUM MAYONNAISE – виробляється за традиційною рецептурою з натуральних інгредієнтів, має оптимальну масову частку жиру 67% та відповідає високим стандартам якості. У процесі виготовлення використовуються лише високоякісна олія, свіжі яєчні продукти та натуральні спеції. Завдяки повній автоматизації виробництва досягається стабільна текстура та бездоганна якість продукту.
      \n\nВ асортименті представлений також веганський майонез, виготовлений на основі рослинних інгредієнтів без використання продуктів тваринного походження, що робить його ідеальним вибором для людей, які дотримуються спеціальних дієт.`,
    },
    safety: {
      en: "Refrigerate after opening; avoid if allergic to eggs (for non-vegan version).",
      bg: "Съхранявайте в хладилник след отваряне; избягвайте, ако сте алергични към яйца (за невеганската версия).",
      ua: "Зберігайте в холодильнику після відкриття; уникайте, якщо маєте алергію на яйця (для невеганської версії).",
    },
    alternative: {
      en: "Use vegan mayonnaise for egg-free diets or yogurt for a lighter option.",
      bg: "Използвайте веганска майонеза за диети без яйца или кисело мляко за по-лека алтернатива.",
      ua: "Використовуйте веганський майонез для дієт без яєць або йогурт як легшу альтернативу.",
    },
  },
];
