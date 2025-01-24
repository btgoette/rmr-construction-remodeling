/* Privacy Policy Content */

// React Components
import Link from 'next/link'

export default function Policy({ privacyPolicy }) {
    return (
        <>
            <h3 id="privacyPolicy">Effective Date: {privacyPolicy.date}</h3>
            <p>
                This privacy notice discloses the privacy practices for <Link href={privacyPolicy.site}>{privacyPolicy.site}</Link>. This privacy notice applies solely to information collected by this website, except where stated otherwise.
            </p>
            <h3>It will notify you of the following:</h3>
            <p className="ps-5">What information we collect;<br />
                With whom it is shared;<br />
                How it can be corrected;<br />
                How it is secured;<br />
                How policy changes will be communicated; and<br />
                How to address concerns over misuse of personal data.</p>
            <h3>Information Collection, Use, and Sharing:</h3>
            <p className="ps-5">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email, website form or other direct contact from you. We will not sell or rent this information to anyone.</p>
            <p className="ps-5">We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., to ship an order.</p>
            <p className="ps-5">Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>

            <h3>Your Access to and Control Over Information:</h3>
            <p className="ps-5">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number provided on our website:</p>
            <p className="ps-5">See what data we have about you, if any.<br />
                Change/correct any data we have about you.<br />
                Have us delete any data we have about you.<br />
                Express any concern you have about our use of your data.</p>

            <h3>Security:</h3>
            <p className="ps-5">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
            <p className="ps-5">Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way.</p>
            <p className="ps-5">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (e.g., billing or customer service) are granted access to personally identifiable information. The computers/servers on which we store personally identifiable information are kept in a secure environment.</p>

            <h3>Links:</h3>
            <p className="ps-5">This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

            <h3>Notification of Changes:</h3>
            <p className="ps-5">Our privacy policy may be updated or changed at any time. Please feel free to check our privacy policy in the future for such changes. Our current privacy policy is always available on our website at <Link href={privacyPolicy.href} target="top">{privacyPolicy.href}</Link>.</p>

            <p className="mt-4">If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at <Link href={"tel:" + privacyPolicy.tel}>{privacyPolicy.tel}</Link>.</p>

        </>
    )
}