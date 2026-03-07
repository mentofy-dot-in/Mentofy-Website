import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-policy">
            <Link to="/" className="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Home
            </Link>

            <h1>Privacy Policy</h1>
            <span className="effective-date">Effective Date: March 7, 2026 &nbsp;|&nbsp; Last Updated: March 7, 2026</span>

            {/* ===== 1. INTRODUCTION ===== */}
            <h2>1. Introduction</h2>
            <p>
                Welcome to <strong>Momentum – Alarm, Discipline</strong> ("Momentum," "App," "we," "us," or "our"), operated by
                Mentofy ("Company"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
                information when you use our mobile application available on the Google Play Store (Android) and the Apple App
                Store (iOS), and when you visit our website at{' '}
                <a href="https://mentofy.in" target="_blank" rel="noopener noreferrer">https://mentofy.in</a>.
            </p>
            <p>
                By accessing or using Momentum, you acknowledge that you have read, understood, and agree to be bound by this
                Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the App.
            </p>
            <p>
                This policy is designed to comply with the <strong>General Data Protection Regulation (GDPR)</strong> (EU),
                the <strong>California Consumer Privacy Act (CCPA)</strong> (California, USA), and other applicable data protection
                laws and regulations.
            </p>

            {/* ===== 2. INFORMATION WE COLLECT ===== */}
            <h2>2. Information We Collect</h2>
            <p>We collect information in the following categories:</p>

            <h3>2.1 Information You Provide Directly</h3>
            <ul>
                <li>
                    <strong>Account &amp; Authentication Data:</strong> When you sign in using Google Sign-In, we collect your
                    name, email address, and profile picture as provided by Google. We do not store your Google account password.
                </li>
                <li>
                    <strong>Support Communications:</strong> If you contact us via email or in-app support, we may collect your
                    name, email address, and the content of your communication.
                </li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
                <li>
                    <strong>Location Data:</strong> With your explicit consent, we collect background location data to trigger
                    location-based alarms when you arrive at or depart from a specific destination. This functionality is powered
                    by the Google Maps API. Location data is processed in real-time and is not stored on our servers beyond what
                    is necessary to deliver the alarm functionality.
                </li>
                <li>
                    <strong>Device &amp; Usage Data:</strong> We automatically collect device identifiers, operating system
                    version, app version, screen views, session duration, and crash/error reports through Firebase Analytics.
                </li>
                <li>
                    <strong>Advertising Data:</strong> Google AdMob may collect device identifiers (e.g., Advertising ID),
                    IP address, and usage data to serve advertisements, including personalized ads.
                </li>
                <li>
                    <strong>Subscription &amp; Purchase Data:</strong> RevenueCat processes your in-app purchase and subscription
                    transactions. We receive subscription status and transaction identifiers; we do <strong>not</strong> receive
                    or store your payment card details.
                </li>
            </ul>

            <h3>2.3 Summary Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Data Category</th>
                        <th>Specific Data</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Authentication</td>
                        <td>Name, Email, Profile Picture</td>
                        <td>Account creation &amp; sign-in</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>Background GPS coordinates</td>
                        <td>Location-based alarm triggers</td>
                    </tr>
                    <tr>
                        <td>Analytics</td>
                        <td>Device info, screen views, crash reports</td>
                        <td>App improvement &amp; stability</td>
                    </tr>
                    <tr>
                        <td>Advertising</td>
                        <td>Device identifiers, usage data</td>
                        <td>Serve &amp; personalize advertisements</td>
                    </tr>
                    <tr>
                        <td>Subscriptions</td>
                        <td>Transaction IDs, subscription status</td>
                        <td>Process in-app purchases</td>
                    </tr>
                </tbody>
            </table>

            {/* ===== 3. LEGAL BASES FOR PROCESSING ===== */}
            <h2>3. Legal Bases for Processing (GDPR)</h2>
            <p>If you are located in the European Economic Area (EEA), we process your personal data under the following legal bases:</p>
            <ul>
                <li><strong>Consent:</strong> For location data collection and personalized advertising. You may withdraw consent at any time.</li>
                <li><strong>Performance of a Contract:</strong> To provide the App's core functionality, including alarm features and subscription services.</li>
                <li><strong>Legitimate Interests:</strong> For analytics, crash reporting, and improving the App experience, where such interests are not overridden by your data protection rights.</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations.</li>
            </ul>

            {/* ===== 4. HOW WE USE YOUR INFORMATION ===== */}
            <h2>4. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
                <li>Provide, operate, and maintain the App's features, including location-based alarms.</li>
                <li>Authenticate your identity and manage your account.</li>
                <li>Process in-app purchases and manage subscriptions.</li>
                <li>Analyze usage patterns, diagnose technical issues, and improve App performance.</li>
                <li>Display advertisements, including personalized ads where consent is given.</li>
                <li>Communicate with you regarding support requests, updates, or changes to this policy.</li>
                <li>Comply with legal obligations and enforce our terms of service.</li>
            </ul>

            {/* ===== 5. THIRD-PARTY SERVICES ===== */}
            <h2>5. Third-Party Services</h2>
            <p>
                We integrate the following third-party services, each of which may independently collect and process your data
                in accordance with their own privacy policies:
            </p>

            <h3>5.1 Google Sign-In (Authentication)</h3>
            <p>
                Google Sign-In allows you to authenticate using your Google account. Google collects and processes data
                in accordance with its privacy policy.
            </p>
            <p>
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/privacy
                </a>
            </p>

            <h3>5.2 Google Maps API (Location Services)</h3>
            <p>
                We use the Google Maps API to enable location-based alarm functionality. Google may collect and process
                location-related data in accordance with its privacy policy.
            </p>
            <p>
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/privacy
                </a>
            </p>

            <h3>5.3 Firebase Analytics (Analytics &amp; Crash Reporting)</h3>
            <p>
                Firebase Analytics collects usage data, screen views, session information, and crash reports to help us
                understand how users interact with the App and to improve stability.
            </p>
            <p>
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
                    https://firebase.google.com/support/privacy
                </a>
            </p>

            <h3>5.4 Google AdMob (Advertising)</h3>
            <p>
                Google AdMob is used to display advertisements within the App. AdMob may collect device identifiers, IP
                addresses, and usage data to deliver targeted and personalized advertisements. Users may opt out of
                personalized advertising through their device settings.
            </p>
            <p>
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/privacy
                </a>
            </p>
            <p>
                <strong>Ad Personalization Opt-Out:</strong>{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                    https://adssettings.google.com
                </a>
            </p>

            <h3>5.5 RevenueCat (Subscriptions &amp; In-App Purchases)</h3>
            <p>
                RevenueCat manages in-app subscriptions and purchases. RevenueCat may process transaction data,
                subscription status, and anonymized device identifiers. We do not receive your payment card information
                through RevenueCat.
            </p>
            <p>
                <strong>Privacy Policy:</strong>{' '}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
                    https://www.revenuecat.com/privacy
                </a>
            </p>

            {/* ===== 6. DATA SHARING & DISCLOSURE ===== */}
            <h2>6. Data Sharing &amp; Disclosure</h2>
            <p>We do <strong>not</strong> sell your personal data. We may share your data in the following limited circumstances:</p>
            <ul>
                <li><strong>Third-Party Service Providers:</strong> As described in Section 5, with providers who assist in operating the App.</li>
                <li><strong>Legal Requirements:</strong> If required by law, regulation, legal process, or governmental request.</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, or that of our users or the public.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the successor entity.</li>
            </ul>

            {/* ===== 7. DATA RETENTION ===== */}
            <h2>7. Data Retention</h2>
            <p>
                We retain your personal data only for as long as necessary to fulfill the purposes described in this Privacy
                Policy, unless a longer retention period is required or permitted by law. Specifically:
            </p>
            <ul>
                <li><strong>Account Data:</strong> Retained while your account is active. Deleted upon account deletion request.</li>
                <li><strong>Location Data:</strong> Processed in real-time for alarm functionality; not retained beyond the session.</li>
                <li><strong>Analytics Data:</strong> Retained in accordance with Firebase's data retention settings (default: 14 months).</li>
                <li><strong>Advertising Data:</strong> Managed by Google AdMob per their retention policies.</li>
                <li><strong>Subscription Data:</strong> Retained as long as your subscription is active and as required for financial record-keeping.</li>
            </ul>

            {/* ===== 8. DATA SECURITY ===== */}
            <h2>8. Data Security</h2>
            <p>
                We implement commercially reasonable technical and organizational measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction. These measures include, but are not
                limited to:
            </p>
            <ul>
                <li>Encryption of data in transit using TLS/SSL.</li>
                <li>Secure authentication via Google Sign-In (OAuth 2.0).</li>
                <li>Access controls limiting data access to authorized personnel only.</li>
                <li>Regular security reviews of third-party integrations.</li>
            </ul>
            <p>
                However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute
                security.
            </p>

            {/* ===== 9. YOUR RIGHTS UNDER GDPR ===== */}
            <h2>9. Your Rights Under GDPR (European Users)</h2>
            <p>
                If you are a resident of the European Economic Area (EEA), you have the following rights under the General
                Data Protection Regulation:
            </p>
            <ul>
                <li><strong>Right of Access (Art. 15):</strong> You have the right to request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification (Art. 16):</strong> You have the right to request correction of inaccurate personal data.</li>
                <li><strong>Right to Erasure (Art. 17):</strong> You have the right to request deletion of your personal data ("right to be forgotten").</li>
                <li><strong>Right to Restriction of Processing (Art. 18):</strong> You have the right to request that we restrict the processing of your data.</li>
                <li><strong>Right to Data Portability (Art. 20):</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Right to Object (Art. 21):</strong> You have the right to object to the processing of your personal data, including for direct marketing purposes.</li>
                <li><strong>Right to Withdraw Consent (Art. 7):</strong> Where processing is based on consent, you may withdraw your consent at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:support@mentofy.in">support@mentofy.in</a>. We will respond to your request within 30 days,
                as required by the GDPR.
            </p>
            <p>
                You also have the right to lodge a complaint with your local Data Protection Authority (DPA) if you believe
                your rights have been violated.
            </p>

            {/* ===== 10. YOUR RIGHTS UNDER CCPA ===== */}
            <h2>10. Your Rights Under CCPA (California Users)</h2>
            <p>
                If you are a California resident, you have the following rights under the California Consumer Privacy Act:
            </p>
            <ul>
                <li><strong>Right to Know:</strong> You may request that we disclose the categories and specific pieces of personal information we have collected about you, the sources of collection, the business purposes, and the categories of third parties with whom we share your data.</li>
                <li><strong>Right to Delete:</strong> You may request the deletion of your personal information, subject to certain legal exceptions.</li>
                <li><strong>Right to Opt-Out of Sale:</strong> We do <strong>not</strong> sell your personal information. However, if this changes in the future, we will provide a "Do Not Sell My Personal Information" link.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            </ul>
            <p>
                To submit a verifiable consumer request, please contact us at{' '}
                <a href="mailto:support@mentofy.in">support@mentofy.in</a>. We will verify your identity and respond within
                45 days, as required by the CCPA.
            </p>

            {/* ===== 11. CHILDREN'S PRIVACY ===== */}
            <h2>11. Children's Privacy</h2>
            <p>
                Momentum is not directed to children under the age of 13 (or 16 in the EEA). We do not knowingly collect
                personal information from children. If we become aware that we have inadvertently collected personal data from
                a child under the applicable age, we will take steps to delete such information promptly. If you believe we
                have collected information from a child, please contact us at{' '}
                <a href="mailto:support@mentofy.in">support@mentofy.in</a>.
            </p>

            {/* ===== 12. INTERNATIONAL DATA TRANSFERS ===== */}
            <h2>12. International Data Transfers</h2>
            <p>
                Your personal data may be transferred to and processed in countries other than your country of residence,
                including the United States, where our third-party service providers (Google, Firebase, RevenueCat) operate.
                These countries may have different data protection laws than your jurisdiction.
            </p>
            <p>
                Where we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as Standard
                Contractual Clauses (SCCs) approved by the European Commission, or reliance on the service provider's
                compliance certifications (e.g., EU-US Data Privacy Framework).
            </p>

            {/* ===== 13. OPT-OUT & DATA CONTROLS ===== */}
            <h2>13. Opt-Out &amp; Data Controls</h2>
            <p>You have the following options to control your data:</p>
            <ul>
                <li><strong>Location Permissions:</strong> You can revoke location permissions at any time through your device's settings (Settings → Apps → Momentum → Permissions).</li>
                <li><strong>Ad Personalization:</strong> You can opt out of personalized ads through your device settings or at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>.</li>
                <li><strong>Analytics:</strong> You can limit analytics data collection by adjusting your device's privacy settings or contacting us.</li>
                <li><strong>Account Deletion:</strong> You can request complete deletion of your account and associated data by contacting us at <a href="mailto:support@mentofy.in">support@mentofy.in</a>.</li>
                <li><strong>Google Sign-In:</strong> You can revoke Momentum's access to your Google account at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/permissions</a>.</li>
            </ul>

            {/* ===== 14. CHANGES TO THIS PRIVACY POLICY ===== */}
            <h2>14. Changes to This Privacy Policy</h2>
            <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal
                requirements, or other factors. When we make material changes, we will:
            </p>
            <ul>
                <li>Update the "Last Updated" date at the top of this policy.</li>
                <li>Notify you through the App or via email (if applicable).</li>
                <li>Where required by law, obtain your consent before implementing material changes.</li>
            </ul>
            <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.
            </p>

            {/* ===== 15. CONTACT US ===== */}
            <h2>15. Contact Us</h2>
            <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
                contact us:
            </p>
            <div className="contact-box">
                <p><strong>Mentofy</strong></p>
                <p>📧 Email: <a href="mailto:support@mentofy.in">support@mentofy.in</a></p>
                <p>🌐 Website: <a href="https://mentofy.in" target="_blank" rel="noopener noreferrer">https://mentofy.in</a></p>
            </div>
            <p style={{ marginTop: '16px' }}>
                For GDPR-related inquiries, you may also contact your local Data Protection Authority. For CCPA-related
                inquiries, California residents may also contact the California Attorney General's office.
            </p>

            <div className="footer-bottom" style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(139, 92, 246, 0.15)' }}>
                <p>&copy; {new Date().getFullYear()} Mentofy. All rights reserved.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
