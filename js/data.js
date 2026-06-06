// ================================
// 哺乳纲演化导航 - 节点数据
// ================================

const nodeMap = {
    // 根节点：哺乳纲
    mammalia: {
        id: "mammalia",
        name: "哺乳纲",
        icon: "🦁",
        description: "脊椎动物亚门的一纲，特征包括乳腺、毛发及听觉骨骼的特化，演化历史跨越两亿年。已知约6400种，几乎遍布地球的所有生态系统。",
        geologicalPeriod: "三叠纪早期（约2.2亿年前）",
        question: "在约2.2亿年前的三叠纪，早期哺乳动物已出现。请根据繁殖方式，选择你的演化路径：",
        options: [
            { text: "🥚 保留卵生习性，通过产卵繁殖后代", target: "prototheria" },
            { text: "👶 发展出胎生能力，直接产下发育程度不同的幼崽", target: "theria" }
        ]
    },

    // 原兽亚纲（卵生）
    prototheria: {
        id: "prototheria",
        name: "原兽亚纲",
        icon: "🥚",
        description: "最原始的哺乳动物分支，特征是保留了卵生习性（单孔类），排泄与生殖共用一个泄殖腔。",
        geologicalPeriod: "侏罗纪中期（约1.66亿年前）",
        question: "你选择了保留卵生。这一支系在侏罗纪分化，如今仅存一小群：",
        options: [
            { text: "🦔 存活至今，仍保留泄殖腔和卵生", target: "monotremata" }
        ]
    },

    // 单孔目
    monotremata: {
        id: "monotremata",
        name: "单孔目",
        icon: "🦔",
        description: "原兽亚纲现存唯一的目，保留了卵生特征，具有独特的感官特化（电感受）及泌乳机制。",
        geologicalPeriod: "早古新世（约6600万年前）",
        question: "卵生哺乳动物在古新世进一步特化，它们选择了不同的生存环境：",
        options: [
            { text: "🦆 半水生，嘴部特化成扁平的鸭嘴状，电感应捕食", target: "ornithorhynchidae" },
            { text: "🦔 陆生，全身覆盖棘刺，以蚂蚁为食", target: "tachyglossidae" }
        ]
    },

    ornithorhynchidae: {
        id: "ornithorhynchidae",
        name: "鸭嘴兽科",
        isLeaf: true,
        icon: "🦆",
        description: "鸭嘴兽科仅包含鸭嘴兽一种，是最奇特的哺乳动物之一，具有鸭嘴状的喙和产卵习性。雄性有毒刺，位于后肢。生活在澳大利亚东部的河流中。",
        keyTraits: ["鸭嘴", "卵生", "雄性有毒", "半水生"],
        geologicalPeriod: "早古新世（约6600万年前）"
    },

    tachyglossidae: {
        id: "tachyglossidae",
        name: "针鼹科",
        isLeaf: true,
        icon: "🦔",
        description: "针鼹科包括针鼴和原针鼴，全身覆盖棘刺，以蚂蚁和白蚁为食。具有长而粘的舌头，用来捕食昆虫。雌性有育儿袋，用于孵化卵和哺育幼崽。",
        keyTraits: ["棘刺", "食蚁", "育儿袋", "长舌"],
        geologicalPeriod: "早古新世（约6600万年前）"
    },

    // 兽亚纲分支（胎生）
    theria: {
        id: "theria",
        name: "兽亚纲",
        icon: "🐾",
        description: "胎生哺乳动物，包含有袋类和胎盘类，特征是具有乳头和旋转的肩胛骨。是现代哺乳动物的主要组成部分。",
        geologicalPeriod: "晚侏罗世（约1.6亿年前）",
        question: "你发展了胎生能力。幼崽出生时的发育程度，决定了两个主要方向：",
        options: [
            { text: "🦘 幼崽极早期出生，在体外（育儿袋）继续发育", target: "metatheria" },
            { text: "🐻 幼崽在母体内充分发育，出生后即较成熟", target: "eutheria" }
        ]
    },

    // 后兽下纲（有袋类）
    metatheria: {
        id: "metatheria",
        name: "后兽下纲",
        icon: "🦘",
        description: "即有袋类及其化石近亲，特征是幼崽在发育早期出生，通常在育儿袋中完成后续发育。主要分布于澳洲和美洲。",
        geologicalPeriod: "早白垩世（约1.48亿年前）",
        question: "早期有袋类随冈瓦纳古陆分裂，走向不同大陆。环境差异影响了它们的命运：",
        options: [
            { text: "🌎 留在美洲，与不断兴起的胎盘类竞争", target: "ameridelphia" },
            { text: "🏝️ 抵达长期隔离的澳大利亚，在缺少竞争者的环境中辐射演化", target: "australidelphia" }
        ]
    },

    // 美洲有袋超目
    ameridelphia: {
        id: "ameridelphia",
        name: "美洲有袋超目",
        icon: "🌎",
        description: "包含美洲大陆的有袋类物种，是有袋类较早分化的一个分支，包括负鼠目等。",
        geologicalPeriod: "白垩纪晚期（约7000万年前）",
        question: "美洲有袋类面对竞争，选择了不同的小生境：",
        options: [
            { text: "🐭 小型夜行杂食者，以装死作为防御策略", target: "didelphimorphia" },
            { text: "🦔 更特化的食虫者，退缩到安第斯高山环境", target: "paucituberculata" }
        ]
    },

    // 负鼠目
    didelphimorphia: {
        id: "didelphimorphia",
        name: "负鼠目",
        icon: "🐭",
        description: "美洲有袋超目中形态最原始的基干类群，主要为树栖或半树栖，保留了有袋类的祖征。",
        geologicalPeriod: "古新世（约6600万年前）",
        question: "负鼠类的不同分支，适应了美洲多样的森林环境：",
        options: [
            { text: "🟡 树栖杂食，遇敌装死", target: "didelphidae" },
            { text: "🟢 更小体型，专精于树冠层水果昆虫", target: "caluromyidae" },
            { text: "🔴 无育儿袋，适应安第斯高山冷湿环境", target: "caenolestidae" }
        ]
    },

    didelphidae: {
        id: "didelphidae",
        name: "负鼠科",
        isLeaf: true,
        icon: "🐭",
        description: "负鼠科是负鼠目中最大的科，包括常见的北美负鼠和南美多种负鼠。多数有育儿袋，杂食性，适应力强，有些种类能装死防御。",
        keyTraits: ["树栖", "杂食", "育儿袋", "装死"],
        geologicalPeriod: "古新世（约6600万年前）"
    },

    caluromyidae: {
        id: "caluromyidae",
        name: "小负鼠科",
        isLeaf: true,
        icon: "🐁",
        description: "小负鼠科包括毛尾负鼠等，体型较小，主要树栖，以水果和昆虫为食。分布于中美洲和南美洲的热带森林。",
        keyTraits: ["小型", "树栖", "杂食"],
        geologicalPeriod: "古新世（约6600万年前）"
    },

    caenolestidae: {
        id: "caenolestidae",
        name: "新袋鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "新袋鼠科包括鼩负鼠等，体型较小，没有真正的育儿袋。生活在南美洲的安第斯山脉和高山地区，主要以昆虫为食。",
        keyTraits: ["小型", "无育儿袋", "南美", "高山"],
        geologicalPeriod: "古新世（约6600万年前）"
    },

    // 鼩负鼠目
    paucituberculata: {
        id: "paucituberculata",
        name: "鼩负鼠目",
        icon: "🦔",
        description: "南美洲的孑遗类群，现生属种仅分布于安第斯高山环境，被称为生物地理学的“拉撒路类群”。",
        geologicalPeriod: "古新世中期（约6000万年前）",
        question: "鼩负鼠类退缩到安第斯山脉，成为孑遗物种：",
        options: [
            { text: "🟡 高海拔食虫者，南美特有", target: "paucituberculidae" }
        ]
    },

    paucituberculidae: {
        id: "paucituberculidae",
        name: "鼩负鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "鼩负鼠科是鼩负鼠目唯一的科，包括鼩负鼠等。生活在安第斯山脉的高山环境中，是南美洲的特有类群。体型小，主要以昆虫为食。",
        keyTraits: ["孑遗物种", "高山环境", "南美特有", "小型"],
        geologicalPeriod: "古新世中期（约6000万年前）"
    },

    // 澳洲有袋总目
    australidelphia: {
        id: "australidelphia",
        name: "澳洲有袋总目",
        icon: "🦘",
        description: "包含所有澳洲有袋类及南美洲的微兽目，起源于冈瓦纳古陆的一次跨南极迁徙。",
        geologicalPeriod: "晚白垩世（约7500万年前）",
        question: "在广阔的澳大利亚，有袋类占据了各种生态位。选择你的适应方向：",
        options: [
            { text: "🐿️ 成为南美洲的孑遗见证者，与澳洲有袋类亲缘甚远", target: "microbiotheria" },
            { text: "🦷 成为捕食者，发展锋利牙齿追捕猎物", target: "dasyuromorphia" },
            { text: "🌾 成为地面杂食者，在森林和灌丛中觅食", target: "peramelemorphia" },
            { text: "⛏️ 深入地下，用强壮前肢挖掘沙土", target: "notoryctemorphia" },
            { text: "🌿 以植物为主食，并发展出多样化的取食方式", target: "diprotodontia" }
        ]
    },

    // 微兽目
    microbiotheria: {
        id: "microbiotheria",
        name: "微兽目",
        isLeaf: true,
        icon: "🐿️",
        description: "仅存南猊一种，被视为“罗塞塔石碑”，是澳洲有袋类滞留在南美洲的姐妹群后裔。",
        keyTraits: ["单种现存", "南美分布", "孑遗物种"],
        geologicalPeriod: "晚白垩世（约6000万年前）"
    },

    // 袋鼬目
    dasyuromorphia: {
        id: "dasyuromorphia",
        name: "袋鼬目",
        icon: "🦊",
        description: "澳洲主要的食肉有袋类辐射，包含袋鼬、袋食蚁兽及已灭绝的袋狼。",
        geologicalPeriod: "早古新世（约6400万年前）",
        question: "食肉有袋类在澳洲成为顶级捕食者。不同家族采取了不同策略：",
        options: [
            { text: "🟡 夜行伏击，包括著名的袋獾", target: "dasyuridae" },
            { text: "🟢 特化为白天专食白蚁", target: "myrmecobiidae" },
            { text: "🔴 曾为最大食肉有袋类，背部有条纹（已灭绝）", target: "thylacinidae" }
        ]
    },

    dasyuridae: {
        id: "dasyuridae",
        name: "袋鼬科",
        isLeaf: true,
        icon: "🦊",
        description: "袋鼬科是袋鼬目中最大的科，包括袋鼬、袋獾等。袋獾是现存最大的食肉有袋类，以凶猛著称。生活在塔斯马尼亚岛。",
        keyTraits: ["食肉", "澳洲特有", "夜行性", "凶猛"],
        geologicalPeriod: "早古新世（约6400万年前）"
    },

    myrmecobiidae: {
        id: "myrmecobiidae",
        name: "袋食蚁兽科",
        isLeaf: true,
        icon: "🐜",
        description: "袋食蚁兽科仅包含袋食蚁兽一种，是一种专食白蚁的有袋类。具有长而粘的舌头，用来捕食白蚁，白天活动，与大多数有袋类不同。",
        keyTraits: ["食蚁", "长舌", "昼行"],
        geologicalPeriod: "早古新世（约6400万年前）"
    },

    thylacinidae: {
        id: "thylacinidae",
        name: "袋狼科",
        isLeaf: true,
        icon: "🐺",
        description: "袋狼科包括已灭绝的袋狼（塔斯马尼亚虎），曾是最大的食肉有袋类，外形似狗但有袋。背部有独特的深色条纹。最后一只袋狼于1936年死亡。",
        keyTraits: ["已灭绝", "条纹", "似犬"],
        geologicalPeriod: "早古新世（约6400万年前）"
    },

    // 袋狸目
    peramelemorphia: {
        id: "peramelemorphia",
        name: "袋狸目",
        icon: "🐀",
        description: "杂食性有袋类，起源于渐新世，随澳洲大陆北移及干旱化而辐射演化。代表物种：兔耳袋狸。",
        geologicalPeriod: "始新世中期（约4500万年前）",
        question: "袋狸类选择杂食，适应了澳洲逐渐干旱化的环境：",
        options: [
            { text: "🟡 杂食性，适应多种栖息环境", target: "peramelidae" },
            { text: "🟢 长耳跳跃，适应干旱内陆", target: "thyacomyidae" },
            { text: "🔴 趾部特化（已灭绝）", target: "chaeropodidae" }
        ]
    },

    peramelidae: {
        id: "peramelidae",
        name: "袋狸科",
        isLeaf: true,
        icon: "🐀",
        description: "袋狸科是袋狸目中最大的科，包括多种袋狸，体型较小，杂食性，分布于澳大利亚和新几内亚。",
        keyTraits: ["杂食", "澳洲/新几内亚分布"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    thyacomyidae: {
        id: "thyacomyidae",
        name: "兔耳袋狸科",
        isLeaf: true,
        icon: "🐰",
        description: "兔耳袋狸科包括兔耳袋狸，是适应干旱环境的袋狸，耳朵很长，有强大的后肢用于跳跃。",
        keyTraits: ["长耳", "干旱适应", "跳跃"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    chaeropodidae: {
        id: "chaeropodidae",
        name: "豚足袋狸科",
        isLeaf: true,
        icon: "🐀",
        description: "豚足袋狸科是已灭绝的袋狸科，具有独特的趾结构，生活在澳大利亚。",
        keyTraits: ["已灭绝", "澳洲分布"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    // 袋鼹目
    notoryctemorphia: {
        id: "notoryctemorphia",
        name: "袋鼹目",
        isLeaf: true,
        icon: "🦇",
        description: "形态极端特化的有袋类，适应地下穴居生活，具有趋同演化的挖掘特征。",
        keyTraits: ["穴居", "特化前肢"],
        geologicalPeriod: "早古新世（约6400万年前）"
    },

    // 双门齿目
    diprotodontia: {
        id: "diprotodontia",
        name: "双门齿目",
        icon: "🐨",
        description: "现存多样性最高的有袋类目，主要特征为下颌具有一对突出的门齿。",
        geologicalPeriod: "古新世晚期（约5500万年前）",
        question: "植食有袋类在澳洲大放异彩。它们选择了不同的移动和取食方式：",
        options: [
            { text: "⛏️ 地面或洞穴生活，身体粗壮，擅长挖掘", target: "vombatiformes" },
            { text: "🌳 重返树冠层，在树枝间攀爬或滑翔", target: "phalangeriformes" },
            { text: "🏃 在开阔草原发展出高效的后肢跳跃运动", target: "macropodiformes" }
        ]
    },

    // 袋熊型亚目
    vombatiformes: {
        id: "vombatiformes",
        name: "袋熊型亚目",
        icon: "🐻",
        description: "包含树栖食叶的考拉和地栖掘土的袋熊，是双门齿目早期的生态位分化产物。",
        geologicalPeriod: "始新世晚期（约4000万年前）",
        question: "地面植食者进一步分化：",
        options: [
            { text: "🌿 专门取食桉树叶，终生栖息树上", target: "phascolarctidae" },
            { text: "⛏️ 地栖挖洞，以草为食，排出独特的立方体粪便", target: "vombatidae" },
            { text: "🔴 巨大的双门齿兽（已灭绝）", target: "diprotodontidae" }
        ]
    },

    phascolarctidae: {
        id: "phascolarctidae",
        name: "树袋熊科",
        isLeaf: true,
        icon: "🐨",
        description: "树袋熊科仅存考拉一种，是高度特化的桉树叶食者。具有浓密的灰毛、圆耳和黑鼻。每天睡眠约18小时以消化低营养的桉树叶。",
        keyTraits: ["食桉叶", "树栖", "长睡眠"],
        geologicalPeriod: "始新世（约4000万年前）"
    },

    vombatidae: {
        id: "vombatidae",
        name: "袋熊科",
        isLeaf: true,
        icon: "🐻",
        description: "袋熊是体型粗壮的地栖有袋类，擅长挖掘复杂的洞穴系统。具有标志性的立方体粪便，这在动物界独一无二。草食性，主要以草和草本植物为食。",
        keyTraits: ["挖洞", "立方粪便", "草食"],
        geologicalPeriod: "始新世（约4000万年前）"
    },

    diprotodontidae: {
        id: "diprotodontidae",
        name: "双门齿科",
        isLeaf: true,
        icon: "🦛",
        description: "双门齿科包含一些澳洲历史上最大的哺乳动物，如双门齿兽（Diprotodon）。双门齿兽体型如河马，是最大的有袋类动物，约在4万年前灭绝。",
        keyTraits: ["已灭绝", "巨型"],
        geologicalPeriod: "始新世（约4000万年前）"
    },

    // 袋貂型亚目
    phalangeriformes: {
        id: "phalangeriformes",
        name: "袋貂型亚目",
        icon: "🦜",
        description: "主要适应丛林树栖环境的有袋类，包含袋貂、袋鼯等，很多种类具有滑翔能力。",
        geologicalPeriod: "始新世中期（约4500万年前）",
        question: "树冠层的植食者演化出多种攀爬和取食技巧：",
        options: [
            { text: "🟡 树栖夜行，尾可抓握", target: "phalangeridae" },
            { text: "🟢 发展出皮膜在树间滑翔，食树液花蜜", target: "petauridae" },
            { text: "🔴 极小型，专食花蜜", target: "acrobatidae" },
            { text: "🔵 小型，尾帚状，食昆虫花蜜", target: "burramyidae" },
            { text: "🟣 尾可抓握，食树叶", target: "pseudocheiridae" },
            { text: "⚪ 滑翔，尾有鳞", target: "acrobatesidae" },
            { text: "⚫ 极长吻部，专食花蜜", target: "tarsipedidae" }
        ]
    },

    pseudocheiridae: {
        id: "pseudocheiridae",
        name: "环尾袋貂科",
        isLeaf: true,
        icon: "🦝",
        description: "环尾袋貂科包括环尾袋貂，是树栖的有袋类，有可以抓握的尾巴，以树叶为食。",
        keyTraits: ["树栖", "可抓握的尾", "食叶"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    acrobatesidae: {
        id: "acrobatesidae",
        name: "鳞尾袋貂科",
        isLeaf: true,
        icon: "🦇",
        description: "鳞尾袋貂科是另一种滑翔有袋类，尾巴有鳞，用于抓握，生活在澳洲的森林中。",
        keyTraits: ["滑翔", "鳞尾", "树栖"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    tarsipedidae: {
        id: "tarsipedidae",
        name: "长吻袋貂科",
        isLeaf: true,
        icon: "👃",
        description: "长吻袋貂科包括长吻袋貂，是一种特化的食花蜜有袋类，有极长的吻部。",
        keyTraits: ["长吻", "食花蜜", "树栖"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    phalangeridae: {
        id: "phalangeridae",
        name: "袋貂科",
        isLeaf: true,
        icon: "🦝",
        description: "袋貂科包括袋貂、帚尾袋貂等，是澳洲和新几内亚的树栖有袋类。适应力强，一些种类已适应城市生活。具有浓密的毛皮和可抓握的尾。",
        keyTraits: ["树栖", "可抓握的尾", "夜行"],
        geologicalPeriod: "始新世（约4500万年前）"
    },

    petauridae: {
        id: "petauridae",
        name: "袋鼯科",
        isLeaf: true,
        icon: "🦇",
        description: "袋鼯科包含具有滑翔能力的有袋类，如蜜袋鼯。具有前肢和后肢之间的皮膜（patagium），能在树间滑翔。主要以树液、花蜜和昆虫为食。",
        keyTraits: ["滑翔", "皮膜", "树栖"],
        geologicalPeriod: "始新世（约4500万年前）"
    },

    acrobatidae: {
        id: "acrobatidae",
        name: "蜜袋貂科",
        isLeaf: true,
        icon: "🍯",
        description: "蜜袋貂科仅存蜜袋貂一种，是最小的滑翔有袋类。以花蜜和花粉为食，具有极长的舌头和毛刷状的舌尖用于采集花蜜。体型很小，体重仅约10克。",
        keyTraits: ["食花蜜", "长舌", "极小型"],
        geologicalPeriod: "始新世（约4500万年前）"
    },

    burramyidae: {
        id: "burramyidae",
        name: "帚尾袋貂科",
        isLeaf: true,
        icon: "🐁",
        description: "帚尾袋貂科包括侏袋貂等，是小型树栖有袋类，主要以昆虫和花蜜为食。尾部有特殊的毛用于扫取花蜜。",
        keyTraits: ["小型", "树栖", "食虫"],
        geologicalPeriod: "始新世（约4500万年前）"
    },

    // 袋鼠型亚目
    macropodiformes: {
        id: "macropodiformes",
        name: "袋鼠型亚目",
        icon: "🦘",
        description: "包含袋鼠与鼠袋鼠，主要经历了从树栖/杂食向地栖/植食的转变，适应C4植物扩张。",
        geologicalPeriod: "渐新世（约3000万年前）",
        question: "跳跃植食者适应了开阔环境：",
        options: [
            { text: "🟡 小型，掘食地下真菌", target: "potoroidae" },
            { text: "🟢 后肢强健，跳跃移动，包括大袋鼠", target: "macropodidae" },
            { text: "🔴 最原始袋鼠类，森林生活", target: "hypsiprymnodontidae" }
        ]
    },

    potoroidae: {
        id: "potoroidae",
        name: "鼠袋鼠科",
        isLeaf: true,
        icon: "🐁",
        description: "鼠袋鼠科是较小型的有袋类，包括长鼻袋鼠和草原袋鼠等。许多种类有挖食地下真菌的习性，在生态系统中扮演重要的孢子传播者角色。",
        keyTraits: ["掘食真菌", "小型", "地栖"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    macropodidae: {
        id: "macropodidae",
        name: "袋鼠科",
        isLeaf: true,
        icon: "🦘",
        description: "袋鼠科是最著名的有袋类，包括袋鼠、沙袋鼠和树袋鼠等。后肢极其强健，以独特的跳跃方式移动。大袋鼠是现存最大的有袋类。",
        keyTraits: ["跳跃", "大后足", "育儿袋"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    hypsiprymnodontidae: {
        id: "hypsiprymnodontidae",
        name: "麝袋鼠科",
        isLeaf: true,
        icon: "🦘",
        description: "麝袋鼠科包括麝袋鼠，是最原始的袋鼠类，体型较小，生活在热带雨林中。具有独特的麝香气味。",
        keyTraits: ["原始", "小型", "森林"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 真兽下纲（胎盘类）
    eutheria: {
        id: "eutheria",
        name: "真兽下纲",
        icon: "🌍",
        description: "即胎盘类及其近亲，特征是具有复杂的胎盘结构，幼崽在母体内发育较完全。是现代哺乳动物中最繁盛的类群。",
        geologicalPeriod: "早白垩世（约1.48亿年前）",
        question: "胎盘类在新生代迅速崛起。不同大陆的隔离演化产生了四大主线：",
        options: [
            { text: "🦏 在非洲大陆长期独立演化", target: "afrotheria" },
            { text: "🦔 在南美洲演化出特殊的骨骼关节", target: "xenarthra" },
            { text: "🐵 发展出高度发达的感官和抓握能力", target: "euarchontoglires" },
            { text: "🏃 快速扩张并占据多种捕食和奔跑生态位", target: "laurasiatheria" }
        ]
    },

    // 非洲兽总目
    afrotheria: {
        id: "afrotheria",
        name: "非洲兽总目",
        icon: "🦏",
        description: "起源于非洲的古老分支，形态差异巨大但分子证据支持其单系性。包含长鼻目、海牛目、土豚等。",
        geologicalPeriod: "白垩纪晚期（约1.05亿年前）",
        question: "非洲兽类形态差异巨大，但分子证据显示它们有共同起源。选择它们的适应方向：",
        options: [
            { text: "🐽 特化为食蚁，仅存土豚", target: "tubulidentata" },
            { text: "🐿️ 小型长鼻，善于跳跃", target: "macroscelidea" },
            { text: "🦔 非洲食虫类", target: "afrosoricida" },
            { text: "🐰 外形似兔，与大象亲缘最近", target: "hyracoidea" },
            { text: "🐘 巨大体型，长鼻取食", target: "proboscidea" },
            { text: "🐋 完全水生，草食性", target: "sirenia" }
        ]
    },

    // 管齿目
    tubulidentata: {
        id: "tubulidentata",
        name: "管齿目",
        isLeaf: true,
        icon: "🐽",
        description: "非洲食虫类的基干分支，现仅存土豚一种，被称为“活化石”。专门以白蚁和蚂蚁为食。",
        keyTraits: ["单种现存", "食蚁", "非洲特有"],
        geologicalPeriod: "古新世晚期（约6500万年前）"
    },

    // 象鼩目
    macroscelidea: {
        id: "macroscelidea",
        name: "象鼩目",
        isLeaf: true,
        icon: "🐿️",
        description: "起源于非洲的小型食虫哺乳动物，具有长鼻和细长的四肢，是K-Pg灭绝后最早辐射的类群之一。",
        keyTraits: ["长鼻", "细四肢", "非洲特有"],
        geologicalPeriod: "古新世（约6000万年前）"
    },

    // 非洲猬目
    afrosoricida: {
        id: "afrosoricida",
        name: "非洲猬目",
        icon: "🦔",
        description: "非洲兽总目下的食虫类群，包含形态各异的金毛鼹和马岛猬。马岛猬因分布于马达加斯加而特化。",
        geologicalPeriod: "晚白垩世（约7000万年前）",
        question: "非洲食虫类分化出不同地下和地面适应：",
        options: [
            { text: "🦔 金色毛发，穴居生活", target: "chrysochloridae" },
            { text: "🦔 马达加斯加特有，形态多样（似刺猬、老鼠、水栖）", target: "tenrecidae" }
        ]
    },

    chrysochloridae: {
        id: "chrysochloridae",
        name: "金毛鼹科",
        isLeaf: true,
        icon: "🦔",
        description: "金毛鼹科包括金毛鼹，是非洲的穴居食虫类，有金色的毛，眼睛退化。",
        keyTraits: ["金色毛", "穴居", "非洲分布"],
        geologicalPeriod: "晚白垩世（约7000万年前）"
    },

    tenrecidae: {
        id: "tenrecidae",
        name: "马岛猬科",
        isLeaf: true,
        icon: "🦔",
        description: "马岛猬科是马达加斯加特有的食虫类，形态多样，包括刺状的种类和水栖的种类。",
        keyTraits: ["马达加斯加特有", "形态多样"],
        geologicalPeriod: "晚白垩世（约7000万年前）"
    },

    // 蹄兔目
    hyracoidea: {
        id: "hyracoidea",
        name: "蹄兔目",
        icon: "🐰",
        description: "特提斯兽类的姐妹群，外形似啮齿类，但亲缘关系接近大象，曾有极高的多样性。代表物种：岩蹄兔。",
        geologicalPeriod: "古新世中期（约6000万年前）",
        question: "蹄兔类曾高度多样化，现分化为不同栖息类型：",
        options: [
            { text: "🐰 地栖，岩石环境，蹄状爪", target: "procaviidae" },
            { text: "🏔️ 已灭绝，岩栖大型种", target: "heterohyracidae" },
            { text: "🌳 树栖，非洲森林生活", target: "dendrohyracidae" }
        ]
    },

    procaviidae: {
        id: "procaviidae",
        name: "蹄兔科",
        isLeaf: true,
        icon: "🐰",
        description: "蹄兔科包括普通蹄兔，是地栖的蹄兔类，生活在非洲和中东的岩石地区。",
        keyTraits: ["地栖", "蹄状爪", "非洲/中东分布"],
        geologicalPeriod: "古新世中期（约6000万年前）"
    },

    heterohyracidae: {
        id: "heterohyracidae",
        name: "岩蹄兔科",
        isLeaf: true,
        icon: "🏔️",
        description: "岩蹄兔科是已灭绝的蹄兔科，生活在岩石环境中，体型较大。",
        keyTraits: ["已灭绝", "岩石环境"],
        geologicalPeriod: "古新世中期（约6000万年前）"
    },

    dendrohyracidae: {
        id: "dendrohyracidae",
        name: "树蹄兔科",
        isLeaf: true,
        icon: "🌳",
        description: "树蹄兔科包括树蹄兔，是树栖的蹄兔类，生活在非洲的森林中。",
        keyTraits: ["树栖", "非洲分布"],
        geologicalPeriod: "古新世中期（约6000万年前）"
    },

    // 长鼻目
    proboscidea: {
        id: "proboscidea",
        name: "长鼻目",
        icon: "🐘",
        description: "包含现生的大象及已灭绝的猛犸、乳齿象等，特征为延长的鼻子和巨大的体型。是陆地上体型最大的哺乳动物。",
        geologicalPeriod: "古新世晚期（约6000万年前）",
        question: "长鼻类演化出不同的体型和獠牙结构：",
        options: [
            { text: "🐘 现生大象，长鼻巨体", target: "elephantidae" },
            { text: "🦣 原始类型，体型如猪，沼泽生活", target: "moeritheriidae" },
            { text: "🦣 长毛猛犸类，适应冰期", target: "gomphotheriidae" },
            { text: "🦣 下颌獠牙向下弯曲的恐象类", target: "deinotheriidae" }
        ]
    },

    elephantidae: {
        id: "elephantidae",
        name: "象科",
        isLeaf: true,
        icon: "🐘",
        description: "象科包含现生的三种大象：非洲草原象、非洲森林象和亚洲象，以及已灭绝的猛犸象。拥有巨大的体型、长鼻子（象鼻）和獠牙。是陆地上最聪明的动物之一，具有复杂的社会结构。",
        keyTraits: ["长鼻", "巨大体型", "獠牙"],
        geologicalPeriod: "中新世（约1000万年前）"
    },

    moeritheriidae: {
        id: "moeritheriidae",
        name: "始祖象科",
        isLeaf: true,
        icon: "🦣",
        description: "始祖象科是长鼻目最原始的代表，体型如猪，生活在沼泽环境中。具有初步的长鼻特征，是大象早期演化的关键类群。化石见于非洲始新世。",
        keyTraits: ["已灭绝", "原始长鼻类"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    gomphotheriidae: {
        id: "gomphotheriidae",
        name: "乳齿象科",
        isLeaf: true,
        icon: "🦣",
        description: "乳齿象科包括美洲乳齿象等，是长鼻目的重要演化支。具有臼齿，但与真象科结构不同。适应寒冷的冰期环境，身披长毛。约在1万年前灭绝。",
        keyTraits: ["已灭绝", "长毛", "冰期"],
        geologicalPeriod: "中新世（约2000万年前）"
    },

    deinotheriidae: {
        id: "deinotheriidae",
        name: "恐象科",
        isLeaf: true,
        icon: "🦣",
        description: "恐象科包括恐象，是长鼻目中的一个独特分支，下颌有向下弯曲的獠牙。体型巨大，生活在非洲和欧亚大陆的森林中。现已灭绝。",
        keyTraits: ["已灭绝", "独特獠牙", "巨大体型"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 海牛目
    sirenia: {
        id: "sirenia",
        name: "海牛目",
        icon: "🐋",
        description: "完全水生的草食性哺乳动物，包含儒艮和海牛，由于海草床的扩张而辐射。被认为是美人鱼传说的原型。",
        geologicalPeriod: "早古新世（约5500万年前）",
        question: "海牛类完全水生，尾巴形状适应不同水域：",
        options: [
            { text: "🐋 圆尾，美洲淡水和沿海", target: "trichechidae" },
            { text: "🐋 叉尾，印度洋/太平洋，美人鱼原型", target: "dugongidae" }
        ]
    },

    trichechidae: {
        id: "trichechidae",
        name: "海牛科",
        isLeaf: true,
        icon: "🐋",
        description: "海牛科包含海牛，生活在美洲的淡水和沿海海域。尾鳍呈圆形，以水草为食。性格温顺，是珍贵的水生哺乳动物。",
        keyTraits: ["圆尾", "淡水/海水", "温顺"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    dugongidae: {
        id: "dugongidae",
        name: "儒艮科",
        isLeaf: true,
        icon: "🐋",
        description: "儒艮科包含儒艮，生活在印度洋和太平洋的沿海海域。尾鳍呈叉形，与海牛不同。是美人鱼传说的重要原型，也被称为\"海牛\"或\"海猪\"。",
        keyTraits: ["叉尾", "海洋", "美人鱼原型"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    // 异关节总目
    xenarthra: {
        id: "xenarthra",
        name: "异关节总目",
        icon: "🦔",
        description: "南美洲演化的特有类群，脊椎具有特殊的附加关节（异关节），包含披毛目和有甲目。",
        geologicalPeriod: "白垩纪晚期（约1亿年前）",
        question: "南美洲的异关节类发展了独特的脊椎附加关节。两大分支：",
        options: [
            { text: "🛡️ 身披骨质甲壳，可卷曲成球", target: "cingulata" },
            { text: "🐛 无齿，食蚁，长舌", target: "pilosa" }
        ]
    },

    // 有甲目
    cingulata: {
        id: "cingulata",
        name: "有甲目",
        icon: "🦔",
        description: "身披骨质甲壳的贫齿类动物，包含犰狳科和倭犰狳科。可以卷曲成球保护自己。",
        geologicalPeriod: "始新世中期（约4500万年前）",
        question: "犰狳类的甲壳结构不同：",
        options: [
            { text: "🦔 分节甲壳，可蜷曲成球防御", target: "dasypodidae" },
            { text: "🦔 小型，甲壳结构特殊", target: "chlamyphoridae" }
        ]
    },

    dasypodidae: {
        id: "dasypodidae",
        name: "犰狳科",
        isLeaf: true,
        icon: "🦔",
        description: "犰狳科包含多数犰狳种类，身体覆盖有分节的骨质甲壳，可以卷曲成完美的球来保护自己。生活在美洲的草原和森林中，以昆虫为食。",
        keyTraits: ["骨质甲壳", "蜷曲防御", "食虫"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    chlamyphoridae: {
        id: "chlamyphoridae",
        name: "倭犰狳科",
        isLeaf: true,
        icon: "🦔",
        description: "倭犰狳科包含体型较小的犰狳，如倭犰狳和圆头倭犰狳。甲壳结构与犰狳科略有不同，也是美洲特有的类群。",
        keyTraits: ["小型", "甲壳", "南美特有"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    // 披毛目
    pilosa: {
        id: "pilosa",
        name: "披毛目",
        icon: "🐻",
        description: "包含食蚁兽和树懒，是南美洲独立演化的特有类群。",
        geologicalPeriod: "白垩纪晚期（约5800万年前）",
        question: "披毛目分化为地面食蚁和树栖食叶两大方向：",
        options: [
            { text: "🐛 管状吻部，无齿，专食白蚁蚂蚁", target: "vermilingua" },
            { text: "🌿 树栖，极慢代谢，食叶", target: "folivora" }
        ]
    },

    // 蠕舌亚目
    vermilingua: {
        id: "vermilingua",
        name: "蠕舌亚目",
        icon: "🐛",
        description: "即食蚁兽类，特征为特化的管状吻部和缺乏牙齿，专食白蚁和蚂蚁。代表物种：大食蚁兽。",
        geologicalPeriod: "始新世晚期（约3800万年前）",
        question: "食蚁兽的大小和栖息地不同：",
        options: [
            { text: "🐛 大型，地面生活，强前爪", target: "myrmecophagidae" },
            { text: "🐛 小型，树栖", target: "cyclopedidae" }
        ]
    },

    myrmecophagidae: {
        id: "myrmecophagidae",
        name: "食蚁兽科",
        isLeaf: true,
        icon: "🐛",
        description: "食蚁兽科包含大食蚁兽、中美小食蚁兽等种类。拥有长而粘的舌头，可以伸入蚁穴中取食白蚁和蚂蚁。前肢有强壮的爪子用于挖掘蚁穴。",
        keyTraits: ["无齿", "长舌", "食蚁"],
        geologicalPeriod: "始新世晚期（约3800万年前）"
    },

    cyclopedidae: {
        id: "cyclopedidae",
        name: "侏食蚁兽科",
        isLeaf: true,
        icon: "🐛",
        description: "侏食蚁兽科仅包含侏食蚁兽一种，是最小的食蚁兽，树栖生活，主要分布在中美洲和南美洲的森林中。体型很小，体重不足500克。",
        keyTraits: ["小型", "树栖", "食蚁"],
        geologicalPeriod: "始新世晚期（约3800万年前）"
    },

    // 叶食亚目
    folivora: {
        id: "folivora",
        name: "叶食亚目",
        icon: "🌿",
        description: "即树懒类，现生种类均为树栖，历史上曾包含巨大的地懒，具有趋同演化的悬挂习性。代表物种：三趾树懒。",
        geologicalPeriod: "渐新世（约3000万年前）",
        question: "树懒的趾数和移动速度有差异：",
        options: [
            { text: "🌿 三趾，极慢代谢，毛发长绿藻", target: "bradypodidae" },
            { text: "🌿 二趾，体型稍大，移动稍快", target: "megalonychidae" }
        ]
    },

    bradypodidae: {
        id: "bradypodidae",
        name: "树懒科",
        isLeaf: true,
        icon: "🌿",
        description: "树懒科包含三趾树懒，是树栖的食叶动物，拥有极慢的代谢率。前肢和后肢各有三个趾，毛发中长有绿藻，有助于伪装。每天睡眠15-20小时。",
        keyTraits: ["三趾", "极慢代谢", "树栖"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    megalonychidae: {
        id: "megalonychidae",
        name: "二趾树懒科",
        isLeaf: true,
        icon: "🌿",
        description: "二趾树懒科包含二趾树懒，与三趾树懒类似但前肢只有两个趾。体型稍大，移动速度稍快，也是树栖的食叶动物。",
        keyTraits: ["二趾", "树栖", "食叶"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 灵长总目
    euarchontoglires: {
        id: "euarchontoglires",
        name: "灵长总目",
        icon: "🐵",
        description: "包含灵长目、啮齿目、兔形目等，是人类所属的演化支系。物种数量众多，生态多样。",
        geologicalPeriod: "白垩纪晚期（约9500万年前）",
        question: "这一支系强化了感知、学习和环境适应能力：",
        options: [
            { text: "🌳 保留祖先特征，灵活树栖", target: "scandentia" },
            { text: "🪂 发展巨大皮膜，在树间滑翔", target: "dermoptera" },
            { text: "👁️ 强化立体视觉和抓握能力", target: "primates" },
            { text: "🦷 利用持续生长的门齿征服各种环境", target: "rodentia" },
            { text: "🌾 高效啃食植物，快速逃逸", target: "lagomorpha" }
        ]
    },

    // 树鼩目
    scandentia: {
        id: "scandentia",
        name: "树鼩目",
        icon: "🐿️",
        description: "外形似松鼠但与灵长目亲缘关系较近的小型哺乳动物，保留了许多祖征。常用于医学研究。",
        geologicalPeriod: "古新世晚期（约6500万年前）",
        question: "树鼩类的尾巴结构不同：",
        options: [
            { text: "🟡 普通树鼩", target: "tupaiidae" },
            { text: "🟢 笔尾树鼩，尾端有羽毛状毛", target: "ptilocercidae" }
        ]
    },

    tupaiidae: {
        id: "tupaiidae",
        name: "树鼩科",
        isLeaf: true,
        icon: "🐿️",
        description: "树鼩科是树鼩目中最大的科，包含多种树鼩，外形类似松鼠，生活在东南亚的森林中。食性杂，以昆虫和果实为食。由于与灵长类亲缘关系较近，常用于医学和神经科学研究。",
        keyTraits: ["树栖", "与灵长类近缘", "研究动物"],
        geologicalPeriod: "古新世晚期（约6500万年前）"
    },

    ptilocercidae: {
        id: "ptilocercidae",
        name: "笔尾树鼩科",
        isLeaf: true,
        icon: "🐿️",
        description: "笔尾树鼩科仅包含笔尾树鼩一种，是树鼩目中独特的类群，尾端有羽毛状的毛。分布在马来西亚和泰国的森林中，主要以昆虫为食。",
        keyTraits: ["笔尾", "树栖", "东南亚特有"],
        geologicalPeriod: "古新世晚期（约6500万年前）"
    },

    // 皮翼目
    dermoptera: {
        id: "dermoptera",
        name: "皮翼目",
        icon: "🦇",
        description: "俗称鼯猴，具有发达的皮膜用于滑翔，是灵长目最近的现生姐妹群。代表物种：菲律宾鼯猴。",
        geologicalPeriod: "中新世（约1500万年前）",
        question: "皮翼目的滑翔适应：",
        options: [
            { text: "🟡 宽大皮膜，树间滑翔", target: "cynocephalidae" }
        ]
    },

    cynocephalidae: {
        id: "cynocephalidae",
        name: "鼯猴科",
        isLeaf: true,
        icon: "🦇",
        description: "鼯猴科包含鼯猴（飞狐猴），是皮翼目唯一的科，具有宽大的皮膜连接颈部、四肢和尾部，可以在树间滑翔。主要分布在东南亚的热带雨林中，以树叶、果实为食。",
        keyTraits: ["滑翔", "皮膜", "东南亚特有"],
        geologicalPeriod: "中新世（约1500万年前）"
    },

    // 灵长目
    primates: {
        id: "primates",
        name: "灵长目",
        icon: "🐵",
        description: "包括原猴、猴、猿和人类，通常具有发达的大脑、立体视觉和灵活的手指。是智慧最高的哺乳动物。",
        geologicalPeriod: "白垩纪晚期（约7000万年前）",
        question: "灵长目感知世界的方式产生分化：",
        options: [
            { text: "🐵 保留湿润鼻部，依赖嗅觉", target: "strepsirrhini" },
            { text: "🦍 发展干鼻和更发达的大脑", target: "haplorhini" }
        ]
    },

    // 原猴亚目
    strepsirrhini: {
        id: "strepsirrhini",
        name: "原猴亚目",
        icon: "🐵",
        description: "较为原始的灵长类分支，包含狐猴、懒猴等，主要分布于马达加斯加和非洲。具有湿润的鼻部和对生拇指。",
        geologicalPeriod: "古新世（约6500万年前）",
        question: "原猴在不同大陆和生境中分化：",
        options: [
            { text: "🐵 马达加斯加特有的多样化辐射", target: "lemuriformes" },
            { text: "🦥 非洲和亚洲的夜行慢速类型", target: "lorisiformes" },
            { text: "🖐️ 特化手指敲击取食", target: "chiromyiformes" }
        ]
    },

    lemuriformes: {
        id: "lemuriformes",
        name: "狐猴下目",
        icon: "🐵",
        description: "马达加斯加特有的灵长类辐射支系，形态和生态习性高度多样化。",
        geologicalPeriod: "始新世（约5000万年前）",
        question: "狐猴在马达加斯加占据多样生态位：",
        options: [
            { text: "🟡 环尾狐猴类，日行性，群居", target: "lemuridae" },
            { text: "🟢 最小型的夜行狐猴", target: "cheirogaleidae" },
            { text: "🔴 大型跳跃狐猴", target: "indriidae" },
            { text: "🔵 冠毛狐猴类", target: "propithecidae" },
            { text: "🟣 夜行叶食狐猴", target: "lepilemuridae" }
        ]
    },

    lemuridae: {
        id: "lemuridae",
        name: "狐猴科",
        isLeaf: true,
        icon: "🐵",
        description: "狐猴科是最著名的狐猴类，包括环尾狐猴等。多数是日行性，生活在马达加斯加的各种栖息地中。",
        keyTraits: ["马达加斯加特有", "环尾", "日行性"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    cheirogaleidae: {
        id: "cheirogaleidae",
        name: "鼠狐猴科",
        isLeaf: true,
        icon: "🐁",
        description: "鼠狐猴科是小型的夜行性狐猴，包括鼠狐猴和倭狐猴等。是体型最小的灵长类之一，具有大眼睛适应夜行。",
        keyTraits: ["小型", "夜行", "大眼"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    indriidae: {
        id: "indriidae",
        name: "大狐猴科",
        isLeaf: true,
        icon: "🦍",
        description: "大狐猴科包括大狐猴、毛狐猴和冕狐猴等。大狐猴是现存最大的狐猴，体长达70厘米。适应树上跳跃，后肢极长。",
        keyTraits: ["大型狐猴", "跳跃", "大叫声"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    propithecidae: {
        id: "propithecidae",
        name: "冕狐猴科",
        isLeaf: true,
        icon: "👑",
        description: "冕狐猴科包括冕狐猴等，具有独特的竖毛冠。适应树栖跳跃，毛色华丽多样。",
        keyTraits: ["冠毛", "树栖"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    lepilemuridae: {
        id: "lepilemuridae",
        name: "鼬狐猴科",
        isLeaf: true,
        icon: "🦊",
        description: "鼬狐猴科包括鼬狐猴，是中等大小的狐猴，夜行性。主要吃树叶，消化系统特化。生活在马达加斯加的干燥森林中。",
        keyTraits: ["夜行", "叶食", "干燥森林"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    lorisiformes: {
        id: "lorisiformes",
        name: "懒猴下目",
        icon: "🦥",
        description: "分布于非洲和亚洲的夜行性灵长类，包含懒猴和婴猴。",
        geologicalPeriod: "始新世（约4000万年前）",
        question: "懒猴类的移动速度和防御策略不同：",
        options: [
            { text: "🟡 极慢速树栖，部分有毒", target: "lorisidae" },
            { text: "🟢 小型活跃，夜行善跳", target: "galagidae" }
        ]
    },

    lorisidae: {
        id: "lorisidae",
        name: "懒猴科",
        isLeaf: true,
        icon: "🦥",
        description: "懒猴科包括懒猴、蜂猴等，是行动非常缓慢的树栖灵长类。生活在非洲和亚洲的热带雨林中，以昆虫、小型动物和果实为食。有些种类有剧毒。",
        keyTraits: ["行动缓慢", "树栖", "有毒"],
        geologicalPeriod: "始新世（约4000万年前）"
    },

    galagidae: {
        id: "galagidae",
        name: "婴猴科",
        isLeaf: true,
        icon: "🦊",
        description: "婴猴科包括婴猴（丛猴），是小型、活跃的夜行性灵长类。生活在非洲的森林和稀树草原中，以昆虫和果实为食。善于跳跃，眼睛很大适应夜间活动。",
        keyTraits: ["夜行", "善跳", "大眼"],
        geologicalPeriod: "始新世（约4000万年前）"
    },

    chiromyiformes: {
        id: "chiromyiformes",
        name: "指猴下目",
        icon: "🖐️",
        description: "仅包含指猴科，具有特化的手指用于敲击回声定位取食。",
        geologicalPeriod: "始新世（约5000万年前）",
        question: "指猴的特化适应：",
        options: [
            { text: "🟡 超长中指，敲击回声定位，掏取树洞昆虫", target: "daubentoniidae" }
        ]
    },

    daubentoniidae: {
        id: "daubentoniidae",
        name: "指猴科",
        isLeaf: true,
        icon: "🖐️",
        description: "指猴科仅包含指猴一种，是最独特的灵长类之一。有一个极长的中指用于掏取树洞中的昆虫幼虫。夜行性，生活在马达加斯加的雨林中。",
        keyTraits: ["超长中指", "夜行", "独特"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    // 类人猿亚目
    haplorhini: {
        id: "haplorhini",
        name: "类人猿亚目",
        icon: "🦍",
        description: "类人猿是灵长目中更进化的分支，具有更发达的大脑、更小或缺失的尾巴，以及更复杂的社会行为。",
        geologicalPeriod: "晚白垩世（约6500万年前）",
        question: "类人猿的鼻孔朝向和分布区域不同：",
        options: [
            { text: "🐵 新世界猴：宽鼻孔，卷尾抓握", target: "platyrrhini" },
            { text: "🦍 旧世界猴和猿：窄鼻孔向下", target: "catarrhini" }
        ]
    },

    // 阔鼻猴
    platyrrhini: {
        id: "platyrrhini",
        name: "阔鼻猴次目",
        icon: "🐵",
        description: "分布于南美洲的新世界猴，鼻孔宽阔向两侧分开。拥有卷尾用于抓握，生活在热带雨林中。",
        geologicalPeriod: "始新世（约3500万年前）",
        question: "新世界猴演化出多种树栖适应：",
        options: [
            { text: "🐵 卷尾猴总科", target: "ceboidea" }
        ]
    },

    ceboidea: {
        id: "ceboidea",
        name: "卷尾猴总科",
        icon: "🐵",
        description: "新世界猴的主要类群，分布于中美洲和南美洲。",
        geologicalPeriod: "始新世（约3500万年前）",
        question: "新世界猴的不同科擅长不同技能：",
        options: [
            { text: "🟡 高智商，会使用工具", target: "cebidae" },
            { text: "🟢 第五只手般的抓握尾", target: "atelidae" },
            { text: "🔴 独特面部，特化食果", target: "pitheciidae" },
            { text: "🔵 唯一夜行类人猿，巨大眼睛", target: "aotidae" },
            { text: "🟣 体型最小，共同抚养幼崽", target: "callitrichidae" }
        ]
    },

    cebidae: {
        id: "cebidae",
        name: "卷尾猴科",
        isLeaf: true,
        icon: "🐵",
        description: "卷尾猴科包括卷尾猴和松鼠猴等，是新世界猴中最常见的类群。卷尾猴具有高智商，会使用工具。松鼠猴体型小，群居，十分活跃。",
        keyTraits: ["新世界猴", "高智商", "树栖"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    atelidae: {
        id: "atelidae",
        name: "蜘蛛猴科",
        isLeaf: true,
        icon: "🕷️",
        description: "蜘蛛猴科包括蜘蛛猴、吼猴和绒毛猴等，是新世界猴中体型最大的。具有能抓握的尾巴，可作为第五只手使用。吼猴是陆地最响亮的动物之一。",
        keyTraits: ["能抓握的尾", "大叫声", "大型"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    pitheciidae: {
        id: "pitheciidae",
        name: "僧面猴科",
        isLeaf: true,
        icon: "👺",
        description: "僧面猴科包括僧面猴、秃猴和伶猴等，具有独特的面部特征和毛发。一些种类主要以未成熟的果实为食，有特化的牙齿处理。",
        keyTraits: ["独特面部", "食果", "树栖"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    aotidae: {
        id: "aotidae",
        name: "夜猴科",
        isLeaf: true,
        icon: "🌙",
        description: "夜猴科仅包含夜猴属，是唯一完全夜行性的类人猿。具有巨大的眼睛适应夜行，视网膜以视杆细胞为主，无色彩视觉，但夜视能力极佳。",
        keyTraits: ["夜行", "大眼", "无色彩视觉"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    callitrichidae: {
        id: "callitrichidae",
        name: "狨科",
        isLeaf: true,
        icon: "🐵",
        description: "狨科包括狨、绢毛猴等，是最小的类人猿，体型类似松鼠。生活在中南美洲的热带雨林中，以水果、昆虫和树胶为食。通常是双胞胎，父母共同抚养幼崽。",
        keyTraits: ["小型", "树栖", "共同抚养"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    // 狭鼻猴
    catarrhini: {
        id: "catarrhini",
        name: "狭鼻猴次目",
        icon: "🐵",
        description: "狭鼻猴的鼻孔向下开，分布于非洲和亚洲。其中包括我们人类所属的人科，是整个动物界中智慧最高的类群。",
        geologicalPeriod: "渐新世（约3000万年前）",
        question: "旧世界猴和猿分化出不同消化和社会策略：",
        options: [
            { text: "🐒 旧世界猴：颊囊存食，臀胼胝", target: "cercopithecoidea" },
            { text: "🦍 类人猿：高智慧，无尾", target: "hominoidea" }
        ]
    },

    // 猴超科
    cercopithecoidea: {
        id: "cercopithecoidea",
        name: "猴超科",
        icon: "🐒",
        description: "旧世界猴的代表，包含猕猴、狒狒等。分布于非洲和亚洲，具有颊囊可用于储存食物，臀部有胼胝。",
        geologicalPeriod: "渐新世晚期（约2500万年前）",
        question: "旧世界猴的食性和消化系统分化：",
        options: [
            { text: "🟡 杂食，有颊囊", target: "cercopithecidae" },
            { text: "🟢 叶食为主，特化胃，无颊囊", target: "colobidae" }
        ]
    },

    cercopithecidae: {
        id: "cercopithecidae",
        name: "猴科",
        isLeaf: true,
        icon: "🐒",
        description: "猴科是旧世界猴的主要类群，包括猕猴、狒狒、山魈等。具有颊囊可储存食物，多数有臀胼胝，食性较杂。分布于非洲和亚洲的森林和草原中。",
        keyTraits: ["颊囊", "臀胼胝", "杂食"],
        geologicalPeriod: "渐新世晚期（约2500万年前）"
    },

    colobidae: {
        id: "colobidae",
        name: "疣猴科",
        isLeaf: true,
        icon: "🐒",
        description: "疣猴科是旧世界猴的另一个类群，包括疣猴、叶猴、金丝猴等。没有颊囊，主要以树叶为食，消化系统特化。亚洲的金丝猴是著名的珍稀动物。",
        keyTraits: ["无颊囊", "叶食", "特化消化"],
        geologicalPeriod: "渐新世晚期（约2500万年前）"
    },

    // 人猿超科
    hominoidea: {
        id: "hominoidea",
        name: "人猿超科",
        icon: "🦍",
        description: "人猿超科是类人猿中最高等的类群，包括长臂猿科和人科（猩猩、大猩猩、黑猩猩、人类）。",
        geologicalPeriod: "渐新世晚期（约2500万年前）",
        question: "类人猿的运动和社会结构不同：",
        options: [
            { text: "🦧 臂跃运动，长臂，一夫一妻", target: "hylobatidae" },
            { text: "🦍 更大体型，复杂社会", target: "hominidae" }
        ]
    },

    // 长臂猿科
    hylobatidae: {
        id: "hylobatidae",
        name: "长臂猿科",
        isLeaf: true,
        icon: "🦧",
        description: "小型类人猿，以极长的手臂和独特的歌声著称。使用臂跃运动在树林间穿梭，一夫一妻制家庭生活。代表物种：白掌长臂猿。",
        keyTraits: ["臂跃", "长臂", "歌声"],
        geologicalPeriod: "中新世（约2000万年前）"
    },

    // 人科
    hominidae: {
        id: "hominidae",
        name: "人科",
        icon: "🦍",
        description: "人科包括猩猩、大猩猩、黑猩猩和人类。人类是唯一存活至今的人类物种，创造了灿烂的文明。",
        geologicalPeriod: "中新世中期（约1500万年前）",
        question: "人科的分布和栖息地偏好不同：",
        options: [
            { text: "🦧 亚洲，树栖为主，红毛", target: "ponginae" },
            { text: "🦍 非洲，与人类亲缘最近", target: "homininae" }
        ]
    },

    // 猩猩亚科
    ponginae: {
        id: "ponginae",
        name: "猩猩亚科",
        isLeaf: true,
        icon: "🦧",
        description: "亚洲的大型类人猿，现仅存苏门答腊猩猩和婆罗洲猩猩两种。具有红色的毛发和较高的树栖性。",
        keyTraits: ["树栖", "红毛", "亚洲分布"],
        geologicalPeriod: "中新世晚期（约1000万年前）"
    },

    // 人亚科
    homininae: {
        id: "homininae",
        name: "人亚科",
        icon: "🔥",
        description: "人亚科包括大猩猩、黑猩猩和人类，是与人类亲缘关系最近的类群。在约600-700万年前人族与大猩猩族分离。",
        geologicalPeriod: "中新世晚期（约800万年前）",
        question: "人亚科中，体型和社会结构分化：",
        options: [
            { text: "🦍 巨大体型，银背领导", target: "gorillini" },
            { text: "🧑 直立行走，语言，工具使用", target: "hominini" }
        ]
    },

    // 大猩猩族
    gorillini: {
        id: "gorillini",
        name: "大猩猩族",
        isLeaf: true,
        icon: "🦍",
        description: "体型最大的类人猿，分为东部大猩猩和西部大猩猩。群居生活，由银背雄性领导，性格相对温和，草食为主。",
        keyTraits: ["巨大体型", "银背领导", "草食"],
        geologicalPeriod: "上新世（约700万年前）"
    },

    // 人族
    hominini: {
        id: "hominini",
        name: "人族",
        isLeaf: true,
        icon: "🧑",
        description: "包括黑猩猩和人类。人类是唯一存活至今的人类物种，具有高度发达的大脑和语言能力，创造灿烂文明。",
        keyTraits: ["直立行走", "语言", "工具使用"],
        geologicalPeriod: "上新世（约600-700万年前）"
    },

    // 啮齿目
    rodentia: {
        id: "rodentia",
        name: "啮齿目",
        icon: "🐁",
        description: "哺乳动物中种类最多的一个目，特征是上下颌各有一对终生生长的凿状门齿，需要通过啃咬来磨短。",
        geologicalPeriod: "古新世晚期（约5600万年前）",
        question: "啮齿类利用不断生长的门齿，适应了几乎所有陆地环境。四大分支：",
        options: [
            { text: "🐿️ 树栖或地栖，蓬松大尾", target: "sciuromorpha" },
            { text: "🦫 筑坝，特化颌骨", target: "castorimorpha" },
            { text: "🐁 种类最多，适应力最强", target: "myomorpha" },
            { text: "🦔 尖刺防御，南美特化", target: "hystricomorpha" }
        ]
    },

    sciuromorpha: {
        id: "sciuromorpha",
        name: "松鼠形亚目",
        icon: "🐿️",
        description: "包含松鼠、花栗鼠、土拨鼠、睡鼠等。适应树栖、地栖等多种生境。",
        geologicalPeriod: "始新世（约5000万年前）",
        question: "松鼠形类的主要生态类型：",
        options: [
            { text: "🟡 树栖地栖，蓬松大尾，冬季储食", target: "sciuridae" },
            { text: "🟢 长冬眠可达9个月，树栖夜行", target: "gliridae" },
            { text: "🔴 最原始现存啮齿类，粗壮洞穴生活", target: "aplodontiidae" }
        ]
    },

    sciuridae: {
        id: "sciuridae",
        name: "松鼠科",
        isLeaf: true,
        icon: "🐿️",
        description: "松鼠科是最常见的啮齿类之一，包括松鼠、花栗鼠、土拨鼠等。适应力极强，从热带到北极都有分布。树栖种类有蓬松的尾用于平衡，地栖种类则粗壮善挖。",
        keyTraits: ["门齿特化", "树栖/地栖", "多样"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    gliridae: {
        id: "gliridae",
        name: "睡鼠科",
        isLeaf: true,
        icon: "😴",
        description: "睡鼠科包括睡鼠，是小型树栖啮齿类，以极长的冬眠期闻名（可达9个月）。有蓬松的尾，主要以水果和坚果为食。夜间活动。",
        keyTraits: ["长冬眠", "树栖", "夜行"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    aplodontiidae: {
        id: "aplodontiidae",
        name: "山河狸科",
        isLeaf: true,
        icon: "🏔️",
        description: "山河狸科仅存山河狸一种，是最原始的现存啮齿类。体型粗壮，生活在北美西部的森林中，具有复杂的洞穴系统。喜欢潮湿环境，食性特殊。",
        keyTraits: ["原始", "洞穴", "北美特有"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    castorimorpha: {
        id: "castorimorpha",
        name: "河狸形亚目",
        icon: "🦫",
        description: "包含河狸、囊鼠和异鼠，具有独特的颌骨肌肉结构。",
        geologicalPeriod: "始新世（约4800万年前）",
        question: "河狸形类的生活环境不同：",
        options: [
            { text: "🟡 半水生，筑坝建造木屋", target: "castoridae" },
            { text: "🟢 地下穴居，颊囊储存食物", target: "geomyidae" },
            { text: "🔴 沙漠跳跃适应，不饮水仅从食物获取水分", target: "heteromyidae" }
        ]
    },

    castoridae: {
        id: "castoridae",
        name: "河狸科",
        isLeaf: true,
        icon: "🦫",
        description: "河狸科包括河狸，是最大的啮齿类之一。以建造水坝和木屋闻名，是生态系统的重要工程师。能够改造环境，创造湿地。具有强咬合力，门齿橙色。",
        keyTraits: ["筑坝", "大尾", "工程师"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    geomyidae: {
        id: "geomyidae",
        name: "囊鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "囊鼠科是美洲的穴居啮齿类，具有颊囊用于储存食物。适应地下生活，眼睛和耳朵较小，前肢适合挖掘。对土壤有重要的影响。",
        keyTraits: ["颊囊", "穴居", "美洲"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    heteromyidae: {
        id: "heteromyidae",
        name: "异鼠科",
        isLeaf: true,
        icon: "🦘",
        description: "异鼠科包括更格卢鼠（袋鼠鼠），是北美沙漠的特有类群。具有长后肢，能跳跃，适应干旱环境，能够从不喝水仅从食物获取水分。",
        keyTraits: ["跳跃", "沙漠适应", "节水"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    myomorpha: {
        id: "myomorpha",
        name: "鼠形亚目",
        icon: "🐁",
        description: "包含鼠总科和跳鼠总科，拥有哺乳动物中1/4的物种，适应性极强。",
        geologicalPeriod: "始新世（约5000万年前）",
        question: "鼠形类中，后肢长度和运动方式不同：",
        options: [
            { text: "🟡 典型鼠类，适应多种环境", target: "muroidea" },
            { text: "🟢 长后肢跳跃，适应干旱", target: "dipodoidea" }
        ]
    },

    muroidea: {
        id: "muroidea",
        name: "鼠总科",
        icon: "🐁",
        description: "包含仓鼠、鼠科等，在中新世经历了爆发式辐射，遍布全球。",
        geologicalPeriod: "渐新世（约3500万年前）",
        question: "鼠总科的不同科适应了从地下到树冠的多种生境：",
        options: [
            { text: "🟡 伴人生活，成为重要实验动物", target: "muridae" },
            { text: "🟢 有颊囊，常见宠物仓鼠", target: "cricetidae" },
            { text: "🔴 刺状毛，印度东南亚分布", target: "platacanthomyidae" },
            { text: "🔵 地下穴居，眼睛退化", target: "spalacidae" },
            { text: "🟣 以竹子为主食，亚洲分布", target: "rhizomyidae" },
            { text: "⚪ 沙漠适应，长尾巴跳跃", target: "gerbillidae" },
            { text: "⚫ 非洲马达加斯加，多样性高", target: "nesomyidae" },
            { text: "🔵 冠状毛，膨胀身体防御", target: "lophiomyidae" },
            { text: "🟢 尾部有鳞，非洲树栖滑翔", target: "anomaluridae" },
            { text: "🟡 后肢长跳跃，外形似兔", target: "pedetidae" }
        ]
    },

    gerbillidae: {
        id: "gerbillidae",
        name: "沙鼠科",
        isLeaf: true,
        icon: "🐀",
        description: "沙鼠科包括沙鼠，是适应干旱和沙漠环境的小型啮齿类，有长尾巴，能够跳跃。",
        keyTraits: ["沙漠适应", "长尾", "跳跃"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    nesomyidae: {
        id: "nesomyidae",
        name: "林鼠科",
        isLeaf: true,
        icon: "🐁",
        description: "林鼠科包括非洲和马达加斯加的各种鼠类，是一个多样性较高的类群。",
        keyTraits: ["非洲/马达加斯加分布", "多样性"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    lophiomyidae: {
        id: "lophiomyidae",
        name: "冠鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "冠鼠科包括冠鼠，是非洲的啮齿类，有冠状毛，能够膨胀身体用于防御。",
        keyTraits: ["冠状毛", "防御", "非洲分布"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    anomaluridae: {
        id: "anomaluridae",
        name: "鳞尾鼠科",
        isLeaf: true,
        icon: "🦇",
        description: "鳞尾鼠科包括鳞尾松鼠，是非洲的树栖啮齿类，尾部有鳞，能滑翔。",
        keyTraits: ["滑翔", "鳞尾", "非洲分布"],
        geologicalPeriod: "渐新世（约4000万年前）"
    },

    pedetidae: {
        id: "pedetidae",
        name: "跳兔科",
        isLeaf: true,
        icon: "🦘",
        description: "跳兔科包括跳兔，是非洲的啮齿类，后肢长，能跳跃，外形像兔子。",
        keyTraits: ["跳跃", "非洲分布", "兔形"],
        geologicalPeriod: "渐新世（约4000万年前）"
    },

    platacanthomyidae: {
        id: "platacanthomyidae",
        name: "刺山鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "刺山鼠科包括刺山鼠等，是小型啮齿类，有刺状毛，生活在印度和东南亚。",
        keyTraits: ["刺状毛", "印度-东南亚分布"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    spalacidae: {
        id: "spalacidae",
        name: "瞎鼠科",
        isLeaf: true,
        icon: "🐀",
        description: "瞎鼠科包括鼢鼠、鼢鼠等，是地下生活的啮齿类，眼睛退化。生活在欧洲、亚洲和非洲。",
        keyTraits: ["地下生活", "眼退化"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    rhizomyidae: {
        id: "rhizomyidae",
        name: "竹鼠科",
        isLeaf: true,
        icon: "🎋",
        description: "竹鼠科包括竹鼠，是生活在亚洲的啮齿类，以竹子为食，体型较大。",
        keyTraits: ["竹食", "亚洲分布"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    muridae: {
        id: "muridae",
        name: "鼠科",
        isLeaf: true,
        icon: "🐁",
        description: "鼠科是哺乳动物中种类最多的科，包括大鼠、小鼠和沙鼠等。家鼠和褐家鼠是伴人物种，随人类分布全球。是重要的实验动物和疾病传播者。",
        keyTraits: ["种类最多", "伴人", "实验动物"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    cricetidae: {
        id: "cricetidae",
        name: "仓鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "仓鼠科包括仓鼠、田鼠和旅鼠等。仓鼠具有颊囊，宠物仓鼠是常见伴侣动物。旅鼠以周期性的种群爆发和迁徙闻名。",
        keyTraits: ["颊囊", "宠物", "种群爆发"],
        geologicalPeriod: "渐新世（约3500万年前）"
    },

    dipodoidea: {
        id: "dipodoidea",
        name: "跳鼠总科",
        icon: "🦘",
        description: "跳鼠总科以跳鼠为代表，多具有延长的后肢，适应跳跃运动。生活在干旱和半干旱地区。",
        geologicalPeriod: "始新世（约3500万年前）",
        question: "跳鼠总科中，栖息地湿润程度不同：",
        options: [
            { text: "🟡 极长后肢，干旱沙漠草原", target: "dipodidae" },
            { text: "🟢 长后肢，森林湿地环境", target: "zapodidae" }
        ]
    },

    dipodidae: {
        id: "dipodidae",
        name: "跳鼠科",
        isLeaf: true,
        icon: "🦘",
        description: "跳鼠科是跳鼠总科的典型代表，后肢极长，善于跳跃，适应干旱的沙漠和草原环境。分布于欧亚大陆和北非。",
        keyTraits: ["长后肢", "跳跃", "沙漠适应"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    zapodidae: {
        id: "zapodidae",
        name: "林跳鼠科",
        isLeaf: true,
        icon: "🦘",
        description: "林跳鼠科包括林跳鼠，生活在森林和湿地环境中，后肢也很长，但适应的环境比跳鼠科更湿润。分布于北美和欧亚大陆。",
        keyTraits: ["长后肢", "跳跃", "森林湿地"],
        geologicalPeriod: "始新世（约3500万年前）"
    },

    hystricomorpha: {
        id: "hystricomorpha",
        name: "豪猪形亚目",
        icon: "🦔",
        description: "包含梳趾鼠、豪猪及南美豚鼠类，具有特化的咬肌结构。",
        geologicalPeriod: "始新世（约4800万年前）",
        question: "豪猪形类的地理分布和防御策略不同：",
        options: [
            { text: "🟡 尖刺防御，旧世界豪猪", target: "hystricoidea" },
            { text: "🟢 南美特化，包括最大啮齿类水豚", target: "cavioidea" },
            { text: "🔴 梳状趾，非洲亚洲干旱环境", target: "ctenodactyloidea" },
            { text: "🔵 身体扁平，适应岩石环境", target: "petromuroidea" }
        ]
    },

    ctenodactyloidea: {
        id: "ctenodactyloidea",
        name: "梳趾鼠总科",
        icon: "🦔",
        description: "梳趾鼠总科包括梳趾鼠，是非洲和亚洲的小型啮齿类，有梳状的趾。",
        geologicalPeriod: "始新世（约4800万年前）",
        question: "梳趾鼠的适应特征：",
        options: [
            { text: "🟡 梳状趾，干旱适应", target: "ctenodactylidae" }
        ]
    },

    ctenodactylidae: {
        id: "ctenodactylidae",
        name: "梳趾鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "梳趾鼠科包括梳趾鼠，是非洲的小型啮齿类，有梳状的趾，适应干旱环境。",
        keyTraits: ["梳状趾", "干旱适应", "非洲分布"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    petromuroidea: {
        id: "petromuroidea",
        name: "岩鼠总科",
        icon: "🏔️",
        description: "岩鼠总科包括岩鼠，是非洲的小型啮齿类，适应岩石环境。",
        geologicalPeriod: "始新世（约4800万年前）",
        question: "岩鼠的适应特征：",
        options: [
            { text: "🟡 身体扁平，适应岩石裂隙", target: "petromuridae" }
        ]
    },

    petromuridae: {
        id: "petromuridae",
        name: "岩鼠科",
        isLeaf: true,
        icon: "🏔️",
        description: "岩鼠科包括岩鼠，是非洲的小型啮齿类，适应岩石环境，身体扁平。",
        keyTraits: ["岩石适应", "非洲分布"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    hystricoidea: {
        id: "hystricoidea",
        name: "豪猪总科",
        icon: "🦔",
        description: "豪猪总科包括豪猪，具有保护性的尖刺。旧大陆和新大陆的豪猪是独立演化的趋同进化案例。",
        geologicalPeriod: "始新世（约4800万年前）",
        question: "豪猪的刺结构和栖息地不同：",
        options: [
            { text: "🟡 长而硬的刺，旧大陆地栖", target: "hystricidae" },
            { text: "🟢 较短而灵活的刺，新大陆树栖", target: "erethizontidae" }
        ]
    },

    hystricidae: {
        id: "hystricidae",
        name: "豪猪科",
        isLeaf: true,
        icon: "🦔",
        description: "豪猪科是旧大陆的豪猪，刺长而坚硬，主要分布于非洲、亚洲和欧洲南部。通常是地栖的，生活在森林和草原中。",
        keyTraits: ["尖刺", "旧大陆", "地栖"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    erethizontidae: {
        id: "erethizontidae",
        name: "美洲豪猪科",
        isLeaf: true,
        icon: "🦔",
        description: "美洲豪猪科是新大陆的豪猪，刺较短而灵活，有些种类是树栖的。分布于美洲大陆的森林和草原中。",
        keyTraits: ["尖刺", "新大陆", "树栖/地栖"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    cavioidea: {
        id: "cavioidea",
        name: "豚鼠总科",
        icon: "🐹",
        description: "豚鼠总科包括豚鼠（荷兰猪）、水豚、毛丝鼠等南美特化类群。水豚是最大的啮齿类，毛丝鼠是珍贵毛皮动物。",
        geologicalPeriod: "渐新世（约4200万年前）",
        question: "南美豚鼠类占据了从水边到安第斯高山的多种生态位：",
        options: [
            { text: "🟡 小型群居，成为常见宠物和实验动物", target: "caviidae" },
            { text: "🟢 拥有世界最浓密毛皮，安第斯山脉", target: "chinchillidae" },
            { text: "🔴 现存最大啮齿类，半水栖，草食", target: "hydrochoeridae" },
            { text: "🔵 善奔跑，作为种子传播者", target: "dasyproctidae" },
            { text: "🟣 大型森林种类，长尾", target: "dinomyidae" },
            { text: "⚪ 有刺，树栖或地栖", target: "echimyidae" },
            { text: "⚫ 八颗臼齿，成为常见宠物", target: "octodontidae" },
            { text: "🔴 穴居，南美分布", target: "cuniculidae" },
            { text: "🔵 善奔跑，外形似兔", target: "agoutidae" },
            { text: "🟡 浓密毛，安第斯山脉", target: "abrocomidae" }
        ]
    },

    octodontidae: {
        id: "octodontidae",
        name: "八齿鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "八齿鼠科包括八齿鼠，是南美洲的啮齿类，有八颗臼齿，是常见的宠物。",
        keyTraits: ["八颗臼齿", "宠物", "南美分布"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    cuniculidae: {
        id: "cuniculidae",
        name: "梳鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "梳鼠科包括梳鼠，是南美洲的啮齿类，穴居，以植物为食。",
        keyTraits: ["穴居", "南美分布"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    agoutidae: {
        id: "agoutidae",
        name: "兔豚鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "兔豚鼠科包括兔豚鼠，是南美洲的啮齿类，体型像兔子，善于奔跑。",
        keyTraits: ["善跑", "南美分布"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    abrocomidae: {
        id: "abrocomidae",
        name: "绒鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "绒鼠科包括绒鼠，是南美洲的啮齿类，有浓密的毛，生活在安第斯山脉。",
        keyTraits: ["浓密毛", "安第斯山脉", "南美分布"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    dinomyidae: {
        id: "dinomyidae",
        name: "长尾豚鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "长尾豚鼠科包括长尾豚鼠（班氏豚鼠），是大型啮齿类，生活在南美洲的森林中。",
        keyTraits: ["大型", "长尾", "南美森林"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    echimyidae: {
        id: "echimyidae",
        name: "棘鼠科",
        isLeaf: true,
        icon: "🦔",
        description: "棘鼠科包括美洲豪鼠和棘鼠，生活在南美洲，有些种类有刺。树栖或地栖。",
        keyTraits: ["刺", "南美分布"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    caviidae: {
        id: "caviidae",
        name: "豚鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "豚鼠科包括豚鼠（荷兰猪）、豚鼠和其他南美洲的啮齿类。豚鼠是常见的宠物和实验动物，野生种类生活在草原中。",
        keyTraits: ["南美特有", "宠物/实验动物", "草食"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    chinchillidae: {
        id: "chinchillidae",
        name: "毛丝鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "毛丝鼠科包括毛丝鼠，拥有世界上最浓密的毛皮，是珍贵的毛皮动物。原产于南美洲的安第斯山脉，现在也是受欢迎的宠物。",
        keyTraits: ["浓密毛皮", "安第斯山脉", "宠物"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    hydrochoeridae: {
        id: "hydrochoeridae",
        name: "水豚科",
        isLeaf: true,
        icon: "🐹",
        description: "水豚科包括水豚，是现存最大的啮齿类动物，体重可达65公斤。半水栖，生活在南美洲的河流和湖泊附近，以草为食。",
        keyTraits: ["最大啮齿类", "半水栖", "南美特有"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    dasyproctidae: {
        id: "dasyproctidae",
        name: "刺豚鼠科",
        isLeaf: true,
        icon: "🐹",
        description: "刺豚鼠科包括刺豚鼠和兔豚鼠，是南美洲的特有类群。体型细长，善于奔跑，以果实和种子为食。在生态系统中作为种子传播者有重要作用。",
        keyTraits: ["南美特有", "善跑", "种子传播"],
        geologicalPeriod: "渐新世（约4200万年前）"
    },

    // 兔形目
    lagomorpha: {
        id: "lagomorpha",
        name: "兔形目",
        icon: "🐰",
        description: "包含兔子和鼠兔，具有两对上门齿，后一对较小。曾被归入啮齿目，但现在单独成目。",
        geologicalPeriod: "古新世（约5500万年前）",
        question: "兔形目的耳朵长度和栖息地不同：",
        options: [
            { text: "🟡 长耳跳跃，高繁殖力，草食为主", target: "leporidae" },
            { text: "🟢 无尾短耳，山地寒冷环境，洞穴储存食物", target: "ochotonidae" }
        ]
    },

    leporidae: {
        id: "leporidae",
        name: "兔科",
        isLeaf: true,
        icon: "🐰",
        description: "兔科包括兔子和野兔，是典型的草食性小型哺乳动物。具有长耳朵（用于探测捕食者和散热）、长后肢（用于跳跃）和短尾。繁殖力极强，是许多生态系统中重要的猎物。",
        keyTraits: ["长耳", "跳跃", "高繁殖力"],
        geologicalPeriod: "古新世（约5500万年前）"
    },

    ochotonidae: {
        id: "ochotonidae",
        name: "鼠兔科",
        isLeaf: true,
        icon: "🐭",
        description: "鼠兔科包括鼠兔，外形似鼠但与兔近缘。没有尾巴，耳朵短而圆。主要生活在亚洲和北美的山地和寒冷地区，以洞穴为家，善于储存食物。",
        keyTraits: ["无尾", "短耳", "山地"],
        geologicalPeriod: "古新世（约5500万年前）"
    },

    // 劳亚兽总目
    laurasiatheria: {
        id: "laurasiatheria",
        name: "劳亚兽总目",
        icon: "🦁",
        description: "起源于劳亚古陆的庞大支系，包含食肉目、鲸偶蹄目、翼手目等，生态位极其多样。是哺乳动物中最大的总目。",
        geologicalPeriod: "白垩纪晚期（约9500万年前）",
        question: "劳亚兽总目快速扩张，占据了飞行、奔跑、游泳等多种生态位：",
        options: [
            { text: "🦇 唯一真正飞行的哺乳动物", target: "chiroptera" },
            { text: "🦔 原始食虫类，包含刺猬、鼩鼱、鼹鼠", target: "eulipotyphla" },
            { text: "🐴 中大型草食有蹄类，第三趾发达", target: "perissodactyla" },
            { text: "🐮 最繁盛有蹄类，包含鲸类等多样类群", target: "artiodactyla" },
            { text: "🦁 具有锋利犬齿和爪子，专业或杂食性捕食", target: "carnivora" },
            { text: "🦎 全身角质鳞片覆盖，食蚁性", target: "pholidota" }
        ]
    },

    // 翼手目
    chiroptera: {
        id: "chiroptera",
        name: "翼手目",
        icon: "🦇",
        description: "唯一真正具有飞行能力的哺乳动物。前肢特化为翼膜，回声定位高度发达（部分种类）。夜行性，群居洞穴中。",
        geologicalPeriod: "始新世早期（约5500万年前）",
        question: "蝙蝠的回声定位方式和视觉依赖不同：",
        options: [
            { text: "🦇 狐蝠主要靠视觉，菊头蝠用高频回声定位", target: "yinpterochiroptera" },
            { text: "🦇 喉部超声波回声定位，物种多样性极高", target: "yangochiroptera" }
        ]
    },

    yinpterochiroptera: {
        id: "yinpterochiroptera",
        name: "阴翼手亚目",
        icon: "🦇",
        description: "包含狐蝠（主要靠视觉）和菊头蝠类（使用高频回声定位）。",
        geologicalPeriod: "始新世（约6300万年前）",
        question: "阴翼手类不同科的回声定位复杂度和食性不同：",
        options: [
            { text: "🍎 大体型，食水果花蜜，主要靠视觉和嗅觉导航", target: "pteropodidae" },
            { text: "🦇 复杂鼻叶结构，高频回声定位", target: "rhinolophidae" },
            { text: "🦇 马蹄形鼻叶，旧大陆热带洞穴栖息", target: "hipposideridae" },
            { text: "🦇 大型体型，捕食昆虫和小型脊椎动物", target: "megadermatidae" },
            { text: "🦇 独特尾鞘，快速飞行，热带分布", target: "emballonuridae" },
            { text: "🦇 口鼻部吸盘结构，美洲分布", target: "mormoopidae" },
            { text: "🦇 足部腕部吸盘，光滑表面附着", target: "thyropteridae" }
        ]
    },

    mormoopidae: {
        id: "mormoopidae",
        name: "吸口蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "吸口蝠科包括吸口蝠，是美洲的蝙蝠，口鼻部有特殊的吸盘结构用于附着。",
        keyTraits: ["吸盘结构", "美洲分布"],
        geologicalPeriod: "始新世（约5500万年前）"
    },

    thyropteridae: {
        id: "thyropteridae",
        name: "盘翼蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "盘翼蝠科包括盘翼蝠，足部和腕部有吸盘，可以在光滑表面附着。",
        keyTraits: ["吸盘", "附着力强"],
        geologicalPeriod: "始新世（约5500万年前）"
    },

    megadermatidae: {
        id: "megadermatidae",
        name: "假吸血蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "假吸血蝠科包括假吸血蝠，体型较大，以昆虫、小型脊椎动物甚至其他蝙蝠为食。",
        keyTraits: ["大型", "食性多样"],
        geologicalPeriod: "始新世（约6000万年前）"
    },

    emballonuridae: {
        id: "emballonuridae",
        name: "鞘尾蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "鞘尾蝠科包括鞘尾蝠，具有独特的尾鞘，飞行迅速，生活在热带和亚热带地区。",
        keyTraits: ["尾鞘", "快速飞行"],
        geologicalPeriod: "始新世（约6000万年前）"
    },

    pteropodidae: {
        id: "pteropodidae",
        name: "狐蝠科",
        isLeaf: true,
        icon: "🍎",
        description: "狐蝠科是果蝠，体型通常较大，不具备复杂的回声定位能力，主要靠视觉和嗅觉导航。以水果和花蜜为食，是重要的传粉者。",
        keyTraits: ["食果", "大体型", "视觉导航"],
        geologicalPeriod: "始新世（约6300万年前）"
    },

    rhinolophidae: {
        id: "rhinolophidae",
        name: "菊头蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "菊头蝠科具有复杂的鼻叶结构用于回声定位。种类多样，是病毒的重要自然宿主（如SARS相关病毒）。",
        keyTraits: ["鼻叶", "回声定位", "夜行"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    hipposideridae: {
        id: "hipposideridae",
        name: "蹄蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "蹄蝠科与菊头蝠近缘，具有马蹄形的鼻叶结构。广泛分布于旧大陆热带地区，栖息于洞穴中。",
        keyTraits: ["蹄形鼻叶", "洞穴栖息", "热带"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    yangochiroptera: {
        id: "yangochiroptera",
        name: "阳翼手亚目",
        icon: "🦇",
        description: "主要利用喉部发出超声波进行回声定位的蝙蝠，物种多样性极高。",
        geologicalPeriod: "始新世（约6300万年前）",
        question: "阳翼手类不同科适应了从建筑到洞穴的多样栖息地：",
        options: [
            { text: "🦇 种类最多，适应力强，全球分布", target: "vespertilionidae" },
            { text: "🐕 快速飞行，长尾突出，群居建筑缝隙", target: "molossidae" },
            { text: "🍃 鼻叶结构，食性多样（吸血/食果/食虫）", target: "phyllostomidae" },
            { text: "🦇 独特面部结构，美洲小型", target: "furipteridae" },
            { text: "🦇 腿较长，洞穴生活，美洲分布", target: "natalidae" },
            { text: "🦇 新西兰特有，能在地面行走", target: "mystacinidae" },
            { text: "🦇 北美分布，栖息建筑物和洞穴", target: "antrozoidae" }
        ]
    },

    antrozoidae: {
        id: "antrozoidae",
        name: "狂蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "狂蝠科包括狂蝠，是北美的蝙蝠，栖息于建筑物和洞穴中。",
        keyTraits: ["北美分布", "建筑物栖息"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    furipteridae: {
        id: "furipteridae",
        name: "凹脸蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "凹脸蝠科包括烟蝠，是美洲的小型蝙蝠，具有独特的面部结构。",
        keyTraits: ["独特面部", "美洲分布"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    natalidae: {
        id: "natalidae",
        name: "长腿蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "长腿蝠科包括长腿蝠，是美洲的蝙蝠，腿较长，生活在洞穴中。",
        keyTraits: ["长腿", "洞穴栖息", "美洲分布"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    mystacinidae: {
        id: "mystacinidae",
        name: "短尾蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "短尾蝠科包括新西兰短尾蝠，是新西兰特有的蝙蝠，能在地面行走。",
        keyTraits: ["地面行走", "新西兰特有"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    vespertilionidae: {
        id: "vespertilionidae",
        name: "蝙蝠科",
        isLeaf: true,
        icon: "🦇",
        description: "蝙蝠科是种类最多的蝙蝠科，包括常见的棕蝠和鼠耳蝠等。体型从小到中等，适应力强，从森林到城市都有分布。",
        keyTraits: ["种类最多", "适应力强", "全球分布"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    molossidae: {
        id: "molossidae",
        name: "犬吻蝠科",
        isLeaf: true,
        icon: "🐕",
        description: "犬吻蝠科包括犬吻蝠和皱唇蝠，飞行速度快，尾长突出于股间膜外。常栖息于建筑缝隙中。",
        keyTraits: ["快速飞行", "长尾", "群居"],
        geologicalPeriod: "始新世（约4800万年前）"
    },

    phyllostomidae: {
        id: "phyllostomidae",
        name: "叶口蝠科",
        isLeaf: true,
        icon: "🍃",
        description: "叶口蝠科是新世界特有的蝙蝠，具有鼻叶结构。食性多样，包括吸血蝠（以血为食）、食果蝠和食虫蝠。",
        keyTraits: ["叶鼻", "食性多样", "美洲"],
        geologicalPeriod: "始新世（约4500万年前）"
    },

    // 真盲缺目
    eulipotyphla: {
        id: "eulipotyphla",
        name: "真盲缺目",
        icon: "🦔",
        description: "包含刺猬、鼩鼱、鼹鼠等，是原始的食虫类群。鼹鼠适应地下生活，而刺猬具有保护性的棘刺。",
        geologicalPeriod: "古新世（约6500万年前）",
        question: "真盲缺目的不同科适应了地下、地面和半水生环境：",
        options: [
            { text: "🦔 刺状毛发防御，遇敌卷曲成球，夜行食虫", target: "erinaceidae" },
            { text: "🐁 体型极小，高代谢需频繁进食，唾液毒素", target: "soricidae" },
            { text: "⛏️ 地下穴居，眼退化，前肢特化挖掘", target: "talpidae" },
            { text: "🦔 加勒比特有，毒腺活化石，濒危", target: "solenodontidae" }
        ]
    },

    erinaceidae: {
        id: "erinaceidae",
        name: "猬科",
        isLeaf: true,
        icon: "🦔",
        description: "猬科包括刺猬和毛猬，刺猬具有著名的刺状毛发用于防御。遇到危险时能卷曲成球。夜行性，以昆虫和小型无脊椎动物为食。",
        keyTraits: ["刺毛", "能卷曲", "夜行"],
        geologicalPeriod: "古新世（约6500万年前）"
    },

    soricidae: {
        id: "soricidae",
        name: "鼩鼱科",
        isLeaf: true,
        icon: "🐁",
        description: "鼩鼱科是体型最小的哺乳动物类群，一些种类体重仅2克。新陈代谢极快，需要频繁进食。多数有唾液腺毒素用于制服猎物。",
        keyTraits: ["极小型", "高代谢", "有毒"],
        geologicalPeriod: "古新世（约6500万年前）"
    },

    talpidae: {
        id: "talpidae",
        name: "鼹科",
        isLeaf: true,
        icon: "⛏️",
        description: "鼹科包括鼹鼠和星鼻鼹，适应地下穴居生活。眼睛退化，前肢特化为挖掘器官。星鼻鼹具有独特的星状肉质鼻用于触觉定位。",
        keyTraits: ["穴居", "特化前肢", "触觉发达"],
        geologicalPeriod: "古新世（约6500万年前）"
    },

    solenodontidae: {
        id: "solenodontidae",
        name: "沟齿鼩科",
        isLeaf: true,
        icon: "🦔",
        description: "沟齿鼩科是加勒比地区特有的食虫类，体型如大鼠，具有毒腺。是活化石，进化地位原始。现存种类均濒危。",
        keyTraits: ["濒危", "活化石", "有毒"],
        geologicalPeriod: "古新世（约7400万年前）"
    },

    // 鳞甲目
    pholidota: {
        id: "pholidota",
        name: "鳞甲目",
        icon: "🦎",
        description: "全身覆盖角质鳞片的哺乳动物，即穿山甲。以蚂蚁和白蚁为食，用长舌捕食。是世界上被走私最多的哺乳动物。",
        geologicalPeriod: "始新世晚期（约4000万年前）",
        question: "鳞甲目的防御和取食适应：",
        options: [
            { text: "🦎 角质鳞甲覆盖，食蚁长舌，遇敌卷曲", target: "manidae" }
        ]
    },

    manidae: {
        id: "manidae",
        name: "穿山甲科",
        isLeaf: true,
        icon: "🦎",
        description: "穿山甲科是鳞甲目唯一的科，包含8种穿山甲，分布于亚洲和非洲。全身覆盖重叠的角质鳞片，这是它们最显著的特征。穿山甲以蚂蚁和白蚁为食，用长而粘的舌头捕食，遇到危险时会卷曲成球。是世界上被非法贸易最多的哺乳动物。",
        keyTraits: ["角质鳞甲", "食蚁", "长舌", "能卷曲"],
        geologicalPeriod: "始新世晚期（约4000万年前）"
    },

    // 奇蹄目
    perissodactyla: {
        id: "perissodactyla",
        name: "奇蹄目",
        icon: "🐴",
        description: "奇蹄目是较原始的有蹄类，第三趾特别发达。虽不如偶蹄目繁盛，但在演化史上出现较早。",
        geologicalPeriod: "古新世晚期（约5600万年前）",
        question: "奇蹄目的脚趾数和体型大小不同：",
        options: [
            { text: "🐴 单趾着地，高速奔跑，群居社会性强", target: "hippomorpha" },
            { text: "🦏 鼻角特化，体型庞大，皮厚如铠甲", target: "ceratomorpha" }
        ]
    },

    // 马形亚目
    hippomorpha: {
        id: "hippomorpha",
        name: "马形亚目",
        icon: "🐴",
        description: "包含马、驴、斑马等，从始祖马演化而来，脚趾减少至单趾（马蹄）。擅长奔跑，具有高度的社会结构。",
        geologicalPeriod: "始新世早期（约5500万年前）",
        question: "马形类的奔跑适应：",
        options: [
            { text: "🐴 单趾着地，高速奔跑，草食性，群居", target: "equidae" }
        ]
    },

    equidae: {
        id: "equidae",
        name: "马科",
        isLeaf: true,
        icon: "🐴",
        description: "马科包括马、驴和斑马，是善跑的有蹄类。四肢修长，单趾着地。斑马有黑白条纹，野马是濒危物种。家马是人类重要的伙伴动物。",
        keyTraits: ["单趾蹄", "高速奔跑", "群居"],
        geologicalPeriod: "始新世（约5500万年前）"
    },

    // 角形亚目
    ceratomorpha: {
        id: "ceratomorpha",
        name: "角形亚目",
        icon: "🦏",
        description: "包含犀牛和貘，体型庞大的草食动物，以角著称（实际是致密毛发）。皮肤厚重如铠甲，现存五种犀牛均为濒危物种。",
        geologicalPeriod: "始新世（约5000万年前）",
        question: "角形类的防御和取食适应：",
        options: [
            { text: "🦏 厚皮铠甲，鼻角（毛发特化），现存最大奇蹄类", target: "rhinocerotidae" },
            { text: "🐽 短象鼻状吻部，喜水，活化石", target: "tapiridae" }
        ]
    },

    rhinocerotidae: {
        id: "rhinocerotidae",
        name: "犀科",
        isLeaf: true,
        icon: "🦏",
        description: "犀科是现存最大的奇蹄类，皮肤厚重如铠甲，鼻上有角（由毛发特化而成）。现存5种均为濒危动物，受偷猎和栖息地丧失威胁。",
        keyTraits: ["厚皮", "鼻角", "濒危"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    tapiridae: {
        id: "tapiridae",
        name: "貘科",
        isLeaf: true,
        icon: "🐽",
        description: "貘科包括貘，是较原始的奇蹄类，外形似猪但有短的象鼻状吻部。栖息于热带森林，喜水，是活化石。现存4种均濒危。",
        keyTraits: ["短鼻", "喜水", "活化石"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    // 偶蹄目
    artiodactyla: {
        id: "artiodactyla",
        name: "偶蹄目",
        icon: "🐮",
        description: "偶蹄目是现代最繁盛的有蹄类，第三和第四趾同等发达。全球约220种，包括牛、羊、鹿、猪、长颈鹿、河马等。",
        geologicalPeriod: "古新世晚期（约5500万年前）",
        question: "偶蹄目的消化系统和栖息地不同：",
        options: [
            { text: "🐷 杂食，发达嗅觉，智商较高", target: "suina" },
            { text: "🦛 足部胼胝垫，适应干旱，驼峰储存脂肪", target: "tylopoda" },
            { text: "🐮 复杂多室胃，能够反刍消化粗纤维", target: "ruminantia" },
            { text: "🐋 部分重返水生，鲸类与河马亲缘", target: "whippomorpha" }
        ]
    },

    // 猪形亚目
    suina: {
        id: "suina",
        name: "猪形亚目",
        icon: "🐷",
        description: "包含猪科和西猯科。杂食性动物，嗅觉发达，智商较高。猪的驯化历史超过一万年，是重要的家畜。",
        geologicalPeriod: "始新世（约5000万年前）",
        question: "猪形类的食性和社会性：",
        options: [
            { text: "🐷 杂食，发达嗅觉，高智商，重要家畜", target: "suidae" },
            { text: "🐗 美洲特有，体型较小，胃复杂，群居", target: "tayassuidae" }
        ]
    },

    suidae: {
        id: "suidae",
        name: "猪科",
        isLeaf: true,
        icon: "🐷",
        description: "猪科包括家猪、野猪等，是重要的家畜。杂食性，嗅觉发达，智商较高。野猪分布广泛，是重要的狩猎动物。",
        keyTraits: ["杂食", "发达嗅觉", "高智商"],
        geologicalPeriod: "始新世（约5000万年前）"
    },

    tayassuidae: {
        id: "tayassuidae",
        name: "西猯科",
        isLeaf: true,
        icon: "🐗",
        description: "西猯科是美洲特有的猪形类，外形类似猪但体型较小，胃较复杂，以植物为主食。群居生活。",
        keyTraits: ["美洲特有", "群居", "植食"],
        geologicalPeriod: "渐新世（约4000万年前）"
    },

    // 胼足亚目
    tylopoda: {
        id: "tylopoda",
        name: "胼足亚目",
        icon: "🐫",
        description: "包含骆驼科，特征为足上有胼胝状的垫。适应干旱环境，有储存脂肪的驼峰。代表物种：单峰驼、羊驼。",
        geologicalPeriod: "始新世中期（约4500万年前）",
        question: "胼足类的干旱适应：",
        options: [
            { text: "🐫 胼足垫，驼峰储存脂肪，适应干旱环境", target: "camelidae" }
        ]
    },

    camelidae: {
        id: "camelidae",
        name: "骆驼科",
        isLeaf: true,
        icon: "🐫",
        description: "骆驼科包括骆驼、羊驼等，特征为足上有胼胝状的垫。适应干旱环境，有储存脂肪的驼峰。代表物种：单峰驼、双峰驼、羊驼。",
        keyTraits: ["胼足", "适应干旱", "驼峰"],
        geologicalPeriod: "始新世中期（约4500万年前）"
    },

    // 反刍亚目
    ruminantia: {
        id: "ruminantia",
        name: "反刍亚目",
        icon: "🦌",
        description: "反刍亚目是偶蹄目中最大的次目，拥有复杂的胃结构（多室胃），能够反刍消化粗纤维。",
        geologicalPeriod: "始新世晚期（约4000万年前）",
        question: "反刍类的角和体型不同：",
        options: [
            { text: "🦛 无角，体型小，森林热带环境", target: "tragulina" },
            { text: "🦌 骨质角（分枝或洞角），多样性高", target: "pecora" }
        ]
    },

    // 鼷鹿下目
    tragulina: {
        id: "tragulina",
        name: "鼷鹿下目",
        isLeaf: true,
        icon: "🦛",
        description: "包含鼷鹿科，是反刍亚目中最原始的类群。体型小，无角，生活在热带森林中。代表物种：小鼷鹿。",
        keyTraits: ["无角", "体型小", "森林环境"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 有角下目
    pecora: {
        id: "pecora",
        name: "有角下目",
        icon: "🦌",
        description: "有角下目是反刍亚目最繁盛的类群，具有骨质角。包括长颈鹿科、鹿科、牛科等。",
        geologicalPeriod: "渐新世晚期（约2500万年前）",
        question: "有角下目的角结构和取食高度不同：",
        options: [
            { text: "🦒 极长脖子，蓝黑色舌头，非洲特有", target: "giraffidae" },
            { text: "🦌 雄性分枝鹿角，季节脱落重长", target: "cervidae" },
            { text: "🐃 洞角（不分枝），反刍消化，种类多样", target: "bovidae" },
            { text: "🦌 西半球最快陆地动物，分叉角每年脱落", target: "antilocapridae" },
            { text: "🦙 獠牙，无角，雄性麝香囊", target: "moschidae" },
            { text: "🦌 最原始反刍类，无角，体型如兔", target: "tragulidae" }
        ]
    },

    // 长颈鹿科
    giraffidae: {
        id: "giraffidae",
        name: "长颈鹿科",
        isLeaf: true,
        icon: "🦒",
        description: "包含长颈鹿和㶉㶠（霍加狓）。脖子极长（7节颈椎与人类相同），舌头蓝黑色，可用来卷取树叶。",
        keyTraits: ["长脖子", "蓝舌头", "非洲特有"],
        geologicalPeriod: "中新世中期（约1500万年前）"
    },

    // 鹿科
    cervidae: {
        id: "cervidae",
        name: "鹿科",
        isLeaf: true,
        icon: "🦌",
        description: "雄性具有骨质分枝的鹿角（每年脱落重长）。分布广泛，从北极苔原到热带森林均有分布。代表物种：梅花鹿。",
        keyTraits: ["分枝鹿角", "季节换角"],
        geologicalPeriod: "中新世早期（约2000万年前）"
    },

    // 牛科
    bovidae: {
        id: "bovidae",
        name: "牛科",
        isLeaf: true,
        icon: "🐃",
        description: "包括牛、羊、羚羊等，是有蹄类中种类最多的科。特征是具有骨质洞角（不分枝），反刍消化。",
        keyTraits: ["洞角", "反刍", "种类多样"],
        geologicalPeriod: "中新世早期（约2000万年前）"
    },

    // 叉角羚科
    antilocapridae: {
        id: "antilocapridae",
        name: "叉角羚科",
        isLeaf: true,
        icon: "🦌",
        description: "叉角羚科仅存叉角羚一种，是西半球最快的陆地动物。角的分叉独特，每年脱落。",
        keyTraits: ["高速奔跑", "分叉角", "美洲特有"],
        geologicalPeriod: "中新世（约2000万年前）"
    },

    // 麝科
    moschidae: {
        id: "moschidae",
        name: "麝科",
        isLeaf: true,
        icon: "🦌",
        description: "麝科包括麝，没有鹿角但有獠牙，雄性有麝香囊。是珍贵的药用动物。体型小，栖息于森林。",
        keyTraits: ["獠牙", "麝香", "小型"],
        geologicalPeriod: "中新世（约1500万年前）"
    },

    // 鹿豚科
    tragulidae: {
        id: "tragulidae",
        name: "鹿豚科",
        isLeaf: true,
        icon: "🦌",
        description: "鹿豚科包括鼷鹿（鹿豚），是最原始的反刍类。体型如兔，没有角，栖息于热带森林。",
        keyTraits: ["原始", "小型", "森林"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 鲸河马亚目
    whippomorpha: {
        id: "whippomorpha",
        name: "鲸河马亚目",
        icon: "🐋",
        description: "河马和鲸的共同祖先演化而来，是一个有趣的演化分支，一部分重新适应水生生活成为鲸类。",
        geologicalPeriod: "始新世早期（约5400万年前）",
        question: "重返水生的程度不同：",
        options: [
            { text: "🦛 半水生，巨大体型，与鲸类亲缘", target: "ancodonta" },
            { text: "🐋 完全水生，鳍状肢，流线型身体", target: "cetacea" }
        ]
    },

    // 河马形下目
    ancodonta: {
        id: "ancodonta",
        name: "河马形下目",
        icon: "🦛",
        description: "包含河马科，体型巨大的半水生哺乳动物。虽然外形像猪，但亲缘关系更接近鲸类。",
        geologicalPeriod: "始新世晚期（约3800万年前）",
        question: "河马的水生适应：",
        options: [
            { text: "🦛 半水生，巨大体型，獠牙，领地意识", target: "hippopotamidae" }
        ]
    },

    hippopotamidae: {
        id: "hippopotamidae",
        name: "河马科",
        isLeaf: true,
        icon: "🦛",
        description: "河马科包括河马和倭河马，是大型半水生哺乳动物。虽然外形似猪，但亲缘关系更接近鲸类。体型庞大，獠牙巨大，有领地意识。",
        keyTraits: ["半水生", "巨大体型", "与鲸类近缘"],
        geologicalPeriod: "始新世晚期（约3800万年前）"
    },

    // 鲸下目
    cetacea: {
        id: "cetacea",
        name: "鲸下目",
        icon: "🐋",
        description: "鲸下目是重返海洋的哺乳动物，四肢完全演化为鳍状，身体呈流线型。它们是海洋中体型最大的动物。",
        geologicalPeriod: "始新世早期（约5300万年前）",
        question: "鲸类的取食方式和牙齿类型不同：",
        options: [
            { text: "🐋 须板滤食磷虾，地球最大动物群", target: "mysticeti" },
            { text: "🦈 有牙齿，高度社会化，回声定位", target: "odontoceti" }
        ]
    },

    // 须鲸
    mysticeti: {
        id: "mysticeti",
        name: "须鲸小目",
        icon: "🐋",
        description: "地球上体型最大的动物群，通过须板过滤海水获取磷虾和小鱼。蓝鲸可达30米长，体重超过150吨。",
        geologicalPeriod: "渐新世（约3000万年前）",
        question: "须鲸的喉部结构和迁徙习性不同：",
        options: [
            { text: "🐋 喉腹部褶沟滤食，包括蓝鲸座头鲸", target: "balaenopteridae" },
            { text: "🐋 巨大头部占体长1/3，行动缓慢，厚鲸脂", target: "balaenidae" },
            { text: "🐋 北美洲西海岸迁徙，往返2万公里", target: "eschrichtiidae" }
        ]
    },

    balaenopteridae: {
        id: "balaenopteridae",
        name: "须鲸科",
        isLeaf: true,
        icon: "🐋",
        description: "须鲸科包括蓝鲸、长须鲸、座头鲸等，是最大的动物。喉腹部有许多褶沟，进食时会扩张。",
        keyTraits: ["巨大体型", "喉沟", "滤食"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    balaenidae: {
        id: "balaenidae",
        name: "露脊鲸科",
        isLeaf: true,
        icon: "🐋",
        description: "露脊鲸科包括露脊鲸和弓头鲸，体型巨大，头部占体长的三分之一。行动缓慢，鲸脂厚，曾是捕鲸业主要目标。",
        keyTraits: ["大头", "慢游", "厚鲸脂"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    eschrichtiidae: {
        id: "eschrichtiidae",
        name: "灰鲸科",
        isLeaf: true,
        icon: "🐋",
        description: "灰鲸科仅存灰鲸一种，沿北美洲西海岸进行史诗级的迁徙，往返长达2万公里。",
        keyTraits: ["长距离迁徙", "海岸性", "灰皮"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 齿鲸
    odontoceti: {
        id: "odontoceti",
        name: "齿鲸小目",
        icon: "🐬",
        description: "具有牙齿的鲸类，包括海豚、抹香鲸等。高度社会化的海豚拥有复杂的行为和回声定位系统。",
        geologicalPeriod: "始新世晚期（约3400万年前）",
        question: "齿鲸的社会结构和栖息地不同：",
        options: [
            { text: "🐬 高智力，群居，回声定位，包含虎鲸", target: "delphinidae" },
            { text: "🐋 最大齿鲸，深潜能力，鲸脑油", target: "physeteridae" },
            { text: "🐋 喙状吻部，深海潜水，罕见", target: "ziphiidae" },
            { text: "🐬 小型，短喙，近岸生活", target: "phocoenidae" },
            { text: "🦄 北极海域，独角鲸长牙，白鲸", target: "monodontidae" }
        ]
    },

    delphinidae: {
        id: "delphinidae",
        name: "海豚科",
        isLeaf: true,
        icon: "🐬",
        description: "海豚科是最常见的齿鲸，包括海豚、虎鲸等。高度社会化，脑体积大，智力高，回声定位系统发达。",
        keyTraits: ["高智力", "群居", "回声定位"],
        geologicalPeriod: "中新世（约1800万年前）"
    },

    physeteridae: {
        id: "physeteridae",
        name: "抹香鲸科",
        isLeaf: true,
        icon: "🐋",
        description: "抹香鲸科包括抹香鲸，是最大的齿鲸。潜水能力极强，头部巨大，内含鲸脑油。以大王乌贼为食。",
        keyTraits: ["深潜", "大头", "鲸脑油"],
        geologicalPeriod: "渐新世（约3400万年前）"
    },

    ziphiidae: {
        id: "ziphiidae",
        name: "喙鲸科",
        isLeaf: true,
        icon: "🐋",
        description: "喙鲸科是最难研究的鲸类，常深海潜水，很少在海面停留。有突出的喙状吻部，雄性常有牙齿。",
        keyTraits: ["喙状吻", "深潜", "罕见"],
        geologicalPeriod: "渐新世（约3400万年前）"
    },

    phocoenidae: {
        id: "phocoenidae",
        name: "鼠海豚科",
        isLeaf: true,
        icon: "🐬",
        description: "鼠海豚科包括鼠海豚，体型较小，喙短，喜近岸生活。与海豚近缘但更害羞。",
        keyTraits: ["小型", "短喙", "近岸"],
        geologicalPeriod: "中新世（约1500万年前）"
    },

    monodontidae: {
        id: "monodontidae",
        name: "独角鲸科",
        isLeaf: true,
        icon: "🦄",
        description: "独角鲸科包括独角鲸和白鲸，生活在北极海域。独角鲸雄性有一根长牙（实为特化牙齿），白鲸体色纯白。",
        keyTraits: ["北极", "长牙", "白体色"],
        geologicalPeriod: "中新世（约1500万年前）"
    },

    // 食肉目
    carnivora: {
        id: "carnivora",
        name: "食肉目",
        icon: "🦁",
        description: "食肉目是哺乳动物中最成功的捕食者类群，拥有锋利的牙齿和爪子。虽然名为食肉，但很多成员已演化为杂食甚至完全素食。",
        geologicalPeriod: "古新世晚期（约5600万年前）",
        question: "食肉目的爪子伸缩性和社会性不同：",
        options: [
            { text: "🐱 可伸缩爪子，敏捷掠食者，夜视能力强", target: "feliformia" },
            { text: "🐶 爪不伸缩，生态位多样，从海豹到熊类", target: "caniformia" }
        ]
    },

    // 猫型亚目
    feliformia: {
        id: "feliformia",
        name: "猫型亚目",
        icon: "🐱",
        description: "猫型亚目包括猫科、灵猫科、獴科等，多为敏捷的掠食者。它们拥有可伸缩的爪子和出色的夜视能力。",
        geologicalPeriod: "始新世早期（约5500万年前）",
        question: "猫型类不同科的捕食和防御策略不同：",
        options: [
            { text: "🐱 可伸缩爪，灵活身体，伏击猎手", target: "felidae" },
            { text: "🦡 香腺，夜行性，森林环境", target: "viverridae" },
            { text: "🦨 强大咬合力，能咬碎骨头，群居", target: "hyaenidae" },
            { text: "🦔 蛇毒免疫，群居协作，捕食蛇类", target: "herpestidae" },
            { text: "🦝 马达加斯加特有，独特演化分支", target: "eupleridae" },
            { text: "🐱 马达加斯加最大食肉动物", target: "fossidae" }
        ]
    },

    eupleridae: {
        id: "eupleridae",
        name: "食蚁狸科",
        isLeaf: true,
        icon: "🦝",
        description: "食蚁狸科是马达加斯加特有的猫型类，包括马岛灵猫等，是一个演化分支独特的类群。",
        keyTraits: ["马达加斯加特有", "独特演化"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    fossidae: {
        id: "fossidae",
        name: "马岛灵猫科",
        isLeaf: true,
        icon: "🐱",
        description: "马岛灵猫科包括马岛灵猫（马岛獴），是马达加斯加最大的食肉动物，外形像猫和灵猫的混合。",
        keyTraits: ["马达加斯加最大食肉动物", "独特外形"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 猫科
    felidae: {
        id: "felidae",
        name: "猫科",
        isLeaf: true,
        icon: "🐱",
        description: "高度专业化的肉食动物，具有可伸缩爪子、灵活身体和敏锐感官。从家猫到老虎，体型差异巨大，均为伏击猎手。",
        keyTraits: ["可伸缩爪", "夜视能力", "伏击猎食"],
        geologicalPeriod: "渐新世晚期（约2500万年前）"
    },

    // 灵猫科
    viverridae: {
        id: "viverridae",
        name: "灵猫科",
        isLeaf: true,
        icon: "🦡",
        description: "包含灵猫、果子狸等，是猫型亚目中较原始的类群。主要分布于非洲和亚洲的森林中。",
        keyTraits: ["香腺", "夜行性", "森林环境"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 鬣狗科
    hyaenidae: {
        id: "hyaenidae",
        name: "鬣狗科",
        isLeaf: true,
        icon: "🦨",
        description: "外形似狗但亲缘关系更近灵猫科。拥有强大的咬合力，能咬碎骨头。斑鬣狗是群居猎食者。",
        keyTraits: ["强大咬合力", "食腐", "群居"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 獴科
    herpestidae: {
        id: "herpestidae",
        name: "獴科",
        isLeaf: true,
        icon: "🦔",
        description: "小型肉食动物，以捕食蛇类著称，对蛇毒有免疫力。群居生活，共同照料幼崽。代表物种：狐獴。",
        keyTraits: ["蛇毒免疫", "群居协作"],
        geologicalPeriod: "中新世早期（约2000万年前）"
    },

    // 犬型亚目
    caniformia: {
        id: "caniformia",
        name: "犬型亚目",
        icon: "🐶",
        description: "犬型亚目包括犬科、熊科、海豹科等，生态位极其多样。从体型微小的狐狸到巨大的北极熊，都属于这个灵活的类群。",
        geologicalPeriod: "始新世早期（约5500万年前）",
        question: "犬型类中，重返海洋和陆地生活的不同：",
        options: [
            { text: "🐶 陆生，群体狩猎，擅长追踪", target: "canida" },
            { text: "🦭 重返海洋，四肢鳍状，海豹海狮海象", target: "pinnipedia" }
        ]
    },

    canida: {
        id: "canida",
        name: "犬形下目",
        icon: "🐶",
        description: "包含犬科、熊科、鼬科等陆生犬形类，是陆生肉食类的主要类群。",
        geologicalPeriod: "始新世早期（约5500万年前）",
        question: "陆生犬型类的体型和食性不同：",
        options: [
            { text: "🐶 群体狩猎，长途追踪，社会性强", target: "canidae" },
            { text: "🐻 巨大体型，冬眠，杂食", target: "ursidae" },
            { text: "🦦 种类最多，臭腺防御，多样生态位", target: "mustelidae" },
            { text: "🦝 竹食，红棕毛色，山地森林", target: "ailuridae" },
            { text: "🐼 竹食为主，伪拇指抓握，国宝", target: "ailuropodidae" },
            { text: "🦨 臭腺喷射防御，美洲分布", target: "mephitidae" },
            { text: "🦝 洗食行为，灵活前肢，美洲分布", target: "procyonidae" }
        ]
    },

    mephitidae: {
        id: "mephitidae",
        name: "臭鼬科",
        isLeaf: true,
        icon: "🦨",
        description: "臭鼬科包括臭鼬，以其著名的臭腺防御著称，能喷射有强烈气味的液体。分布于美洲。",
        keyTraits: ["臭腺", "美洲分布"],
        geologicalPeriod: "中新世（约3000万年前）"
    },

    procyonidae: {
        id: "procyonidae",
        name: "浣熊科",
        isLeaf: true,
        icon: "🦝",
        description: "浣熊科包括浣熊、小浣熊等，多为杂食性，前肢灵活，常在水中洗食。分布于美洲。",
        keyTraits: ["洗食", "灵活前肢", "美洲分布"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    ailuridae: {
        id: "ailuridae",
        name: "小熊猫科",
        isLeaf: true,
        icon: "🦝",
        description: "小熊猫科仅存小熊猫一种，外形可爱，生活在亚洲的山地森林中。以竹子为食，但与大熊猫的亲缘关系并不近，而是独立演化的支系。毛色红棕，尾巴有环纹。",
        keyTraits: ["竹食", "红毛", "山地"],
        geologicalPeriod: "中新世（约1500万年前）"
    },

    ailuropodidae: {
        id: "ailuropodidae",
        name: "大熊猫科",
        isLeaf: true,
        icon: "🐼",
        description: "大熊猫科仅存大熊猫一种，是中国的特有物种，国宝级动物。虽然分类上属于食肉目，但高度特化为以竹子为主食，拇指特化为伪拇指用于抓握竹子。黑白毛色是其标志性特征。",
        keyTraits: ["竹食", "伪拇指", "国宝"],
        geologicalPeriod: "中新世（约1500万年前）"
    },

    pinnipedia: {
        id: "pinnipedia",
        name: "鳍足形下目",
        icon: "🦭",
        description: "鳍足类是重新适应海洋生活的食肉目动物，四肢演化为鳍状。包括海象科、海狮科和海豹科。",
        geologicalPeriod: "渐新世（约3000万年前）",
        question: "鳍足类的外耳和移动方式不同：",
        options: [
            { text: "🦭 无外耳廓，鳍状后肢，海洋生活", target: "phocidae" },
            { text: "🦦 有外耳廓，陆上行走，性别二态", target: "otariidae" },
            { text: "🦛 巨大獠牙，北极，贝类食性", target: "odobenidae" }
        ]
    },

    odobenidae: {
        id: "odobenidae",
        name: "海象科",
        isLeaf: true,
        icon: "🦛",
        description: "海象科仅存海象一种，是北极地区的特有大型海洋哺乳动物。拥有巨大的獠牙，雌雄都有，用于呼吸冰洞、防御和争斗。主要以贝类为食，能够在海底翻找食物。",
        keyTraits: ["獠牙", "北极", "贝类食"],
        geologicalPeriod: "渐新世（约3000万年前）"
    },

    // 犬科
    canidae: {
        id: "canidae",
        name: "犬科",
        isLeaf: true,
        icon: "🐶",
        description: "包括狼、狐狸、郊狼等。高度社会化的捕食者，擅长长距离追踪，具有卓越的团队协作能力。狗是最早驯化的家畜。",
        keyTraits: ["群体狩猎", "长途追踪", "社会性强"],
        geologicalPeriod: "始新世中期（约4000万年前）"
    },

    // 熊科
    ursidae: {
        id: "ursidae",
        name: "熊科",
        isLeaf: true,
        icon: "🐻",
        description: "体型最大的陆生肉食动物之一（虽然多数已杂食化）。具有强大的力量，北极熊是顶级掠食者，大熊猫特化为食竹。",
        keyTraits: ["巨大体型", "冬眠", "杂食"],
        geologicalPeriod: "中新世早期（约2000万年前）"
    },

    // 鼬科
    mustelidae: {
        id: "mustelidae",
        name: "鼬科",
        isLeaf: true,
        icon: "🦦",
        description: "食肉目中种类最多的科，包括水獭、黄鼠狼、獾、貂等。多为小型肉食动物，有些具臭腺防御。",
        keyTraits: ["臭腺", "多样生态位"],
        geologicalPeriod: "始新世晚期（约4000万年前）"
    },

    // 海狮科
    otariidae: {
        id: "otariidae",
        name: "海狮科",
        isLeaf: true,
        icon: "🦭",
        description: "包含海狮和海狗，具有外耳廓和可在陆上行走的鳍状肢。雄性体型远大于雌性，有复杂的繁殖仪式。",
        keyTraits: ["有耳海豹", "陆上行走", "性别二态"],
        geologicalPeriod: "中新世早期（约2000万年前）"
    },

    // 海豹科
    phocidae: {
        id: "phocidae",
        name: "海豹科",
        isLeaf: true,
        icon: "🦭",
        description: "无外耳廓的真海豹，四肢特化为鳍状，适合海洋生活，但在陆地繁殖。皮下脂肪厚，适应寒冷环境。",
        keyTraits: ["无耳海豹", "海洋生活", "厚脂肪"],
        geologicalPeriod: "中新世早期（约2000万年前）"
    }
};

// 获取根节点ID
const ROOT_NODE_ID = "mammalia";