const team_members =[
    {
        id: 1,
        name:'Shushant Kumar Singh',
        Job:'React Developer, Unity Game Developer - Weapon and Power Designer',
        email: 'mailto:shushantkumar.singh2019@vitstudent.ac.in',
        github: 'https://github.com/Shush25',
        linkdin: 'https://www.linkedin.com/in/shushant-kumar-singh-bb016b1b6/',
        insta: '',
        imageUrl: 'https://lh3.googleusercontent.com/-DdxNGQg4hPbEmzbCmR08sUX9cuPu1NPQ1wsXmnWo4mt-yPL-wsP8zVx2S9_xDc_ezYdZpX8RmkYdWmSiJUmOt3ZDjFyLyrF1cduSH14E3LmDal786A5Y6PzUgI7xrn6sv7yv8PWjA'
    },
    {
        id: 2,
        name: 'Apoorv Yadav',
        Job: 'React Developer, Unity Game Developer - Graphics and Level Designer',
        email: 'mailto:apoorv.yadav2019@vitstudent.ac.in',
        github: 'https://github.com/Apoorv-17',
        linkdin: 'https://www.linkedin.com/in/apoorv-yadav-1a54571b7/',
        insta: '',
        imageUrl: 'https://lh3.googleusercontent.com/ARVj1C0lnGyiwERJZWQXMfzG-gBbQDPm3zzH9qw1RNXvhMVyp31hzFrb1IpLJtBBdouGffMhu2r_6gUeQzwivrwUpdXV0wxgC1cuZmPFB-GQeZwouXJKIMJ8KsL2NmYINwb2yjDufw'
    },
    {
        id: 3,
        name: 'Rishi Mungia',
        Job: 'Unity Game Developer - Main Character Designer',
        github: 'https://github.com/rishimungia',
        linkdin: 'https://www.linkedin.com/in/tanmay-mahajan-6ba24b176/',
        insta: '',
        email: 'mailto:rishi.mungia2019@vitstudent.ac.in',
        imageUrl: 'https://lh3.googleusercontent.com/3VrXXDpOo9Qdh-s_df7BVE7X4xMn7du4y6qp-_LtFFuNqBFKdyO96E_WZZl16hYcKiOAq_NF0ZGCcqTbUIMhSnYf_AS2vWpIy8YKhHQdmPolpEUFqBWMLAvwFPU7D1Lbvdrhz1OGg5rXzATL-dtMqhVNdo7LSI3TMB8gik8YBdGKndOL8tkEWmtPIFJV7I2Dss3LwU0RD3dVxXH2HwWp7EKF_zrvYu6Xwu4JxkYdzg79QT0NEXXVFJw8XSJnfqXUmqkTReti9QjAHPpS-AhsTHGnjFdCnfMEeGNT4ax02DcN0TuF9sFBNfbt_m8PIdw32qHcAyrGneAfa2JwKKZXcDxOXUg7WPde5LjJRafi2Pm6ufjFnrCAlwhaFqko3rQ470cZVkXxS9DmJkGKQe_BCFQAXvKopI6pQZ6fP_i46x8nNNwZ2SHD9dARBSCm3kyOeVxwWIjfGcPrLHi83d-HeL_EQFw6povSWFocwuRmLM82RmYOeVcy9cF6NEO29c8jfoT2kwaxRjK3Su68E_9nrpqXItRfYotz-WLdsEP9abIO2rNkrEPeDx0sG9WEGiBjVPGW3gKsXM0PDQDRZtSqBDcBJ0GIn8voDQq4bkuMhVCN3Zqdf_jLiqX_Qi30VNtFq4ZmOzA4mw8GvUNvKE-TGY2l6jEp8_ZRP6jod-HRLK9Fx7hBERMCrJD9legseIw_XKGjImJsKK76F6Bs_RKmFoZM=s656-no?authuser=0'
    },
    {
        id: 4,
        name: 'Karthikeyan Sugavanan',
        Job: 'Unity Game Developer - Enemy Type 3 Designer',
        github: 'https://github.com/KarthikeyanSugavanan',
        linkdin: 'https://www.linkedin.com/in/tanmay-mahajan-6ba24b176/',
        insta: '',
        email: 'mailto:karthikeyan.sugavanan2019@vitstudent.ac.in',
        imageUrl: 'https://lh3.googleusercontent.com/JTlBdjFch4-BoRMmIj0-JS4fhmcFXXFJHdL2Xq_NMLFQ_Yj2OeOAumELPJ0wBDQ43inBv2LZFlS0AZD3eJK_GXHIQasaLZjvY4_Y73v7t07ciKMCg0QNEDmGikxz9p6i3x4UD60W3xlvMqpmc9wfJiWH2ubQf0LKfbjnOpbKw2utoqNJOER-TCWoLaymb1fOA6KzH6GAJcT_lZSs7gCAJ28udDGgxjHAWJWVeKu-BuUShpN8BOo1YUiLj-XGexsODUMzlktZ0ZsoC924T4u7pCwZtwOXn4QhTYKXdQCG98uysWSyu_r0s5-7_CiwYT8pb8cxHSXUE4Zu5_Mjne45fgIlcU8heFp1rJ0jJZgpzR-Nqj3apZx1tIwPgPdFl7oX_WAXy-vI8Vngk3V864_o7btf3eM5rrW1rHFgr1l-YwbXOtXf5hsAyJlq48w64uV4_qNiiXNo0X4Jyf17fzMfN5FvG9-So3a1MAXvFAmmyfjcmOH6VJ1Mz1SB53ki--WBnyHHoH5Os6Q_MW8QVg8MHeMoOg8ABZOPl3wEE_lzZ79-q9nYnlXt9AqhrP6tCiG6hYSNgmgA275gDDX_fPlU_mxgnNFgCf8_YUCx8cX2vnNHXBPGyL5duOMFBs2L3xpViyFqOX21i5n5kcZACa2wWakNC9tn41Qx2GS_28UYU_KMLloSMq-k6MboqWj_8kCEGatzZTO532G-2Dc4RGnBZvop=s544-no?authuser=0'
    },
    {
        id: 5,
        name: 'Divyanu Baheti',
        Job: 'Unity Game Developer - Graphics and Level Designer',
        github: 'https://github.com/Divyanu',
        linkdin: 'https://www.linkedin.com/in/tanmay-mahajan-6ba24b176/',
        insta: '',
        email: 'mailto:divyanu.baheti2019@vitstudent.ac.in',
        imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        id: 6,
        name: 'Ashish Das',
        Job: 'Unity Game Developer - Enemy Type 1 Designer',
        github: 'https://github.com/Sugar3201',
        linkdin: 'https://www.linkedin.com/in/ashish-das-6a7960200',
        insta: '',
        email: 'mailto:ashish.das2019@vitstudent.ac.in',
        imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        id: 7,
        name: 'Rupak',
        Job: 'Unity Game Developer - Enemy Type 2 Designer',
        github: 'https://github.com/rupak-20',
        linkdin: 'http://www.linkedin.com/in/rupak-swami-071468190',
        insta: '',
        email: 'mailto:rupak.swami2019@vitstudent.ac.in',
        imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
    }
]
export default team_members;