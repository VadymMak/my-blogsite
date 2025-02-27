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
      en: "Crystalline Sugar",
      bg: "Кристална Захар",
      ua: "Цукор Кристалічний",
    },
    image: "/images/sugar.jpg",
    description: {
      en: `CRYSTALLINE SUGAR – Sugar of the 1st category (from sugar beets), which is a key ingredient in confectionery products. It is widely used as a sweetener for hot and cold beverages and also serves as a preservative for fruit and berry products such as jams, jellies, and marmalades. With its stable structure and high purity, this sugar ensures consistent sweetness and excellent product quality.
      \n\n CRYSTALLINE SUGAR – Obtained through deep purification and special refining, ensuring uniform crystals and the absence of foreign impurities. Due to its natural origin, it is easily absorbed by the body, maintaining the necessary energy levels and serving as an important source of carbohydrates that support brain activity and sustain vital processes.`,
      bg: `CRYSTALLINE SUGAR – Захар от 1-ва категория (от захарно цвекло), която е основна съставка в сладкарските изделия. Широко се използва като подсладител за топли и студени напитки, а също така изпълнява функцията на консервант за плодови и ягодови продукти като конфитюри, мармалади и желета. Благодарение на своята стабилна структура и висока чистота, тази захар осигурява постоянна сладост и отлично качество на продуктите.
      \n\nCRYSTALLINE SUGAR – Получава се чрез дълбоко пречистване и специална рафинация, което гарантира еднородност на кристалите и липса на чужди примеси. Благодарение на естествения си произход, тя лесно се усвоява от организма, поддържа необходимото ниво на енергия и е важен източник на въглехидрати, които подпомагат мозъчната дейност и осигуряват жизненоважни процеси.`,
      ua: `CRYSTALLINE SUGAR – Цукор 1 категорії (із цукрових буряків), який є основним інгредієнтом у кондитерських виробах, широко використовується як підсолоджувач для гарячих та холодних напоїв, а також виконує функцію консерванта для фруктових і ягідних продуктів, таких як варення, джеми, желе. Маючи стабільну структуру та високу чистоту, цей цукор забезпечує стійку солодкість та відмінну якість продуктів.
      \n\nCRYSTALLINE SUGAR – отримується шляхом глибокої очистки та спеціального рафінування, що гарантує однорідність кристалів та відсутність сторонніх домішок. Завдяки природному походженню, він легко засвоюється організмом, підтримуючи необхідний рівень енергії та є важливим джерелом вуглеводів, які сприяють активній роботі мозку та забезпечують життєві процеси.`,
    },
  },
  {
    id: 5,
    name: {
      en: "Mayonnaise",
      bg: "Майонеза",
      ua: "Майонез",
    },
    image: "/images/mayonnaise.jpg",
    description: {
      en: `PREMIUM MAYONNAISE – a classic product used in the preparation of numerous dishes and salads, as well as a base for sauces or as a standalone sauce. It is a versatile ingredient that enhances dishes with a distinct flavor, delicate texture, and a harmonious balance between spiciness and smoothness.
      \n\n PREMIUM MAYONNAISE – is produced using a traditional recipe with natural ingredients, containing an optimal fat content of 67% and meeting high-quality standards. Only high-quality oil, fresh egg products, and natural spices are used in the production process. Full automation ensures a stable texture and impeccable product quality.
      \n\nThe assortment also includes a vegan mayonnaise, made from plant-based ingredients without any animal-derived products, making it an ideal choice for people following special diets.`,
      bg: `PREMIUM MAYONNAISE – класически продукт, използван в приготвянето на множество ястия и салати, както и като основа за сосове или самостоятелен сос. Това е универсална съставка, която придава на ястията изразителен вкус, нежна текстура и хармоничен баланс между пикантност и мекота. 
      \n\n "PREMIUM MAYONNAISE" – се произвежда по традиционна рецепта с натурални съставки, съдържа оптимално съдържание на мазнини 67% и отговаря на високи стандарти за качество. В процеса на производство се използват само висококачествено масло, пресни яйчни продукти и натурални подправки. Пълната автоматизация на производството осигурява стабилна текстура и безупречно качество на продукта.
      \n\nВ асортимента има и веган майонеза, направена на растителна основа без животински продукти, което я прави идеален избор за хора, които спазват специални диети.`,
      ua: `PREMIUM MAYONNAISE – класичний продукт, що використовується у приготуванні численних страв та салатів, а також як основа для соусів чи окремий соус. Це універсальний інгредієнт, що надає стравам вираженого смаку, ніжної текстури та гармонійного балансу між гостротою та м'якістю.
      \n\nPREMIUM MAYONNAISE – виробляється за традиційною рецептурою з натуральних інгредієнтів, має оптимальну масову частку жиру 67% та відповідає високим стандартам якості. У процесі виготовлення використовуються лише високоякісна олія, свіжі яєчні продукти та натуральні спеції. Завдяки повній автоматизації виробництва досягається стабільна текстура та бездоганна якість продукту.
      \n\nВ асортименті представлений також веганський майонез, виготовлений на основі рослинних інгредієнтів без використання продуктів тваринного походження, що робить його ідеальним вибором для людей, які дотримуються спеціальних дієт.`,
    },
  },
];
