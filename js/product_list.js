let product_array = [
    {
        pimg_file_name: "lip_product (1).jpg",
        pid: 0,
        pname: "버츠비 립 트리트먼트 7g",
        pname_e: "Burt's Bees Lip Treatment 7g",
        pdesc: "천연 성분으로 입술에 깊은 보습을 선사하는 립 트리트먼트",
        pcategory: "립밤",
        ptags: ["립밤","립케어", "보습", "천연성분"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (2).jpg",
        pid: 1,
        pname: "버츠비 틴티드 립밤 4.25g",
        pname_e: "Burt's Bees Tinted Lip Balm 4.25g",
        pdesc: "자연스러운 컬러와 함께 입술에 수분을 공급하는 틴티드 립밤",
        pcategory: "립밤",
        ptags: ["립밤", "틴티드", "보습", "컬러"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (3).jpg",
        pid: 2,
        pname: "버츠비 핑크 그레이프 립밤 4.25g",
        pname_e: "Burt's Bees Pink Grapefruit Lip Balm 4.25g",
        pdesc: "상큼한 핑크 그레이프프루트 향으로 입술을 촉촉하게 가꾸는 립밤",
        pcategory: "립밤",
        ptags: ["립밤", "그레이프프루트", "보습", "향기"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (4).jpg",
        pid: 3,
        pname: "버츠비 비즈왁스 립 밤 위드 비타민 E & 페퍼민트",
        pname_e: "Burt's Bees Beeswax Lip Balm with Vitamin E & Peppermint",
        pdesc: "비즈왁스와 페퍼민트가 입술에 상쾌한 쿨링 효과를 주며, 깊은 보습을 제공합니다",
        pcategory: "립밤",
        ptags: ["립밤", "비즈왁스", "페퍼민트", "보습"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (5).jpg",
        pid: 4,
        pname: "버츠비 허니 립밤 4.25g",
        pname_e: "Burt's Bees Honey Lip Balm 4.25g",
        pdesc: "허니 성분이 입술에 자연스러운 보습을 제공합니다",
        pcategory: "립밤",
        ptags: ["립밤", "허니", "보습"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (6).jpg",
        pid: 5,
        pname: "버츠비 컨디셔닝 립 스크럽 7.08g",
        pname_e: "Burt's Bees Conditioning Lip Scrub 7.08g",
        pdesc: "각질 제거와 보습을 동시에 해결하는 립 스크럽",
        pcategory: "립밤",
        ptags: ["립스크럽", "보습", "각질제거"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (7).jpg",
        pid: 6,
        pname: "버츠비 울트라컨디셔닝 립밤 4.25g",
        pname_e: "Burt's Bees Ultra Conditioning Lip Balm 4.25g",
        pdesc: "강력한 보습 효과로 건조한 입술을 촉촉하게 가꾸는 립밤",
        pcategory: "립밤",
        ptags: ["립밤", "보습", "건조한입술"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (8).jpg",
        pid: 7,
        pname: "버츠비 스위트만다린 모이스춰라이징 립밤 4.25g",
        pname_e: "Burt's Bees Sweet Mandarin Moisturizing Lip Balm 4.25g",
        pdesc: "달콤한 만다린 향과 함께 입술에 깊은 보습을 선사하는 립밤",
        pcategory: "립밤",
        ptags: ["립밤", "만다린", "보습", "향기"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (9).jpg",
        pid: 8,
        pname: "버츠비 어드밴스드 릴리프 립 밤 언센티드 4.25g",
        pname_e: "Burt's Bees Advanced Relief Lip Balm Unscented 4.25g",
        pdesc: "피부 자극 없이 입술을 깊게 케어하는 립밤",
        pcategory: "립밤",
        ptags: ["립밤", "보습", "무향"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "lip_product (10).jpg",
        pid: 9,
        pname: "버츠비 헴프 립밤 4.25g",
        pname_e: "Burt's Bees Hemp Lip Balm 4.25g",
        pdesc: "헴프 성분이 입술을 보호하고 보습을 제공합니다",
        pcategory: "립밤",
        ptags: ["립밤", "헴프", "보습"],
        pstock_status: "재고 있음"
    },

    {
        pimg_file_name: "body_product (1).jpg",
        pid: 10,
        pname: "버츠비 헴프 핸드크림 70g",
        pname_e: "Burt's Bees Hemp Hand Cream 70g",
        pdesc: "건조한 손을 위한 보습과 영양을 제공하는 핸드크림",
        pcategory: "바디케어",
        ptags: ["핸드크림", "보습", "영양", "헴프"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (2).jpg",
        pid: 11,
        pname: "버츠비 힐링 행드 앤 바디 로션 시어",
        pname_e: "Burt's Bees Healing Hand & Body Lotion Shea",
        pdesc: "시어버터가 함유된 보습력이 뛰어난 핸드 & 바디 로션",
        pcategory: "바디케어",
        ptags: ["로션", "보습", "시어버터", "핸드&바디"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (3).jpg",
        pid: 12,
        pname: "버츠비 레스큐 오인트먼트 15g",
        pname_e: "Burt's Bees Rescue Ointment 15g",
        pdesc: "피부의 거칠고 건조한 부분을 집중적으로 케어하는 다용도 연고",
        pcategory: "바디케어",
        ptags: ["연고", "피부케어", "보습", "건조한 피부"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (4).jpg",
        pid: 13,
        pname: "버츠비 라벤더 앤 허니 핸드 크림 28.3g",
        pname_e: "Burt's Bees Lavender & Honey Hand Cream 28.3g",
        pdesc: "라벤더와 허니가 함유되어 피부를 진정시키고 부드럽게 가꾸는 핸드 크림",
        pcategory: "바디케어",
        ptags: ["핸드크림", "라벤더", "허니", "진정"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (5).jpg",
        pid: 14,
        pname: "버츠비 밀크&허니 바디 로션",
        pname_e: "Burt's Bees Milk & Honey Body Lotion",
        pdesc: "부드러운 피부를 위한 밀크와 허니가 함유된 바디 로션",
        pcategory: "바디케어",
        ptags: ["로션", "밀크", "허니", "보습"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (6).jpg",
        pid: 15,
        pname: "버츠비 레몬 버터 큐티클 크림 17g",
        pname_e: "Burt's Bees Lemon Butter Cuticle Cream 17g",
        pdesc: "건조한 손톱 주변을 부드럽게 케어하는 레몬 버터 큐티클 크림",
        pcategory: "바디케어",
        ptags: ["큐티클 크림", "레몬버터", "손톱케어"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (7).jpg",
        pid: 16,
        pname: "버츠비 베이비 바디 로션 170g",
        pname_e: "Burt's Bees Baby Body Lotion 170g",
        pdesc: "아기 피부에 부드럽게 발리는 바디 로션",
        pcategory: "바디케어",
        ptags: ["아기", "로션", "부드러운 피부", "보습"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "body_product (8).jpg",
        pid: 17,
        pname: "버츠비 베이비 아이크림 17g",
        pname_e: "Burt's Bees Baby Eye Cream 17g",
        pdesc: "아기들의 민감한 피부에 맞는 아이크림",
        pcategory: "바디케어",
        ptags: ["아이크림", "아기", "민감한 피부", "보습"],
        pstock_status: "재고 있음"
    },

    {
        pimg_file_name: "mama_product (1).jpg",
        pid: 18,
        pname: "버츠비 베이비 카밍 너리싱 로션 170g",
        pname_e: "Burt's Bees Baby Calming Nourishing Lotion 170g",
        pdesc: "아기의 피부를 부드럽고 촉촉하게 가꾸는 카밍 너리싱 로션",
        pcategory: "마마앤베이비",
        ptags: ["로션", "아기", "보습", "카밍"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (2).jpg",
        pid: 19,
        pname: "버츠비 마마비 스페셜세트",
        pname_e: "Burt's Bees Mama Bee Special Set",
        pdesc: "엄마를 위한 스페셜한 케어 세트로, 자연 유래 성분이 함유된 제품들로 구성",
        pcategory: "마마앤베이비",
        ptags: ["세트", "엄마", "케어", "스페셜"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (3).jpg",
        pid: 20,
        pname: "버츠비 마마비 벨리 버터 185g",
        pname_e: "Burt's Bees Mama Bee Belly Butter 185g",
        pdesc: "임산부의 배 피부를 부드럽게 케어하는 벨리 버터",
        pcategory: "마마앤베이비",
        ptags: ["벨리버터", "임산부", "보습", "피부케어"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (4).jpg",
        pid: 21,
        pname: "버츠비 베이비 너리싱 로션 오리지널 170g",
        pname_e: "Burt's Bees Baby Nourishing Lotion Original 170g",
        pdesc: "아기의 피부를 부드럽게 가꾸는 원래의 베이비 너리싱 로션",
        pcategory: "마마앤베이비",
        ptags: ["로션", "아기", "보습", "원래제품"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (5).jpg",
        pid: 22,
        pname: "버츠비 베이비 베이비 오일 170g",
        pname_e: "Burt's Bees Baby Oil 170g",
        pdesc: "아기 피부를 부드럽게 마사지하는 베이비 오일",
        pcategory: "마마앤베이비",
        ptags: ["오일", "아기", "보습", "마사지"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (6).jpg",
        pid: 23,
        pname: "버츠비 마마비 로션 170g",
        pname_e: "Burt's Bees Mama Bee Lotion 170g",
        pdesc: "엄마를 위한 보습 로션",
        pcategory: "마마앤베이비",
        ptags: ["로션", "엄마", "보습"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (7).jpg",
        pid: 24,
        pname: "버츠비 마마비 오일 170g",
        pname_e: "Burt's Bees Mama Bee Oil 170g",
        pdesc: "임산부를 위한 오일로, 피부를 부드럽게 케어",
        pcategory: "마마앤베이비",
        ptags: ["오일", "임산부", "보습"],
        pstock_status: "재고 있음"
    },
    {
        pimg_file_name: "mama_product (8).jpg",
        pid: 25,
        pname: "버츠비 마마비 클렌징 오일 170g",
        pname_e: "Burt's Bees Mama Bee Cleansing Oil 170g",
        pdesc: "부드럽게 피부를 클렌징하는 임산부용 오일",
        pcategory: "마마앤베이비",
        ptags: ["클렌징", "오일", "임산부", "피부케어"],
        pstock_status: "재고 있음"
    }
];
