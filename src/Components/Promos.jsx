import React from 'react';
import { Link } from 'react-router-dom';

const Promos = () => {
    const data = [
        {
            id: 1,
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og134_fw23_nmd_adventure_tcc_d_05c21b2e0c.jpg',
            title: 'RUN FASTER INTO TOMORROW',
            descrip: 'Built with contemporary details. Discover adidas NMD.',
            gotoLink: ''
        },
        {
            id: 2,
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/fw23_brand_campaign_tease_catlp_tc_forum_d_d31a5a3b63.jpg',
            title: 'FORUM ORIGINALS',
            descrip: 'From hardwood to streets, this hoop classic taps into legend status every time you lace them up',
            gotoLink: ''
        },
        {
            id: 3,
            img: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_fw23_holiday_oct_fleece_hp_d_c1a7c01238.jpg',
            title: 'GIFT COMFORT',
            descrip: 'Get ahead of gifting with fleece and more cozy favorites.',
            gotoLink: ''
        }
    ];

    return (
        <div className='promos'>
            <div className="card">
                <Link style={{ textDecoration: 'none' }}>
                    <div className="cardimgContainer">
                        <video src="https://brand.assets.adidas.com/video/upload/if_w_gt_300,w_300/sportswear_fw23_my_shelter_hp_tc_m_3bd28688d3.mp4" preload="auto" autoPlay loop playsInline style={{ width: '100%',height: '100%' }}></video>
                    </div>
                    <h4>
                        OWN THE ELEMENTS
                    </h4>
                    <p>
                        Weather protection that feels like a hug.
                    </p>
                </Link>
                <Link>
                    SHOP NOW
                </Link>
            </div>
            {data.map(item => (
                <div className="card" key={item.id}>
                    <Link style={{ textDecoration: 'none' }}>
                        <div className="cardimgContainer">
                            <img src={item.img} alt="" />
                        </div>
                        <h4>
                            {item?.title}
                        </h4>
                        <p>
                            {item?.descrip}
                        </p>
                    </Link>
                    <Link>
                        SHOP NOW
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default Promos;
