/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.



 - regrouper les choses oriente utilisateur (genre gestion des decisions etc.) dans la partie user guide
 - avoir un item 'profil' de premier level (ou on parle des notifs/plugins)
 - regrouper central et local api (? hes:bof)
 - regrouper : dashboard et observability
 - dupliquer des liens vers le format de config des parsers/scenarios/... entre la partie "parsers" et la partie "configuration files format"


 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro"
    },
    {
      type: 'doc',
      label: 'Concepts',
      id: "concepts"
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ["getting_started/install_crowdsec", "getting_started/crowdsec_tour"]
    },
    {
      type: 'category',
      label: 'User Guides',
      items: ["user_guides/hub_mgmt", "user_guides/decisions_mgmt", "user_guides/bouncers_configuration", "user_guides/machines_mgmt", "user_guides/lapi_mgmt","user_guides/building"]
    },
    {
      type: 'category',
      label: 'Data Sources',
      items: ["data_sources/intro", "data_sources/file", "data_sources/journald", "data_sources/cloudwatch", "data_sources/syslog", "data_sources/troubleshout" ]
    },
    {
      type: 'category',
      label: 'Parsers',
      items: ["parsers/intro", "parsers/format", "parsers/debug","parsers/create" ]
    },
    {
      type: 'category',
      label: 'Scenarios',
      items: ["scenarios/intro", "scenarios/format", "scenarios/debug","scenarios/create" ]
    },
    {
      type: 'category',
      label: 'Collections',
      items: ["collections/intro", "collections/format", "collections/debug","collections/create" ]
    },
    {
      type: 'category',
      label: 'Profiles',
      items: ["profiles/intro", "profiles/format","profiles/notif"]
    },
    {
      type: 'category',
      label: 'Observability',
      items: ["observability/intro", "observability/cscli", "observability/prometheus", "observability/dashboard", "observability/console"]
    },
    {
      type: 'category',
      label: 'Local API',
      items: ["local_api/intro", {"type":"link", "label": "Swagger", "href":"https://crowdsecurity.github.io/api_doc/index.html?urls.primaryName=LAPI"}]
    },
    {
      type: 'category',
      label: 'Central API',
      items: ["local_api/intro", {"type":"link", "label": "Swagger", "href":"https://crowdsecurity.github.io/api_doc/index.html?urls.primaryName=CAPI"}]
    },
    {
      type: 'doc',
      label: 'Expr',
      id: "about_docs/documentation_about"
    },
    {
      type: 'doc',
      label: 'Contributing',
      id: "about_docs/documentation_about"
    },
    {
      type: 'doc',
      label: 'Console',
      id: "about_docs/documentation_about"
    },

    {
      type: 'doc',
      label: 'Services Configuration',
      id: "about_docs/documentation_about"
    },
    {
      type: 'doc',
      label: 'CLI reference (cscli)',
      id: "about_docs/documentation_about"
    },
    {
      type: 'doc',
      label: 'About this documentation',
      id: "about_docs/documentation_about"
    },
  ],
};
