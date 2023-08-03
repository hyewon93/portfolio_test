import github_icon from '../images/profile/GitHub-icon.png';

import finale_logo from "../images/career/finale_logo.jpg";
import recharge_logo from "../images/career/recharge_logo.png";
import mchnui_1 from "../images/career/mchnui_1.png";
import mchnui_2 from "../images/career/mchnui_2.png";
import mchnui_3 from "../images/career/mchnui_3.png";
import mchnui_4 from "../images/career/mchnui_4.png";
import mchnpay_1 from "../images/career/mchnpay_1.png";
import mchnpay_2 from "../images/career/mchnpay_2.png";
import mchnpay_3 from "../images/career/mchnpay_3.png";
import on_session from "../images/career/3DSecure_on_session.png";
import off_session from "../images/career/3DSecure_off_session.png";
import stripe_logo from "../images/career/stripe_logo.png";
import reporAutomation_1 from "../images/career/reporAutomation_1.png";
import reporAutomation_2 from "../images/career/reporAutomation_2.png";
import twoFactorAuth_1 from "../images/career/2fa_1.png";
import twoFactorAuth_2 from "../images/career/2fa_2.png";
import twoFactorAuth_3 from "../images/career/2fa_3.png";

export const project_ecommerce = {
    "images": [
        { 
            "src": finale_logo, 
            "alt": "finale_logo",
            "descriptions": [
                { "type": "icon", "icon": "description", "desc": "API Description", "url": "https://support.finaleinventory.com/hc/en-us/categories/115001160947-API-Documentation" },
                { "type": "image", "imgsrc": github_icon, "imgalt": "finale_logo", "desc": "Github Code", "url": "https://github.com/hyewon93/PHP/tree/master/Finale-Inventory-Integration" },
            ]
        },
        { 
            "src": recharge_logo, 
            "alt": "reCharge_logo",
            "descriptions": [
                { "type": "icon", "icon": "description", "desc": "API Description", "url": "https://developer.rechargepayments.com/2021-11" },
                { "type": "image", "imgsrc": github_icon, "imgalt": "finale_logo", "desc": "Github Code", "url": "https://github.com/hyewon93/PHP/tree/master/Recharge-Integration" },
            ]
        }
    ],
    "badges": [
        { "bg": "primary", "text": "PHP" },
        { "bg": "info", "text": "REST API" },
        { "bg": "dark", "text": "MySQL" }
    ],
    "goal": "Develop integrations between third-party ecommerce services and APIs with our application (the MCHN).",
    "keys": [
        { "title": "Real-time inventory", "desc": "Finale Inventory is a cloud-based, multichannel inventory management software. I made a new site service and a new cron file to get inventory data from Finale Inventory so that MCHN users can do all management as well as inventory management in MCHN."},
        { "title": "Subscription Migration", "desc": "For users who used other eCommerce platforms, I had to migrate their existing subscriptions to MCHN. MCHN needed a new site service setting for ReCharge and a new script for subscription migrating."}
    ]
};

export const project_mchnUI = {
    "images": [
        { 
            "src": mchnui_1, 
            "alt": "mchnui_1",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: Product Edit page", "key": "mchnui_1" },
            ]
        },
        { 
            "src": mchnui_2, 
            "alt": "mchnui_2",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: Account Setting page", "key": "mchnui_2" },
            ]
        },
        { 
            "src": mchnui_3, 
            "alt": "mchnui_3",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: Account's Subscription List page", "key": "mchnui_3" },
            ]
        },
        { 
            "src": mchnui_4, 
            "alt": "mchnui_4",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: New Editor for articles", "key": "mchnui_4" },
            ]
        }
    ],
    "badges": [
        { "bg": "primary", "text": "PHP" },
        { "bg": "info", "text": "Javascript" },
        { "bg": "danger", "text": "HTML" },
        { "bg": "warning", "text": "CSS" },
        { "bg": "success", "text": "Material UI" },
        { "bg": "dark", "text": "MySQL" }
    ],
    "goal": "Optimize the management of UI components by tackling performance issues stemming from the size of our current CSS/JS component library and code structure.",
    "keys": [
        { "title": "Transition from Webpack 4 to Webpack 5", "desc": "Devised a plan centered around improving client bundling performance by adopting the modern import keyword instead of the outdated require.ensure() method."},
        { "title": "User-friendly drag and drop content editor", "desc": "This new editor served as the foundation for content creation across multiple application aspects."}
    ]
}

export const project_mchn_pay = {
    "images": [
        { 
            "src": stripe_logo, 
            "alt": "stripe_logo",
            "descriptions": [
                { "type": "icon", "icon": "description", "desc": "API Description", "url": "https://stripe.com/docs/api/payment_intents" },
            ]
        },
        { 
            "src": mchnpay_1, 
            "alt": "mchnpay_1",
            "descriptions": [
                { "type": "text", "desc": "Stripe page for setting business information to use MCHN Pay", "key": "mchnpay_1" },
            ]
        },
        { 
            "src": mchnpay_2, 
            "alt": "mchnpay_2",
            "descriptions": [
                { "type": "text", "desc": "Bank account setting page in MCHN for payouts", "key": "mchnpay_2" },
            ]
        },
        { 
            "src": mchnpay_3, 
            "alt": "mchnpay_3",
            "descriptions": [
                { "type": "text", "desc": "Connected account setting page in Stripe under MCHN account", "key": "mchnpay_3" },
            ]
        }
    ],
    "badges": [
        { "bg": "primary", "text": "PHP" },
        { "bg": "info", "text": "Javascript" },
        { "bg": "danger", "text": "HTML" },
        { "bg": "warning", "text": "CSS" },
        { "bg": "success", "text": "REST API" },
        { "bg": "dark", "text": "MySQL" }
    ],
    "goal": "Change Stripe API in MCHN from Charge API to Payment Intent API to build dynamic payment flows and to support for Strong Customer Authentication (SCA).",
    "keys": [
        { "title": "REST API Integration", "desc": "Integrate new REST API carefully so that it can not cause any errors in MCHN's existing payment process."},
        { "title": "3D Secure Authentication", "desc": "Customers can checkout with the additional authentication (on-session) and renew subscriptions by inputing card information again through the link sent by MCHN (off-session)."}
    ]
}

export const project_payment_intent = {
    "images": [
        { 
            "src": stripe_logo, 
            "alt": "stripe_logo",
            "descriptions": [
                { "type": "icon", "icon": "description", "desc": "API Description", "url": "https://stripe.com/docs/api/payment_intents" },
                { "type": "image", "imgsrc": github_icon, "imgalt": "finale_logo", "desc": "Github Code", "url": "https://github.com/hyewon93/PHP/tree/master/Stripe-Payment-Intent-API" },
            ]
        },
        { 
            "src": on_session, 
            "alt": "on_session",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: 3D Secure on-session process in checkout", "key": "on_session" },
            ]
        },
        { 
            "src": off_session, 
            "alt": "off_session",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: 3D Secure off-session process through email link", "key": "off_session" },
            ]
        }
    ],
    "badges": [
        { "bg": "primary", "text": "PHP" },
        { "bg": "info", "text": "Javascript" },
        { "bg": "danger", "text": "HTML" },
        { "bg": "warning", "text": "CSS" },
        { "bg": "success", "text": "REST API" },
        { "bg": "dark", "text": "MySQL" }
    ],
    "goal": "Change Stripe API in MCHN from Charge API to Payment Intent API to build dynamic payment flows and to support for Strong Customer Authentication (SCA).",
    "keys": [
        { "title": "REST API Integration", "desc": "Integrate new REST API carefully so that it can not cause any errors in MCHN's existing payment process."},
        { "title": "3D Secure Authentication", "desc": "Customers can checkout with the additional authentication (on-session) and renew subscriptions by inputing card information again through the link sent by MCHN (off-session)."}
    ]
}

export const project_report_auto = {
    "images": [
        { 
            "src": reporAutomation_1, 
            "alt": "reporAutomation_1",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: Report List page", "key": "reporAutomation_1" },
            ]
        },
        { 
            "src": reporAutomation_2, 
            "alt": "reporAutomation_2",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI example: Report progress page", "key": "reporAutomation_2" },
            ]
        }
    ],
    "badges": [
        { "bg": "primary", "text": "PHP" },
        { "bg": "info", "text": "Javascript" },
        { "bg": "danger", "text": "HTML" },
        { "bg": "warning", "text": "CSS" },
        { "bg": "dark", "text": "MySQL" }
    ],
    "goal": "Automated reporting system that allows users to generate reports offline and on a predetermined schedule.",
    "keys": [
        { "title": "Cron file for report generation", "desc": "Create a cron script that autonomously generates scheduled reports in the background, separate from the user interface."},
        { "title": "User-friendly UI/UX", "desc": "Fresh UI/UX design displaying report generation progress and estimated completion time."}
    ]
}

export const project_2fa = {
    "images": [
        { 
            "src": twoFactorAuth_1, 
            "alt": "twoFactorAuth_1",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI - 2FA setting on account setting page (1)", "key": "twoFactorAuth_1" },
            ]
        },
        { 
            "src": twoFactorAuth_2, 
            "alt": "twoFactorAuth_2",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI - 2FA setting on account setting page (2)", "key": "twoFactorAuth_2" },
            ]
        },
        { 
            "src": twoFactorAuth_3, 
            "alt": "twoFactorAuth_3",
            "descriptions": [
                { "type": "text", "desc": "MCHN UI - Login with 2FA otp code", "key": "twoFactorAuth_3" },
            ]
        }
    ],
    "badges": [
        { "bg": "primary", "text": "PHP" },
        { "bg": "info", "text": "Javascript" },
        { "bg": "danger", "text": "HTML" },
        { "bg": "warning", "text": "CSS" },
        { "bg": "dark", "text": "MySQL" }
    ],
    "goal": "Automated reporting system that allows users to generate reports offline and on a predetermined schedule.",
    "keys": [
        { "title": "Cron file for report generation", "desc": "Create a cron script that autonomously generates scheduled reports in the background, separate from the user interface."},
        { "title": "User-friendly UI/UX", "desc": "Fresh UI/UX design displaying report generation progress and estimated completion time."}
    ]
}