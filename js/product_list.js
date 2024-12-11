let product_array = [
    // LIP BALM
    {
        pimg_file_name: "lip_product (1).jpg",
        pid: 0,
        pname: "버츠비 립 트리트먼트 7g",
        pname_e: "Burt's Bees Lip Treatment 7g",
        pdesc: "천연 성분으로 입술에 깊은 보습을 주는 립 트리트먼트",
        pcategory: "LIP BALM",
        ptags: ["립트리트먼트", "보습", "천연성분"],
        pstock: true,
        pdetails: "비즈왁스와 시어버터가 입술에 깊은 보습을 제공합니다. 자극 없이 안전하게 사용할 수 있으며, 하루 중 필요할 때마다 사용하세요."
    },
    {
        pimg_file_name: "lip_product (2).jpg",
        pid: 1,
        pname: "버츠비 틴티드 립밤 4.25g",
        pname_e: "Burt's Bees Tinted Lip Balm 4.25g",
        pdesc: "자연스러운 컬러와 보습을 동시에 주는 틴티드 립밤",
        pcategory: "LIP BALM",
        ptags: ["틴티드립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "천연 색소와 보습 성분이 입술에 자연스러운 색과 촉촉함을 부여합니다. 하루 종일 입술을 편안하게 유지하며 필요할 때마다 사용하세요."
    },
    {
        pimg_file_name: "lip_product (3).jpg",
        pid: 2,
        pname: "버츠비 핑크 그레이프 립밤 4.25g",
        pname_e: "Burt's Bees Pink Grapefruit Lip Balm 4.25g",
        pdesc: "핑크 그레이프 과즙이 가득한 상쾌한 립밤",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "핑크 그레이프 성분이 입술을 촉촉하게 가꾸어줍니다. 가볍고 부드러운 텍스처로 매일 사용할 수 있습니다."
    },
    {
        pimg_file_name: "lip_product (4).jpg",
        pid: 3,
        pname: "버츠비 비즈왁스 립밤 위드 비타민 E & 페퍼민트",
        pname_e: "Burt's Bees Beeswax Lip Balm with Vitamin E & Peppermint",
        pdesc: "비즈왁스와 페퍼민트로 입술을 건강하고 상쾌하게",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "비즈왁스와 비타민 E가 입술을 촉촉하게 가꾸고, 페퍼민트가 상쾌함을 더합니다. 외출 전이나 건조할 때 수시로 사용하세요."
    },
    {
        pimg_file_name: "lip_product (5).jpg",
        pid: 4,
        pname: "버츠비 허니 립밤 4.25g",
        pname_e: "Burt's Bees Honey Lip Balm 4.25g",
        pdesc: "꿀 성분으로 입술에 부드러운 보습을 더하는 립밤",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "꿀 추출물이 입술에 영양을 공급하고 부드럽게 가꿔줍니다. 건조함을 느낄 때마다 사용하면 효과적입니다."
    },
    {
        pimg_file_name: "lip_product (6).jpg",
        pid: 5,
        pname: "버츠비 컨디셔닝 립 스크럽 7.08g",
        pname_e: "Burt's Bees Conditioning Lip Scrub 7.08g",
        pdesc: "입술 각질을 부드럽게 제거하며 보습을 제공하는 립 스크럽",
        pcategory: "LIP BALM",
        ptags: ["립트리트먼트", "보습", "천연성분"],
        pstock: true,
        pdetails: "설탕 크리스탈과 보습 오일이 입술 각질을 부드럽게 제거하고 촉촉함을 남깁니다. 주 1-2회 사용하여 입술을 관리하세요."
    },
    {
        pimg_file_name: "lip_product (7).jpg",
        pid: 6,
        pname: "버츠비 울트라컨디셔닝 립밤 4.25g",
        pname_e: "Burt's Bees Ultra Conditioning Lip Balm 4.25g",
        pdesc: "강력한 보습으로 건조한 입술을 즉각 케어하는 립밤",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "강력한 보습 성분이 입술을 하루 종일 촉촉하게 유지합니다. 건조함이 심한 계절이나 환경에서 사용하기 좋습니다."
    },
    {
        pimg_file_name: "lip_product (8).jpg",
        pid: 7,
        pname: "버츠비 스위트만다린 모이스춰라이징 립밤 4.25g",
        pname_e: "Burt's Bees Sweet Mandarin Moisturizing Lip Balm 4.25g",
        pdesc: "상큼한 만다린 향이 입술에 촉촉함을 더하는 립밤",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "만다린 오일과 천연 보습 성분이 입술에 풍부한 영양을 제공합니다. 외출 전 또는 필요할 때 사용하세요."
    },
    {
        pimg_file_name: "lip_product (9).jpg",
        pid: 8,
        pname: "버츠비 어드밴스드 릴리프 립밤 언센티드 4.25g",
        pname_e: "Burt's Bees Advanced Relief Lip Balm Unscented 4.25g",
        pdesc: "무향 포뮬러로 입술을 진정시키고 보습하는 립밤",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "민감한 입술을 위한 무향 포뮬러로 피부 자극 없이 편안한 사용감을 제공합니다. 하루 종일 사용 가능합니다."
    },
    {
        pimg_file_name: "lip_product (10).jpg",
        pid: 9,
        pname: "버츠비 헴프 립밤 4.25g",
        pname_e: "Burt's Bees Hemp Lip Balm 4.25g",
        pdesc: "헴프 씨드 오일로 입술에 깊은 보습을 주는 립밤",
        pcategory: "LIP BALM",
        ptags: ["립밤", "보습", "천연성분"],
        pstock: true,
        pdetails: "헴프 씨드 오일이 입술에 깊은 보습을 제공하며, 건조함을 예방합니다. 필요할 때마다 사용하세요."
    },
       
    // BODY CARE
    {
        pimg_file_name: "body_product (1).jpg",
        pid: 10,
        pname: "버츠비 헴프 핸드크림 70g",
        pname_e: "Burt's Bees Hemp Hand Cream 70g",
        pdesc: "헴프 씨드 오일로 손에 깊은 보습을 주는 핸드크림",
        pcategory: "BODY CARE",
        ptags: ["핸드케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "헴프 씨드 오일이 손에 깊은 보습을 제공하며, 건조함을 예방합니다. 외출 전이나 수분이 필요한 순간마다 사용하세요."
    },
    {
        pimg_file_name: "body_product (2).jpg",
        pid: 11,
        pname: "버츠비 힐링 핸드 앤 바디 로션 시어",
        pname_e: "Burt's Bees Healing Hand & Body Lotion Sheer",
        pdesc: "시어버터로 손과 몸에 깊은 보습을 제공하는 로션",
        pcategory: "BODY CARE",
        ptags: ["바디케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "시어버터와 천연 성분이 피부를 진정시키고 보습을 제공합니다. 샤워 후 또는 건조할 때 사용하세요."
    },
    {
        pimg_file_name: "body_product (3).jpg",
        pid: 12,
        pname: "버츠비 레스큐 오인트먼트 15g",
        pname_e: "Burt's Bees Rescue Ointment 15g",
        pdesc: "자극받은 피부를 진정시키고 보호하는 연고",
        pcategory: "BODY CARE",
        ptags: ["피부진정", "보호", "천연성분"],
        pstock: true,
        pdetails: "상처나 건조한 부위에 발라 피부를 보호하고 진정시킵니다. 필요에 따라 소량씩 사용하세요."
    },
    {
        pimg_file_name: "body_product (4).jpg",
        pid: 13,
        pname: "버츠비 라벤더 앤 허니 핸드 크림 28.3g",
        pname_e: "Burt's Bees Lavender & Honey Hand Cream 28.3g",
        pdesc: "라벤더와 꿀 성분으로 손을 부드럽게 가꾸는 핸드크림",
        pcategory: "BODY CARE",
        ptags: ["핸드케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "라벤더와 꿀 성분이 손을 촉촉하고 부드럽게 가꿔줍니다. 하루 중 필요할 때마다 사용하세요."
    },
    {
        pimg_file_name: "body_product (5).jpg",
        pid: 14,
        pname: "버츠비 밀크 & 허니 바디 로션",
        pname_e: "Burt's Bees Milk & Honey Body Lotion",
        pdesc: "우유와 꿀 성분이 피부를 부드럽고 촉촉하게 가꾸는 바디 로션",
        pcategory: "BODY CARE",
        ptags: ["바디케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "우유와 꿀 추출물이 피부에 깊은 영양을 제공합니다. 샤워 후나 건조할 때 사용하세요."
    },
    {
        pimg_file_name: "body_product (6).jpg",
        pid: 15,
        pname: "버츠비 레몬 버터 큐티클 크림 17g",
        pname_e: "Burt's Bees Lemon Butter Cuticle Cream 17g",
        pdesc: "레몬 버터로 손톱 주변을 부드럽게 케어하는 큐티클 크림",
        pcategory: "BODY CARE",
        ptags: ["큐티클케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "레몬 오일과 보습 성분이 손톱 주변을 부드럽게 관리합니다. 손톱 주변에 소량을 발라 마사지하세요."
    },
    {
        pimg_file_name: "body_product (7).jpg",
        pid: 16,
        pname: "버츠비 레스큐 오인트먼트 시카 17g",
        pname_e: "Burt's Bees Rescue Ointment Cica 17g",
        pdesc: "CICA 성분으로 피부를 진정시키고 보호하는 연고",
        pcategory: "BODY CARE",
        ptags: ["피부진정", "보호", "천연성분"],
        pstock: true,
        pdetails: "CICA와 천연 성분이 자극받은 피부를 진정시키고 보호합니다. 소량을 자극 부위에 발라주세요."
    },
    {
        pimg_file_name: "body_product (8).jpg",
        pid: 17,
        pname: "버츠비 레스큐 오인트먼트 시카 스틱",
        pname_e: "Burt's Bees Rescue Ointment Cica Stick",
        pdesc: "스틱 타입으로 간편하게 사용할 수 있는 시카 연고",
        pcategory: "BODY CARE",
        ptags: ["피부진정", "보호", "천연성분"],
        pstock: true,
        pdetails: "스틱 형태로 휴대가 간편하며, 자극받은 부위에 바로 바를 수 있습니다. 필요에 따라 사용하세요."
    },

    // MAMA & BABY
    {
        pimg_file_name: "mama_product (1).jpg",
        pid: 18,
        pname: "버츠비 베이비 카밍 너리싱 로션 170g",
        pname_e: "Burt's Bees Baby Calming Nourishing Lotion 170g",
        pdesc: "베이비 스킨을 부드럽게 케어하는 너리싱 로션",
        pcategory: "MAMA & BABY",
        ptags: ["베이비케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "라벤더 오일과 천연 보습 성분이 아기 피부를 부드럽게 가꿔줍니다. 목욕 후나 건조할 때 사용하세요."
    },
    {
        pimg_file_name: "mama_product (2).jpg",
        pid: 19,
        pname: "버츠비 마마비 스페셜세트",
        pname_e: "Burt's Bees Mama Bee Special Set",
        pdesc: "임산부와 엄마를 위한 특별한 스페셜 세트",
        pcategory: "MAMA & BABY",
        ptags: ["마마케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "임산부와 엄마를 위해 설계된 스페셜 세트로 피부를 건강하고 촉촉하게 유지시킵니다. 필요할 때마다 사용하세요."
    },
    {
        pimg_file_name: "mama_product (3).jpg",
        pid: 20,
        pname: "버츠비 마마비 벨리 버터 185g",
        pname_e: "Burt's Bees Mama Bee Belly Butter 185g",
        pdesc: "임산부의 피부를 부드럽고 건강하게 가꾸는 벨리 버터",
        pcategory: "MAMA & BABY",
        ptags: ["마마케어", "보습", "천연성분"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요."
    },
    {
        pimg_file_name: "mama_product (4).jpg",
        pid: 21,
        pname: "버츠비 베이비 너리싱 로션 오리지널 170g",
        pname_e: "Burt's Bees Baby Nourishing Lotion Original 170g",
        pdesc: "아기의 피부를 부드럽게 가꾸는 원래의 베이비 너리싱 로션",
        pcategory: "마마앤베이비",
        ptags: ["로션", "아기", "보습", "원래제품"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요."
    },
    {
        pimg_file_name: "mama_product (5).jpg",
        pid: 22,
        pname: "버츠비 베이비 베이비 오일 170g",
        pname_e: "Burt's Bees Baby Oil 170g",
        pdesc: "아기 피부를 부드럽게 마사지하는 베이비 오일",
        pcategory: "마마앤베이비",
        ptags: ["오일", "아기", "보습", "마사지"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요."
    },
    {
        pimg_file_name: "mama_product (6).jpg",
        pid: 23,
        pname: "버츠비 마마비 로션 170g",
        pname_e: "Burt's Bees Mama Bee Lotion 170g",
        pdesc: "엄마를 위한 보습 로션",
        pcategory: "마마앤베이비",
        ptags: ["로션", "엄마", "보습"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요."
    },
    {
        pimg_file_name: "mama_product (7).jpg",
        pid: 24,
        pname: "버츠비 마마비 오일 170g",
        pname_e: "Burt's Bees Mama Bee Oil 170g",
        pdesc: "임산부를 위한 오일로, 피부를 부드럽게 케어",
        pcategory: "마마앤베이비",
        ptags: ["오일", "임산부", "보습"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요."
    },
    {
        pimg_file_name: "mama_product (8).jpg",
        pid: 25,
        pname: "버츠비 마마비 클렌징 오일 170g",
        pname_e: "Burt's Bees Mama Bee Cleansing Oil 170g",
        pdesc: "부드럽게 피부를 클렌징하는 임산부용 오일",
        pcategory: "마마앤베이비",
        ptags: ["클렌징", "오일", "임산부", "피부케어"],
        pstock: true,
        pdetails: "코코아 버터와 시어버터가 피부를 부드럽게 관리하며, 임신 중 건조함을 예방합니다. 배와 몸에 부드럽게 발라주세요."
    }
];