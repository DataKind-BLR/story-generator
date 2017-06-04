export const topics = [
    {
        url_slug: 'legal-counsel-appointed',
        sub_theme_url_slug: 'first-access-to-legal-aid-police-station-or-court/appointments',
        name: 'Appointment of Legal Counsel',
        description: 'Number of districts where legal aid counsel were appointed for all magistrate courts/ ( Number of districts which responded to the RTI)',
        data: {}
    },
    {
        url_slug: 'panel-lawyers-appointed',
        sub_theme_url_slug: 'first-access-to-legal-aid-police-station-or-court/appointments',
        name: 'Appointment of Panel Lawyers',
        description: 'Number of districts where panel lawyers were appointed/( Number of districts which responded to the RTI)',
        data: {}
    },
    {
        url_slug: 'retainer-lawyers-appointed',
        sub_theme_url_slug: 'first-access-to-legal-aid-police-station-or-court/appointments',
        name: 'Appointment of Retainer Lawyers',
        description: 'Number of districts where retainer lawyers were appointed/(Number of districts which responded to the RTI)',
        data: {}
    }
];

export const getTopics = sub_theme => topics.filter(t => t.sub_theme_url_slug === sub_theme.theme_url_slug + '/' + sub_theme.url_slug);