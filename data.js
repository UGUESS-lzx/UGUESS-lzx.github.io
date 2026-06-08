/*
  这里集中管理主页内容。
  直接修改引号里的文字、数组里的条目，刷新 index.html 即可看到变化。
*/

window.siteData = {
  meta: {
    title: "Zixuan Li - Academic Homepage",
    description: "Zixuan Li's academic homepage, including research interests, news, publications, education, awards, and experience."
  },

  profile: {
    name: "Zixuan Li",
    nameAlt: "李子轩",
    role: "First-year Ph.d Student @ Chinese Academy of Sciences",
    affiliation: "NLPR, Institute of Automation",
    location: "Beijing, China",
    email: "zixuan.li@nlpr.ia.ac.cn",
    avatar: "assets/profile.jpg"
  },

  links: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=zh-CN&user=fJsvj4YAAAAJ",
      icon: "scholar"
    },
    // {
    //   label: "GitHub",
    //   url: "https://github.com/your-github-id",
    //   icon: "github"
    // },
    {
      label: "Email",
      url: "mailto:zixuan.li@nlpr.ia.ac.cn",
      icon: "mail"
    },
    {
      label: "CV",
      url: "assets/cv.pdf",
      icon: "file"
    }
  ],

  intro: [
    "I am a first-year Ph.D. student at the New Laboratory of Pattern Recognition (NLPR), Institute of Automation, Chinese Academy of Sciences, under the supervision of <a href=\"https://scholar.google.com/citations?user=PuZGODYAAAAJ\" class=\"text-link\">Prof. Zhenan Sun</a>.",
    "Before joining CASIA, I received my master's degree from Sun Yat-sen University, advised by <a href=\"https://scholar.google.com/citations?user=voxznZAAAAAJ\" class=\"text-link\">Prof. Xiaodan Liang</a> and Prof. Chengming Li. I received my bachelor's degree from the Tang Aoqing Honors Program in Science at Jilin University."
  ],

  researchInterests: [
    "NLP",
    "Large Language Model",
    "Multimodal Large Language Models",
    "Computer Vision"
  ],

  researchNote: " If you are interested in my work, please feel free to reach out for discussions or collaborations! <a href=\"mailto:zixuan.li@nlpr.ia.ac.cn\" class=\"text-link\">email</a>.",

  news: [
    {
      date: "2026",
      text: "<b class=\"news-kind\">KDD:</b> Our paper <a href=\"https://arxiv.org/abs/2508.03668\" class=\"text-link\">CTR-Sink: Attention Sink for Language Models in Click-Through Rate Prediction</a> was accepted to KDD 2026."
    },
    {
      date: "2026",
      text: "<b class=\"news-kind\">ICML:</b> <a href=\"https://arxiv.org/abs/2510.13500\" class=\"text-link\">MedREK: Retrieval-Based Editing for Medical LLMs with Key-Aware Prompts</a> was accepted to ICML 2026. Congrats to Shujun!!!"
    },
    {
      date: "2026",
      text: "<b class=\"news-kind\">AAAI:</b> <a href=\"https://ojs.aaai.org/index.php/AAAI/article/view/38509\" class=\"text-link\">Emotion and Intention Guided Multi-Modal Learning for Sticker Response Selection</a> was accepted to AAAI 2026. Congrats to Yuxuan!!!"
    },
    {
      date: "2024",
      text: "<b class=\"news-kind\">ACL Findings:</b> <a href=\"https://arxiv.org/abs/2408.08089\" class=\"text-link\">AgentCourt: Simulating Court with Adversarial Evolvable Lawyer Agents</a> was accepted to ACL Findings 2024. Congrats to Guhong!!!"
    },
    {
      date: "2024",
      text: "<b class=\"news-kind\">CIKM:</b> <a href=\"https://arxiv.org/abs/2407.21048\" class=\"text-link\">APTNESS: Incorporating Appraisal Theory and Emotion Support Strategies for Empathetic Response Generation</a> was accepted to CIKM 2024. Congrats to Yuxuan!!!"
    },
    {
      date: "2024",
      text: "<b class=\"news-kind\">ICLR:</b> Our paper <a href=\"https://openreview.net/forum?id=qAoxvePSlq\" class=\"text-link\">DQ-LoRe: Dual Queries with Low Rank Approximation Re-ranking for In-Context Learning</a> was accepted to ICLR 2024."
    },
    {
      date: "2023",
      text: "<b class=\"news-kind\">QShine:</b> Our paper <a href=\"https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:eQOLeE2rZwMC\" class=\"text-link\">Sentiment Analysis Based on Social Media-Early Stress and Depression Detection</a> was accepted to QShine 2023."
    }
  ],

  // publicationNote: "Publications are listed according to the referenced Google Scholar profile.",

  education: [
    {
      period: "2025 - Present",
      title: "Ph.D. Student",
      organization: "NLPR, Institute of Automation, Chinese Academy of Sciences",
      detail: "Advisor: Prof. Zhenan Sun",
      logo: "assets/cas-logo.png",
      logoVariant: "seal"
    },
    {
      period: "2022 - 2025",
      title: "M.S.",
      organization: "Sun Yat-sen University",
      detail: "Advisors: Prof. Xiaodan Liang and Prof. Chengming Li",
      logo: "assets/sysu-logo.png",
      logoVariant: "seal"
    },
    {
      period: "2018 - 2022",
      title: "B.S.",
      organization: "Tang Aoqing Honors Program in Science, Jilin University",
      detail: "Bachelor's degree from the Tang Aoqing Honors Program in Science",
      logo: "assets/jlu-logo.svg",
      logoVariant: "seal"
    }
  ],


  publications: [
    {
      title: "CTR-Sink: Attention Sink for Language Models in Click-Through Rate Prediction",
      authors: "<strong>Zixuan Li</strong>, Binzong Geng, Jing Xiong, Yang He, Yuxuan Hu, Jian Chen, Dingwei Chen, Xiyu Chang, Liang Zhang, et al.",
      venue: "<strong>KDD 2026</strong>",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:WF5omc3nYNoC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2508.03668"
        }
      ]
    },
    {
      title: "Dq-lore: Dual queries with low rank approximation re-ranking for in-context learning",
      authors: "Jing Xiong*, <strong>Zixuan Li*</strong>, Chuanyang Zheng, Zhijiang Guo, Yichun Yin, Enze Xie, Zhicheng Yang, Qingxing Cao, Haiming Wang, Xiongwei Han, Jing Tang, Chengming Li, Xiaodan Liang",
      venue: "<strong>ICLR 2024</strong>",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:Y0pCki6q_DkC"
        },
        {
          label: "OpenReview",
          url: "https://openreview.net/forum?id=qAoxvePSlq"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2310.02954"
        },
        {
          label: "Code",
          url: "https://github.com/AI4fun/DQ-LoRe"
        }
      ]
    },
    {
      title: "AgentCourt: Simulating Court with Adversarial Evolvable Lawyer Agents",
      authors: "Guhong Chen, Liyang Fan, Zihan Gong, Nan Xie, <strong>Zixuan Li</strong>, Ziqiang Liu, Chengming Li, Qiang Qu, Shiwen Ni, Min Yang",
      venue: "<strong>ACL Findings</strong>, 2024",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:9yKSN-GCB0IC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2408.08089"
        },
        {
          label: "Code",
          url: "https://github.com/relic-yuexi/AgentCourt"
        }
      ]
    },
    {
      title: "UncertaintyRAG: Span-Level Uncertainty Enhanced Long-Context Modeling for Retrieval-Augmented Generation",
      authors: "<strong>Zixuan Li*</strong>, Jing Xiong*, Fanghua Ye, Chuanyang Zheng, Xun Wu, Jianqiao Lu, Zhongwei Wan, Xiaodan Liang, Chengming Li, Zhenan Sun, Lingpeng Kong, Ngai Wong",
      venue: "arXiv preprint arXiv:2410.02719, 2024",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:Tyk-4Ss8FVUC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2410.02719"
        }
      ]
    },
    {
      title: "MedREK: Retrieval-Based Editing for Medical LLMs with Key-Aware Prompts",
      authors: "Shujun Xia, Haokun Lin, Yichen Wu, Yinan Zhou, <strong>Zixuan Li</strong>, Zhongwei Wan, Xingrun Xing, Yefeng Zheng, Xiang Li, Caifeng Shan, Zhenan Sun, Quanzheng Li",
      venue: "<strong>ICML 2026</strong>",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:_FxGoFyzp5QC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2510.13500"
        },
        {
          label: "Code",
          url: "https://github.com/mylittleriver/MedREK"
        }
      ]
    },
    {
      title: "Emotion and Intention Guided Multi-Modal Learning for Sticker Response Selection",
      authors: "Yuxuan Hu, Jian Chen, Yuhao Wang, <strong>Zixuan Li</strong>, Jing Xiong, Pengyue Jia, Wei Wang, Chengming Li, Xiangyu Zhao",
      venue: "Proceedings of the <strong>AAAI Conference on Artificial Intelligence</strong> 40(17), 2026",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:roLk4NBRz8UC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2511.17587"
        },
        {
          label: "AAAI",
          url: "https://ojs.aaai.org/index.php/AAAI/article/view/38509"
        }
      ]
    },
    {
      title: "APTNESS: Incorporating Appraisal Theory and Emotion Support Strategies for Empathetic Response Generation",
      authors: "Yuxuan Hu, Minghuan Tan, Chenwei Zhang, <strong>Zixuan Li</strong>, Xiaodan Liang, Min Yang, Chengming Li, Xiping Hu",
      venue: "<strong>CIKM 2024</strong>",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:W7OEmFMy1HYC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2407.21048"
        },
        {
          label: "Code",
          url: "https://github.com/CAS-SIAT-XinHai/APTNESS"
        }
      ]
    },
    
    {
      title: "LongEmotion: Measuring Emotional Intelligence of Large Language Models in Long-Context Interaction",
      authors: "Weichu Liu, Jing Xiong, Yuxuan Hu, <strong>Zixuan Li</strong>, Minghuan Tan, Ningning Mao, Chenyang Zhao, Zhongwei Wan, Chaofan Tao, Wendong Xu, Hui Shen, Chengming Li, Lingpeng Kong, Ngai Wong",
      venue: "arXiv preprint arXiv:2509.07403, 2025",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:ufrVoPGSRksC"
        },
        {
          label: "arXiv",
          url: "https://arxiv.org/abs/2509.07403"
        },
        {
          label: "Project",
          url: "https://longemotion.github.io/"
        }
      ]
    },
    {
      title: "Sentiment Analysis Based on Social Media-Early Stress and Depression Detection",
      authors: "<strong>Zixuan Li</strong>, Yuxuan Hu, Chenwei Zhang, Chengming Li, Xiping Hu",
      venue: "<strong>International Conference on Heterogeneous Networking for Quality, Reliability, Security and Robustness</strong>, 2023",
      note: "",
      links: [
        {
          label: "Scholar",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=fJsvj4YAAAAJ&citation_for_view=fJsvj4YAAAAJ:eQOLeE2rZwMC"
        }
      ]
    },
    
  ],

  

  // awards: [
  //   {
  //     year: "2026",
  //     title: "Scholarship / Award Name",
  //     detail: "Awarded by Your University"
  //   },
  //   {
  //     year: "2025",
  //     title: "Competition / Honor Name",
  //     detail: "Brief description of the honor"
  //   }
  // ],

  experience: [
    {
      period: "2024 - Present",
      title: "Research Intern",
      organization: "Ant Group",
      detail: "Working on machine learning systems and multimodal reasoning.",
      logo: "assets/ant-group-logo.png",
      logoVariant: "wide"
    },
  ],

  greetings: {
    enabled: true,
    welcome: "Welcome to my homepage!",
    hover: "Hi, thanks for stopping by.",
    welcomeDelay: 500,
    duration: 3600,
    hoverShowOnce: true
  },

  analytics: {
    enabled: true,
    title: "Site Analytics",
    showCounters: false,
    counterScript: "",
    mapMyVisitorsToken: "bpPCDkGuzjBVG2yaRdp_Vhne9i80zhBmQ-osalPnKqM",
    mapMyVisitorsPage: "https://mapmyvisitors.com/web/1c53q",
    mapMyVisitors: {
      embedType: "image",
      width: "a",
      textColor: "ffffff",
      theme: "",
      backgroundColor: "",
      currentMarkerColor: "",
      markerColor: ""
    }
  }
};
