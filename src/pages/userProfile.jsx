import Layout from "../components/Layout";
import stylesIndex from "../assets/css/index.module.scss";
import AccountSection from "../components/AccountSection";

const accountSections = [
    {title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance"},
    {title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Available Balance"},
    {title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Current Balance"},
]
export default function UserProfile() {
    return (
        <Layout>
            <main className={`${stylesIndex.main} ${stylesIndex.bgDark}`}>
                <div className={`${stylesIndex.header}`}>
                    <h1>Welcome back<br/>Tony Jarvis!</h1>
                    <button className={`${stylesIndex.editButton}`}>Edit Name</button>
                </div>
                <h2 className={`${stylesIndex.srOnly}`}>Accounts</h2>
                {accountSections.map((section, index) => {
                   return <AccountSection title={section.title} key={index} />
                })}
            </main>
        </Layout>
    )
}
