import github_icon from '../images/profile/GitHub-icon.png';

import finale_logo from "../images/career/finale_logo.jpg";
import recharge_logo from "../images/career/recharge_logo.png";
import mchnui_1 from "../images/career/mchnui_1.png";
import mchnui_2 from "../images/career/mchnui_2.png";
import mchnui_3 from "../images/career/mchnui_3.png";
import mchnui_4 from "../images/career/mchnui_4.png";

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