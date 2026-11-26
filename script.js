/* ==========================================================================
   Click Design — Bilingual (EN / සිංහල) & Interactive Order Script
   Update STUDIO_CONFIG below with your real WhatsApp number, email, & links!
   ========================================================================== */

const STUDIO_CONFIG = {
  brandName: "Click Design",
  whatsappNumber: "94704870348",
  phoneDisplay: "070 487 0348 (+94 70 487 0348)",
  email: "sankalpaisiwara@gmail.com",
  locationEn: "Panadura — Islandwide Online Service & Print Delivery",
  locationSi: "පානදුර — දිවයින පුරා Online සේවා සහ Print බෙදාහැරීම්"
};

const TRANSLATIONS = {
  en: {
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_reels: "AI Reels",
    nav_showcase: "Studio",
    nav_process: "How It Works",
    nav_faq: "FAQ",
    nav_cta: "Book Now",
    hero_badge: "All-in-One Creative, Video & Print Studio",
    hero_title_1: "Bold Designs, Pro Video & ",
    hero_title_grad: "Vibrant Storytelling.",
    hero_subtitle:
      "From eye-catching graphic design & high-quality printing to tuition class video editing with direct YouTube / cloud uploads, viral TikTok & FB Reels, and pro photography — everything under one colorful roof.",
    pill_design: "Graphic Design",
    pill_print: "Quality Printing",
    pill_tuition: "Tuition Video & Cloud Upload",
    pill_reels: "TikTok & FB Reels",
    pill_photo: "Photography",
    hero_btn_order: "Start Your Project",
    hero_btn_services: "Explore Services",
    stat_1_val: "Fast 24h",
    stat_1_lbl: "Quick Turnaround",
    stat_2_val: "100% Cloud",
    stat_2_lbl: "YouTube, Drive & Any Cloud",
    stat_3_val: "Print Ready",
    stat_3_lbl: "Design + Print Delivery",
    float_1_title: "Tuition Video Ready",
    float_1_sub: "Rendered & Uploaded to Cloud",
    float_2_title: "CMYK + Digital Pro",
    float_2_sub: "Design, Print, Reels & Photo",

    services_eyebrow: "What We Do",
    services_title: "Everything You Need to Stand Out & Grow",
    services_desc:
      "Tailored creative solutions for Tuition Sirs, brands, businesses, and content creators across Sri Lanka.",

    svc_tuition_tag: "Tuition Sirs' Special",
    svc_tuition_title: "Tuition Class Video Editing & Cloud Upload",
    svc_tuition_desc:
      "Send us your raw class recordings and focus on teaching! We cleanly edit, enhance voice clarity, add branded intros/slides, render in crisp HD/4K, and upload directly to YouTube or any cloud storage you prefer.",
    svc_tuition_l1: "Clean cuts, noise-free audio & whiteboard/slide overlays",
    svc_tuition_l2: "Fast Full HD / 4K rendering optimized for student viewing",
    svc_tuition_l3: "Direct upload to YouTube (Unlisted/Private), Google Drive, OneDrive, or Mega",
    svc_tuition_l4: "Custom class thumbnails & ready-to-share student links",
    svc_cta_select: "Select This Service →",

    svc_design_tag: "Design + Print",
    svc_design_title: "Graphic Design & Printing",
    svc_design_desc:
      "Vibrant, scroll-stopping designs crafted to match your brand — plus full printing support so you receive finished physical prints without any hassle.",
    svc_design_l1: "Tuition posters, tute covers, banners, flyers & social media posts",
    svc_design_l2: "Logos, brand identity, business cards, brochures & stickers",
    svc_design_l3: "High-resolution CMYK printing (gloss/matte, flex banners, cards)",

    svc_reels_tag: "Short-Form Viral",
    svc_reels_title: "TikTok & Facebook Reels Editing",
    svc_reels_desc:
      "Turn ideas, classes, or products into energetic vertical videos built to grab attention in the first 2 seconds.",
    svc_reels_l1: "Dynamic captions, Sinhala/English subtitles & kinetic typography",
    svc_reels_l2: "Trending transitions, beat-synced cuts & sound effects",
    svc_reels_l3: "Color grading optimized for mobile feeds (9:16 vertical)",

    svc_photo_tag: "Visual Stories",
    svc_photo_title: "Photography & Retouching",
    svc_photo_desc:
      "Sharp, vibrant photography that captures real energy — from tuition seminars and events to portraits and commercial product shoots.",
    svc_photo_l1: "Tuition seminars, prize givings & special events coverage",
    svc_photo_l2: "Studio/outdoor portraits & brand product photography",
    svc_photo_l3: "Pro color grading & high-res digital gallery delivery",

    svc_print_tag: "CMYK Press",
    svc_print_title: "Quality Printing & Delivery",
    svc_print_desc:
      "Need your designs physically printed? We handle vibrant, color-accurate printing and get finished materials ready for you.",
    svc_print_l1: "Glossy & Matte Flyers, Class Handouts & Booklets",
    svc_print_l2: "Weatherproof Flex Banners, X-Stands & Stickers",
    svc_print_l3: "Custom T-Shirt / Polo Printing, Hang Tags, Business Cards & Certificates",

    port_eyebrow: "Recent Works",
    port_title: "Real Design & Print Samples",
    port_desc:
      "A curated gallery of tuition posters, tute covers, social media flyers, flex/X-banners, and custom apparel printing. Click any sample to preview full size.",
    flt_all: "All Works (9)",
    flt_flyers: "Social Flyers",
    flt_covers: "Tute Covers",
    flt_banners: "Banners & X-Stands",
    flt_printing: "Printing Works",
    cat_cover: "Tute Cover",
    cat_flyer: "Social Flyer",
    cat_banner: "Banner & X-Stand",
    cat_print: "Printing Work",
    p1_title: "2028 Business Studies — Illustrated Cover",
    p2_title: "2029 Biology — Flex Banner (Sakya)",
    p3_title: "2028 Business Studies — Module Cover",
    p4_title: "2028 Business Studies — Unit Launch",
    p5_title: "Tamil Language Classes — Grade 1–9 Flyer",
    p6_title: "2028 Business Studies — Class Promo Post",
    p7_title: "2029 Accounting — X-Stand Banner",
    pr1_title: "Black Buck — Custom Polo T-Shirt Print",
    pr2_title: "Black Buck — Custom Apparel Hang Tag Print",

    reels_eyebrow: "AI & Viral Video",
    reels_title: "TikTok & AI Reels Samples",
    reels_desc:
      "Next-level AI-assisted & custom-edited 9:16 vertical Reels for tuition teachers, brands, and creators — built to stop the scroll and boost admissions or sales.",
    reel_1_title: "2027 Class Promo — Outdoor AI Commercial",
    reel_1_desc: "Natural Sri Lankan outdoor storytelling with crisp Sinhala voiceover, AI visuals & 9:16 pacing.",
    reel_2_title: "2028 A/L Combined Maths — Classroom AI Reel",
    reel_2_desc: "Dynamic classroom scenes, emotional hook, clean Sinhala narration & branded outro card.",

    showcase_eyebrow: "Creative Spectrum",
    showcase_title: "Crafted With Color, Precision & Speed",
    showcase_desc: "A glimpse into our multi-disciplinary creative studio workflow.",
    sh_1_pill: "Full Studio",
    sh_1_title: "Design, Video & Camera Synergy",
    sh_1_desc: "One cohesive creative team handling your visuals from concept to final upload or print.",
    sh_2_pill: "Tuition & Cloud",
    sh_2_title: "Render & Upload Pipeline",
    sh_2_desc: "Recorded classes transformed into crisp, organized YouTube & Cloud lessons on time.",
    sh_3_pill: "Print & Photo",
    sh_3_title: "Vibrant CMYK Prints & Photography",
    sh_3_desc: "Color-accurate printing paired with sharp studio photography & Reels production.",

    proc_eyebrow: "Simple Process",
    proc_title: "How We Work Together",
    proc_desc: "Zero stress. Send your idea or footage, and we handle the rest.",
    st_1_t: "Send Brief or Footage",
    st_1_d: "Share your design idea, class video via Drive/Telegram, or event date on WhatsApp.",
    st_2_t: "Design, Edit & Craft",
    st_2_d: "We bring your project to life with vibrant colors, crisp audio, and modern pacing.",
    st_3_t: "Review & Refine",
    st_3_d: "Preview drafts quickly and request any tweaks until everything looks spot-on.",
    st_4_t: "Print or Cloud Delivery",
    st_4_d: "Receive ready cloud/YouTube links, digital files, or neatly printed deliverables.",

    order_eyebrow: "Let's Create",
    order_title: "Ready to Launch Your Next Project?",
    order_desc:
      "Pick the services you need below and send your brief straight to WhatsApp — or copy your formatted order summary in one click.",
    select_lbl: "Select Services Needed:",
    opt_design: "Graphic Design",
    opt_print: "Design Printing",
    opt_tuition: "Tuition Video + Cloud Upload",
    opt_reels: "TikTok & FB Reels",
    opt_photo: "Photography",
    lbl_name: "Your Name / Institute / Brand",
    ph_name: "e.g. Kasun Sir / Nova Academy",
    lbl_contact: "Your Phone / WhatsApp",
    ph_contact: "e.g. 077 123 4567",
    lbl_cloud: "Preferred Cloud / Delivery (Optional)",
    ph_cloud: "e.g. YouTube Unlisted / Google Drive / Printed Copies",
    lbl_details: "Project Details",
    ph_details: "Tell us about your video length, poster size, event date, or Reels style...",
    btn_wa_send: "Send Order via WhatsApp",
    btn_copy: "Copy Order Brief",
    contact_wa_t: "WhatsApp / Call",
    contact_em_t: "Email Studio",
    contact_loc_t: "Service Coverage",

    faq_eyebrow: "Quick Answers",
    faq_title: "Frequently Asked Questions",
    faq_1_q: "How do Tuition Sirs send raw class videos to edit?",
    faq_1_a:
      "You can upload raw recordings to Google Drive, Telegram, OneDrive, or Mega and send us the link. Once edited and rendered, we upload directly to your YouTube channel (Public/Unlisted/Private) or preferred cloud storage!",
    faq_2_q: "Do you handle both designing and printing together?",
    faq_2_a:
      "Yes! We design posters, tute covers, flyers, business cards, banners, and stickers, and get them printed in vibrant high quality so you don't have to deal with multiple vendors.",
    faq_3_q: "Can you add Sinhala & English captions for TikTok and FB Reels?",
    faq_3_a:
      "Absolutely. We craft energetic 9:16 vertical Reels with synced Sinhala, Singlish, or English dynamic captions, color grading, and trending pacing.",
    faq_4_q: "How fast is the turnaround time?",
    faq_4_a:
      "Social media designs and Reels typically take 24–48 hours. Tuition class video editing + cloud upload is prioritized so your students get lessons on schedule.",
    footer_copy: "© 2026 Click Design. Crafted with bold color & creative energy.",
    wa_float: "Chat on WhatsApp",
    toast_copied: "Order summary copied! Paste it in WhatsApp or Email.",
    toast_select: "Please select at least one service first!"
  },

  si: {
    nav_services: "සේවාවන්",
    nav_portfolio: "නිර්මාණ Sample",
    nav_reels: "AI Reels",
    nav_showcase: "Studio",
    nav_process: "වැඩපිළිවෙල",
    nav_faq: "ප්‍රශ්න",
    nav_cta: "ඇණවුම් කරන්න",
    hero_badge: "Design, Video Editing, Reels, Print & Photography එකම තැනකින්",
    hero_title_1: "වර්ණවත් නිර්මාණ, Pro Video & ",
    hero_title_grad: "සුපිරි Creative සේවාවක්.",
    hero_subtitle:
      "ආකර්ෂණීය Graphic Design සහ උසස් තත්ත්වයේ Printing වැඩ වල සිට Tuition Sir ලාගේ Class Video Edit කර YouTube හෝ ඕනෑම Cloud Storage එකකට Upload කර දීම, TikTok/FB Reels සහ Photography දක්වා සියලුම සේවාවන් එකම තැනකින්.",
    pill_design: "Graphic Design",
    pill_print: "Print කිරීම",
    pill_tuition: "Tuition Video & Cloud Upload",
    pill_reels: "TikTok & FB Reels",
    pill_photo: "Photography",
    hero_btn_order: "වැඩක් බාරදෙන්න",
    hero_btn_services: "සේවාවන් බලන්න",
    stat_1_val: "වේගවත් 24h",
    stat_1_lbl: "ඉක්මන් සේවාව",
    stat_2_val: "100% Cloud",
    stat_2_lbl: "YouTube, Drive හා ඕනෑම Cloud",
    stat_3_val: "Design + Print",
    stat_3_lbl: "නිර්මාණය සමඟ Print",
    float_1_title: "Tuition Video සූදානම්",
    float_1_sub: "Render කර Cloud වෙත Upload කෙරේ",
    float_2_title: "CMYK + Digital Pro",
    float_2_sub: "Design, Print, Reels සහ Photo",

    services_eyebrow: "අපේ සේවාවන්",
    services_title: "ඔබේ ව්‍යාපාරය හෝ පන්තිය ඉදිරියට ගෙන යන සේවා",
    services_desc:
      "Tuition ගුරුවරුන්ට, ව්‍යාපාරවලට සහ Content Creators ලාට ගැළපෙන විශ්වාසනීය Creative විසඳුම්.",

    svc_tuition_tag: "Tuition Sir ලා සඳහා විශේෂයි",
    svc_tuition_title: "Tuition Class Video Editing & Cloud Upload",
    svc_tuition_desc:
      "ඔබ පන්තිය උගන්වන වීඩියෝව අපිට එවන්න — ඉතිරි සියල්ල අපි බලාගන්නම්! අනවශ්‍ය කොටස් කපා, හඬ පැහැදිලි කර, Slides/Intro එකතු කර HD/4K වලින් Render කර YouTube හෝ ඔබ කැමති ඕනෑම Cloud Storage එකකට Upload කර දෙන්නෙමු.",
    svc_tuition_l1: "පැහැදිලි Audio, අනවශ්‍ය කොටස් ඉවත් කිරීම & Whiteboard/Slide overlays",
    svc_tuition_l2: "සිසුන්ට පැහැදිලිව නැරඹිය හැකි Full HD / 4K Rendering",
    svc_tuition_l3: "YouTube (Unlisted/Private), Google Drive, OneDrive හෝ Mega වෙත සෘජු Upload",
    svc_tuition_l4: "ආකර්ෂණීය Thumbnails සහ සිසුන්ට යැවීමට සූදානම් Links",
    svc_cta_select: "මෙම සේවාව තෝරන්න →",

    svc_design_tag: "Design + Print",
    svc_design_title: "Graphic Design සහ Printing",
    svc_design_desc:
      "දකින ඕනෑම කෙනෙකුගේ ඇස ගැටෙන වර්ණවත් නිර්මාණ — එමෙන්ම නිර්මාණය කර අවසන් වූ පසු උසස් තත්ත්වයෙන් Print කර ඔබ අතටම ලබා දීම.",
    svc_design_l1: "Tuition Posters, Tute Covers, Banners, Flyers සහ Social Media Posts",
    svc_design_l2: "Logos, Business Cards, Brochures සහ Stickers නිර්මාණය",
    svc_design_l3: "ඉහළ ගුණාත්මක CMYK Printing (Gloss/Matte, Flex Banners, Cards)",

    svc_reels_tag: "Short-Form Viral",
    svc_reels_title: "TikTok සහ Facebook Reels නිර්මාණය",
    svc_reels_desc:
      "ඔබේ පන්තිය, භාණ්ඩය හෝ අදහස තත්පර කිහිපයකින් ප්‍රේක්ෂකයා ඇද බැඳ ගන්නා ආකර්ෂණීය Vertical වීඩියෝ බවට පත් කරන්න.",
    svc_reels_l1: "ආකර්ෂණීය සිංහල / English Subtitles සහ Dynamic Captions",
    svc_reels_l2: "Trending Transitions, Beat-Synced Cuts සහ Sound Effects",
    svc_reels_l3: "Mobile Feed සඳහා Color Grading සහ 9:16 Vertical නිමාව",

    svc_photo_tag: "Visual Stories",
    svc_photo_title: "Photography සහ Color Retouching",
    svc_photo_desc:
      "Tuition Seminars, උත්සව, Portraits සහ Product Shoots සඳහා වෘත්තීය මට්ටමේ පැහැදිලි සහ වර්ණවත් ඡායාරූපකරණය.",
    svc_photo_l1: "Tuition Seminars, Prize Givings සහ විශේෂ උත්සව ආවරණය",
    svc_photo_l2: "Portraits සහ ව්‍යාපාරික Product Photography",
    svc_photo_l3: "Pro Color Grading සහ High-Res ඡායාරූප ලබා දීම",

    svc_print_tag: "CMYK Press",
    svc_print_title: "උසස් තත්ත්වයේ Printing සේවාව",
    svc_print_desc:
      "නිර්මාණ කළ පසු Print කර ගැනීමටත් අවශ්‍යද? නිවැරදි වර්ණ සහ උසස් නිමාවකින් Print කර ඔබ වෙත ලබා දෙන්නෙමු.",
    svc_print_l1: "Glossy & Matte Flyers, Tutes සහ පොත් කවර Printing",
    svc_print_l2: "Flex Banners, X-Stands සහ Stickers Printing",
    svc_print_l3: "Custom T-Shirt / Polo Printing, Hang Tags, Business Cards සහ සහතික පත්‍ර",

    port_eyebrow: "අපේ නිර්මාණ",
    port_title: "නිර්මාණ සහ Printing Samples",
    port_desc:
      "Tuition පන්ති Posters, Tute Covers, Social Media Flyers, Banners සහ T-Shirt/Tag Printing වැඩ කිහිපයක් පහතින් බලන්න. විශාල කර බැලීමට click කරන්න.",
    flt_all: "සියල්ල (9)",
    flt_flyers: "Social Flyers",
    flt_covers: "Tute Covers",
    flt_banners: "Banners & X-Stands",
    flt_printing: "Printing වැඩ",
    cat_cover: "Tute Cover",
    cat_flyer: "Social Flyer",
    cat_banner: "Banner & X-Stand",
    cat_print: "Printing වැඩ",
    p1_title: "2028 ව්‍යාපාර අධ්‍යයනය — Illustrated Tute Cover",
    p2_title: "2029 Biology — Flex Banner (සක්‍යා)",
    p3_title: "2028 ව්‍යාපාර අධ්‍යයනය — රජය හා ව්‍යාපාර Cover",
    p4_title: "2028 ව්‍යාපාර අධ්‍යයනය — නව ඒකකය Flyer",
    p5_title: "දෙමළ භාෂා පන්ති (1–9 ශ්‍රේණි) Flyer",
    p6_title: "2028 ව්‍යාපාර අධ්‍යයනය — Class Promo Post",
    p7_title: "2029 Accounting — X-Stand Banner",
    pr1_title: "Black Buck — Custom Polo T-Shirt Print",
    pr2_title: "Black Buck — Custom Apparel Hang Tag Print",

    reels_eyebrow: "AI & Viral Video",
    reels_title: "TikTok සහ AI Reels Samples",
    reels_desc:
      "Tuition පන්ති, ව්‍යාපාර සහ Creators ලා සඳහා AI තාක්ෂණය හා Modern Editing එක් කර නිපදවූ 9:16 Vertical TikTok/FB Reels කිහිපයක්.",
    reel_1_title: "2027 පන්ති Promo — Outdoor AI Reel",
    reel_1_desc: "ශ්‍රී ලාංකීය පසුබිමක AI දර්ශන සහ පැහැදිලි සිංහල කටහඬ සමඟ නිමවූ TikTok Reel එකක්.",
    reel_2_title: "2028 A/L Combined Maths — Classroom AI Reel",
    reel_2_desc: "පන්ති කාමර දර්ශන, ආකර්ෂණීය Hook එක සහ Branded Outro සමඟ නිමවූ AI Reel එකක්.",

    showcase_eyebrow: "නිර්මාණ පරාසය",
    showcase_title: "වර්ණවත් බව, ගුණාත්මක බව සහ වේගවත් බව",
    showcase_desc: "අපගේ Studio එකේ නිර්මාණ ක්‍රියාවලියෙන් බිඳක්.",
    sh_1_pill: "Full Studio",
    sh_1_title: "Design, Video සහ Camera එකමුතුව",
    sh_1_desc: "මූලික අදහසේ සිට අවසන් Upload හෝ Print එක දක්වා එකම කණ්ඩායමකින්.",
    sh_2_pill: "Tuition & Cloud",
    sh_2_title: "Render සහ Cloud Upload සේවාව",
    sh_2_desc: "පන්ති වීඩියෝ නියමිත වේලාවට පිළිවෙලට Edit කර YouTube/Cloud වෙත Upload කෙරේ.",
    sh_3_pill: "Print & Photo",
    sh_3_title: "සුපිරි CMYK Prints සහ Photography",
    sh_3_desc: "නිවැරදි වර්ණ සහිත Printing සමඟ වෘත්තීය Photography සහ Reels.",

    proc_eyebrow: "සරල පියවර",
    proc_title: "අපි වැඩ කරන ආකාරය",
    proc_desc: "කිසිදු කරදරයකින් තොරව ඔබේ අවශ්‍යතාවය අප වෙත එවන්න.",
    st_1_t: "විස්තර හෝ Video එවන්න",
    st_1_d: "WhatsApp, Google Drive හෝ Telegram හරහා ඔබේ අදහස හෝ වීඩියෝව එවන්න.",
    st_2_t: "Design සහ Edit කිරීම",
    st_2_d: "වර්ණවත් නිර්මාණ, පැහැදිලි හඬ සහ නවීන තාක්ෂණයෙන් වැඩේ සකසයි.",
    st_3_t: "පරීක්ෂා කර බැලීම",
    st_3_d: "Draft එක බලා ඔබට අවශ්‍ය වෙනස්කම් ඇත්නම් ඉක්මනින් සකසා ගත හැක.",
    st_4_t: "Print හෝ Cloud Delivery",
    st_4_d: "සූදානම් කළ YouTube/Cloud Links, Digital Files හෝ Print කළ පිටපත් ලබාගන්න.",

    order_eyebrow: "වැඩේ පටන් ගමු",
    order_title: "ඔබේ මීළඟ නිර්මාණය අදම ආරම්භ කරන්න",
    order_desc:
      "පහතින් ඔබට අවශ්‍ය සේවාවන් තෝරා කෙලින්ම WhatsApp හරහා එවන්න — නැතිනම් විස්තරය Copy කරගන්න.",
    select_lbl: "අවශ්‍ය සේවාවන් තෝරන්න:",
    opt_design: "Graphic Design",
    opt_print: "Design Printing",
    opt_tuition: "Tuition Video + Cloud Upload",
    opt_reels: "TikTok & FB Reels",
    opt_photo: "Photography",
    lbl_name: "ඔබේ නම / ආයතනය / ව්‍යාපාරය",
    ph_name: "උදා: කසුන් සර් / Nova Academy",
    lbl_contact: "දුරකථන අංකය / WhatsApp",
    ph_contact: "උදා: 077 123 4567",
    lbl_cloud: "අවශ්‍ය Cloud / Delivery ක්‍රමය (අමතර)",
    ph_cloud: "උදා: YouTube Unlisted / Google Drive / Printed Copies",
    lbl_details: "ව්‍යාපෘතිය ගැන විස්තර",
    ph_details: "වීඩියෝවේ දිග, Poster ප්‍රමාණය, උත්සව දිනය හෝ Reels ගැන විස්තර ලියන්න...",
    btn_wa_send: "WhatsApp හරහා යවන්න",
    btn_copy: "විස්තරය Copy කරන්න",
    contact_wa_t: "WhatsApp / ඇමතුම්",
    contact_em_t: "Email ලිපිනය",
    contact_loc_t: "සේවා ප්‍රදේශය",

    faq_eyebrow: "ගැටලු වලට පිළිතුරු",
    faq_title: "නිතර අසන ප්‍රශ්න",
    faq_1_q: "Tuition Sir ලා Raw Class Videos එවන්නේ කොහොමද?",
    faq_1_a:
      "ඔබට Google Drive, Telegram, OneDrive හෝ Mega වෙත වීඩියෝව දමා Link එක අපට එවිය හැක. අපි Edit කර Render කළ පසු කෙලින්ම ඔබේ YouTube Channel එකට (Unlisted/Private/Public) හෝ Cloud Storage එකට Upload කර දෙන්නෙමු.",
    faq_2_q: "Design වැඩ සමඟ Print කරලත් දෙනවාද?",
    faq_2_a:
      "ඔව්! Posters, Tute Covers, Flyers, Business Cards, Banners සහ Stickers නිර්මාණය කර උසස් තත්ත්වයෙන් Print කර ඔබ වෙත ලබා දෙන්නෙමු.",
    faq_3_q: "TikTok සහ FB Reels වලට සිංහල Subtitles දානවාද?",
    faq_3_a:
      "අනිවාර්යයෙන්ම! සිංහල, Singlish හෝ English Dynamic Captions, Trending Transitions සහ Color Grading සමඟ 9:16 Vertical Reels නිර්මාණය කරමු.",
    faq_4_q: "වැඩක් නිම කිරීමට කොපමණ කාලයක් යනවාද?",
    faq_4_a:
      "Social Media Designs සහ Reels සාමාන්‍යයෙන් පැය 24–48 කින් ලබා දෙන අතර Tuition Class Videos නියමිත කාලසටහනට අනුව ප්‍රමුඛතාවයෙන් සකසා දෙමු.",
    footer_copy: "© 2026 Click Design. සුපිරි වර්ණ හා නිර්මාණශීලීත්වයෙන් නිමවන ලදී.",
    wa_float: "WhatsApp හරහා අමතන්න",
    toast_copied: "විස්තරය Copy වුණා! WhatsApp හෝ Email වෙත Paste කරන්න.",
    toast_select: "කරුණාකර අවම වශයෙන් එක් සේවාවක්වත් තෝරන්න!"
  }
};

let currentLang = "en";
const selectedServices = new Set(["Graphic Design"]);

function applyLanguage(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang === "si" ? "si" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const locEl = document.getElementById("studio-location");
  if (locEl) {
    locEl.textContent = lang === "si" ? STUDIO_CONFIG.locationSi : STUDIO_CONFIG.locationEn;
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function buildOrderMessage() {
  const name = document.getElementById("client-name").value.trim() || "Client";
  const contact = document.getElementById("client-contact").value.trim() || "Not specified";
  const cloud = document.getElementById("client-cloud").value.trim() || "Standard delivery";
  const details = document.getElementById("client-details").value.trim() || "Interested in a quote.";
  const services = Array.from(selectedServices).join(", ");

  return [
    `Hello ${STUDIO_CONFIG.brandName}! 🎨🎬`,
    `Name / Brand: ${name}`,
    `Contact: ${contact}`,
    `Selected Services: ${services}`,
    `Cloud / Delivery: ${cloud}`,
    `Project Details: ${details}`
  ].join("\n");
}

function selectServiceFromCard(serviceKey) {
  selectedServices.add(serviceKey);
  document.querySelectorAll(".svc-toggle").forEach((btn) => {
    if (btn.dataset.service === serviceKey) {
      btn.classList.add("selected");
    }
  });
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate contact info from STUDIO_CONFIG
  const phoneEl = document.getElementById("studio-phone");
  const emailEl = document.getElementById("studio-email");
  const waFloat = document.getElementById("floating-wa-link");
  if (phoneEl) phoneEl.textContent = STUDIO_CONFIG.phoneDisplay;
  if (emailEl) emailEl.textContent = STUDIO_CONFIG.email;
  if (waFloat) {
    waFloat.href = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      "Hi Click Design! I would like to inquire about your services."
    )}`;
  }

  // Language switcher
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }

  // Service chip selection
  document.querySelectorAll(".svc-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const svc = btn.dataset.service;
      if (selectedServices.has(svc)) {
        selectedServices.delete(svc);
        btn.classList.remove("selected");
      } else {
        selectedServices.add(svc);
        btn.classList.add("selected");
      }
    });
  });

  // Card quick-select links
  document.querySelectorAll("[data-select-service]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      selectServiceFromCard(btn.getAttribute("data-select-service"));
    });
  });

  // WhatsApp submission
  const waSendBtn = document.getElementById("btn-wa-send");
  if (waSendBtn) {
    waSendBtn.addEventListener("click", () => {
      if (selectedServices.size === 0) {
        showToast(TRANSLATIONS[currentLang].toast_select);
        return;
      }
      const msg = buildOrderMessage();
      const url = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  // Copy brief button
  const copyBtn = document.getElementById("btn-copy-brief");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      if (selectedServices.size === 0) {
        showToast(TRANSLATIONS[currentLang].toast_select);
        return;
      }
      const msg = buildOrderMessage();
      try {
        await navigator.clipboard.writeText(msg);
        showToast(TRANSLATIONS[currentLang].toast_copied);
      } catch {
        showToast(msg);
      }
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  // Portfolio category filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portCards = Array.from(document.querySelectorAll(".port-card"));
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      portCards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });

  // Lightbox preview for portfolio samples
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCaption = document.getElementById("lb-caption");
  const lbClose = document.getElementById("lb-close");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");
  let activeCards = [];
  let currentLbIdx = 0;

  function renderLightbox(idx) {
    if (!activeCards.length) return;
    currentLbIdx = (idx + activeCards.length) % activeCards.length;
    const card = activeCards[currentLbIdx];
    const img = card.querySelector("img");
    const title = card.querySelector("h4");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = title ? title.textContent : "";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  portCards.forEach((card) => {
    card.addEventListener("click", () => {
      activeCards = portCards.filter((c) => !c.classList.contains("hidden"));
      const idx = activeCards.indexOf(card);
      renderLightbox(idx >= 0 ? idx : 0);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", () => renderLightbox(currentLbIdx - 1));
  if (lbNext) lbNext.addEventListener("click", () => renderLightbox(currentLbIdx + 1));
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") renderLightbox(currentLbIdx - 1);
    if (e.key === "ArrowRight") renderLightbox(currentLbIdx + 1);
  });

  // Auto-pause other reel videos when one plays
  const reelVideos = document.querySelectorAll(".reel-video");
  reelVideos.forEach((vid) => {
    vid.addEventListener("play", () => {
      reelVideos.forEach((other) => {
        if (other !== vid && !other.paused) other.pause();
      });
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  applyLanguage("en");
});
