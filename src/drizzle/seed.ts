import ora from 'ora';

import { db } from './client';
import { levels } from './schema';

const SEEDING_DATA = {
  levels: [
    {
      min_value: 1,
      max_value: 10,
      en_name: 'Pleasant',
      jp_name: '快',
    },
    {
      min_value: 11,
      max_value: 20,
      en_name: 'Painful',
      jp_name: '苦',
    },
    {
      min_value: 21,
      max_value: 30,
      en_name: 'Dead',
      jp_name: '死',
    },
    {
      min_value: 31,
      max_value: 40,
      en_name: 'Hell',
      jp_name: '地獄',
    },
    {
      min_value: 41,
      max_value: 50,
      en_name: 'Paradise',
      jp_name: '楽',
    },
    {
      min_value: 51,
      max_value: 60,
      en_name: 'Reality',
      jp_name: '現実',
    },
  ],
  voice_actors: [
    {
      name: 'Kyoko',
      description: 'Tokyo accent, female',
    },
    {
      name: 'Kenichi',
      description: 'Tokyo accent, male',
    },
  ],
  kanji: [
    {
      level: '1',
      character: '上',
      primary_meaning: 'Above',
      alternative_meanings: 'Up, Over',
      meaning_hints: [
        'Focus your imagination on how body parts should be buried, not above ground like this. Sure, finding a toe is a little strange, but finding a toe above the ground? Downright silly.',
      ],
      meaning_mnemonic: [
        'You find a <mark title="Radical" class="radical-highlight">toe</mark> on the <mark title="Radical" class="radical-highlight">ground</mark>. It\'s weird, because it\'s <mark title="Kanji" class="kanji-highlight">above</mark> the ground, not where toes belong.',
      ],
      onyomi_reading: 'じょう',
      kunyomi_reading: 'うえ, あ, のぼ, うわ, かみ',
      nanori_reading: 'None',
      reading_hints: [
        'Try to remember Joe, the local farmhand. He is a recurring character that will come up anytime the reading for a kanji is <span lang="ja">じょう</span>.',
        'He is a very big man, and he wears farmer\'s clothes. It\'s important to imagine your version of Joe as very big, because it will help us to differentiate him from Jo-Anne, who is the character associated with the similar, but shorter reading (and character) <span lang="ja">じょ</span>. Although Joe will develop as you go through all the <span lang="ja">じょう</span> reading kanji, for now, just imagine him as a big, kinda slow dude, who works for a local farmer. Also, he only has nine or fewer toes, apparently.',
      ],
      reading_mnemonic: [
        'Of course when you find a toe <mark title="Kanji" class="kanji-highlight">above</mark> the ground, you want to know where the toe came from. When you examine it, you see a name written on there. This toe belongs to the local clumsy farmhand, <mark title="Reading" class="reading-highlight">Joe</mark> (<span lang="ja">じょう</span>).',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '上',
        '上げる',
        '上手',
        '上る',
        'テーブルの上',
        '上手い',
        '上がる',
        '年上',
        '以上',
        '地上',
        '出来上がる',
        '上級',
        '売り上げ',
        '屋上',
        '上司',
        '上品',
        '上演',
        '上述',
        '上巻',
        '差し上げる',
        '盛り上げる',
        '上旬',
        '盛り上がる',
        '至上',
        '上唇',
        '召し上がる',
      ],
    },
    {
      level: '1',
      character: '下',
      primary_meaning: 'Below',
      alternative_meanings: 'Down, Under, Beneath',
      meaning_hints: [
        'So, where is the <mark title="Radical" class="radical-highlight">toe</mark> now? It\'s <mark title="Kanji" class="kanji-highlight">below</mark> ground. Imagine yourself digging it out, and thinking... ugh, why does it have to be <mark title="Kanji" class="kanji-highlight">below</mark> ground like this? So irritating. Will I be able to sew it back on in time to save it?',
      ],
      meaning_mnemonic: [
        'There\'s a <mark title="Radical" class="radical-highlight">toe</mark> <mark title="Kanji" class="kanji-highlight">below</mark> <mark title="Radical" class="radical-highlight">ground</mark>.',
      ],
      onyomi_reading: 'か, げ',
      kunyomi_reading: 'した, さ, くだ, お, しも, もと',
      nanori_reading: 'None',
      reading_hints: [
        'There\'s another useful on\'yomi reading that just isn\'t useful enough for you to learn now. That reading is <span lang="ja">げ</span>, but we\'re only going to worry about that much, much later when you have to learn one or two vocab words that read <span lang="ja">下</span> as <span lang="ja">げ</span>. That\'s the problem with really common kanji - too many readings.',
      ],
      reading_mnemonic: [
        'You keep digging for the <mark title="Radical" class="radical-highlight">toe</mark> <mark title="Kanji" class="kanji-highlight">below</mark> the <mark title="Radical" class="radical-highlight">ground</mark>, and instead of hitting a <mark title="Radical" class="radical-highlight">toe</mark> you hit something hard and metallic. You keep digging and digging around it, but it\'s huge. Turns out, you found yourself a <mark title="Reading" class="reading-highlight">car</mark> (<span lang="ja">か</span>). Keep digging until you unearth the car. Inside, you find the toe you were looking for.',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '下',
        '下さい',
        '下げる',
        '下手',
        'ベッドの下',
        '下町',
        '下がる',
        '地下',
        '年下',
        '以下',
        '下る',
        '地下鉄',
        '下着',
        '下りる',
        '下品',
        '下書き',
        '下巻',
        '靴下',
        '廊下',
        '地下街',
        '股下',
        '下旬',
        '却下',
        '零下',
        '下唇',
        '陛下',
        '下駄',
        '下痢',
      ],
    },
    {
      level: '1',
      character: '大',
      primary_meaning: 'Big',
      alternative_meanings: 'Large',
      meaning_hints: [
        'So, if you know the radical, you know the meaning of this kanji as well.',
      ],
      meaning_mnemonic: [
        'The <mark title="Radical" class="radical-highlight">big</mark> radical and the <mark title="Kanji" class="kanji-highlight">big</mark> kanji are exactly the same!',
      ],
      onyomi_reading: 'たい, だい',
      kunyomi_reading: 'おお',
      nanori_reading: 'ひろ',
      reading_hints: [
        "When you look at the big guy in your head, imagine him covered in tie dye head to toe. Think about how ridiculous it looks on him, especially since he's such a big guy. Shirt. Sweatpants. Hat. Shoes... it goes on and on.",
      ],
      reading_mnemonic: [
        'There\'s this big guy (that\'s how you remember the radical, remember?), and he\'s wearing a huge <mark title="Reading" class="reading-highlight">Tie Dye</mark> (<span lang="ja">たい</span>, <span lang="ja">だい</span>) shirt. Because he\'s so huge, the tie dye shirt is also super huge. Everything about him is pretty big, but the tie dye stands out more than anything.',
      ],
      visually_similar_kanji: ['Dog', 'Fat'],
      found_in_vocabulary: [
        '大人',
        '大きい',
        '大した',
        '大きさ',
        '大切',
        '大人しい',
        '大気',
        '大体',
        '大声',
        '大作',
        '大学',
        '大文字',
        '大空',
        '大きく',
        '大学生',
        '大役',
        '医大',
        '私立大学',
        '大事',
        '大学院',
        '私大',
        '大根',
        '大学院生',
        '大会',
        '大好き',
        '大仏',
        '大変',
        '大阪',
        '大阪弁',
        '大丈夫',
        '大きい順',
        '大失敗',
        '大敵',
        '大勢',
        '大嫌い',
        '大統領',
        '大量',
        '副大統領',
        '莫大',
        '大違い',
        '大規模',
        '大間違い',
        '大衆',
        '巨大',
        '大臣',
        '大略',
        '総理大臣',
        '大陸',
        '外務大臣',
        '大騒ぎ',
        '拡大',
        '大損',
        '大将',
        '大幅',
        '大抵',
        '大砲',
        '誇大',
        '大佐',
        '大麻',
        '大概',
        '壮大',
        '偉大',
        '大輔',
        '膨大',
        '寛大',
        '大尉',
        '大腸',
        '大胆',
        '大腸菌',
        '甚大',
      ],
    },
    {
      level: '1',
      character: '工',
      primary_meaning: 'Construction',
      alternative_meanings: 'Industry',
      meaning_hints: [
        "Know your radicals and you'll know this kanji's meaning.",
      ],
      meaning_mnemonic: [
        'The <mark title="Radical" class="radical-highlight">construction</mark> radical and the <mark title="Kanji" class="kanji-highlight">construction</mark> kanji are the same!',
        'This kanji also means <mark title="Kanji" class="kanji-highlight">industry</mark>, which is what construction is, if you think about it. It\'s all part of the construction industry.',
      ],
      onyomi_reading: 'こう, く',
      kunyomi_reading: 'None',
      nanori_reading: 'None',
      reading_hints: [
        "If <span lang=\"ja\">こういち</span> as a construction worker standing in a construction site some how doesn't make your legs tremble, that's okay and totally normal. Do make sure you take this story to a ridiculous enough level to hook a memory into that brain of yours. Be mad at him for not following construction site regulations (where's his shirt, shoes, and pants!?). Why is he using that bulldozer like that?",
        'Alternatively, say you really do like what you see (you\'re going to have to imagine a much better looking version of <span lang="ja">こういち</span>\'s actual face, though). You and <span lang="ja">こういち</span> make eye contact a little too long. He nods, puts his cigarette out, and takes off his hard hat, letting his long Fabio-esque locks flow. You beckon him over and he comes. What happens next is up to you and your own imagination. My guess is you have a very deep conversation about kanji and the best ways to learn it.',
        'Hint: When you see <span lang="ja">工</span> in a kanji it will often take the <span lang="ja">こう</span> reading. Remember that, because it comes up quite a bit!',
      ],
      reading_mnemonic: [
        'For kanji that use the <span lang="ja">こう</span> (there are a lot of them!) we will use the character <span lang="ja">こういち</span> every time. He\'s one of the people who started this website, so we\'ll do our best in the mnemonics to embarrass him as much as possible. Anyways, remember that whenever you see <span lang="ja">こう</span>, think <span lang="ja">こういち</span>.',
        'You see some <mark title="Kanji" class="kanji-highlight">construction</mark> in front of you. There, standing shirtless (only a suspender and hard hat) is (<span lang="ja"><mark title="Reading" class="reading-highlight">こう</mark>いち</span>), looking back at you.',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '人工',
        '工学',
        '工作',
        '工学者',
        '工場',
        '工事',
        '工業',
        '飴細工',
      ],
    },
    {
      level: '1',
      character: '八',
      primary_meaning: 'Eight',
      meaning_hints: [
        'Count the fins out in front of you, all the way from one to eight. It\'ll help if you actually do this. Now smell each fin, and think "Wow, I have to smell all eight of these?" Yes, you do.',
      ],
      meaning_mnemonic: [
        'This isn\'t exactly the same as the <mark title="Radical" class="radical-highlight">fins</mark> radical, but it\'s close. Sometimes this will happen (where we have to use a slightly "modified radical" version of the original), so it\'s good to understand that now, early on. In this case, we have fins. How many fins? <mark title="Kanji" class="kanji-highlight">Eight</mark> fins. How do you know that? Because you caught four fish with two fins each.',
      ],
      onyomi_reading: 'はち',
      kunyomi_reading: 'や, よう',
      nanori_reading: 'None',
      reading_hints: [
        "You've asked him why you can only put eight fins at a time in the hatch, but he never wants to answer. What could be down in the hole that the hatch covers? Why is there a hatch at all? What's with numbers and hatches being mysterious?",
      ],
      reading_mnemonic: [
        'After you count and smell all <mark title="Kanji" class="kanji-highlight">eight</mark> of your fins, it\'s time to put them away. You open a large <mark title="Reading" class="reading-highlight">hatch</mark> (<span lang="ja">はち</span>) and put them in. This is where you keep your fins, always putting in eight at a time because that\'s what the boss wants.',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: ['八', '八つ', '八日', '八冊'],
    },
    {
      level: '1',
      character: '入',
      primary_meaning: 'Enter',
      meaning_hints: ['Make sure you know those radicals, yo!'],
      meaning_mnemonic: [
        'The kanji and the radical are the same, so remembering the meaning of this kanji is as simple as making sure you know the radical for <mark title="Radical" class="radical-highlight">enter</mark> first! If you know the radical, you know this kanji means <mark title="Kanji" class="kanji-highlight">enter</mark> as well.',
      ],
      onyomi_reading: 'にゅう',
      kunyomi_reading: 'はい, い',
      nanori_reading: 'None',
      reading_hints: [
        'Imagine lights turning on and flashing, and an entire audience inside. You\'re at a gameshow, and the announcer announces the <mark title="Reading" class="reading-highlight">neeeeew</mark> teepee in his announcey voice. Feel the surprise. Feel the happiness. Feel the excitement. A beautiful new teepee all for you!',
      ],
      reading_mnemonic: [
        'Turns out, after you <mark title="Kanji" class="kanji-highlight">enter</mark> the teepee (you\'ll remember that the radical is a teepee with a big entrance to it), you\'re given a <mark title="Reading" class="reading-highlight">new</mark> (<span lang="ja">にゅう</span>) one! Now you have two teepees!',
      ],
      visually_similar_kanji: ['Person'],
      found_in_vocabulary: [
        '入り口',
        '入る',
        '入力',
        '気に入る',
        '入社',
        '入学',
        '入れる',
        '入場',
        '入院',
        '入所',
        '入学試験',
        '入館料',
        '受け入れる',
        '入門',
        '書き入れる',
        '入団',
        '立入禁止',
        '収入',
        '輸入',
        '入隊',
        '輸入する',
        '入り江',
        '購入',
        '押入れ',
        '納入',
        '入獄',
        '介入',
        '侵入',
        '入籍',
        '歳入',
        '入れ墨',
        '挿入',
        '挿入する',
      ],
    },
    {
      level: '1',
      character: '山',
      primary_meaning: 'Mountain',
      meaning_hints: [
        "Make sure you're studying your radicals. If you are, then you're studying your kanji as well!",
      ],
      meaning_mnemonic: [
        'The <mark title="Radical" class="radical-highlight">mountain</mark> radical and the <mark title="Kanji" class="kanji-highlight">mountain</mark> kanji are the same.',
      ],
      onyomi_reading: 'さん',
      kunyomi_reading: 'やま',
      nanori_reading: 'None',
      reading_hints: [
        'Be sure to imagine this vividly. The more absurdly you can imagine it, the more likely you are to remember the reading, <mark title="Reading" class="reading-highlight">san</mark>.',
      ],
      reading_mnemonic: [
        'Think about <mark title="Kanji" class="kanji-highlight">mountains</mark> talking to each other, calling each other by their names and adding the Japanese name-ender <mark title="Reading" class="reading-highlight">san</mark> (<span lang="ja">さん</span>) to each of their names. "Hello, Everest-<mark title="Reading" class="reading-highlight">san</mark>." "Oh hi, Fuji-<mark title="Reading" class="reading-highlight">san</mark>."',
      ],
      visually_similar_kanji: ['Hermit'],
      found_in_vocabulary: [
        '山',
        'ふじ山',
        '火山',
        '山びこ',
        '山道',
        '登山',
        '山登り',
        '岡山県',
        '沢山',
        '岡山城',
        '山脈',
        '富士山',
        '銅山',
        '山中湖',
        '鉱山',
        '山岳',
        '山頂',
        '山荘',
        '山葵',
        '山賊',
      ],
    },
    {
      level: '1',
      character: '口',
      primary_meaning: 'Mouth',
      meaning_hints: [
        "If you learned your radicals–which the WaniKani system forces you to do (unless you're cheating)–you'll already know the meaning of the kanji.",
      ],
      meaning_mnemonic: [
        'The <mark title="Radical" class="radical-highlight">mouth</mark> radical and the <mark title="Kanji" class="kanji-highlight">mouth</mark> kanji are exactly the same!',
      ],
      onyomi_reading: 'こう, く',
      kunyomi_reading: 'くち',
      nanori_reading: 'None',
      reading_hints: [
        'You just can\'t forget all the cool things about kanji learning he said from that mouth. What a great mouth <span lang="ja">こういち</span> has. How are the lips of his mouth both so skinny and fat at the same time?',
      ],
      reading_mnemonic: [
        'Do you remember seeing the construction worker <span lang="ja">こういち</span> earlier in the <span lang="ja">工</span> mnemonic? If you haven\'t yet, not to worry!',
        'For kanji with <span lang="ja">こう</span> readings (there are a lot of them!) we will use the character <span lang="ja">こういち</span> every time. He\'s one of the people who started this website, so we\'ll do our best in the mnemonics to embarrass him as much as possible. Anyways, remember that whenever you see <span lang="ja">こう</span>, think <span lang="ja">こういち</span>.',
        'Everyone agrees, (<mark title="Reading" class="reading-highlight"><span lang="ja">こう</span></mark><span lang="ja">いち</span>)\'s <mark title="Kanji" class="kanji-highlight">mouth</mark> is his best feature. You stare at it lovingly as he whispers sweet kanji readings to you.',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '入り口',
        '口',
        '人口',
        '出口',
        '戸口',
        '口にする',
        '早口',
        '東口',
        '南口',
        '辛口',
        '口調',
        '悪口',
        '非常口',
        '口笛',
        '裏口',
        '窓口',
        '口紅',
        '口笛を吹く',
        '口癖',
        '蛇口',
      ],
    },
    {
      level: '1',
      character: '九',
      primary_meaning: 'Nine',
      meaning_hints: [
        'If you know your radicals well, this kanji will be a breeze!',
      ],
      meaning_mnemonic: [
        'Nice! This kanji is the same as the radical that looks just like it (down to the meaning, even!). The radical is <mark title="Radical" class="radical-highlight">nine</mark> and the kanji is <mark title="Kanji" class="kanji-highlight">nine</mark>, making the meaning of this kanji really easy to remember as long as you know the radical first.',
      ],
      onyomi_reading: 'く, きゅう',
      kunyomi_reading: 'ここの',
      nanori_reading: 'None',
      reading_hints: [
        "Picture nine-year-old you, lining up nine cookies and nine cucumbers. You dip a cookie in milk and bite into it, then dip a cucumber in and take a bite. Nine bites each until they're all gone. Ah, you miss being nine.",
      ],
      reading_mnemonic: [
        "Although this kanji has two on'yomi to learn, the pronunciations of those two on'yomi are very similar, so that should make them easier to remember.",
        'When you were <mark title="Kanji" class="kanji-highlight">nine</mark> your favorite foods were <mark title="Reading" class="reading-highlight">coo</mark>kies (<span lang="ja">く</span>) and <mark title="Reading" class="reading-highlight">cu</mark>cumbers (<span lang="ja">きゅう</span>). Yum yum!',
      ],
      visually_similar_kanji: ['Power', 'Circle'],
      found_in_vocabulary: ['九', '九つ', '九日', '九州'],
    },
    {
      level: '1',
      character: '一',
      primary_meaning: 'One',
      meaning_hints: [
        'To remember the meaning of <mark title="Kanji" class="kanji-highlight">One</mark>, imagine yourself there at the scene of the crime. You grab <mark title="Kanji" class="kanji-highlight">One</mark> in your arms, trying to prop it up, trying to hear its last words. Instead, it just splatters some blood on your face. "Who did this to you?" you ask. The number One points weakly, and you see number Two running off into an alleyway. He\'s always been jealous of number One and knows he can be number one now that he\'s taken the real number one out.',
      ],
      meaning_mnemonic: [
        'Lying on the <mark title="Radical" class="radical-highlight">ground</mark> is something that looks just like the ground, the number <mark title="Kanji" class="kanji-highlight">One</mark>. Why is this One lying down? It\'s been shot by the number two. It\'s lying there, bleeding out and dying. The number One doesn\'t have long to live.',
      ],
      onyomi_reading: 'いち, いつ',
      kunyomi_reading: 'ひと',
      nanori_reading: 'かず',
      reading_hints: [
        'Make sure you feel the ridiculously <mark title="Reading" class="reading-highlight">itchy</mark> sensation covering your body. It climbs from your hands, where you\'re holding the number <mark title="Kanji" class="kanji-highlight">One</mark> up, and then goes through your arms, crawls up your neck, goes down your body, and then covers everything. It becomes uncontrollable, and you\'re scratching everywhere, writhing on the ground. It\'s so itchy that it\'s the most painful thing you\'ve ever experienced (you should imagine this vividly, so you remember the reading of this kanji).',
      ],
      reading_mnemonic: [
        'As you\'re sitting there next to <mark title="Kanji" class="kanji-highlight">One</mark>, holding him up, you start feeling a weird sensation all over your skin. From the wound comes a fine powder (obviously coming from the special bullet used to kill One) that causes the person it touches to get extremely <mark title="Reading" class="reading-highlight">itchy</mark> (<span lang="ja">いち</span>).',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '一人',
        '一',
        '一つ',
        '一月',
        '一日',
        '一千',
        '一台',
        '一万',
        '一年生',
        '一気',
        '一打',
        '一本気',
        '一文字',
        '一回',
        '一生',
        '一歩',
        '一斤',
        '一時',
        '一体',
        '一番',
        '一ヶ月',
        '一番目',
        '一ヶ所',
        '一位',
        '一階',
        '第一位',
        '一流',
        '一代',
        '第一',
        '一億',
        '一億円',
        '一例',
        '一周',
        '一昨日',
        '一等',
        '一冊',
        '一匹',
        '一昨年',
        '一個',
        '一夫多妻',
        '一応',
        '一割',
        '一層',
        '一巻',
        '第一印象',
        '第一段',
        '統一',
        '一杯',
        '一人娘',
        '一覧',
        '精一杯',
        '一筋',
        '一般',
        '一人暮らし',
        '一人称',
        '一般的',
        '一緒',
        '一致する',
        '一生懸命',
        '一括',
        '一泊',
        '一斉',
        '一翼',
        '一斗缶',
        '一斉に',
        '一瞬',
        '唯一',
        '一蹴する',
        '一概に',
        '一貫',
        '諒一郎',
        '一抹',
        '一旦',
        '一遍',
        '一遍に',
        '一周忌',
      ],
    },
    {
      level: '1',
      character: '人',
      primary_meaning: 'Person',
      meaning_hints: ['Know the radicals, and you shall know the kanji.'],
      meaning_mnemonic: [
        'Remember how the radical version of this kanji meant <mark title="Radical" class="radical-highlight">person</mark> because it\'s a person walking from the side with their arms down? Well this is a <mark title="Kanji" class="kanji-highlight">person</mark> too!',
      ],
      onyomi_reading: 'にん, じん',
      kunyomi_reading: 'ひと, と',
      nanori_reading: 'None',
      reading_hints: [
        'Imagine how angry you were about the policy. You\'ll have to come up with something to be angry about yourself (pick something that would actually make you angry, like maybe you\'re only allowed to wear cut off short-shorts jeans at Nintendo now), but if you pick something good, you\'ll definitely remember the two readings for this. Just remember you\'re working at <mark title="Reading" class="reading-highlight">Nin</mark>tendo, and the policy has to be something about <mark title="Reading" class="reading-highlight">jean</mark>s. Then, imagine yourself as the only <mark title="Kanji" class="kanji-highlight">person</mark> complaining and everyone else in their dumb jeans (or lack-thereof) shaking their head at you because you\'re being a fool.',
      ],
      reading_mnemonic: [
        'Only one <mark title="Kanji" class="kanji-highlight">person</mark> at <mark title="Reading" class="reading-highlight">Nin</mark>tendo (<span lang="ja">にん</span>) complained about the new <mark title="Reading" class="reading-highlight">jean</mark>s (<span lang="ja">じん</span>) policy, and that person was you.',
      ],
      visually_similar_kanji: ['Enter'],
      found_in_vocabulary: [
        '大人',
        '一人',
        '人工',
        '人',
        '人口',
        '三人',
        '二人',
        '人々',
        '白人',
        'アメリカ人',
        'イギリス人',
        '外人',
        'フランス人',
        '友人',
        '〜人',
        '大人しい',
        '人生',
        '女の人',
        '他人',
        '名人',
        '主人',
        '人気',
        '村人',
        '何人',
        '男の人',
        '外国人',
        '他の人',
        '黒人',
        '人形',
        '人里',
        '不人気',
        '人間',
        '役人',
        '住人',
        '人数',
        '美人',
        '病人',
        '鉄人',
        '別人',
        '老人',
        '悪人',
        '商人',
        '人情',
        '殺人',
        '詩人',
        '人参',
        '人格',
        '芸人',
        '変人',
        '人殺し',
        '殺人者',
        '軍人',
        '料理人',
        '証人',
        '愛人',
        '人類',
        '達人',
        '人種',
        '求人',
        '恋人',
        '人類学',
        '犯人',
        '人達',
        '個人',
        '宇宙人',
        '人権',
        '人狼',
        '人差し指',
        '人造',
        '人違い',
        '管理人',
        '巨人',
        '婦人',
        '一人娘',
        '恩人',
        '人脈',
        '貧乏人',
        '人込み',
        '素人',
        '一人暮らし',
        '依頼人',
        '一人称',
        '邦人',
        '仙人',
        '囚人',
        '隣人',
        '万人',
        '人柄',
        '狩人',
        '賢人',
        '偉人',
        '玄人',
        '凡人',
        '盲人',
        '浪人',
      ],
    },
    {
      level: '1',
      character: '力',
      primary_meaning: 'Power',
      alternative_meanings: 'Strength, Ability',
      meaning_hints: [
        'If you know the radicals, you should be feeling fine... No, you should feel powerful!',
      ],
      meaning_mnemonic: [
        'The radical and the meaning of this kanji are the same. Both are <mark title="Kanji" class="kanji-highlight">power</mark>.',
      ],
      onyomi_reading: 'りょく, りき',
      kunyomi_reading: 'ちから',
      nanori_reading: 'None',
      reading_hints: [
        'Know anyone named <mark title="Reading" class="reading-highlight">Ricky</mark> (<span lang="ja">りき</span>), even a famous person like Ricky Ricardo or Ricky Gervais? Imagine that person\'s face on the monster the <mark title="Kanji" class="kanji-highlight">Power</mark> Rangers are fighting. Now, imagine the Power Rangers <mark title="Reading" class="reading-highlight">lock</mark>ing (<span lang="ja">りょく</span>) him up. He looks much less scary once he\'s locked up. Phew.',
      ],
      reading_mnemonic: [
        'Who has the most power of anyone? It\'s the <mark title="Kanji" class="kanji-highlight">Power</mark> Rangers. They are battling their arch enemy <mark title="Reading" class="reading-highlight">Ricky</mark> (<span lang="ja">りき</span>). They defeat him and <mark title="Reading" class="reading-highlight">lock</mark> (<span lang="ja">りょく</span>) him up, so that he can\'t hurt anyone ever again.',
      ],
      visually_similar_kanji: ['Nine', 'Circle', 'Sword'],
      found_in_vocabulary: [
        '力',
        '力いっぱい',
        '入力',
        '体力',
        '全力',
        '強力',
        '電力',
        '馬力',
        '実力',
        '努力',
        '力士',
        '能力',
        '協力',
        '無力',
        '原子力',
        '暴力',
        '圧力',
        '暴力団',
        '勢力',
        '創造力',
        '効力',
        '魅力',
        '弾力',
        '聴力',
        '握力',
        '助力',
        '尽力',
      ],
    },
    {
      level: '1',
      character: '川',
      primary_meaning: 'River',
      meaning_hints: [
        'So, if you know the radical you know the kanji as well.',
      ],
      meaning_mnemonic: [
        'The <mark title="Radical" class="radical-highlight">river</mark> radical and the <mark title="Kanji" class="kanji-highlight">river</mark> kanji are the same as each other!',
      ],
      onyomi_reading: 'せん',
      kunyomi_reading: 'かわ',
      nanori_reading: 'None',
      reading_hints: [
        'Imagine standing by the river, watching all those cars floating by. They start off really dirty, but the river washes them all clean.',
      ],
      reading_mnemonic: [
        'You\'re standing next to a <mark title="Kanji" class="kanji-highlight">river</mark> that\'s actually used as a <mark title="Reading" class="reading-highlight">ca</mark>r <mark title="Reading" class="reading-highlight">wa</mark>sh (<span lang="ja">かわ</span>).',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '川',
        '川底',
        '川崎',
        '徳川',
        '神奈川県',
        '香川県',
        '滝川',
        '川柳',
        '淀川',
        '梓川',
      ],
    },
    {
      level: '1',
      character: '七',
      primary_meaning: 'Seven',
      meaning_hints: [
        "Make sure you know your radicals well and you'll be A-Okay on this one!",
      ],
      meaning_mnemonic: [
        'Lucky for you (as is the case with many of the lower-stroke kanji), this kanji is the same as the radical you\'ve already learned. The radical that makes up this kanji is <mark title="Radical" class="radical-highlight">seven</mark> and the kanji (which is exactly the same) is also <mark title="Kanji" class="kanji-highlight">seven</mark>. So, if you know the radical, you know the meaning of the kanji as well.',
      ],
      onyomi_reading: 'しち',
      kunyomi_reading: 'なな, なの',
      nanori_reading: 'None',
      reading_hints: [
        'How unbelievable is it that someone got <mark title="Kanji" class="kanji-highlight">seven</mark> percent on a test, especially if you try to cheat? Imagine the girl you loathe the most from school, and imagine her cheating on the test (it\'s important it\'s a girl, because of the "she" part in <mark title="Reading" class="reading-highlight">she chea</mark>ted (<span lang="ja">しち</span>). Then, imagine your happiness when she\'s super upset about getting seven percent on it. Serves her right, obviously.',
      ],
      reading_mnemonic: [
        'You know this kanji means <mark title="Kanji" class="kanji-highlight">Seven</mark>, so let\'s use that to remember the reading too. <mark title="Kanji" class="kanji-highlight">Seven</mark> is a lucky number, usually, but this time it wasn\'t so good.',
        '<mark title="Kanji" class="kanji-highlight">Seven</mark> percent is all she got on her test after <mark title="Reading" class="reading-highlight">she chea</mark>ted (<span lang="ja">しち</span>) on it.',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: ['七', '七つ', '七日', '北斗七星'],
    },
    {
      level: '1',
      character: '十',
      primary_meaning: 'Ten',
      meaning_hints: [
        "If you're familiar with Christianity, they have a cross and ten commandments. Cross = ten, you see?",
      ],
      meaning_mnemonic: [
        'This <mark title="Radical" class="radical-highlight">cross</mark> is the symbol for the number <mark title="Kanji" class="kanji-highlight">ten</mark>. A good way to remember this is to think about all the religions that have crosses and also important sets of tens.',
      ],
      onyomi_reading: 'じゅう',
      kunyomi_reading: 'とお',
      nanori_reading: 'None',
      reading_hints: [
        "Picture the jewels on this cross. Maybe draw it out on a piece of paper so the visual really sticks. Each cross is really a symbol for different sets of ten things, and in this case, it's ten jewels.",
      ],
      reading_mnemonic: [
        'This cross in particular has <mark title="Kanji" class="kanji-highlight">ten</mark> <mark title="Reading" class="reading-highlight">jew</mark>els (<span lang="ja">じゅう</span>) on it. Two on each arm and two in the middle. That\'s ten jewels!',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '十',
        '五十',
        '十月',
        '十六',
        '十日',
        '十万',
        '十台',
        '四十',
        '二十日',
        '三十代',
        '十分',
        '四十二',
        '十分間',
        '四十二階',
        '五十音順',
        '二十歳',
      ],
    },
    {
      level: '1',
      character: '三',
      primary_meaning: 'Three',
      meaning_hints: [
        'This one should be pretty self explanatory! Even easier, you can look at this kanji and see it has three straight lines. You know what one looks like. You know what two looks like. So... this is three!',
      ],
      meaning_mnemonic: [
        'This kanji is made up of the ground radical (which also happens to be the kanji for "one") and the radical for two. Combine <mark title="Radical" class="radical-highlight">one</mark> and <mark title="Radical" class="radical-highlight">two</mark> together and what do you get? <mark title="Kanji" class="kanji-highlight">Three</mark>!',
      ],
      onyomi_reading: 'さん',
      kunyomi_reading: 'み',
      nanori_reading: 'None',
      reading_hints: [
        "Picture Santa-san sitting at his desk at the North Pole, eating cookies, and marking one, two, then finally three lines next to names. Once the third line appears, the kid doesn't get presents anymore.",
      ],
      reading_mnemonic: [
        '<mark title="Kanji" class="kanji-highlight">Three</mark> is the number of chances you get with <mark title="Reading" class="reading-highlight">San</mark>ta-san (<span lang="ja">さん</span>). He has a list, and when you get to three "naughty things" lines, that\'s it. You\'re on Santa-san\'s three strikes and you\'re out list.',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '三',
        '三人',
        '三つ',
        '三日',
        '三世',
        '三日月',
        '三十代',
        '三角',
        '三百',
        'ナポレオン三世',
        '三角形',
        '三番目',
        '三冊',
        '三個',
        '三杯',
        '三つ編み',
      ],
    },
    {
      level: '1',
      character: '二',
      primary_meaning: 'Two',
      meaning_hints: [
        "More simply put, you can just know that this kanji is the double of one. It's two lines, that's not all that hard to remember!",
      ],
      meaning_mnemonic: [
        'The kanji <mark title="Kanji" class="kanji-highlight">two</mark> and the radical <mark title="Radical" class="radical-highlight">two</mark> are the exact same things. Therefore, you know the kanji for two already!',
      ],
      onyomi_reading: 'に',
      kunyomi_reading: 'ふた',
      nanori_reading: 'None',
      reading_hints: [
        "Imagine asking to borrow the two knees of a stranger in the street, just so you can count to two. They're confused at first, but then they present each knee to you in a loving sort of way. Yep, that's two knees alright.",
      ],
      reading_mnemonic: [
        'How do you count to <mark title="Vocabulary" class="vocabulary-highlight">two</mark>? Just use someone\'s <mark title="Reading" class="reading-highlight">knee</mark> (<span lang="ja">に</span>), and then their other knee. There — two knees!',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '二',
        '二人',
        '二つ',
        '二月',
        '二日',
        '二万',
        '二台',
        '二世',
        '二十日',
        '二百',
        '四十二',
        '二斤',
        '二時半',
        '二番',
        '二重',
        '第二章',
        '二倍',
        '四十二階',
        '二階',
        '二枚舌',
        '二巻',
        '二杯',
        '二日酔い',
        '二泊',
        '二十歳',
      ],
    },
    {
      level: '1',
      character: '女',
      primary_meaning: 'Woman',
      meaning_hints: [
        'That means if you know your radicals well, you know the meaning of this kanji as well! How swell.',
      ],
      meaning_mnemonic: [
        'The radical for <mark title="Radical" class="radical-highlight">woman</mark> and the kanji for <mark title="Kanji" class="kanji-highlight">woman</mark> are exactly the same.',
      ],
      onyomi_reading: 'じょ, にょ, にょう',
      kunyomi_reading: 'おんな, め',
      nanori_reading: 'None',
      reading_hints: [
        'Whenever the reading <span lang="ja">じょ</span> comes up, we will use the character Jo-Anne. She\'s quite a short woman, which is to help us differentiate <span lang="ja">じょ</span> from <span lang="ja">じょう</span> (who is the giant, oafish farmhand Joe). <span lang="ja">じょ</span> is a smaller lady, <span lang="ja">じょう</span> is a giant man.',
      ],
      reading_mnemonic: [
        'When you think of a <mark title="Kanji" class="kanji-highlight">woman</mark>, think of <mark title="Reading" class="reading-highlight">Jo</mark>-Anne (<span lang="ja">じょ</span>), though she usually goes by just "Jo."',
      ],
      visually_similar_kanji: [],
      found_in_vocabulary: [
        '女',
        '女の子',
        '女子',
        '王女',
        '女王',
        '少女',
        '女の人',
        '女神',
        '彼女',
        '女性',
        '女優',
        '魔女',
        '女権',
        '淑女',
        '早乙女',
      ],
    },
  ],
  radicals: [
    {
      level: '1',
      character: '亅',
      primary_meaning: 'Barb',
      mnemonic: [
        'This radical is shaped like a <mark title="Radical" class="radical-highlight">barb</mark>. Like the kind you\'d see on barb wire. Imagine one of these getting stuck to your arm or your clothes. Think about how much it would hurt with that little hook on the end sticking into you. Say out loud, "Oh dang, I got a barb stuck in me!"',
      ],
      foundInKanji: ['才', '了', '争', '慶'],
    },
    {
      level: '1',
      character: '大',
      primary_meaning: 'Big',
      mnemonic: [
        'This radical looks just like a stick figure—more specifically, a really <mark title="Radical" class="radical-highlight">big</mark> guy with his arms stretched out nice and big. When you see this radical, just think big, because this guy is really BIG!',
      ],
      foundInKanji: [
        '大',
        '太',
        '美',
        '器',
        '俺',
        '参',
        '因',
        '喫',
        '類',
        '臭',
        '崎',
        '突',
        '恩',
        '涙',
        '換',
        '奈',
        '契',
        '戻',
        '奥',
        '奪',
        '誇',
        '爽',
        '奨',
        '奮',
        '喚',
        '惨',
        '衡',
        '奔',
        '姻',
        '遷',
      ],
    },
    {
      level: '1',
      character: '工',
      primary_meaning: 'Construction',
      mnemonic: [
        'You know those big steel girders that are used for the frame of big buildings? This is like the end of one of those, and has a very distinct shape, just like this radical. These girders are used in construction, which is why this radical means <mark title="Radical" class="radical-highlight">construction</mark>. Funny thing is, you use these girders to put together buildings just like you\'re going to use this radical to put together kanji!',
      ],
      foundInKanji: [
        '工',
        '左',
        '空',
        '試',
        '功',
        '式',
        '差',
        '攻',
        '江',
        '尋',
        '紅',
        '項',
        '貢',
        '佐',
        '虹',
        '巧',
        '惰',
      ],
    },
    {
      level: '1',
      character: '十',
      primary_meaning: 'Cross',
      mnemonic: [
        'This radical looks like a <mark title="Radical" class="radical-highlight">cross</mark>. I mean, just look at it. Two bars going through each other = a cross!',
      ],
      foundInKanji: [
        '十',
        '早',
        '申',
        '草',
        '直',
        '南',
        '由',
        '朝',
        '事',
        '協',
        '卒',
        '計',
        '専',
        '率',
        '裁',
        '準',
        '載',
        '針',
        '博',
        '傘',
        '壊',
        '索',
        '懐',
        '華',
        '徳',
        '粋',
        '酔',
        '汁',
        '恵',
        '聴',
        '枠',
        '阜',
        '敷',
        '喪',
        '砕',
        '迅',
        '墳',
        '噴',
        '隼',
        '繊',
        '戴',
        '碑',
        '賊',
        '憤',
        '奔',
        '卑',
      ],
    },
    {
      level: '1',
      character: '丶',
      primary_meaning: 'Drop',
      mnemonic: [
        'This little radical is a <mark title="Radical" class="radical-highlight">drop</mark> of water or some other liquid. Notice how it\'s only one drop? Sometimes radicals or kanji will have more than one drop, so it\'s important that you know how to tell them apart.',
      ],
      foundInKanji: [
        '玉',
        '丸',
        '々',
        '太',
        '氷',
        '宝',
        '国',
        '夜',
        '州',
        '向',
        '以',
        '求',
        '追',
        '良',
        '苺',
        '術',
        '師',
        '述',
        '訴',
        '博',
        '逆',
        '添',
        '均',
        '似',
        '丼',
        '璧',
        '奥',
        '阜',
        '薄',
        '敷',
        '簿',
        '瓶',
        '帥',
        '酬',
        '之',
        '縛',
        '凡',
        '恭',
        '碑',
        '帆',
        '卑',
        '蔑',
        '慕',
      ],
    },
    {
      level: '1',
      character: '入',
      primary_meaning: 'Enter',
      mnemonic: [
        'Watch out! This isn\'t the person radical, it\'s something else. What\'s the difference? The right side is longer than the left side. And on computers, it usually has that extra part sticking out of the top. It kind of looks like a flap opening to a teepee. And what do you do with an opening? You enter it! That\'s why this radical is <mark title="Radical" class="radical-highlight">enter</mark>.',
      ],
      foundInKanji: ['入', '込', '久'],
    },
    {
      level: '1',
      character: 'ハ',
      primary_meaning: 'Fins',
      mnemonic: [
        'Picture a fish. Now picture the fish a little worse, like a child\'s drawing of the fish. Now erase the fish\'s body and... you\'re left with two <mark title="Radical" class="radical-highlight">fins</mark>! Do you see these two fins? Yeah, you see them.',
      ],
      foundInKanji: [
        '八',
        '六',
        '分',
        '谷',
        '船',
        '具',
        '業',
        '公',
        '共',
        '養',
        '真',
        '典',
        '兵',
        '挙',
        '演',
        '鉛',
        '浜',
        '益',
        '興',
        '沿',
        '誉',
        '冥',
      ],
    },
    {
      level: '1',
      character: '一',
      primary_meaning: 'Ground',
      mnemonic: [
        'This radical consists of a single, horizontal stroke. What\'s the biggest, single, horizontal stroke? That\'s the <mark title="Radical" class="radical-highlight">ground</mark>. Look at the ground, look at this radical, now look at the ground again. Kind of the same, right?',
      ],
      foundInKanji: [
        '上',
        '下',
        '一',
        '三',
        '正',
        '才',
        '写',
        '号',
        '来',
        '同',
        '両',
        '前',
        '室',
        '屋',
        '具',
        '使',
        '求',
        '便',
        '低',
        '輪',
        '昼',
        '係',
        '真',
        '底',
        '兵',
        '善',
        '論',
        '妻',
        '岡',
        '挙',
        '域',
        '更',
        '師',
        '武',
        '与',
        '再',
        '極',
        '惑',
        '浜',
        '益',
        '並',
        '監',
        '覧',
        '帯',
        '興',
        '宣',
        '磁',
        '貴',
        '互',
        '抵',
        '誉',
        '滅',
        '威',
        '垣',
        '滋',
        '丘',
        '岳',
        '巧',
        '后',
        '瓶',
        '慈',
        '邸',
        '恒',
        '遭',
        '倫',
        '蒙',
        '賓',
        '槽',
        '朽',
        '曹',
        '寡',
      ],
    },
    {
      level: '1',
      character: '𠂉',
      primary_meaning: 'Gun',
      mnemonic: [
        'This looks a lot like a long <mark title="Radical" class="radical-highlight">gun</mark> pointing to the right. You have a shoulder rest on the left, and the barrel on the right. Imagine it hanging in a case on the wall in a museum.',
      ],
      foundInKanji: [
        '年',
        '毎',
        '海',
        '族',
        '旅',
        '塩',
        '梅',
        '施',
        '乾',
        '監',
        '飾',
        '旗',
        '覧',
        '遊',
        '傷',
        '臨',
        '称',
        '御',
        '弥',
        '旋',
      ],
    },
    {
      level: '1',
      character: '亠',
      primary_meaning: 'Lid',
      mnemonic: [
        'This looks like something you\'d put on a kettle or a pot, right? It even has a little handle to make sure you don\'t burn yourself. This is some kind of <mark title="Radical" class="radical-highlight">lid</mark>.',
      ],
      foundInKanji: [
        '六',
        '円',
        '市',
        '交',
        '京',
        '夜',
        '校',
        '高',
        '卒',
        '幸',
        '率',
        '航',
        '豪',
        '裏',
        '抗',
        '褒',
        '哀',
        '衰',
        '壇',
        '亮',
        '擁',
        '凛',
        '坑',
        '冥',
      ],
    },
    {
      level: '1',
      character: '山',
      primary_meaning: 'Mountain',
      mnemonic: [
        'This is a <mark title="Radical" class="radical-highlight">mountain</mark>. You\'ll have to add the lines that make up the top of the mountain if you want it more "mountain-like." Also something that might help: sometimes mountains have a couple of smaller peaks coming out the side of the main peak too. Connect the dots and create the mountain in your mind.',
      ],
      foundInKanji: [
        '山',
        '出',
        '両',
        '岸',
        '島',
        '岩',
        '岡',
        '崎',
        '徴',
        '端',
        '微',
        '催',
        '帯',
        '密',
        '崩',
        '岐',
        '仙',
        '炭',
        '懲',
        '嵐',
        '岳',
        '幽',
        '崖',
        '峰',
        '峡',
        '瑞',
        '岬',
        '峠',
        '崇',
      ],
    },
    {
      level: '1',
      character: '口',
      primary_meaning: 'Mouth',
      mnemonic: [
        'A big, gaping, square hole represents someone opening their giant <mark title="Radical" class="radical-highlight">mouth</mark> to tell you something stupid.',
      ],
      foundInKanji: [
        '口',
        '四',
        '右',
        '台',
        '名',
        '号',
        '申',
        '図',
        '兄',
        '回',
        '谷',
        '京',
        '国',
        '知',
        '曲',
        '船',
        '民',
        '由',
        '高',
        '君',
        '局',
        '客',
        '事',
        '和',
        '保',
        '乗',
        '鳴',
        '語',
        '命',
        '味',
        '別',
        '員',
        '橋',
        '賞',
        '問',
        '固',
        '囲',
        '園',
        '因',
        '堂',
        '常',
        '喜',
        '塩',
        '告',
        '喫',
        '叩',
        '喉',
        '加',
        '団',
        '善',
        '害',
        '困',
        '個',
        '賀',
        '域',
        '吸',
        '呼',
        '割',
        '含',
        '鉛',
        '極',
        '惑',
        '程',
        '豪',
        '尋',
        '嘆',
        '恩',
        '否',
        '噂',
        '糖',
        '咳',
        '聖',
        '沿',
        '吐',
        '噌',
        '喋',
        '換',
        '絹',
        '噛',
        '囚',
        '圏',
        '吹',
        '唱',
        '嘘',
        '喧',
        '嘩',
        '喪',
        '哲',
        '叱',
        '叫',
        '菌',
        '呪',
        '吾',
        '猿',
        '架',
        '如',
        '唇',
        '掌',
        '哀',
        '咲',
        '悟',
        '唯',
        '鰐',
        '唐',
        '諮',
        '后',
        '亮',
        '喚',
        '噴',
        '唆',
        '啓',
        '剰',
        '杏',
        '拐',
        '呈',
        '呆',
        '痴',
        '哺',
        '轄',
        '嘉',
        '智',
        '哉',
        '喝',
        '嘱',
        '姻',
        '吟',
        '矯',
        '唄',
      ],
    },
    {
      level: '1',
      character: '九',
      primary_meaning: 'Nine',
      mnemonic: [
        'If you look at this radical in just the right way, you\'ll notice that it kind of looks like the letters "n" and "i" (the "i" comes from the little flippy-up stroke on the right side). What do the letters "n" and "i" start spelling? Why, the word <mark title="Radical" class="radical-highlight">nine</mark>.',
      ],
      foundInKanji: [
        '九',
        '丸',
        '究',
        '尻',
        '染',
        '雑',
        '粋',
        '酔',
        '枠',
        '鳩',
        '砕',
        '軌',
      ],
    },
    {
      level: '1',
      character: '人',
      primary_meaning: 'Person',
      mnemonic: [
        'If you were to draw a <mark title="Radical" class="radical-highlight">person</mark> with just strokes like you see in kanji, you\'d create a stick figure, maybe something like this: <span lang="ja">大</span>. But this is just a person, not someone holding out their arms to show how big they are. So their arms are down, which makes them look like a torso with a pair of legs. Maybe they\'re walking too, which is why their legs are spread out like that. You can see the person now, can\'t you?',
      ],
      foundInKanji: [
        '人',
        '内',
        '以',
        '決',
        '卒',
        '座',
        '機',
        '傘',
        '快',
        '幾',
        '似',
        '囚',
        '脊',
      ],
    },
    {
      level: '1',
      character: '力',
      primary_meaning: 'Power',
      mnemonic: [
        'Imagine a guy flexing his arm downward to show off his steroid-pumped arm. It\'s huge. It\'s so full of <mark title="Radical" class="radical-highlight">power</mark>. RARRRWWWRRR!!',
      ],
      foundInKanji: [
        '力',
        '助',
        '勝',
        '功',
        '労',
        '努',
        '働',
        '勉',
        '動',
        '協',
        '加',
        '務',
        '賀',
        '勢',
        '効',
        '励',
        '幼',
        '勧',
        '筋',
        '勤',
        '募',
        '架',
        '霧',
        '脇',
        '脅',
        '劣',
        '勘',
        '勲',
        '嘉',
        '劾',
      ],
    },
    {
      level: '1',
      character: '勹',
      primary_meaning: 'Prison',
      mnemonic: [
        'This looks like an enclosure of sorts - that\'s why it\'s a <mark title="Radical" class="radical-highlight">prison</mark>. It wraps itself around things and locks them in there. Prisons are pretty scary, even before you imagine one slowly floating down from the sky to trap you.',
      ],
      foundInKanji: [
        '々',
        '号',
        '角',
        '負',
        '争',
        '危',
        '急',
        '胸',
        '極',
        '渇',
        '匂',
        '汚',
        '換',
        '掲',
        '旬',
        '菊',
        '誇',
        '陶',
        '巧',
        '鰐',
        '喚',
        '陥',
        '衡',
        '喝',
        '濁',
        '朽',
        '殉',
      ],
    },
    {
      level: '1',
      character: '川',
      primary_meaning: 'River',
      mnemonic: [
        'This radical already looks like a <mark title="Radical" class="radical-highlight">river</mark>. See the banks of the river on the side and the flow of the river in the middle? There\'s even a slight turn in the river too. So when you see this radical, you should think "river."',
      ],
      foundInKanji: ['川', '州', '流', '訓', '順', '荒', '酬', '硫'],
    },
    {
      level: '1',
      character: '七',
      primary_meaning: 'Seven',
      mnemonic: [
        'What does this radical look like? Hmm, nothing much. What about if you turn it upside down? Now does it look like a 7 with a line through it? Close enough to help you to remember that this radical is <mark title="Radical" class="radical-highlight">seven</mark>, right? Just remember, when you see this radical, flip it over and see what number it looks like. If you can do that, you can remember the meaning!',
      ],
      foundInKanji: ['七', '切', '宅', '託', '叱', '窃'],
    },
    {
      level: '1',
      character: '丿',
      primary_meaning: 'Slide',
      mnemonic: [
        'Close your eyes and imagine you\'re a kid again. Now open them and... look! It\'s a <mark title="Radical" class="radical-highlight">slide</mark>! Imagine little you sliding down this slide over and over, having a great time. Imagination + emotion makes for good memorization!',
      ],
      foundInKanji: [
        '才',
        '少',
        '午',
        '先',
        '皮',
        '弟',
        '歩',
        '必',
        '失',
        '風',
        '君',
        '身',
        '感',
        '告',
        '減',
        '宅',
        '株',
        '昇',
        '久',
        '戚',
        '託',
        '邦',
        '茂',
        '滅',
        '威',
        '朱',
        '歳',
        '伊',
        '珠',
        '殊',
        '鋳',
        '蔑',
        '升',
      ],
    },
    {
      level: '1',
      character: '丨',
      primary_meaning: 'Stick',
      mnemonic: [
        'This is a <mark title="Radical" class="radical-highlight">stick</mark>, sticking out of the ground. It even looks like a stick.',
      ],
      foundInKanji: [
        '北',
        '引',
        '声',
        '弟',
        '存',
        '在',
        '候',
        '児',
        '修',
        '旧',
        '眉',
        '悠',
        '粛',
        '弔',
      ],
    },
    {
      level: '1',
      character: '日',
      primary_meaning: 'Sun',
      mnemonic: [
        'Since there are no circles in Japanese characters, sometimes rectangles or squares have to make do. In this case, this big rectangle is the <mark title="Radical" class="radical-highlight">sun</mark>. The middle line going through the center horizontally is the equator. Or maybe it\'s a cloud, moving across the sun. Picture it, but don\'t actually look at the sun and burn your eyes!',
      ],
      foundInKanji: [
        '日',
        '早',
        '百',
        '草',
        '音',
        '明',
        '東',
        '星',
        '映',
        '時',
        '間',
        '朝',
        '者',
        '最',
        '指',
        '昔',
        '暑',
        '温',
        '暗',
        '題',
        '苺',
        '晴',
        '晩',
        '昼',
        '昨',
        '春',
        '冒',
        '曜',
        '書',
        '是',
        '得',
        '昆',
        '混',
        '暴',
        '厚',
        '提',
        '替',
        '景',
        '影',
        '昇',
        '暇',
        '児',
        '宴',
        '渇',
        '照',
        '婚',
        '撮',
        '普',
        '暖',
        '暮',
        '旧',
        '踏',
        '掲',
        '香',
        '旬',
        '昭',
        '唱',
        '潜',
        '潟',
        '暫',
        '晶',
        '旨',
        '暦',
        '曇',
        '湿',
        '帽',
        '挿',
        '隙',
        '衰',
        '漫',
        '堰',
        '堤',
        '脂',
        '遭',
        '慢',
        '曙',
        '顕',
        '昌',
        '智',
        '喝',
        '槽',
        '暁',
        '譜',
        '曹',
        '殉',
        '冥',
      ],
    },
    {
      level: '1',
      character: 'ト',
      primary_meaning: 'Toe',
      mnemonic: [
        'This radical looks just like the katakana character <span lang="ja">ト</span> (to), which sounds like the word <mark title="Radical" class="radical-highlight">toe</mark>. So when you see <span lang="ja">ト</span>, think toe.',
      ],
      foundInKanji: [
        '上',
        '下',
        '外',
        '掛',
        '偵',
        '卓',
        '貞',
        '悼',
        '赴',
        '朴',
      ],
    },
    {
      level: '1',
      character: '木',
      primary_meaning: 'Tree',
      mnemonic: [
        'Do you see the <mark title="Radical" class="radical-highlight">tree</mark> in here? It has branches, and then it has the foliage coming down diagonally from it, spreading out like a tree would. That\'s why this radical is a tree.',
      ],
      foundInKanji: [
        '木',
        '休',
        '村',
        '林',
        '東',
        '札',
        '床',
        '校',
        '楽',
        '森',
        '相',
        '新',
        '保',
        '集',
        '葉',
        '親',
        '横',
        '深',
        '植',
        '根',
        '橋',
        '様',
        '想',
        '殺',
        '標',
        '材',
        '松',
        '格',
        '箱',
        '梅',
        '枚',
        '禁',
        '歴',
        '械',
        '困',
        '機',
        '刺',
        '条',
        '検',
        '査',
        '権',
        '築',
        '策',
        '案',
        '棚',
        '株',
        '模',
        '栄',
        '構',
        '極',
        '板',
        '杯',
        '柵',
        '枕',
        '探',
        '棒',
        '菜',
        '机',
        '染',
        '採',
        '雑',
        '桜',
        '枝',
        '杉',
        '喋',
        '核',
        '膝',
        '棋',
        '枠',
        '柱',
        '樹',
        '析',
        '枢',
        '柄',
        '摩',
        '柔',
        '桃',
        '梨',
        '暦',
        '磨',
        '椅',
        '魔',
        '棟',
        '架',
        '柳',
        '彩',
        '霜',
        '麻',
        '概',
        '謀',
        '礎',
        '桑',
        '鬱',
        '襟',
        '枯',
        '杏',
        '栞',
        '欄',
        '呆',
        '栓',
        '栃',
        '朴',
        '柴',
        '蝶',
        '楓',
        '槽',
        '傑',
        '媒',
        '朽',
        '椎',
        '梓',
        '漆',
        '閑',
        '某',
        '桟',
      ],
    },
    {
      level: '1',
      character: '二',
      primary_meaning: 'Two',
      mnemonic: [
        'One line plus another line equals <mark title="Radical" class="radical-highlight">two</mark> lines. This radical represents the number two. Pretty simple, right? Can you guess what three looks like? I bet you can...',
      ],
      foundInKanji: [
        '三',
        '二',
        '冬',
        '終',
        '汚',
        '承',
        '仁',
        '霊',
        '誇',
        '鰐',
        '脊',
        '那',
      ],
    },
    {
      level: '1',
      character: '女',
      primary_meaning: 'Woman',
      mnemonic: [
        'This radical looks like a wide person made up of two stacked Xs. Women generally have two XXs for chromosomes, and back in the day they were praised for their wide, child-bearing hips. We may not think of women this way anymore, but way back when Japanese was made, this made them think of a <mark title="Radical" class="radical-highlight">woman</mark>.',
      ],
      foundInKanji: [
        '女',
        '姉',
        '安',
        '妹',
        '数',
        '要',
        '始',
        '好',
        '努',
        '妥',
        '嫌',
        '妻',
        '委',
        '姿',
        '腰',
        '接',
        '怒',
        '妙',
        '婦',
        '宴',
        '娘',
        '婚',
        '妨',
        '桜',
        '奴',
        '姓',
        '妊',
        '娠',
        '嬉',
        '妖',
        '威',
        '姫',
        '娯',
        '嫁',
        '嬢',
        '如',
        '婆',
        '妃',
        '堰',
        '媛',
        '媒',
        '姻',
        '婿',
        '妄',
      ],
    },
  ],
  vocabulary: [
    {
      level: '1',
      character: '上',
      primary_meaning: 'Above',
      alternative_meanings: 'Up, Over',
      word_type: 'noun, suffix',
      meaning_explanation: [
        'When a vocab word is a single kanji and alone, it tends to steal the meaning from the kanji. Same goes for this one too. It means <mark title="Vocabulary" class="vocabulary-highlight">above</mark> or <mark title="Vocabulary" class="vocabulary-highlight">up</mark>.',
      ],
      reading_explanation: [
        "When a vocab word is a single kanji and doesn't have okurigana (hiragana attached to the kanji) it usually will use the kun'yomi. Since you learned the on'yomi reading of the kanji, we'll need to use a mnemonic to learn the reading of this vocabulary word.",
        '<mark title="Vocabulary" class="vocabulary-highlight">Above</mark> you is a huge weight. You\'re holding it up and struggling (it\'s heavy!). You look up and try to crane your neck to see how much it <mark title="Reading" class="reading-highlight">weigh</mark>s (<span lang="ja">うえ</span>), but you can\'t see the numbers on the side of it. How long can you hold it above your head like this?',
      ],
      readingWitAudios: [
        {
          reading: 'うえ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/6y3pdrtdxoy54n8fllez3td8qup1',
                'https://files.wanikani.com/06ndn5zksaa6aui6691n15l75lte',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/jjjx1zwq0rq42lcm0l131gnn0e5j',
                'https://files.wanikani.com/0i4twkis2u3qdec9lmul92m7m5hx',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '山の上でヨガをしたいね。',
          en_sentence: 'I want to do yoga on top of a mountain.',
        },
        {
          jp_sentence: '上のフロアにキッチンがあります。',
          en_sentence: 'There is a kitchen on the floor above.',
        },
        {
          jp_sentence: 'リビングルームの上にロフトがあります。',
          en_sentence: 'There is a loft above the living room.',
        },
      ],
      patterns_of_use: ['上の〜', '〜の上', '上に〜'],
      common_word_combinations: [
        {
          jp_sentence: '上の人',
          en_sentence: 'superior, person who lives upstairs',
        },
        {
          jp_sentence: '上のレベル',
          en_sentence: 'the level above',
        },
        {
          jp_sentence: '上の二つ',
          en_sentence: 'the top two',
        },
        {
          jp_sentence: '人の上',
          en_sentence: 'superior to other people',
        },
        {
          jp_sentence: 'ベッドの上',
          en_sentence: 'on the bed',
        },
        {
          jp_sentence: 'テーブルの上',
          en_sentence: 'on the table',
        },
        {
          jp_sentence: '上におく',
          en_sentence: 'to put on top',
        },
        {
          jp_sentence: '上にいる',
          en_sentence: 'to be upstairs',
        },
        {
          jp_sentence: '上にある',
          en_sentence: 'to be on top, to be upstairs',
        },
      ],
    },
    {
      level: '1',
      character: '大人',
      primary_meaning: 'Adult',
      alternative_meanings: 'Mature',
      word_type: 'noun, な adjective, の adjective',
      meaning_explanation: [
        'This kanji combines <mark title="Kanji" class="kanji-highlight">big</mark> and <mark title="Kanji" class="kanji-highlight">person</mark>. If you\'re a child, how do you think of adults? You just think of them like big people. That\'s why this combination of kanji means <mark title="Vocabulary" class="vocabulary-highlight">adult</mark>, and when used like an adjective, it means <mark title="Vocabulary" class="vocabulary-highlight">mature</mark>.',
      ],
      reading_explanation: [
        'Sometimes kanji have exceptional readings that are neither on’yomi, nor kun’yomi, and this is one of them. So here’s a mnemonic to help you remember this reading:',
        '"I\'m an <mark title="Vocabulary" class="vocabulary-highlight">adult</mark>, which means I have adult responsibilities, like… <mark title="Reading" class="reading-highlight">oh, toner</mark> (<span lang="ja">おとな</span>)!" Are you an adult with your own toner printer? Ohhhh, toner…',
      ],
      readingWitAudios: [
        {
          reading: 'おとな',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/h33v19wb6x40nc874v56smkmv9dg',
                'https://files.wanikani.com/mfhjdfhy27la3mxhxwxtahywnnjo',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/zindbdz5lgvj5mzpbyqhuezzm0zl',
                'https://files.wanikani.com/dd0oow8446utcew8vt5zbr5mslzs',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '大人のチケット下さい。',
          en_sentence: 'A ticket for an adult, please.',
        },
        {
          jp_sentence: 'PG-18は大人のためのコンテンツです。',
          en_sentence: 'PG-18 is content for adults.',
        },
        {
          jp_sentence:
            'わたしは「大人の女」をテーマにしたファッションマガジンのモデルです。',
          en_sentence:
            'I am a model for a fashion magazine that caters to "mature women."',
        },
      ],
      patterns_of_use: ['大人〜', '大人な〜', '大人の〜', '大人に〜'],
      common_word_combinations: [
        {
          jp_sentence: '大人っぽい',
          en_sentence: 'adult-like, mature',
        },
        {
          jp_sentence: '大人たち',
          en_sentence: 'adults',
        },
        {
          jp_sentence: '大人だけ',
          en_sentence: 'adults only',
        },
        {
          jp_sentence: '大人な人',
          en_sentence: 'a mature person',
        },
        {
          jp_sentence: '大人な女',
          en_sentence: 'a mature woman',
        },
        {
          jp_sentence: '大人なイメージ',
          en_sentence: 'a mature impression',
        },
        {
          jp_sentence: '大人の女',
          en_sentence: 'an adult woman',
        },
        {
          jp_sentence: '大人の人',
          en_sentence: 'an adult',
        },
        {
          jp_sentence: '大人のマナー',
          en_sentence: 'adult manners',
        },
        {
          jp_sentence: '大人になる',
          en_sentence: 'become an adult, become mature',
        },
        {
          jp_sentence: '大人になりたい',
          en_sentence: 'want to become an adult, want to become mature',
        },
      ],
    },
    {
      level: '1',
      character: '一人',
      primary_meaning: 'Alone',
      alternative_meanings: 'One Person',
      word_type: 'noun',
      meaning_explanation: [
        'When there\'s <mark title="Kanji" class="kanji-highlight">one</mark> <mark title="Kanji" class="kanji-highlight">person</mark>, what are they? Well, they\'re either just going to be simply <mark title="Vocabulary" class="vocabulary-highlight">one person</mark> or <mark title="Vocabulary" class="vocabulary-highlight">alone</mark>.',
      ],
      reading_explanation: [
        "The reading for this vocab doesn't follow any rules you learned previously. It's an exception, which means you have to learn the reading separately too. Spend a few moments trying to remember this word, look away for 10 seconds, and then try to recall its reading. Could you do it? Try again, this time in thirty seconds. Did you do it again? Okay, go ahead and move on. You may know it now, though you'll need to recall it again in the next 5-10 minutes if you want to remember it for good.",
        'Alternatively, if you know the reading for the vocab word <span lang="ja">一つ</span> (in the same level as this word), you can know that it uses the same reading!',
      ],
      readingWitAudios: [
        {
          reading: 'ひとり',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/aozrzuoyhdtpnev2m8rf4onhbrlj',
                'https://files.wanikani.com/pw5uohiopz1oy62n7vc200jitsj3',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/2ut3doo88twejzftui6sq80xa9rj',
                'https://files.wanikani.com/f8kec9ync0rpvw85mmb7lcks38oo',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '一人でカラオケにいきました。',
          en_sentence: 'I went to karaoke alone.',
        },
        {
          jp_sentence: '一人なので、カウンターでもいいですよ。',
          en_sentence: "I'm by myself, so I'm fine with a counter seat.",
        },
        {
          jp_sentence: 'はじめて一人でドライブにいった。',
          en_sentence: 'For the first time, I went for a drive alone.',
        },
      ],
      patterns_of_use: ['一人の〜', '一人で〜'],
      common_word_combinations: [
        {
          jp_sentence: '一人の女',
          en_sentence: 'one woman',
        },
        {
          jp_sentence: '一人の力',
          en_sentence: 'the strength of one person',
        },
        {
          jp_sentence: '一人の人',
          en_sentence: 'one person',
        },
        {
          jp_sentence: '一人でする',
          en_sentence: 'to do something alone',
        },
        {
          jp_sentence: '一人でできる',
          en_sentence: 'to be able to do something alone',
        },
        {
          jp_sentence: '一人でいる',
          en_sentence: 'to be by oneself',
        },
      ],
    },
    {
      level: '1',
      character: '人工',
      primary_meaning: 'Artificial',
      alternative_meanings: 'Man Made, Human Made',
      word_type: 'noun, の adjective',
      meaning_explanation: [
        'A <mark title="Kanji" class="kanji-highlight">person</mark> of <mark title="Kanji" class="kanji-highlight">industry</mark> makes a lot of things by hand, so everything they make is <mark title="Vocabulary" class="vocabulary-highlight">artificial</mark>, and also means it\'s <mark title="Vocabulary" class="vocabulary-highlight">man made</mark>.',
      ],
      reading_explanation: [
        "This is a jukugo word, which usually means on'yomi readings from the kanji. Since <span lang=\"ja\">人</span> has two on'yomi readings, here's a mnemonic to help you remember which one to use:",
        'Remember this by thinking about how <mark title="Reading" class="reading-highlight">jean</mark>s (<span lang="ja">じん</span>) are <mark title="Vocabulary" class="vocabulary-highlight">artificial</mark>. You\'ve never seen jeans growing on trees, right? Nope, jeans are 100% <mark title="Vocabulary" class="vocabulary-highlight">man made</mark>.',
      ],
      readingWitAudios: [
        {
          reading: 'じんこう',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/hr6ky6kym70twvxjnk1v1fwhknud',
                'https://files.wanikani.com/5nkuq35cadr8it58e435wk539zxc',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/glq34wvwqgonvhvgrahjfdozxohb',
                'https://files.wanikani.com/d45yposqkvs3q1tunko54hzrauod',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'これ、ほんとうに人工コアラ？',
          en_sentence: 'Is this really an artificial koala?',
        },
        {
          jp_sentence: 'この川は、人工の川です。',
          en_sentence: 'This river is man-made.',
        },
        {
          jp_sentence: 'このクオリティ、人工のバラだとはおもえない！',
          en_sentence:
            "With this quality it's unbelievable that these are artificial roses!",
        },
      ],
      patterns_of_use: ['人工の〜'],
      common_word_combinations: [
        {
          jp_sentence: '人工の川',
          en_sentence: 'man-made river',
        },
        {
          jp_sentence: '人工のダム',
          en_sentence: 'man-made dam',
        },
        {
          jp_sentence: '人工の山',
          en_sentence: 'artificial mountain',
        },
      ],
    },
    {
      level: '1',
      character: '下',
      primary_meaning: 'Below',
      alternative_meanings: 'Under, Beneath, Down',
      word_type: 'noun',
      meaning_explanation: [
        'When a vocab is a single kanji with no okurigana (that\'s hiragana attached to the kanji) it tends to steal the meaning of the kanji it comes from. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">below</mark> or <mark title="Vocabulary" class="vocabulary-highlight">under</mark>.',
      ],
      reading_explanation: [
        "When a vocab is a single kanji and is alone it tends to use the kun'yomi reading. You learned the on'yomi reading for this kanji, so now it's time to learn the kun'yomi reading to learn this vocabulary word.",
        'What\'s <mark title="Vocabulary" class="vocabulary-highlight">below</mark> you? What\'s below your foot? Oh no. The worst thing possible: It\'s <span lang="ja"><mark title="Reading" class="reading-highlight">した</mark></span>.',
      ],
      readingWitAudios: [
        {
          reading: 'した',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/dfiq1xgrn16u52sthd9hrvh2g2z4',
                'https://files.wanikani.com/vv3emvss85mjym7ue5k895hy4rvf',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/kpnstauxnwahvlx2pp0gcjfcrjnh',
                'https://files.wanikani.com/pnkclnq9kurr7i4owbfb91l1t5x7',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'あ、テーブルの下にハムスターがいる！',
          en_sentence: "Oh, there's a hamster under the table!",
        },
        {
          jp_sentence: '下のフロアに、きてください。',
          en_sentence: 'Please come downstairs.',
        },
        {
          jp_sentence: '山の下に大きいレストランがあるよ。',
          en_sentence: "There's a large restaurant down the mountain.",
        },
      ],
      patterns_of_use: ['下の〜', '下に〜', '〜の下'],
      common_word_combinations: [
        {
          jp_sentence: '下のグラフ',
          en_sentence: 'the graph below',
        },
        {
          jp_sentence: '下のイメージ',
          en_sentence: 'the image below',
        },
        {
          jp_sentence: '下のほう',
          en_sentence: 'the lower part',
        },
        {
          jp_sentence: '下におく',
          en_sentence:
            'to put something under something, to put something on the ground',
        },
        {
          jp_sentence: '下にいる',
          en_sentence: 'to be under, to be downstairs',
        },
        {
          jp_sentence: '下にある',
          en_sentence: 'to be under, to be downstairs',
        },
        {
          jp_sentence: 'テーブルの下',
          en_sentence: 'under the table',
        },
        {
          jp_sentence: 'ページの下',
          en_sentence: 'bottom of the page',
        },
        {
          jp_sentence: 'ベッドの下',
          en_sentence: 'under the bed',
        },
      ],
    },
    {
      level: '1',
      character: '大きい',
      primary_meaning: 'Big',
      alternative_meanings: 'Large',
      word_type: 'い adjective',
      meaning_explanation: [
        'This is the adjective form of <mark title="Kanji" class="kanji-highlight">big</mark>. It has the same meaning, though it is a word for describing. Words that end with <span lang="ja">い</span> are often adjectives, remember that for future words as well. So, as long as you know the meaning of this kanji, you can transfer that to the meaning of this word. It\'s the adjective <mark title="Vocabulary" class="vocabulary-highlight">big</mark>, or <mark title="Vocabulary" class="vocabulary-highlight">large</mark>.',
      ],
      reading_explanation: [
        'What do you do when you see something really, really <mark title="Vocabulary" class="vocabulary-highlight">big</mark>? You say <mark title="Reading" class="reading-highlight"><span lang="ja">おお</span></mark> because you can\'t believe your eyes. Imagine something really large and say <span lang="ja">おお</span> out loud to help seal the memory in that brain of yours.',
      ],
      readingWitAudios: [
        {
          reading: 'おおきい',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/rrmbdqnyeta62f2xwnzo4v2b6vjt',
                'https://files.wanikani.com/473oe5ydwk6zpnz9le40w4j7wolu',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/3ik3cyohi0xwhlmsdp6j82z6b4dj',
                'https://files.wanikani.com/z77fneh2u9m5v7xhckj0nftsk85t',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '大きいメロンを下さい。',
          en_sentence: 'A large melon, please.',
        },
        {
          jp_sentence: 'このサンダルは大きすぎる。',
          en_sentence: 'These sandals are too big.',
        },
        {
          jp_sentence: 'これよりも大きいサイズありますか？',
          en_sentence: 'Does this come in a larger size?',
        },
      ],
      patterns_of_use: ['大きい〜', '〜が大きい'],
      common_word_combinations: [
        {
          jp_sentence: '大きいレモン',
          en_sentence: 'a big lemon',
        },
        {
          jp_sentence: '大きいサイズ',
          en_sentence: 'a large size',
        },
        {
          jp_sentence: '大きいヌイグルミ',
          en_sentence: 'a big stuffed animal',
        },
        {
          jp_sentence: 'リスクが大きい',
          en_sentence: 'the risk is high',
        },
        {
          jp_sentence: 'メリットが大きい',
          en_sentence: 'the benefits are great',
        },
        {
          jp_sentence: 'サイズが大きい',
          en_sentence: 'the size is large',
        },
      ],
    },
    {
      level: '1',
      character: '八',
      primary_meaning: 'Eight',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'When a vocab is a single kanji it usually steals its meaning from its kanji as well. Same goes for this vocab word. It means <mark title="Vocabulary" class="vocabulary-highlight">eight</mark>.',
      ],
      reading_explanation: [
        "When a vocab is a single kanji and all alone like this, it's usually going to use the kun'yomi. But, because this is a number (exception) it uses the on'yomi instead, meaning you already know the reading from when you learned the kanji!",
      ],
      readingWitAudios: [
        {
          reading: 'はち',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/o0go6hsa8r1b8sdejqyr8xn0q180',
                'https://files.wanikani.com/o8504s0cckn2256uyzj6w8ar7an0',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/b927kqw61zfuxg1ld8wieo6c89cj',
                'https://files.wanikani.com/l6e9ipm38dskg85yt7xj7cyk647i',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'これは八ページのエッセイです。',
          en_sentence: 'This is an eight-page essay.',
        },
        {
          jp_sentence: 'トイレットペーパーが八ロールしかない。',
          en_sentence: 'There are only eight rolls of toilet paper.',
        },
        {
          jp_sentence: 'パパは八トントラックのドライバーなんです。',
          en_sentence: 'Dad is an eight-ton truck driver.',
        },
      ],
      patterns_of_use: ['八 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '八メートル',
          en_sentence: 'eight meters',
        },
        {
          jp_sentence: '八ミリ',
          en_sentence: 'eight millimeters',
        },
        {
          jp_sentence: '八人',
          en_sentence: 'eight people',
        },
      ],
    },
    {
      level: '1',
      character: '八つ',
      primary_meaning: 'Eight Things',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'This word follows the "number of things" pattern where there\'s a kanji for a number plus <span lang="ja">つ</span> on the end. Whenever you see this, you know the word means "____ things." Knowing that, as long as you know the kanji (which you do) you can figure out what number of things it is. For this one, it\'s the kanji for <mark title="Kanji" class="kanji-highlight">eight</mark> plus <span lang="ja">つ</span>. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">eight things</mark>.',
      ],
      reading_explanation: [
        'Since all of the "number of things" words follow the same pattern (number + <span lang="ja">つ</span>), you really just have to remember the part before the <span lang="ja">つ</span> (and then remember that the <span lang="ja">つ</span> is in all of these). All of the readings are kun\'yomi, and since you only know the on\'yomi reading for the kanji, we\'ll have to use a mnemonic to remember them.',
        'So what <mark title="Vocabulary" class="vocabulary-highlight">eight things</mark> do you have? You have eight <mark title="Reading" class="reading-highlight">yachts</mark> (<span lang="ja">やっつ</span>). Go ahead and count them, drifting on the water. They\'re beautiful. Also, be sure not to be confused by this particular reading mnemonic. It includes the <span lang="ja">つ</span>, even though the <span lang="ja">つ</span> is outside the reading you need to learn (just makes things easier for you overall). Since you can see the <span lang="ja">つ</span> outside, it shouldn\'t be too difficult for you.',
      ],
      readingWitAudios: [
        {
          reading: 'やっつ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/quhwh78pine0cra3jagf07xa4dng',
                'https://files.wanikani.com/2ve9atfx3sj2uyw5j5x6xxwybpsn',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/dgii58tjd4sfdccf4mivp079jx35',
                'https://files.wanikani.com/bck8gd5rey1s9u701y2kmywsbt4c',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このカレーにはじゃがいもが八つ入っています。',
          en_sentence: 'This curry has eight potatoes in it.',
        },
        {
          jp_sentence: 'キットカットが八つ、口に入ってます。',
          en_sentence: 'There are eight KitKats in my mouth.',
        },
        {
          jp_sentence:
            'うちのおばあちゃんはインスタグラムだけで八つもアカウントをもってるんだ。',
          en_sentence: 'My grandma has eight accounts on Instagram alone.',
        },
      ],
      patterns_of_use: ['八つの〜'],
      common_word_combinations: [
        {
          jp_sentence: '八つのタイプ',
          en_sentence: 'eight types',
        },
        {
          jp_sentence: '八つのキーワード',
          en_sentence: 'eight keywords',
        },
        {
          jp_sentence: '八つの山',
          en_sentence: 'eight mountains',
        },
      ],
    },
    {
      level: '1',
      character: '入り口',
      primary_meaning: 'Entrance',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'A <mark title="Kanji" class="kanji-highlight">mouth</mark> that you <mark title="Kanji" class="kanji-highlight">enter</mark> is an <mark title="Vocabulary" class="vocabulary-highlight">entrance</mark>.',
      ],
      reading_explanation: [
        "This word is really two separate words put together to form one, so let's look at it in two parts:",
        'The kanji <span lang="ja">入</span> has <span lang="ja">り</span> attached to it as okurigana (hiragana that comes after a kanji), so you can bet that <span lang="ja">入り</span> will use a kun\'yomi reading for the kanji. You haven\'t learned this reading yet, so here\'s a mnemonic to help you:',
        'The <mark title="Vocabulary" class="vocabulary-highlight">entrance</mark> you\'re going through is really <mark title="Reading" class="reading-highlight">eerie</mark> (<span lang="ja">いり</span>). It has cobwebs and creepy figures carved into it, and it just gives you a really eerie feeling.',
        'Since <span lang="ja">入り</span> uses the kun\'yomi, you can guess that <span lang="ja">口</span> will follow suit. You learned this reading with the vocabulary, but the <span lang="ja">く</span> in <span lang="ja">くち</span> changes to <span lang="ja">ぐ</span> due to something called rendaku. Think of it as an eerie entrance into the <mark title="Reading" class="reading-highlight">Gucci</mark> (<span lang="ja">ぐち</span>) store.',
      ],
      readingWitAudios: [
        {
          reading: 'いりぐち',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/cbk3yfhvr2fjr65adf2l2gmwsweu',
                'https://files.wanikani.com/nciobovm3465lfyd6sa0sz5c85es',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/paqqqk4cfr32eur44s1i7hy1qej2',
                'https://files.wanikani.com/34i4m4huntx0qibzlip37pk5sexr',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '入り口は、どこ？',
          en_sentence: 'Where is the entrance?',
        },
        {
          jp_sentence: '入り口が三つあります。',
          en_sentence: 'There are three entrances.',
        },
        {
          jp_sentence:
            'まず、あなたのアパートの入り口のドアの大きさをおしえて。',
          en_sentence:
            'First, tell me the size of the entryway door of your apartment.',
        },
      ],
      patterns_of_use: ['〜の入り口', '入り口に〜', '入り口の〜'],
      common_word_combinations: [
        {
          jp_sentence: 'ホテルの入り口',
          en_sentence: 'entrance to the hotel',
        },
        {
          jp_sentence: 'ビルの入り口',
          en_sentence: 'entrance to the building',
        },
        {
          jp_sentence: 'トンネルの入り口',
          en_sentence: 'entrance to the tunnel',
        },
        {
          jp_sentence: '入り口にいる',
          en_sentence: 'to be at the entrance',
        },
        {
          jp_sentence: '入り口におく',
          en_sentence: 'to put something at the entrance',
        },
        {
          jp_sentence: '入り口にある',
          en_sentence: 'to be at the entrance',
        },
        {
          jp_sentence: '入り口の人',
          en_sentence: 'the person at the entrance',
        },
        {
          jp_sentence: '入り口のドア',
          en_sentence: 'entrance door',
        },
        {
          jp_sentence: '入り口の一つ',
          en_sentence: 'one of the entrances',
        },
      ],
    },
    {
      level: '1',
      character: '大した',
      primary_meaning: 'Great',
      alternative_meanings: 'Considerable, Important, Big Deal',
      word_type: 'adjective',
      meaning_explanation: [
        '<span lang="ja">した</span> is the past tense form of <span lang="ja">する</span> (which means "to do"). So, essentially this word is "did big." What is something that "did big"? It\'s something that\'s <mark title="Vocabulary" class="vocabulary-highlight">great</mark> or <mark title="Vocabulary" class="vocabulary-highlight">considerable</mark>.',
      ],
      reading_explanation: [
        'The reading for the <span lang="ja">大</span> part is actually the on\'yomi reading you learned when learning this kanji. Since <span lang="ja">大</span> has two on\'yomi readings, here\'s a mnemonic to help you remember which one to use:',
        'When something\'s <mark title="Vocabulary" class="vocabulary-highlight">great</mark> and <mark title="Vocabulary" class="vocabulary-highlight">important</mark>, you\'d better wear a <mark title="Reading" class="reading-highlight">tie</mark> (<span lang="ja">たい</span>) for it. No showing up without a tie to anything that\'s a <mark title="Vocabulary" class="vocabulary-highlight">big deal</mark>, okay?',
      ],
      readingWitAudios: [
        {
          reading: 'たいした',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/ujok0btntuklxpjvehysr7yd8yip',
                'https://files.wanikani.com/gq86xmlfxf55estn9j00a7kb93v9',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/hi8av9rbfqzedugoudmpd0qq7plt',
                'https://files.wanikani.com/2ac7f5790sj090rcu5xiffjo07lv',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '大したことじゃないよ。',
          en_sentence: "It's no big deal.",
        },
        {
          jp_sentence:
            'えっ！？コウイチが、メジャーリーグに入る？ それは、大したものだ！',
          en_sentence:
            "What!? Koichi's entering the major league? That's a big deal!",
        },
        {
          jp_sentence: 'このオレをふるなんて、大した女だったよ。',
          en_sentence: 'She had considerable nerve, dumping me.',
        },
      ],
      patterns_of_use: ['大した〜'],
      common_word_combinations: [
        {
          jp_sentence: '大したものだ',
          en_sentence: 'quite a feat',
        },
        {
          jp_sentence: '大した女だ',
          en_sentence: "she's a great woman, you're a great woman",
        },
        {
          jp_sentence: '大したことはない',
          en_sentence: 'not a big deal',
        },
      ],
    },
    {
      level: '1',
      character: '山',
      primary_meaning: 'Mountain',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'A vocab made of a single kanji all alone with no okurigana (hiragana attached to the kanji) usually has the same exact meaning as the kanji it\'s made from. So by that you know that this vocab\'s meaning is <mark title="Vocabulary" class="vocabulary-highlight">mountain</mark>.',
      ],
      reading_explanation: [
        "When a vocab is a single kanji all alone with no okurigana (hiragana attached to the kanji) it's usually going to be the kun'yomi reading, which you didn't learn when you learned the kanji. To remember this word's reading we'll use a mnemonic.",
        'What are you doing going up into the <mark title="Vocabulary" class="vocabulary-highlight">mountain</mark>s? You\'re hunting for <mark title="Reading" class="reading-highlight">yam</mark>s (<span lang="ja">やま</span>). Go ahead, imagine yourself doing just that, climbing up the mountain (it\'s hard work!) and then digging in the ground with your hands, then pulling up that sweet, delicious yam! Mmm!',
      ],
      readingWitAudios: [
        {
          reading: 'やま',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/iuqxn0w5bapnv5lu46zj4njfb512',
                'https://files.wanikani.com/ez9ykwln085mkghakdle2uglf2xu',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/nxmx1zoowvp8fr4hfc4dggt63oo6',
                'https://files.wanikani.com/pthbug6yql8v8kinxg3yzunbux38',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'これは人工の山だ。',
          en_sentence: 'This is an artificial mountain.',
        },
        {
          jp_sentence: 'フランス一大きい山はモンブランです。',
          en_sentence: "France's number one biggest mountain is Mont Blanc.",
        },
        {
          jp_sentence: 'ゴミの山かとおもったら、下にベッドがあった。',
          en_sentence:
            'I thought it was a mountain of trash, then I realized there was a bed underneath..',
        },
      ],
      patterns_of_use: ['〜の山', '山を〜', '山〜', '山に〜', '山の〜'],
      common_word_combinations: [
        {
          jp_sentence: 'がれきの山',
          en_sentence: 'a heap of rubble',
        },
        {
          jp_sentence: 'ゴミの山',
          en_sentence: 'a heap of garbage',
        },
        {
          jp_sentence: 'カードの山',
          en_sentence: 'a pile of cards',
        },
        {
          jp_sentence: '山をあるく',
          en_sentence: 'to walk in the mountains',
        },
        {
          jp_sentence: '山をこえる',
          en_sentence: 'to cross a mountain, to surmount a difficulty',
        },
        {
          jp_sentence: '山をのぼる',
          en_sentence: 'to climb a mountain',
        },
        {
          jp_sentence: '山のぼり',
          en_sentence: 'mountain climbing',
        },
        {
          jp_sentence: '山ぶどう',
          en_sentence: 'wild grapes',
        },
        {
          jp_sentence: '山ガール',
          en_sentence: 'a young woman who likes mountain climbing',
        },
        {
          jp_sentence: '山にいる',
          en_sentence: 'to be in the mountains',
        },
        {
          jp_sentence: '山に入る',
          en_sentence: 'to go into the mountains',
        },
        {
          jp_sentence: '山にのぼる',
          en_sentence: 'to climb a mountain',
        },
        {
          jp_sentence: '山のなまえ',
          en_sentence: 'the name of the mountain',
        },
        {
          jp_sentence: '山のふもと',
          en_sentence: 'the foot of a mountain',
        },
        {
          jp_sentence: '山のむこう',
          en_sentence: 'over the mountain',
        },
      ],
    },
    {
      level: '1',
      character: '口',
      primary_meaning: 'Mouth',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'When a vocab is made up of a single kanji with no okurigana (hiragana attached to the kanji) it\'s generally going to have the same meaning as the kanji it came from. From that, you know this word\'s meaning is <mark title="Vocabulary" class="vocabulary-highlight">mouth</mark>.',
      ],
      reading_explanation: [
        'When a vocab is made up of a single kanji with no okurigana (hiragana attached to the kanji) it\'s generally going to use the kun\'yomi reading, which you did not learn from learning the kanji. To remember this word, you should use a mnemonic. With your <mark title="Vocabulary" class="vocabulary-highlight">mouth</mark>, make a "<mark title="Reading" class="reading-highlight">kuchi</mark> kuchi kou" (<span lang="ja">くち</span>) sound. Go ahead, make it. Focus on your mouth and try to imagine each shape it makes while zooming in on it. You\'re talking to a baby, which is why you\'re making all these ridiculous noises. Also, instead of "coo" at the end, you\'re saying "kou," because that\'s the reading of the kanji (<span lang="ja">こう</span>).',
        '<span lang="ja">くちくちこう！くちくちこう！</span> Sounds like something from Arrested Development, actually.',
      ],
      readingWitAudios: [
        {
          reading: 'くち',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/2n4qjarpsjn2tctu7f0y6wqqtqw3',
                'https://files.wanikani.com/3mvr1wya3pr074d977og897b894o',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/qggtgpqhuhz9ah1kktcagj1ilyck',
                'https://files.wanikani.com/p3sre3e5iwf2ezzyfaq4pcxdxkh5',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '口にソースがついていますよ。',
          en_sentence: 'There is some sauce on your mouth.',
        },
        {
          jp_sentence: 'これを口に入れてください。',
          en_sentence: 'Please put this in your mouth.',
        },
        {
          jp_sentence: 'このペットボトルは口が大きすぎる。',
          en_sentence: 'The mouth of this plastic bottle is too large.',
        },
        {
          jp_sentence: 'ちゃんと口のケアをしないと、女にモテないだろ。',
          en_sentence:
            "If you don't take good care of your mouth, you won't have much luck with women.",
        },
      ],
      patterns_of_use: ['口に〜', '口の〜', '〜の口', '口を〜'],
      common_word_combinations: [
        {
          jp_sentence: '口にする',
          en_sentence: 'to mention, to eat, to drink',
        },
        {
          jp_sentence: '口に入る',
          en_sentence: "to enter one's mouth, to get something in one's mouth",
        },
        {
          jp_sentence: '口にくわえる',
          en_sentence: "to put something in one's mouth",
        },
        {
          jp_sentence: '口のトラブル',
          en_sentence: 'oral problems',
        },
        {
          jp_sentence: '口のケア',
          en_sentence: 'oral care',
        },
        {
          jp_sentence: '口のまわり',
          en_sentence: "around one's mouth",
        },
        {
          jp_sentence: 'ペットボトルの口',
          en_sentence: 'the mouth of a plastic bottle',
        },
        {
          jp_sentence: 'バッグの口',
          en_sentence: 'the opening of a bag',
        },
        {
          jp_sentence: 'ワニの口',
          en_sentence: "crocodile's mouth",
        },
        {
          jp_sentence: '口をひらく',
          en_sentence: "to open one's mouth to speak",
        },
        {
          jp_sentence: '口をあける',
          en_sentence: "to open one's mouth",
        },
        {
          jp_sentence: '口をそろえる',
          en_sentence: 'to protest in chorus, to speak in unison',
        },
      ],
    },
    {
      level: '1',
      character: 'ふじ山',
      primary_meaning: 'Mt Fuji',
      alternative_meanings: 'Mount Fuji, Mt. Fuji',
      word_type: 'proper noun',
      meaning_explanation: [
        'Just look at this word. What do you think it means? That\'s right - it\'s a name (Fuji) plus the kanji for <mark title="Kanji" class="kanji-highlight">mountain</mark>. Put those together, and you have <mark title="Vocabulary" class="vocabulary-highlight">Mount Fuji</mark>. In English the "Mount(ain)" part comes first. In Japanese, it comes at the end, sort of like the name ender <span lang="ja">さん</span>, <span lang="ja">ちゃん</span>, and so on. You can add <span lang="ja">山</span> to the end of any mountain\'s name too, not just Mount Fuji.',
      ],
      reading_explanation: [
        'Normally <span lang="ja">ふじ</span> would be in kanji, but I wanted you to see this kanji use in action since it\'s more useful than just being used on Mount Fuji. This is treated like a jukugo word (combo kanji word). In the case of jukugo, usually the on\'yomi reading is used, meaning you just have to remember the on\'yomi reading of <span lang="ja">山</span>. Luckily, you learned this when you were learning the kanji, so you should already know it!',
      ],
      readingWitAudios: [
        {
          reading: 'ふじさん',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/dfprvtot9u7t57ehy1dxlhvfm7rv',
                'https://files.wanikani.com/g2ek8wo5fi1jpbao6qd68ni34n59',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/m9rexxgxjqtey3y37pcvczip6ook',
                'https://files.wanikani.com/ylih26vmhtqzhs3nf8vwgt560u3j',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'あっ、ふじ山だ！',
          en_sentence: "Oh, it's Mt. Fuji!",
        },
        {
          jp_sentence: 'エベレスト山は、ふじ山より大きいですか？',
          en_sentence: 'Is Mt. Everest bigger than Mt. Fuji?',
        },
        {
          jp_sentence:
            'いつかガールフレンドにふじ山の上でプロポーズをしたいんです。',
          en_sentence:
            'I want to propose to my girlfriend on the top of Mt. Fuji someday.',
        },
      ],
      patterns_of_use: ['ふじ山の〜', 'ふじ山に〜'],
      common_word_combinations: [
        {
          jp_sentence: 'ふじ山のポストカード',
          en_sentence: 'a postcard of Mt. Fuji',
        },
        {
          jp_sentence: 'ふじ山のイラスト',
          en_sentence: 'an illustration of Mt. Fuji',
        },
        {
          jp_sentence: 'ふじ山のふもと',
          en_sentence: 'the foot of Mt. Fuji',
        },
        {
          jp_sentence: 'ふじ山にのぼる',
          en_sentence: 'to climb Mt. Fuji',
        },
        {
          jp_sentence: 'ふじ山にいる',
          en_sentence: 'to be at Mt. Fuji',
        },
        {
          jp_sentence: 'ふじ山について',
          en_sentence: 'about Mt. Fuji',
        },
      ],
    },
    {
      level: '1',
      character: '九',
      primary_meaning: 'Nine',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'When a vocab is made up of a single kanji with no okurigana (hiragana attached to the kanji), it often has the same meaning as the kanji it\'s based off of. Same goes for the word <mark title="Vocabulary" class="vocabulary-highlight">九</mark>, as well. It has the same meaning as its kanji counterpart.',
      ],
      reading_explanation: [
        "When a vocab is made up of a single kanji with no okurigana (hiragana attached to the kanji), it usually uses the kun'yomi reading. Numbers are the exception, as you might already know. When they're alone with no okurigana they're the on'yomi reading, which you should already know from learning the kanji that makes up this word.",
      ],
      readingWitAudios: [
        {
          reading: 'きゅう',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/61d4fe5w4vmg70yiojvqcwrx0rsr',
                'https://files.wanikani.com/ac3fgrklumb6m729hxojw397f5bv',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/fkn0w734rbgt04xyloudeq7x57lb',
                'https://files.wanikani.com/w9rl0qrbrb14knstjkzblh5axdo2',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
        {
          reading: 'く',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/ycaqsps1b59zok8ejpylw7kskbpm',
                'https://files.wanikani.com/7iv9bnyjtfdtyr0rbsjsib2a0kp7',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/hqystgsocqcg1z28be0fqv2f4fq5',
                'https://files.wanikani.com/yrntqmqfzu662zh6sfy478llnjiv',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'ガソリンスタンドまで九マイルです。',
          en_sentence: 'It is nine miles to the gas station.',
        },
        {
          jp_sentence: '九ページをひらいてください。',
          en_sentence: 'Please open to page 9.',
        },
        {
          jp_sentence: 'このビルには九フロアあります。',
          en_sentence: 'There are nine floors in this building.',
        },
      ],
      patterns_of_use: ['九 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '九セット',
          en_sentence: 'nine sets',
        },
        {
          jp_sentence: '九ドル',
          en_sentence: 'nine dollars',
        },
        {
          jp_sentence: '九インチ',
          en_sentence: 'nine inches',
        },
      ],
    },
    {
      level: '1',
      character: '九つ',
      primary_meaning: 'Nine Things',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'This word follows the "number of things" pattern where there\'s a kanji for a number plus <span lang="ja">つ</span> on the end. Whenever you see this, you know the word means "____ things." Knowing that, as long as you know the kanji (which you do) you can figure out what number of things it is. For this one, it\'s the kanji for <mark title="Kanji" class="kanji-highlight">nine</mark> plus <span lang="ja">つ</span>. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">nine things</mark>.',
      ],
      reading_explanation: [
        'Since all of the "number of things" words all follow the same pattern (number plus <span lang="ja">つ</span>), you really just have to remember the part before the <span lang="ja">つ</span> (and then remember that the <span lang="ja">つ</span> is in all of these). All of the readings are the kun\'yomi reading, which means we\'ll have to use a mnemonic to remember them (you know the on\'yomi reading of the kanji portion).',
        'What thing do you have nine of? The <mark title="Vocabulary" class="vocabulary-highlight">nine things</mark> you have are nine <mark title="Reading" class="reading-highlight">cocono</mark>ts (<span lang="ja">ここの</span>). As you can guess from the spelling, coconots are <em>not</em> coconuts. Think of them as… fake coconuts. Imagine yourself juggling nine coconots in the air. Try counting them as you do, arriving at nine things. Then arrange them into a square on the ground. Three coconots by three. Now you should remember how to read <span lang="ja">九つ</span>.',
      ],
      readingWitAudios: [
        {
          reading: 'ここのつ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/tva309elwgef3kfqznj70g154j4p',
                'https://files.wanikani.com/b6npi1wla4y2hiweongzzycw44yq',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/12ckxq9be20vrfulm7j3a3ipw16y',
                'https://files.wanikani.com/khb7fn78w7rmv67396waklje584c',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このエリアに九つの山がある。',
          en_sentence: 'There are nine mountains in this area.',
        },
        {
          jp_sentence: 'ドーナツを九つもらった。',
          en_sentence: 'I got nine donuts.',
        },
        {
          jp_sentence:
            '三人しかいないのに、大きいベッドを九つもオーダーしてしまった。',
          en_sentence:
            'There are only three of us, but I accidentally ordered nine large beds.',
        },
      ],
      patterns_of_use: ['九つ〜', '九つの〜'],
      common_word_combinations: [
        {
          jp_sentence: '九つくらい',
          en_sentence: 'nine or so',
        },
        {
          jp_sentence: '九つ上',
          en_sentence: 'nine years older',
        },
        {
          jp_sentence: '九つ下',
          en_sentence: 'nine years younger',
        },
        {
          jp_sentence: '九つのジャンル',
          en_sentence: 'nine genres',
        },
        {
          jp_sentence: '九つの山',
          en_sentence: 'nine mountains',
        },
        {
          jp_sentence: '九つのグループ',
          en_sentence: 'nine groups',
        },
      ],
    },
    {
      level: '1',
      character: '一',
      primary_meaning: 'One',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'As is the case with most vocab words that consist of a single kanji, this vocab word has the same meaning as the kanji it parallels, which is <mark title="Vocabulary" class="vocabulary-highlight">one</mark>.',
      ],
      reading_explanation: [
        "When a vocab word is all alone and has no okurigana (hiragana attached to kanji) connected to it, it usually uses the kun'yomi reading. Numbers are an exception, however. When a number is all alone, with no kanji or okurigana, it is going to be the on'yomi reading, which you learned with the kanji.  Just remember this exception for alone numbers and you'll be able to read future number-related vocab to come.",
      ],
      readingWitAudios: [
        {
          reading: 'いち',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/06lywgs66k3b4koa26wciqv8hs0q',
                'https://files.wanikani.com/tsvpbht2ud58xv88dxn8cjys0hvl',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/r8jqaotmr178the7vwce82usz0ur',
                'https://files.wanikani.com/b92ilgjvk9lo3ygwoapde9u7tmg6',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このレモン、一キログラム！？大きいですね！',
          en_sentence: "This lemon weighs a kilogram!? That's big!",
        },
        {
          jp_sentence: 'レベル一です。',
          en_sentence: "It's level 1.",
        },
        {
          jp_sentence: 'このメロンはアメリカ一の大きさです。',
          en_sentence: 'This is the largest size melon in the United States.',
        },
      ],
      patterns_of_use: ['一 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '一グラム',
          en_sentence: 'one gram',
        },
        {
          jp_sentence: '一ページ',
          en_sentence: 'one page',
        },
        {
          jp_sentence: '一ドル',
          en_sentence: 'one dollar',
        },
      ],
    },
    {
      level: '1',
      character: '一つ',
      primary_meaning: 'One Thing',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'This word follows the "number of things" pattern where there\'s a kanji for a number plus <span lang="ja">つ</span> on the end. Whenever you see this, you know the word means "____ things." Knowing that, as long as you know the kanji (which you do) you can figure out what number of things it is. For this one, it\'s the kanji for <mark title="Kanji" class="kanji-highlight">one</mark> plus <span lang="ja">つ</span>. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">one thing</mark>.',
      ],
      reading_explanation: [
        'Since all of the "number of things" words all follow the same pattern (number plus <span lang="ja">つ</span>), you really just have to remember the part before the <span lang="ja">つ</span> (and then remember that the <span lang="ja">つ</span> is in all of these). All of the readings are the kun\'yomi reading, which means we\'ll have to use a mnemonic to remember them (you know the on\'yomi reading of the kanji portion).',
        'So, you have <mark title="Vocabulary" class="vocabulary-highlight">one thing</mark>. What one thing do you have? You have one of He-Man\'s Toes, aka a single <mark title="Reading" class="reading-highlight">He-Toe</mark> (<span lang="ja">ひと</span>). So what\'s the thing you have only one of? You have one He-Toe. Imagine He-Man walking around with one missing toe, trying to find you so he can get it back. At least you\'ll be able to run faster than him now.',
      ],
      readingWitAudios: [
        {
          reading: 'ひとつ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/4famc7564br04nek4hksuc6eey4k',
                'https://files.wanikani.com/9tcqe3x3e2k0awyugsvsrwi6gye8',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/qxcsdbmy6nbcf1vy3ua3o1gvc9yf',
                'https://files.wanikani.com/0tfsh0nioen77s9zvgikf8u2xx3k',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'レモン、一つ下さい。',
          en_sentence: 'A lemon, please.',
        },
        {
          jp_sentence: '二つの川が、一つの大きな川になる。',
          en_sentence: 'The two rivers become one big river.',
        },
        {
          jp_sentence: '一つだけバニラにして下さい。',
          en_sentence: 'Please make one a vanilla.',
        },
      ],
      patterns_of_use: ['〜一つ'],
      common_word_combinations: [
        {
          jp_sentence: 'もう一つ',
          en_sentence: 'one more thing',
        },
        {
          jp_sentence: 'その一つ',
          en_sentence: 'one of them',
        },
        {
          jp_sentence: '一つ一つ',
          en_sentence: 'one by one',
        },
      ],
    },
    {
      level: '1',
      character: '人',
      primary_meaning: 'Person',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'When a vocab is a single kanji all alone, it usually has the same meaning as its kanji parent. That goes for this vocab word as well. <mark title="Kanji" class="kanji-highlight">Person</mark> is <mark title="Vocabulary" class="vocabulary-highlight">person</mark>.',
      ],
      reading_explanation: [
        "When a vocab is a single kanji with no okurigana (hiragana attached to the kanji), it usually uses the kun'yomi reading. Since you don't know the kun'yomi reading for this kanji yet, let's use a mnemonic to learn it.",
        'What does a <mark title="Vocabulary" class="vocabulary-highlight">person</mark> hate more than anything? They hate extreme <mark title="Reading" class="reading-highlight">heat</mark> (<span lang="ja">ひと</span>). You can always put on more clothes to stay warm, but when the heat gets too high, you can only take off so much.',
      ],
      readingWitAudios: [
        {
          reading: 'ひと',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/hv2jcn9clnxb0xuhn7ib462sdxk5',
                'https://files.wanikani.com/t4ul9yltaanq891gmvii45srdwy4',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/t54ekt8hobgwg8c5tqi3hzwxw2s7',
                'https://files.wanikani.com/34unyx2om2q84y9my1n6d3aaefwj',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'この人がコウイチです。',
          en_sentence: 'This person is Koichi.',
        },
        {
          jp_sentence: 'あの人はクリーニングの人ですか？',
          en_sentence: 'Is that person a cleaning person?',
        },
        {
          jp_sentence: 'ふじ山の上には、たくさん人がいましたよ。',
          en_sentence: 'There were many people on Mt. Fuji.',
        },
      ],
      patterns_of_use: ['人〜', '人が〜', '〜の人'],
      common_word_combinations: [
        {
          jp_sentence: '人それぞれ',
          en_sentence: 'each to their own',
        },
        {
          jp_sentence: '人がいい',
          en_sentence: 'good-natured',
        },
        {
          jp_sentence: '人がいる',
          en_sentence: 'there are people',
        },
        {
          jp_sentence: '人がいない',
          en_sentence: 'there are no people',
        },
        {
          jp_sentence: 'たくさんの人',
          en_sentence: 'many people',
        },
        {
          jp_sentence: 'ほとんどの人',
          en_sentence: 'most people',
        },
        {
          jp_sentence: 'あそこの人',
          en_sentence: 'the person over there',
        },
      ],
    },
    {
      level: '1',
      character: '下さい',
      primary_meaning: 'Please Give Me',
      alternative_meanings: 'Please',
      word_type: 'expression',
      meaning_explanation: [
        'You know that the kanji <span lang="ja">下</span> means <mark title="Kanji" class="kanji-highlight">down</mark>, and <span lang="ja">さい</span> sounds like the word "sigh." You need to ask someone for something, so you look down, sigh, and say <mark title="Vocabulary" class="vocabulary-highlight">please give me</mark> that thing. You\'re ashamed that you have to ask. But you still need it. <mark title="Vocabulary" class="vocabulary-highlight">Please</mark>, please give it to me!',
        'You only use this kanji version of <span lang="ja">ください</span> when asking for something, which is why this is "please give me." If you\'re just saying "please," you don\'t need the kanji at all!',
      ],
      reading_explanation: [
        'The reading for <span lang="ja">下</span> here is one you haven\'t learned. Just think about how it kind of sounds like you\'re saying <mark title="Vocabulary" class="vocabulary-highlight">please</mark>, <mark title="Reading" class="reading-highlight">could I</mark> (<span lang="ja">くだ</span>) have this thing? Pretty please, could I have it?',
        'Alternatively, if you already knew the word <span lang="ja">ください</span> beforehand, this shouldn\'t be too hard!',
      ],
      readingWitAudios: [
        {
          reading: 'ください',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/ipsd2ocsh7qo2z4tib4n8v0xffpl',
                'https://files.wanikani.com/b7ihjnkmmfyldlvqa1x8v9ld64sc',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/xv1i2f2qjagdgac98llbf2akfrn2',
                'https://files.wanikani.com/jm73wszt2yc8hpzh7bwb91slntpc',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'みそラーメン下さい。',
          en_sentence: 'A miso ramen, please.',
        },
        {
          jp_sentence: 'りんごを七つ下さい。',
          en_sentence: 'May I have seven apples?',
        },
        {
          jp_sentence: 'どうか、力を下さい。',
          en_sentence: 'Please, give me some help.',
        },
      ],
      patterns_of_use: ['〜を下さい'],
      common_word_combinations: [
        {
          jp_sentence: 'アドバイスを下さい',
          en_sentence: 'please give me advice',
        },
        {
          jp_sentence: 'それを下さい',
          en_sentence: 'please give me that one',
        },
        {
          jp_sentence: 'メールを下さい',
          en_sentence: 'please email me',
        },
      ],
    },
    {
      level: '1',
      character: '人口',
      primary_meaning: 'Population',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'The amount of people with mouths (that you have to feed) is the <mark title="Vocabulary" class="vocabulary-highlight">population</mark> that you have to feed.',
      ],
      reading_explanation: [
        "This is a jukugo word, which usually means on'yomi readings from the kanji. Since <span lang=\"ja\">人</span> has two on'yomi readings, here's a mnemonic to help you remember which one to use:",
        'Here at Tofugu, we measure <mark title="Vocabulary" class="vocabulary-highlight">population</mark> in <mark title="Reading" class="reading-highlight">jean</mark>s (<span lang="ja">じん</span>). Each of us has just one pair of jeans, so if you know the jean count you know the population.',
      ],
      readingWitAudios: [
        {
          reading: 'じんこう',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/l8tzzuldsga9zhrvhxu0duto32zs',
                'https://files.wanikani.com/scx1bbow03z0ok46xtzuc32vbw5n',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/7yqulxbh5b9l33rkeq05w0y6aljx',
                'https://files.wanikani.com/3bc0io47mv4x4cjljeigdbsq3lsl',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このエリアの人口は、たったの一人です。',
          en_sentence: 'The population of this area is only one person.',
        },
        {
          jp_sentence: 'こちらの人口はどのくらいですか？',
          en_sentence: 'How large is the population around here?',
        },
        {
          jp_sentence: '人口の70%くらいはシャイなんだって。',
          en_sentence: 'Apparently, about 70% of the population is shy.',
        },
      ],
      patterns_of_use: ['人口が〜', '人口の〜'],
      common_word_combinations: [
        {
          jp_sentence: '人口がふえる',
          en_sentence: 'the population increases',
        },
        {
          jp_sentence: '人口がへる',
          en_sentence: 'the population decreases',
        },
        {
          jp_sentence: '人口がおおい',
          en_sentence: 'the population is large',
        },
        {
          jp_sentence: '人口の三パーセント',
          en_sentence: 'three percent of the population',
        },
        {
          jp_sentence: '人口のほとんど',
          en_sentence: 'most of the population',
        },
        {
          jp_sentence: '人口の二人に一人',
          en_sentence: 'one out of two of the population',
        },
      ],
    },
    {
      level: '1',
      character: '力',
      primary_meaning: 'Power',
      alternative_meanings: 'Strength, Ability',
      word_type: 'noun',
      meaning_explanation: [
        'When a vocab word is made up of a single kanji and that\'s it, it almost always takes the meaning from its parent kanji. So, this vocab word also means <mark title="Vocabulary" class="vocabulary-highlight">power</mark>.',
      ],
      reading_explanation: [
        "When a vocab word is a single kanji all alone with no okurigana (hiragana attached to the kanji), it usually uses the kun'yomi reading. You didn't learn the kun'yomi reading with the kanji, so for this vocab word, we'll use a mnemonic.",
        'The most powerful man in the world. All his <mark title="Vocabulary" class="vocabulary-highlight">power</mark> came from his <mark title="Reading" class="reading-highlight">cheek</mark> (<span lang="ja">ちから</span>). Imagine him blowing up his cheek like a giant balloon, then unleashing his power on you. Thwap thwap thwap thwap.',
      ],
      readingWitAudios: [
        {
          reading: 'ちから',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/lbq1ydqu7agbw2mcbmjy778ql6tk',
                'https://files.wanikani.com/i4rlbtmj0glkkixn9cw56w2jjeb0',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/5xfuy7p7vqnimttwjg8kd047iotj',
                'https://files.wanikani.com/rjce13vlntenwbbyxphef7sucji4',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '力の大きさが、ちがう。',
          en_sentence: 'The size of the forces is different.',
        },
        {
          jp_sentence: 'うちではママが大きな力をもってるんですよ。',
          en_sentence: 'At my house, my mom has a lot of power.',
        },
        {
          jp_sentence: 'リラックスしたいのに、どうしても力が入ってしまう。',
          en_sentence: 'I want to relax, but I somehow get tense.',
        },
      ],
      patterns_of_use: ['〜の力', '力が〜', '力を〜'],
      common_word_combinations: [
        {
          jp_sentence: '一人一人の力',
          en_sentence: 'the power of each person',
        },
        {
          jp_sentence: '人の力',
          en_sentence: "people's strength, people's ability",
        },
        {
          jp_sentence: 'みんなの力',
          en_sentence: "everyone's power",
        },
        {
          jp_sentence: '力がある',
          en_sentence: 'to be strong',
        },
        {
          jp_sentence: '力が入る',
          en_sentence: 'to be filled with strength',
        },
        {
          jp_sentence: '力がつく',
          en_sentence: 'to gain strength',
        },
        {
          jp_sentence: '力をもらう',
          en_sentence: 'to get strength',
        },
        {
          jp_sentence: '力をいれる',
          en_sentence: 'to put in effort',
        },
        {
          jp_sentence: '力をつける',
          en_sentence: 'to build up strength, to acquire ability',
        },
      ],
    },
    {
      level: '1',
      character: '川',
      primary_meaning: 'River',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'When a vocab is made up of a single kanji with no okurigana (hiragana attached to the kanji) it will usually take the same meaning as the kanji it comes from. So, from that you know that this word means <mark title="Vocabulary" class="vocabulary-highlight">river</mark>.',
      ],
      reading_explanation: [
        "You're in luck - the reading you learned with the kanji is the same as the one you have to learn for this vocab!",
      ],
      readingWitAudios: [
        {
          reading: 'かわ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/if61ltkiju90yjcb1t0fwa3px01j',
                'https://files.wanikani.com/txnud5h38hofcygcnf7iu6qtp6ah',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/1c76t7j2usrpu3hj1pl8t6s8euan',
                'https://files.wanikani.com/d3xj692ombej903q4gapaqqjib52',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'この川はアマゾン川です。',
          en_sentence: 'This river is the Amazon River.',
        },
        {
          jp_sentence: '川でバーベキューしたいなぁ。',
          en_sentence: 'I want to BBQ by the river.',
        },
        {
          jp_sentence: 'えっ。そのビキニで川に入るの？',
          en_sentence: 'Oh. Are you going into the river in that bikini?',
        },
      ],
      patterns_of_use: ['川を〜', '川の〜', '川に〜'],
      common_word_combinations: [
        {
          jp_sentence: '川をくだる',
          en_sentence: 'to go downstream',
        },
        {
          jp_sentence: '川をわたる',
          en_sentence: 'to cross a river',
        },
        {
          jp_sentence: '川をのぼる',
          en_sentence: 'to go upstream',
        },
        {
          jp_sentence: '川のむこう',
          en_sentence: 'the other side of the river',
        },
        {
          jp_sentence: '川のせせらぎ',
          en_sentence: 'the gurgling of a river',
        },
        {
          jp_sentence: '川のながれ',
          en_sentence: 'the current of a river',
        },
        {
          jp_sentence: '川にながす',
          en_sentence: 'to float something on a river',
        },
        {
          jp_sentence: '川にいる',
          en_sentence: 'to be in a river',
        },
        {
          jp_sentence: '川に入る',
          en_sentence: 'to get into a river',
        },
      ],
    },
    {
      level: '1',
      character: '七',
      primary_meaning: 'Seven',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'When a vocab is alone with no okurigana (that\'s hiragana attached to a kanji) it usually has the same meaning as the kanji too. That goes for this word as well. So, if you know the kanji\'s meaning (<mark title="Kanji" class="kanji-highlight">seven</mark>) you\'ll know the vocab\'s meaning (<mark title="Vocabulary" class="vocabulary-highlight">seven</mark>).',
      ],
      reading_explanation: [
        'Most single-kanji all-alone vocab words like this use the kun\'yomi reading. Numbers are an exception to this rule. That being said, four and seven are exceptions to this exception to the rule (because the on\'yomi readings sound too much like the word for "death"). You should learn both readings for this word, though we\'re going to go with <span lang="ja">なな</span> for the main one here. You can remember that because you had seven <mark title="Reading" class="reading-highlight">nana</mark>s after you.',
      ],
      readingWitAudios: [
        {
          reading: 'なな',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/3b7rrpg0wcg9z0pnddo0o1vum360',
                'https://files.wanikani.com/fhumzrptglu7uv31jg6vqbfoghpx',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/167yeiftu1lew3djfrtuwqvnh2ps',
                'https://files.wanikani.com/96q0d57chv5rrzwhk3xpnfyiit7u',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
        {
          reading: 'しち',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/659b8xce55k3g72qicfcal2l3ucn',
                'https://files.wanikani.com/jkwdn25lib5hoz9ouw6587j2nhc6',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/2mv1q36ociegbybmzwvuve66ivi6',
                'https://files.wanikani.com/cltvuojc5uwzdbltqr4z1639e5o0',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'コウイチのラッキーナンバーは七です。',
          en_sentence: "Koichi's lucky number is seven.",
        },
        {
          jp_sentence: 'このパスタは、たったの七ステップでできますよ。',
          en_sentence: 'You can make this pasta in just seven steps.',
        },
        {
          jp_sentence: '七カラットのダイアモンドを下さい。',
          en_sentence: 'I would like a seven-carat diamond.',
        },
      ],
      patterns_of_use: ['七 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '七キロ',
          en_sentence: 'seven kilos, seven kilometers',
        },
        {
          jp_sentence: '七パーセント',
          en_sentence: 'seven percent',
        },
        {
          jp_sentence: '七人',
          en_sentence: 'seven people',
        },
      ],
    },
    {
      level: '1',
      character: '七つ',
      primary_meaning: 'Seven Things',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'This word follows the "number of things" pattern where there\'s a kanji for a number plus <span lang="ja">つ</span> on the end. Whenever you see this, you know the word means "____ things." Knowing that, as long as you know the kanji (which you do) you can figure out what number of things it is. For this one, it\'s the kanji for <mark title="Kanji" class="kanji-highlight">seven</mark> plus <span lang="ja">つ</span>. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">seven things</mark>.',
      ],
      reading_explanation: [
        'Since all of the "number of things" words all follow the same pattern (number plus <span lang="ja">つ</span>), you really just have to remember the part before the <span lang="ja">つ</span> (and then remember that the <span lang="ja">つ</span> is in all of these). All of the readings are the kun\'yomi reading, which means we\'ll have to use a mnemonic to remember them (you know the on\'yomi reading of the kanji portion).',
        'What thing do you have seven of? The <mark title="Vocabulary" class="vocabulary-highlight">seven things</mark> that you have are seven <mark title="Reading" class="reading-highlight">Nana</mark>s (<span lang="ja">なな</span>). These are your grandmas, cloned. Just think, "It\'s lucky to have seven nanas. They can all cook my favorite foods for me!" What\'s more, you have one nana for every day of the week, so you\'ll get your favorite food every day.',
      ],
      readingWitAudios: [
        {
          reading: 'ななつ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/0n4u3jfbnx1xgvienapeqhxr6t1v',
                'https://files.wanikani.com/95ifix18ikmqxwf24evwz1kmwkpu',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/6ta0vghumwsqxnxp2vm77vhwk1x5',
                'https://files.wanikani.com/30vb2wibyl673xbojpklsrmn61dm',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'そのクッキー、七つ下さい。',
          en_sentence: 'Seven of those cookies, please.',
        },
        {
          jp_sentence: 'テイクアウトで、うどんを七つオーダーしました。',
          en_sentence: 'I ordered seven udon to-go.',
        },
        {
          jp_sentence: 'ドラゴンボールは七つある。',
          en_sentence: 'There are seven Dragon Balls.',
        },
      ],
      patterns_of_use: ['七つの〜'],
      common_word_combinations: [
        {
          jp_sentence: '七つのカテゴリー',
          en_sentence: 'seven categories',
        },
        {
          jp_sentence: '七つの山',
          en_sentence: 'seven mountains',
        },
        {
          jp_sentence: '七つのルール',
          en_sentence: 'seven rules',
        },
      ],
    },
    {
      level: '1',
      character: '大きさ',
      primary_meaning: 'Size',
      alternative_meanings: null,
      word_type: 'noun',
      meaning_explanation: [
        'In Japanese, <span lang="ja">さ</span> on the end of a word is often the equivalent of "-ness" in English. In other words, if you replace the <span lang="ja">い</span> on the end of an <span lang="ja">い</span>-adjective with <span lang="ja">さ</span>, you have a noun. In this case, the adjective is <span lang="ja">大きい</span> (big) and the noun <span lang="ja">大きさ</span> means "bigness", aka <mark title="Vocabulary" class="vocabulary-highlight">size</mark>.',
      ],
      reading_explanation: [
        "When a vocab has okurigana (hiragana attached to the kanji) it is probably going to be the kun'yomi reading. Since you learned the on'yomi reading with the kanji <span lang=\"ja\">大</span>, we'll have to use a mnemonic to remember this word.",
        'When you saw the size of (pick something surprising), you said "<span lang="ja"><mark title="Reading" class="reading-highlight">おお</mark></span> *#$@!" Really imagine something surprising. Say the <span lang="ja">おお</span> part out loud, as well. Think about the size of whatever you\'re looking at, too, and how big it is.',
      ],
      readingWitAudios: [
        {
          reading: 'おおきさ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/sze45ks39xwhypoh5rgc103pz2ng',
                'https://files.wanikani.com/kjp2bvs8efra9diw8d7zipjxxrdj',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/5f7lk2pus666382vyju04vdos3e5',
                'https://files.wanikani.com/ng734fdrfrr6zowgntyd99jzsc7s',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このサンダルの大きさは、28センチです。',
          en_sentence: 'These sandals are size 28 cm.',
        },
        {
          jp_sentence:
            'アメリカでビックリしたこと？それはドリンクの大きさですよ。',
          en_sentence:
            'What surprised me about the United States? The size of the drinks.',
        },
        {
          jp_sentence: 'このチェストフリーザーは二人くらい入る大きさですよ。',
          en_sentence: 'This chest freezer is big enough for two people or so.',
        },
      ],
      patterns_of_use: ['〜の大きさ'],
      common_word_combinations: [
        {
          jp_sentence: 'アメリカの大きさ',
          en_sentence: 'the size of the USA',
        },
        {
          jp_sentence: 'スーツケースの大きさ',
          en_sentence: 'the size of the suitcase',
        },
        {
          jp_sentence: 'ベッドの大きさ',
          en_sentence: 'the size of the bed',
        },
      ],
    },
    {
      level: '1',
      character: '十',
      primary_meaning: 'Ten',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'When a vocab is alone like this with no okurigana (hiragana attached to the kanji) it tends to steal its meaning from the kanji it came from. That means this vocab word also means <mark title="Vocabulary" class="vocabulary-highlight">ten</mark>.',
      ],
      reading_explanation: [
        'When a vocab is alone and consists of a single kanji like this, usually it uses the kun\'yomi reading for the kanji. But, numbers are an exception and they use the on\'yomi reading (which you learned when you learned the kanji). That means you know that this word\'s reading is <mark title="Reading" class="reading-highlight">じゅう</mark> already.',
      ],
      readingWitAudios: [
        {
          reading: 'じゅう',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/s2w2oz8efsg2mr2ci6bozkkoaeuz',
                'https://files.wanikani.com/7jpp2qf55hqq7t0gjwh82o36ef3i',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/rvb79imuuosqerm13pns6l8wtmu4',
                'https://files.wanikani.com/grh2b0vi6oh7xhim2s9ob4ja0ue1',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'バターを十グラム下さい。',
          en_sentence: 'Ten grams of butter, please.',
        },
        {
          jp_sentence: '十までカウントするよ。一、二、三...',
          en_sentence: "I'll count to ten. One, two, three...",
        },
        {
          jp_sentence: '川で、たこを十メートルまで上げた。',
          en_sentence: 'At the river, I flew a kite up to ten meters high.',
        },
      ],
      patterns_of_use: ['十 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '十ドル',
          en_sentence: 'ten dollars',
        },
        {
          jp_sentence: '十リットル',
          en_sentence: 'ten liters',
        },
        {
          jp_sentence: '十マイル',
          en_sentence: 'ten miles',
        },
      ],
    },
    {
      level: '1',
      character: '三',
      primary_meaning: 'Three',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'When a vocab is a single kanji and alone like this, it usually steals its meaning from the parent kanji. That goes for this word too, making the meaning of this word <mark title="Vocabulary" class="vocabulary-highlight">three</mark>.',
      ],
      reading_explanation: [
        'When a vocab is alone like this with no okurigana (hiragana attached to the kanji) it usually uses its kun\'yomi reading. Numbers are an exception, though, and use the on\'yomi reading. You learned the on\'yomi reading when you learned this kanji, so you already know that the reading for this vocab is <mark title="Reading" class="reading-highlight">さん</mark>.',
      ],
      readingWitAudios: [
        {
          reading: 'さん',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/oaa9t4gspxrtjw3fdr2ij3rqbf70',
                'https://files.wanikani.com/n5gjkvr3gjn9v3d413r4i04qma92',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/88svdylzdvcs6dih74subx3d6e62',
                'https://files.wanikani.com/8d132xieomyp4u7qe34xy6cs4g97',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '三ドルです。',
          en_sentence: "It's three dollars.",
        },
        {
          jp_sentence: 'はじめの三レッスンまではトライアルです。',
          en_sentence: 'Up to the first three lessons is a trial.',
        },
        {
          jp_sentence: 'このキッチンには三タイプあります。',
          en_sentence: 'There are three types of this kitchen model.',
        },
      ],
      patterns_of_use: ['三 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '三グラム',
          en_sentence: 'three grams',
        },
        {
          jp_sentence: '三パック',
          en_sentence: 'three packs',
        },
        {
          jp_sentence: '三チーム',
          en_sentence: 'three teams',
        },
      ],
    },
    {
      level: '1',
      character: '三人',
      primary_meaning: 'Three People',
      alternative_meanings: 'Three Persons',
      word_type: 'noun',
      meaning_explanation: [
        'You have the kanji for <mark title="Kanji" class="kanji-highlight">three</mark> and <mark title="Kanji" class="kanji-highlight">person</mark>. Common sense will tell you what this word is. It\'s <mark title="Vocabulary" class="vocabulary-highlight">three people</mark>.',
      ],
      reading_explanation: [
        "This is a jukugo (kanji compound) word, which usually means on'yomi readings from the kanji. Since <span lang=\"ja\">人</span> has two on'yomi readings, here's a mnemonic to help you remember which one to use:",
        'Apparently, there are <mark title="Vocabulary" class="vocabulary-highlight">three people</mark> working as <mark title="Reading" class="reading-highlight">San</mark>ta-san at <mark title="Reading" class="reading-highlight">Nin</mark>tendo (<span lang="ja">さんにん</span>)! It\'s a big company, so obviously they need three Santas.',
      ],
      readingWitAudios: [
        {
          reading: 'さんにん',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/3q31q8hfxqhn2owibpowvpw953up',
                'https://files.wanikani.com/z3rqcgfcuo4xfwdisahb8tgosxf4',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/zw5i2a8z0goomrokmio439sz4idm',
                'https://files.wanikani.com/drg0qllhiuygr0dljgbnphqpe5uk',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '三人のルームメイトがいます。',
          en_sentence: 'I have three roommates.',
        },
        {
          jp_sentence: '三人のテーブルありますか？',
          en_sentence: 'Is there a table for three?',
        },
        {
          jp_sentence:
            'ニコラス・ケイジ、キアヌ・リーブス、トム・クルーズ。この三人で、だれがタイプ？',
          en_sentence:
            "Nicholas Cage, Keanu Reeves, and Tom Cruise. Out of these three, who's your type?",
        },
      ],
      patterns_of_use: ['三人の〜'],
      common_word_combinations: [
        {
          jp_sentence: '三人のランナー',
          en_sentence: 'three runners',
        },
        {
          jp_sentence: '三人のため',
          en_sentence: 'for the three people, for the three of us',
        },
        {
          jp_sentence: '三人のおじさん',
          en_sentence: 'three middle-aged men',
        },
      ],
    },
    {
      level: '1',
      character: '三つ',
      primary_meaning: 'Three Things',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'This word follows the "number of things" pattern where there\'s a kanji for a number plus <span lang="ja">つ</span> on the end. Whenever you see this, you know the word means "____ things." Knowing that, as long as you know the kanji (which you do) you can figure out what number of things it is. For this one, it\'s the kanji for <mark title="Kanji" class="kanji-highlight">three</mark> plus <span lang="ja">つ</span>. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">three things</mark>.',
      ],
      reading_explanation: [
        'Since all of the "number of things" words all follow the same pattern (number plus <span lang="ja">つ</span>), you really just have to remember the part before the <span lang="ja">つ</span> (and then remember that the <span lang="ja">つ</span> is in all of these). All of the readings are the kun\'yomi reading, which means we\'ll have to use a mnemonic to remember them (you know the on\'yomi reading of the kanji portion).',
        'What thing do you have three of? The <mark title="Vocabulary" class="vocabulary-highlight">three things</mark> that you have are actually three versions of yourself. "Who is the real one?" you ask yourself. "It\'s <mark title="Reading" class="reading-highlight">me</mark>!" "Wait, no, it\'s <mark title="Reading" class="reading-highlight">me</mark>!" Just remember that there are three of you, and they\'re all saying "me me me me me" to try and prove that they\'re the real you.',
      ],
      readingWitAudios: [
        {
          reading: 'みっつ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/n29l1luxlefhvizzjeoqgnti0m1w',
                'https://files.wanikani.com/ylyeqdq5t19d78zc6p0g9jfnjm5e',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/k3c5ruj1g96zo9ecvxxzny8itc7g',
                'https://files.wanikani.com/lld55wdg7xbhfyut2yzbxum40nfm',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このスーツケースにはメロンが三つ入る。',
          en_sentence: 'This suitcase can fit three melons.',
        },
        {
          jp_sentence: 'ここにボールを三つ入るよ。',
          en_sentence: 'You can fit three balls in here.',
        },
        {
          jp_sentence:
            'チーズバーガーを三つオーダーしたけど、一人で三つたべます。',
          en_sentence:
            'I ordered three cheeseburgers, and I will eat all three of them by myself.',
        },
      ],
      patterns_of_use: ['三つの〜'],
      common_word_combinations: [
        {
          jp_sentence: '三つのタイプ',
          en_sentence: 'three types',
        },
        {
          jp_sentence: '三つのポイント',
          en_sentence: 'three points',
        },
        {
          jp_sentence: '三つのグループ',
          en_sentence: 'three groups',
        },
      ],
    },
    {
      level: '1',
      character: '入る',
      primary_meaning: 'To Enter',
      alternative_meanings: 'To Go In',
      word_type: 'intransitive verb, godan verb',
      meaning_explanation: [
        'This vocab word has okurigana, which is the hiragana part that comes after the kanji. When a vocab\'s okurigana makes an "<span lang="ja">う</span>/oo" sound (in this case, we have a <span lang="ja">る</span>), it\'s often going to be a verb. So in this case, the kanji <span lang="ja">入</span> is <mark title="Kanji" class="kanji-highlight">enter</mark>. The vocab <span lang="ja">入る</span> is <mark title="Vocabulary" class="vocabulary-highlight">to enter</mark>. We\'re just taking the kanji and using it in a verb!',
      ],
      reading_explanation: [
        "When a vocab is a single kanji with okurigana, chances are it's going to be the kun'yomi reading, which you don't usually learn in the kanji (you usually learn the on'yomi reading). So, let's learn the kun'yomi reading for this word using its meaning.",
        'When you <mark title="Vocabulary" class="vocabulary-highlight">enter</mark> the room, what do you do? You say "<mark title="Reading" class="reading-highlight">Hi</mark>" (<span lang="ja">はい</span>) to everyone to the point of absurdity. "Hi there. Oh hi Frank. Oh hi there Susan. Oh hi there lamp."',
      ],
      readingWitAudios: [
        {
          reading: 'はいる',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/p78odcmeomfnw3c398qm2bsg7ozd',
                'https://files.wanikani.com/42jietm63o3k9umzboa2xkyvwrap',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/h39xfi8lm4wix41paw9q79r7vvf3',
                'https://files.wanikani.com/3ba354azjpw1otwop2wvctrvwqno',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'ジェニーはもうすぐインターナショナルスクールに入る。',
          en_sentence: 'Jenny will go to an international school soon.',
        },
        {
          jp_sentence: 'マイケルは一人でカラオケに入った。',
          en_sentence: 'Michael went into karaoke alone.',
        },
        {
          jp_sentence: 'スキーのクラブに入ったんです。',
          en_sentence: 'I joined the ski club.',
        },
      ],
      patterns_of_use: ['〜が入る', '〜に入る'],
      common_word_combinations: [
        {
          jp_sentence: '力が入る',
          en_sentence: 'to be filled with strength',
        },
        {
          jp_sentence: '人が入る',
          en_sentence: 'people enter',
        },
        {
          jp_sentence: 'ひびが入る',
          en_sentence: 'to crack',
        },
        {
          jp_sentence: 'うちに入る',
          en_sentence: 'to go inside',
        },
        {
          jp_sentence: 'コンビニに入る',
          en_sentence: 'to go into a convenience store',
        },
        {
          jp_sentence: 'プールに入る',
          en_sentence: 'to get into the pool',
        },
      ],
    },
    {
      level: '1',
      character: '上げる',
      primary_meaning: 'To Lift Something',
      alternative_meanings: 'To Raise Something, To Increase Something',
      word_type: 'transitive verb, ichidan verb',
      meaning_explanation: [
        'This word consists of kanji with hiragana attached. Because the hiragana ends with an <span lang="ja">う</span> sound, you know this word is a verb. The kanji itself means <mark title="Kanji" class="kanji-highlight">above</mark> and this verb is related to that meaning. It means <mark title="Vocabulary" class="vocabulary-highlight">to lift something</mark> or <mark title="Vocabulary" class="vocabulary-highlight">to raise something</mark>. It\'s a transitive verb, meaning that you do something to something else. You raise something. Like your hands!',
      ],
      reading_explanation: [
        "Since this word has okurigana (hiragana attached to the kanji) you know that it's probably going to use the kun'yomi reading, which you didn't learn with the kanji. Here's a mnemonic to help you:",
        'You want <mark title="Vocabulary" class="vocabulary-highlight">to lift something</mark>, and that something is <mark title="Reading" class="reading-highlight">a</mark>ardvark (<span lang="ja">あ</span>) above your head. Why? Because even though aardvarks have long tongues, they can\'t reach the ants in the trees. But when you raise this aardvark it can get at those yummy ants!',
      ],
      readingWitAudios: [
        {
          reading: 'あげる',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/5onk1p8xregs3lwnijddaxyfmgi9',
                'https://files.wanikani.com/9tf1v4m1mk9v8wtg7ytcd3uhfuwg',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/dbpr0xyx631vy4ylev0sfjohcd3j',
                'https://files.wanikani.com/vhcqytp1bjocth7lip15akb47scn',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '大きいブランケットをロフトに上げる。',
          en_sentence: 'I lift a large blanket up to the loft.',
        },
        {
          jp_sentence: '「スピーカーのボリューム、上げる？」「うん。」',
          en_sentence: '"Should I turn up the volume on the speaker?" "Yeah."',
        },
        {
          jp_sentence: 'ピカチュウのレベルを上げるには、どうしたらいいですか？',
          en_sentence: "What can I do to raise Pikachu's level?",
        },
      ],
      patterns_of_use: ['〜を上げる'],
      common_word_combinations: [
        {
          jp_sentence: 'レベルを上げる',
          en_sentence: 'to raise the level',
        },
        {
          jp_sentence: 'モチベーションを上げる',
          en_sentence: 'to increase motivation',
        },
        {
          jp_sentence: 'スピードを上げる',
          en_sentence: 'to increase speed',
        },
      ],
    },
    {
      level: '1',
      character: '下げる',
      primary_meaning: 'To Lower Something',
      alternative_meanings: 'To Hang Something',
      word_type: 'transitive verb, ichidan verb',
      meaning_explanation: [
        'This word consists of kanji with hiragana attached. Because the hiragana ends with an <span lang="ja">う</span> sound, you know this word is a verb. The kanji itself means <mark title="Kanji" class="kanji-highlight">below</mark> so the verb version of that is when you put something below you. It\'s <mark title="Vocabulary" class="vocabulary-highlight">to lower something</mark>. It can also mean <mark title="Vocabulary" class="vocabulary-highlight">to hang something</mark>, such as a lamp from the ceiling.',
        'This is a transitive verb, which means that the verb is done by one entity onto another. In other words, you lower <i>something</i>. Like your impossibly high expectations for yourself. Take it easy!',
      ],
      reading_explanation: [
        "Since this word has okurigana (hiragana attached to the kanji) you know that it's probably going to be the kun'yomi reading, which you didn't learn with the kanji. Here's a mnemonic to help you:",
        'You want <mark title="Vocabulary" class="vocabulary-highlight">to lower something</mark>. In this case, it\'s a tree, so you need a <mark title="Reading" class="reading-highlight">saw</mark> (<span lang="ja">さ</span>). Lower the tree to the ground gently while you slowly saw it down!',
      ],
      readingWitAudios: [
        {
          reading: 'さげる',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/1zpaf6e7cpp9y3ngtsbibthqyvnz',
                'https://files.wanikani.com/vdid3fsasnap7ldj0boz8ml1ynuf',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/03mrkf95xgzsyyylou1v7tu5fesh',
                'https://files.wanikani.com/u94f1d2c4ejy8ebszkpace9qotxl',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '力いっぱいレバーを下げて！',
          en_sentence: 'Lower the lever as hard as you can!',
        },
        {
          jp_sentence: '一つレベルを下げよう。',
          en_sentence: "Let's lower it one level.",
        },
        {
          jp_sentence: 'あっ、このロープ、ベーコンを下げるのにちょうどいい。',
          en_sentence: 'Oh, this rope is perfect for hanging bacon.',
        },
      ],
      patterns_of_use: ['〜を下げる'],
      common_word_combinations: [
        {
          jp_sentence: 'レベルを下げる',
          en_sentence: 'to lower the level',
        },
        {
          jp_sentence: 'コストを下げる',
          en_sentence: 'to lower the cost',
        },
        {
          jp_sentence: 'ボリュームを下げる',
          en_sentence: 'to lower the volume',
        },
      ],
    },
    {
      level: '1',
      character: '二',
      primary_meaning: 'Two',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'When a vocab word is a single kanji without okurigana (hiragana attached to the kanji) it usually has the same meaning as the kanji it\'s spawned from. If you know the kanji meaning you\'ll also know the vocab meaning. It\'s <mark title="Vocabulary" class="vocabulary-highlight">two</mark>!',
      ],
      reading_explanation: [
        "When a vocab word is a single kanji with no okurigana, it usually uses the kun'yomi reading. Numbers are an exception to this. Numbers use the on'yomi reading, which you've already learned by learning the kanji's reading! How nice!",
      ],
      readingWitAudios: [
        {
          reading: 'に',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/3ze81qbhp2g3wejh1j4twtfpo2sm',
                'https://files.wanikani.com/1qjcoti249x29tngt0hjtoz5aut8',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/oqzritm5xqc4820z15k1tb29hicy',
                'https://files.wanikani.com/a4zhefnp62fb868kgwncwn2n0kef',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'エントリーナンバーは二です。',
          en_sentence: 'The entry number is two.',
        },
        {
          jp_sentence: '二ゲームとも、アメリカにポイントが入った。',
          en_sentence: 'The United States got points in both games.',
        },
        {
          jp_sentence: 'どうしよう。トイレットペーパーが二メートルしかないよ。',
          en_sentence: 'Oh, my. We only have two meters of toilet paper left.',
        },
      ],
      patterns_of_use: ['二 + unit'],
      common_word_combinations: [
        {
          jp_sentence: '二ドル',
          en_sentence: 'two dollars',
        },
        {
          jp_sentence: '二セント',
          en_sentence: 'two cents',
        },
        {
          jp_sentence: '二パターン',
          en_sentence: 'two patterns',
        },
      ],
    },
    {
      level: '1',
      character: '二人',
      primary_meaning: 'Two People',
      alternative_meanings: 'Pair, Couple, Two Persons',
      word_type: 'noun',
      meaning_explanation: [
        'When you have <mark title="Kanji" class="kanji-highlight">two</mark> and <mark title="Kanji" class="kanji-highlight">person</mark> and then put them together, what do you get? You get a <mark title="Vocabulary" class="vocabulary-highlight">pair</mark> or <mark title="Vocabulary" class="vocabulary-highlight">two people</mark>.',
      ],
      reading_explanation: [
        'The reading for this word is quite strange. If you know <span lang="ja">二つ</span>\'s reading, you can use that to remember the <span lang="ja">二</span> part (<span lang="ja">ふた</span>). But, the <span lang="ja">り</span> that is the <span lang="ja">人</span> is a total exception, something you won\'t see too often (though you may have seen it in <span lang="ja">一人</span>). If you can use the reading of <span lang="ja">一人</span> (aka if you\'ve learned it already) then definitely use that. If not, do your best to remember the reading on your own. It\'s a strange one that doesn\'t connect to much else.',
      ],
      readingWitAudios: [
        {
          reading: 'ふたり',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/rm28qnbhdf6i8livp172ttwubdul',
                'https://files.wanikani.com/83da34sc29lv9rb4aqqj29biiq6x',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/41wr98prr7684hgv8kne9vdg92ju',
                'https://files.wanikani.com/0h489l8dg4u60xteyx7lfxf4gn66',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'このアパートは二人には大きい。',
          en_sentence: 'This apartment is too big for two people.',
        },
        {
          jp_sentence: 'あの二人はバドミントンのダブルスのパートナーです。',
          en_sentence: 'Those two people are badminton doubles partners.',
        },
        {
          jp_sentence:
            'せっかく二人のためにオーダーしたケーキなのに、なんで一人でたべちゃったの？',
          en_sentence:
            'Why did you eat it alone when I ordered a cake for the two of us?',
        },
      ],
      patterns_of_use: ['二人の〜', '二人〜'],
      common_word_combinations: [
        {
          jp_sentence: '二人のため',
          en_sentence: 'for the two people, for the two of us',
        },
        {
          jp_sentence: '二人のむすこ',
          en_sentence: "two sons, the couple's son",
        },
        {
          jp_sentence: '二人のむすめ',
          en_sentence: "two daughters, the couple's daughter",
        },
        {
          jp_sentence: '二人づつ',
          en_sentence: 'two by two people',
        },
        {
          jp_sentence: '二人いっしょ',
          en_sentence: 'two of them together, two of us together',
        },
        {
          jp_sentence: '二人きり',
          en_sentence: 'just the two of them, just the two of us',
        },
      ],
    },
    {
      level: '1',
      character: '二つ',
      primary_meaning: 'Two Things',
      alternative_meanings: null,
      word_type: 'numeral',
      meaning_explanation: [
        'This word follows the "number of things" pattern where there\'s a kanji for a number plus <span lang="ja">つ</span> on the end. Whenever you see this, you know the word means "____ things." Knowing that, as long as you know the kanji (which you do) you can figure out what number of things it is. For this one, it\'s the kanji for <mark title="Kanji" class="kanji-highlight">two</mark> plus <span lang="ja">つ</span>. So, this one is <mark title="Vocabulary" class="vocabulary-highlight">two things</mark>.',
      ],
      reading_explanation: [
        'Since all of the "number of things" words all follow the same pattern (number plus <span lang="ja">つ</span>), you really just have to remember the part before the <span lang="ja">つ</span>(and then remember that the <span lang="ja">つ</span>is in all of these). All of the readings are the kun\'yomi reading, which means we\'ll have to use a mnemonic to remember them (you know the on\'yomi reading of the kanji portion).',
        'So what thing do you have two of? The <mark title="Vocabulary" class="vocabulary-highlight">two things</mark> you have are 2-<mark title="Reading" class="reading-highlight">foo</mark>t <mark title="Reading" class="reading-highlight">ta</mark>cos (<span lang="ja">ふた</span>). How lucky are you, that your two things are 2-foot tacos? Other people only have two foot-tacos... And trust me, you don\'t want to eat those.',
      ],
      readingWitAudios: [
        {
          reading: 'ふたつ',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/b7yttf151qihlzwu9m49aeje9x17',
                'https://files.wanikani.com/olxgh3c5gdzurb89c7ys93zc4ly6',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/b4q9olghycg0rmdr7nogsswlopyy',
                'https://files.wanikani.com/1lfd7jbi22xcrul0l3lq8c3jhgq3',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'ビルが二つあります。',
          en_sentence: 'There are two buildings.',
        },
        {
          jp_sentence: 'メロンが二つ川に入った。',
          en_sentence: 'Two melons went into the river.',
        },
        {
          jp_sentence: '二つのラーメンを三人でシェアした。',
          en_sentence: 'Three of us shared two bowls of ramen.',
        },
      ],
      patterns_of_use: ['二つの〜', '二つ〜'],
      common_word_combinations: [
        {
          jp_sentence: '二つのパターン',
          en_sentence: 'two patterns',
        },
        {
          jp_sentence: '二つのタイプ',
          en_sentence: 'two types',
        },
        {
          jp_sentence: '二つのグループ',
          en_sentence: 'two groups',
        },
        {
          jp_sentence: '二つ下',
          en_sentence: 'two years younger',
        },
        {
          jp_sentence: '二つとも',
          en_sentence: 'both things',
        },
        {
          jp_sentence: '二つ上',
          en_sentence: 'two years older',
        },
      ],
    },
    {
      level: '1',
      character: '力いっぱい',
      primary_meaning: "With All One's Strength",
      alternative_meanings: 'Full Power, As Hard As One Can',
      word_type: 'adverb, expression',
      meaning_explanation: [
        'You\'ve hopefully already learned that <span lang="ja">力</span> means "power." You might have also heard the word <span lang="ja">いっぱい</span>, because it\'s used a lot in conversation. It has a few meanings (you\'ll learn more of them later) but the important one here is "full" or "a lot." Put these two words together and you have <mark title="Vocabulary" class="vocabulary-highlight">full power</mark>, <mark title="Vocabulary" class="vocabulary-highlight">with all one\'s strength</mark>, and <mark title="Vocabulary" class="vocabulary-highlight">as hard as one can</mark>. Remember this one with all your strength!',
        'Just a side note: <span lang="ja">いっぱい</span> can also be written in kanji, which you\'ll learn later on! However, in simple words like this one it\'s usually written in kana.',
      ],
      reading_explanation: [
        '<span lang="ja">力</span> uses the same reading as you learned with the vocabulary. That\'s because this is basically two separate words stuck together.',
      ],
      readingWitAudios: [
        {
          reading: 'ちからいっぱい',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/vmrtbpfgpeeaf6dhclxycyd1tl7b',
                'https://files.wanikani.com/qtu86f2aaqhrf2tszs94wwzxf014',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/83fj039u6tmic8o63bv977r8xrpp',
                'https://files.wanikani.com/6xqfgpbnzhrnh5p4pwuzymvv559e',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: '力いっぱいがんばりました！',
          en_sentence: 'We did our best!',
        },
        {
          jp_sentence: 'ドアを力いっぱいおしてください。',
          en_sentence: 'Please push on the door as hard as you can.',
        },
        {
          jp_sentence: 'リレーでは力いっぱいはしりました。',
          en_sentence: 'I ran as fast as I could in the relay.',
        },
      ],
      patterns_of_use: ['力いっぱい〜'],
      common_word_combinations: [
        {
          jp_sentence: '力いっぱいひっぱる',
          en_sentence: "to pull with all one's strength",
        },
        {
          jp_sentence: '力いっぱいがんばる',
          en_sentence: "to do one's best",
        },
        {
          jp_sentence: '力いっぱいハグをする',
          en_sentence: 'to give a big hug',
        },
      ],
    },
    {
      level: '1',
      character: '女',
      primary_meaning: 'Woman',
      alternative_meanings: 'Female',
      word_type: 'noun',
      meaning_explanation: [
        'When a kanji is alone and doesn\'t have any okurigana (hiragana attached to the kanji) it\'s usually going to take the same meaning as the kanji it comes from. So in this case, you know that this word means <mark title="Vocabulary" class="vocabulary-highlight">woman</mark>.',
        'But watch out! Using <span lang="ja">女</span> on its own can often come off as blunt and disrespectful, especially in casual chats. We’ll introduce you to neutral equivalents soon!',
      ],
      reading_explanation: [
        "When a word is a single kanji with no okurigana (hiragana attached to the kanji) it tends to use a kun'yomi reading. You didn't learn the kun'yomi reading when you learned the kanji itself, so let's use a mnemonic to remember the vocab word.",
        'There\'s a <mark title="Vocabulary" class="vocabulary-highlight">woman</mark> in front of you. Who is she? She\'s M<mark title="Reading" class="reading-highlight">ona</mark> (<span lang="ja">おんな</span>) Lisa!',
      ],
      readingWitAudios: [
        {
          reading: 'おんな',
          audios: [
            {
              sources: [
                'https://files.wanikani.com/27gao8a0s4mhr6kvvpt88pbrrz8n',
                'https://files.wanikani.com/wnvrop7xp280kz3qjmva210fa2na',
              ],
              actor_name: 'Kyoko',
            },
            {
              sources: [
                'https://files.wanikani.com/3otture0i5gb4vw3fcazfzntvmgd',
                'https://files.wanikani.com/mxjk6jynernhy8stvhg880babbn7',
              ],
              actor_name: 'Kenichi',
            },
          ],
        },
      ],
      context_sentences: [
        {
          jp_sentence: 'バーに三人の女がいる。',
          en_sentence: 'There are three women at the bar.',
        },
        {
          jp_sentence: '女のニンジャのことを「九ノ一」という。',
          en_sentence: 'Female ninjas are called "kunoichi."',
        },
        {
          jp_sentence: 'あの女は、とても力のある女スパイだ。',
          en_sentence: 'That woman is a very powerful female spy.',
        },
      ],
      patterns_of_use: ['女〜', '女の〜'],
      common_word_combinations: [
        {
          jp_sentence: '女どうし',
          en_sentence: 'between women',
        },
        {
          jp_sentence: '女スパイ',
          en_sentence: 'a female spy',
        },
        {
          jp_sentence: '女ともだち',
          en_sentence: 'female friends',
        },
        {
          jp_sentence: '女の力',
          en_sentence: 'the power of women',
        },
        {
          jp_sentence: '女のコスメ',
          en_sentence: "women's cosmetics",
        },
        {
          jp_sentence: '女の人',
          en_sentence: 'a woman',
        },
      ],
    },
  ],
};

async function seedLevels() {
  try {
    await db.insert(levels).values(SEEDING_DATA.levels);
  } catch (error) {
    console.error(error);
  }
}

export async function seed() {
  const spinner = ora('Seeding data').start();

  await seedLevels();

  spinner.succeed('Seed completed');
}
