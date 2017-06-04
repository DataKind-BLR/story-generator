export const sub_themes = [
    {
        "name": "Appointments",
        "description": "Appointment of Legal Aid Counsel, Panel Lawyers and Retainer Lawyers",
        "url_slug": "appointments",
        "theme_url_slug": "first-access-to-legal-aid-police-station-or-court"
    },
    {
        "name": "Representations",
        "description": "Representation by Legal Aid Counsel, Panel Lawyers and Retainer Lawyers",
        "url_slug": "representations",
        "theme_url_slug": "first-access-to-legal-aid-police-station-or-court"
    },
    {
        "name": "Releases",
        "description": "Releases from jail through Legal Aid Counsel, Panel Lawyers, and Retainer Lawyers",
        "url_slug": "releases",
        "theme_url_slug": "first-access-to-legal-aid-police-station-or-court"
    },
    {
        "name": "Legal aid at police station",
        "description": "Whether Legal aid has been provided at police station?",
        "url_slug": "legal-aid-at-police-station",
        "theme_url_slug": "first-access-to-legal-aid-police-station-or-court"
    },
    {
        "name": "Working of Jail Legal Aid Clinics (JLAC)",
        "description": "Constitution of Jail Legal Aid Clinics",
        "url_slug": "working-of-jail-legal-aid-clinics-jlac",
        "theme_url_slug": "prison-legal-aid-clinics-effective-link"
    },
    {
        "name": "Appointment of Actors",
        "description": "Appointment of Jail Visiting Lawyers (JVL), Convict PLVs, and Community PLVs",
        "url_slug": "appointment-of-actors",
        "theme_url_slug": "prison-legal-aid-clinics-effective-link"
    },
    {
        "name": "Visits of Actors",
        "description": "Visits of Jail Visiting lawyers , Convict PLVs",
        "url_slug": "visits-of-actors",
        "theme_url_slug": "prison-legal-aid-clinics-effective-link"
    },
    {
        "name": "Information about the scrutiny and evaluation committee",
        "description": "Constitution of committee for appointment of panel lawyers",
        "url_slug": "information-about-the-scrutiny-and-evaluation-committee",
        "theme_url_slug": "application-to-appointment-timely-access-to-legal-aid"
    },
    {
        "name": "Non-appointment of panel lawyers",
        "description": "Reasons of non-appointment of lawyers",
        "url_slug": "non-appointment-of-panel-lawyers",
        "theme_url_slug": "application-to-appointment-timely-access-to-legal-aid"
    },
    {
        "name": "Time duration in the appointment of panel lawyers",
        "description": "Based on the last 5 cases, the gaps in appointment",
        "url_slug": "time-duration-in-the-appointment-of-panel-lawyers",
        "theme_url_slug": "application-to-appointment-timely-access-to-legal-aid"
    },
    {
        "name": "Monitoring of Panel Lawyers through monitoring committee",
        "description": "Constitution of Monitoring Committees",
        "url_slug": "monitoring-of-panel-lawyers-through-monitoring-committee",
        "theme_url_slug": "legal-aid-watch-effective-monitoring"
    },
    {
        "name": "Monitoring of Legal Aid Counsels",
        "description": "Attendance Certificates, Work Reports and DLSA Reports for Legal Aid counsels",
        "url_slug": "monitoring-of-legal-aid-counsels",
        "theme_url_slug": "legal-aid-watch-effective-monitoring"
    },
    {
        "name": "Conduct of Legal Aid Lawyers:",
        "description": "Complaints received against panel lawyers and legal aid counsel & their removal",
        "url_slug": "conduct-of-legal-aid-lawyers",
        "theme_url_slug": "legal-aid-watch-effective-monitoring"
    }
];

export const getSubThemes = theme => sub_themes.filter(s => s.theme_url_slug === theme.url_slug);
