import styles from "../assets/css/_UserProfile.module.scss";



export default function AccountSection(props) {
    return (
        <section  className={`${styles.account}`}>
            <div  className={`${styles.accountContentWrapper}`}>
                <h3  className={`${styles.accountTitle}`}>Argent Bank Checking (x8349)</h3>
                <p  className={`${styles.accountAmount}`}>$2,082.79</p>
                <p  className={`${styles.accountAmountDescription}`}>Available Balance</p>
            </div>
            <div  className={`${styles.accountContentWrapper} cta`}>
                <button className={`${styles.transactionButton}`}>View transactions</button>
            </div>
        </section>
    )
}
