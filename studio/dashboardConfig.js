export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d633aa06c8636dc504d601d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n9s5bgin',
                  apiId: '14977ff7-5644-4f25-8d2a-ec93c59a7b87'
                },
                {
                  buildHookId: '5d633aa06c8636dc504d601e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9ijxoi9j',
                  apiId: '48a6d0f7-c1c2-452b-8e86-49b48b0c2d65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yvpaulo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9ijxoi9j.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
