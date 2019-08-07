export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d4a5ac8ce76a0611ca5c859',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-27iwek5d',
                  apiId: '7a54d503-d9f7-4481-9090-cce198da5715'
                },
                {
                  buildHookId: '5d4a5ac953bb233162eb6c53',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6trfocvv',
                  apiId: 'b1438013-a24e-48e3-b20b-8092fd3cb408'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vegardsv/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6trfocvv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
