import styles from './hero.module.css'

export default function VideoHero(props) {
    return (
        <form className={styles.lead_form_container}>
            <div>
                <div className={styles.lead_form_content}>
                    <div className={styles.lead_form_content_container}>
                        <div className={styles.lead_form_text_container}>
                            <h1 className={styles.lead_form_title}>Welcome to your Heyday, Plymouth Meeting </h1>
                            <p className={styles.lead_form_description}>A Heyday facial is more than your average treatment. We deliver customized, educational skincare treatments –
                            crafted to bring out the best you. BOOK NOW & GET 50% OFF YOUR FIRST VISIT</p>
                        </div>
                    </div>
                    <div className={styles.lead_form_form}>
                        <div className={styles.lead_form_form_container}>
                            <h2>50% Off Your First Facial</h2>
                            <p></p>
                            <form>
                                <input type="text" placeholder="First Name*"/>
                                <input type="text" placeholder="Last Name*"/>
                                <input type="text" placeholder="Email*"/>
                                <input type="text" placeholder="Phone"/>
                                <input type="text" placeholder="Zip Code"/>

                                <button>Book Your Facial</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.lead_form_overlay}></div>
                <div className={styles.lead_form_video}>
                    <video autoPlay muted loop className={styles.video}>
                        <source src="https://cdn.shopify.com/videos/c/o/v/328ec4937774489088ea9fc2eef95cfc.mp4"></source>
                    </video>
                </div>
            </div>
        </form>
    )
}