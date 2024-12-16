let product_array = [
    // LIPBALM
    {
        pimg_file_name: "lip/lip_product (1).jpg",
        pid: 0,
        pname: "버츠비 오버나이트 인텐시브 립 트리트먼트 7.08g",
        pname_e: "Burt's Bees Lip Treatment 7g",
        pdesc: "천연 성분으로 입술에 깊은 보습을 주는 립 트리트먼트",
        pcategory: "LIPBALM",
        ptags: ["립케어", "보습", "천연성분", "세라마이드","전체"],
        pstock: true,
        pdetails: "비즈왁스와 시어버터가 입술에 깊은 보습을 제공합니다. 자극 없이 안전하게 사용할 수 있으며, 하루 중 필요할 때마다 사용하세요.",
        pdate: "2024-02-15",
        prank: 78
    },
    {
        pimg_file_name: "lip/lip_product (2).jpg",
        pid: 1,
        pname: "버츠비 틴티드 립밤 4.25g",
        pname_e: "Burt's Bees Tinted LIPBALM 4.25g",
        pdesc: "자연스러운 컬러와 보습을 동시에 주는 틴티드 립밤",
        pcategory: "LIPBALM",
        ptags: ["틴티드립밤","립밤", "보습", "천연성분","전체"],
        pstock: true,
        pdetails: "천연 색소와 보습 성분이 입술에 자연스러운 색과 촉촉함을 부여합니다. 하루 종일 입술을 편안하게 유지하며 필요할 때마다 사용하세요.",
        pdate: "2024-03-10", prank: 95
    },
    {
        pimg_file_name: "lip/lip_product (3).jpg",
        pid: 2,
        pname: "버츠비 핑크 그레이프 립밤 4.25g",
        pname_e: "Burt's Bees Pink Grapefruit LIPBALM 4.25g",
        pdesc: "핑크 그레이프 과즙이 가득한 상쾌한 립밤",
        pcategory: "LIPBALM",
        ptags: ["립밤", "자몽", "상큼한", "천연성분","전체"],
        pstock: true,
        pdetails: "핑크 그레이프 성분이 입술을 촉촉하게 가꾸어줍니다. 가볍고 부드러운 텍스처로 매일 사용할 수 있습니다.",
        pdate: "2023-12-01", prank: 63
    },
    {
        pimg_file_name: "lip/lip_product (4).jpg",
        pid: 3,
        pname: "버츠비 비즈왁스 립밤 위드 비타민 E n 페퍼민트",
        pname_e: "Burt's Bees Beeswax LIPBALM with Vitamin E n Peppermint",
        pdesc: "비즈왁스와 페퍼민트로 입술을 건강하고 상쾌하게",
        pcategory: "LIPBALM",
        ptags: ["립밤", "보습","비즈왁스", "천연성분","전체"],
        pstock: true,
        pdetails: "비즈왁스와 비타민 E가 입술을 촉촉하게 가꾸고, 페퍼민트가 상쾌함을 더합니다. 외출 전이나 건조할 때 수시로 사용하세요.",
        pdate: "2023-11-20", prank: 55
    },
    {
        pimg_file_name: "lip/lip_product (5).jpg",
        pid: 4,
        pname: "버츠비 허니 립밤 4.25g",
        pname_e: "Burt's Bees Honey LIPBALM 4.25g",
        pdesc: "꿀 성분으로 입술에 부드러운 보습을 더하는 립밤",
        pcategory: "LIPBALM",
        ptags: ["립밤", "보습", "허니", "천연성분","전체"],
        pstock: true,
        pdetails: "꿀 추출물이 입술에 영양을 공급하고 부드럽게 가꿔줍니다. 건조함을 느낄 때마다 사용하면 효과적입니다.",
        pdate: "2024-01-05", prank: 70
    },
    {
        pimg_file_name: "lip/lip_product (6).jpg",
        pid: 5,
        pname: "버츠비 컨디셔닝 립 스크럽 7.08g",
        pname_e: "Burt's Bees Conditioning Lip Scrub 7.08g",
        pdesc: "입술 각질을 부드럽게 제거하며 보습을 제공하는 립 스크럽",
        pcategory: "LIPBALM",
        ptags: ["립케어", "각질제거","허니", "천연성분","전체"],
        pstock: true,
        pdetails: "설탕 크리스탈과 보습 오일이 입술 각질을 부드럽게 제거하고 촉촉함을 남깁니다. 주 1-2회 사용하여 입술을 관리하세요.",
        pdate: "2024-02-25", prank: 68
    },
    {
        pimg_file_name: "lip/lip_product (7).jpg",
        pid: 6,
        pname: "버츠비 울트라컨디셔닝 립밤 4.25g",
        pname_e: "Burt's Bees Ultra Conditioning LIPBALM 4.25g",
        pdesc: "강력한 보습으로 건조한 입술을 즉각 케어하는 립밤",
        pcategory: "LIPBALM",
        ptags: ["립밤", "스페셜케어", "보습","천연성분","전체"],
        pstock: true,
        pdetails: "강력한 보습 성분이 입술을 하루 종일 촉촉하게 유지합니다. 건조함이 심한 계절이나 환경에서 사용하기 좋습니다.",
        pdate: "2023-10-15", prank: 50
    },
    {
        pimg_file_name: "lip/lip_product (8).jpg",
        pid: 7,
        pname: "버츠비 스위트만다린 모이스춰라이징 립밤 4.25g",
        pname_e: "Burt's Bees Sweet Mandarin Moisturizing LIPBALM 4.25g",
        pdesc: "상큼한 만다린 향이 입술에 촉촉함을 더하는 립밤",
        pcategory: "LIPBALM",
        ptags: ["립밤","만다린", "상큼한", "천연성분","전체"],
        pstock: true,
        pdetails: "만다린 오일과 천연 보습 성분이 입술에 풍부한 영양을 제공합니다. 외출 전 또는 필요할 때 사용하세요.",
        pdate: "2024-01-30", prank: 72
    },
    {
        pimg_file_name: "lip/lip_product (9).jpg",
        pid: 8,
        pname: "버츠비 어드밴스드 릴리프 립밤 언센티드 4.25g",
        pname_e: "Burt's Bees Advanced Relief LIPBALM Unscented 4.25g",
        pdesc: "무향 포뮬러로 입술을 진정시키고 보습하는 립밤",
        pcategory: "LIPBALM",
        ptags: ["립밤","피부장벽강화", "보습", "천연성분","전체"],
        pstock: true,
        pdetails: "민감한 입술을 위한 무향 포뮬러로 피부 자극 없이 편안한 사용감을 제공합니다. 하루 종일 사용 가능합니다.",
        pdate: "2023-09-18", prank: 47
    },
    {
        pimg_file_name: "lip/lip_product (10).jpg",
        pid: 9,
        pname: "버츠비 헴프 립밤 4.25g",
        pname_e: "Burt's Bees Hemp LIPBALM 4.25g",
        pdesc: "헴프 씨드 오일로 입술에 깊은 보습을 주는 립밤",
        pcategory: "LIPBALM",
        ptags: ["립밤", "스페셜케어","헴프씨드", "천연성분","전체"],
        pstock: true,
        pdetails: "헴프 씨드 오일이 입술에 깊은 보습을 제공하며, 건조함을 예방합니다. 필요할 때마다 사용하세요.",
        pdate: "2023-11-10", prank: 61
    },

    // BODY
    {
        pimg_file_name: "body/body_product (1).jpg",
        pid: 10,
        pname: "버츠비 헴프 핸드크림 70g",
        pname_e: "Burt's Bees Hemp Hand Cream 70g",
        pdesc: "헴프 씨드 오일로 손에 깊은 보습을 주는 핸드크림",
        pcategory: "BODY",
        ptags: ["핸드케어", "헴프씨드", "보습","천연성분","전체"],
        pstock: true,
        pdetails: "헴프 씨드 오일이 손에 깊은 보습을 제공하며, 건조함을 예방합니다. 외출 전이나 수분이 필요한 순간마다 사용하세요.",
        pdate: "2024-03-01", prank: 65
    },
    {
        pimg_file_name: "body/body_product (2).jpg",
        pid: 11,
        pname: "버츠비 힐링 핸드 앤 바디 로션 시어",
        pname_e: "Burt's Bees Healing Hand n Body Lotion Sheer",
        pdesc: "시어버터로 손과 몸에 깊은 보습을 제공하는 로션",
        pcategory: "BODY",
        ptags: ["바디케어","핸드케어", "시어버터", "천연성분","전체"],
        pstock: true,
        pdetails: "시어버터와 천연 성분이 피부를 진정시키고 보습을 제공합니다. 샤워 후 또는 건조할 때 사용하세요.",
        pdate: "2023-08-25", prank: 59
    },
    {
        pimg_file_name: "body/body_product (3).jpg",
        pid: 12,
        pname: "버츠비 레스큐 오인트먼트 15g",
        pname_e: "Burt's Bees Rescue Ointment 15g",
        pdesc: "자극받은 피부를 진정시키고 보호하는 연고",
        pcategory: "BODY",
        ptags: ["레스큐","멀티밤", "피부진정", "천연성분","전체"],
        pstock: true,
        pdetails: "상처나 건조한 부위에 발라 피부를 보호하고 진정시킵니다. 필요에 따라 소량씩 사용하세요.",
        pdate: "2023-12-10", prank: 80
    },
    {
        pimg_file_name: "body/body_product (4).jpg",
        pid: 13,
        pname: "버츠비 라벤더 앤 허니 핸드 크림 28.3g",
        pname_e: "Burt's Bees Lavender n Honey Hand Cream 28.3g",
        pdesc: "라벤더와 꿀 성분으로 손을 부드럽게 가꾸는 핸드크림",
        pcategory: "BODY",
        ptags: ["핸드케어", "라벤더", "허니", "천연성분","전체"],
        pstock: true,
        pdetails: "라벤더와 꿀 성분이 손을 촉촉하고 부드럽게 가꿔줍니다. 하루 중 필요할 때마다 사용하세요.",
        pdate: "2024-01-20", prank: 90
    },
    {
        pimg_file_name: "body/body_product (5).jpg",
        pid: 14,
        pname: "버츠비 밀크 n 허니 바디 로션",
        pname_e: "Burt's Bees Milk n Honey Body Lotion",
        pdesc: "우유와 꿀 성분이 피부를 부드럽고 촉촉하게 가꾸는 바디 로션",
        pcategory: "BODY",
        ptags: ["바디케어", "허니", "밀크", "천연성분","전체"],
        pstock: true,
        pdetails: "우유와 꿀 추출물이 피부에 깊은 영양을 제공합니다. 샤워 후나 건조할 때 사용하세요.",
        pdate: "2023-07-15", prank: 85
    },
    {
        pimg_file_name: "body/body_product (6).jpg",
        pid: 15,
        pname: "버츠비 레몬 버터 큐티클 크림 17g",
        pname_e: "Burt's Bees Lemon Butter Cuticle Cream 17g",
        pdesc: "레몬 버터로 손톱 주변을 부드럽게 케어하는 큐티클 크림",
        pcategory: "BODY",
        ptags: ["핸드케어", "상큼한","레몬", "천연성분","전체"],
        pstock: true,
        pdetails: "레몬 오일과 보습 성분이 손톱 주변을 부드럽게 관리합니다. 손톱 주변에 소량을 발라 마사지하세요.",
        pdate: "2023-09-05", prank: 60
    },
    {
        pimg_file_name: "body/body_product (7).jpg",
        pid: 16,
        pname: "버츠비 레스큐 오인트먼트 시카 17g",
        pname_e: "Burt's Bees Rescue Ointment Cica 17g",
        pdesc: "CICA 성분으로 피부를 진정시키고 보호하는 연고",
        pcategory: "BODY",
        ptags: ["레스큐","피부진정","시카","천연성분","전체"],
        pstock: true,
        pdetails: "CICA와 천연 성분이 자극받은 피부를 진정시키고 보호합니다. 소량을 자극 부위에 발라주세요.",
        pdate: "2024-02-10", prank: 75
    },
    {
        pimg_file_name: "body/body_product (8).jpg",
        pid: 17,
        pname: "버츠비 레스큐 오인트먼트 시카 스틱",
        pname_e: "Burt's Bees Rescue Ointment Cica Stick",
        pdesc: "스틱 타입으로 간편하게 사용할 수 있는 시카 연고",
        pcategory: "BODY",
        ptags: ["레스큐","피부진정","시카","천연성분","전체"],
        pstock: true,
        pdetails: "스틱 형태로 휴대가 간편하며, 자극받은 부위에 바로 바를 수 있습니다. 필요에 따라 사용하세요.",
        pdate: "2023-10-22", prank: 52
    },

    // MAMAnBABY
    {
        pimg_file_name: "mamanbaby/mama_product (1).jpg",
        pid: 18,
        pname: "버츠비 베이비 카밍 너리싱 로션 170g",
        pname_e: "Burt's Bees Baby Calming Nourishing Lotion 170g",
        pdesc: "베이비 스킨을 부드럽게 케어하는 너리싱 로션",
        pcategory: "MAMAnBABY",
        ptags: ["베이비", "보습", "카밍", "천연성분","전체"],
        pstock: true,
        pdetails: "라벤더 오일과 천연 보습 성분이 아기 피부를 부드럽게 가꿔줍니다. 목욕 후나 건조할 때 사용하세요.",
        pdate: "2023-10-08", prank: 66
    },
    {
        pimg_file_name: "mamanbaby/mama_product (2).jpg",
        pid: 19,
        pname: "버츠비 마마비 스페셜세트",
        pname_e: "Burt's Bees Mama Bee Special Set",
        pdesc: "임산부와 엄마를 위한 특별한 스페셜 세트",
        pcategory: "MAMAnBABY",
        ptags: ["마마","임산부", "세트", "천연성분","전체"],
        pstock: true,
        pdetails: "임산부와 엄마를 위해 설계된 스페셜 세트로 피부를 건강하고 촉촉하게 유지시킵니다. 필요할 때마다 사용하세요.",
        pdate: "2024-01-25", prank: 67
    },
    {
        pimg_file_name: "mamanbaby/mama_product (3).jpg",
        pid: 20,
        pname: "버츠비 마마비 벨리 버터 185g",
        pname_e: "Burt's Bees Mama Bee Belly Butter 185g",
        pdesc: "임산부의 피부를 부드럽고 건강하게 가꾸는 벨리 버터",
        pcategory: "MAMAnBABY",
        ptags: ["마마", "임산부", "보습", "천연성분","전체"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요.",
        pdate: "2024-02-18", prank: 58
    },
    {
        pimg_file_name: "mamanbaby/mama_product (4).jpg",
        pid: 21,
        pname: "버츠비 베이비 너리싱 로션 오리지널 170g",
        pname_e: "Burt's Bees Baby Nourishing Lotion Original 170g",
        pdesc: "부드럽고 순한 포뮬러로 아기 피부에 영양을 주는 로션",
        pcategory: "MAMAnBABY",
        ptags: ["베이비", "보습","시어버터", "천연성분","전체"],
        pstock: true,
        pdetails: "해바라기씨 오일과 시어버터가 아기 피부를 부드럽고 촉촉하게 유지합니다. 목욕 후 또는 건조할 때마다 사용하세요.",
        pdate: "2024-03-05", prank: 62
    },
    {
        pimg_file_name: "mamanbaby/mama_product (5).jpg",
        pid: 22,
        pname: "버츠비 베이비 카밍 너리싱 로션 340g",
        pname_e: "Burt's Bees Baby Calming Nourishing Lotion 340g",
        pdesc: "진정 효과와 보습을 동시에 제공하는 아기용 로션",
        pcategory: "MAMAnBABY",
        ptags: ["베이비", "보습", "진정", "천연성분","전체"],
        pstock: true,
        pdetails: "라벤더와 카모마일 성분이 아기의 피부를 진정시키고 보습을 제공합니다. 밤에 사용하면 더욱 좋습니다.",
        pdate: "2024-01-15", prank: 54
    },
    {
        pimg_file_name: "mamanbaby/mama_product (6).jpg",
        pid: 23,
        pname: "버츠비 베이비 샴푸 앤 워시 350ml",
        pname_e: "Burt's Bees Baby Shampoo n Wash 350ml",
        pdesc: "아기의 연약한 피부와 머리를 위한 순한 샴푸 겸 바디워시",
        pcategory: "MAMAnBABY",
        ptags: ["베이비", "샴푸", "워시", "천연성분","전체"],
        pstock: true,
        pdetails: "식물 유래 성분으로 만들어져 아기의 피부와 눈에 자극이 없습니다. 목욕 시간에 사용하여 피부를 깨끗하고 부드럽게 유지하세요.",
        pdate: "2023-11-01", prank: 69
    },
    {
        pimg_file_name: "mamanbaby/mama_product (7).jpg",
        pid: 24,
        pname: "버츠비 베이비 너리싱 오일 147ml",
        pname_e: "Burt's Bees Baby Nourishing Oil 147ml",
        pdesc: "아기의 피부를 촉촉하게 가꿔주는 다목적 너리싱 오일",
        pcategory: "MAMAnBABY",
        ptags: ["베이비", "보습", "오일", "천연성분","전체"],
        pstock: true,
        pdetails: "포도씨 오일과 호호바 오일이 아기의 피부를 촉촉하게 유지합니다. 목욕 후나 건조할 때 피부에 부드럽게 마사지하세요.",
        pdate: "2023-08-30", prank: 60
    },
    {
        pimg_file_name: "mamanbaby/mama_product (8).jpg",
        pid: 25,
        pname: "버츠비 베이비 모이스쳐라이징 언센티드 립밤 4.25g",
        pname_e: "Burt's Bees Baby Moisturizing Unscented LIPBALM 4.25g",
        pdesc: "아기의 입술을 위한 순하고 촉촉한 무향 립밤",
        pcategory: "MAMAnBABY",
        ptags: ["베이비", "립밤", "보습", "천연성분","전체"],
        pstock: true,
        pdetails: "천연 성분으로 만들어져 아기의 입술을 부드럽게 보호합니다. 외출 시 간편하게 사용할 수 있습니다.",
        pdate: "2023-09-12", prank: 64
    }
];