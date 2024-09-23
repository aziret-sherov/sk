export const ApiPaths = {
    contacts: 'info/contacts/',
    reference: 'content/advantages/',
    construction_projects: 'content/construction_projects/',
    consultation_form: 'content/consultation_form/',
    completed_projects: 'content/completed_projects/',
    completed_projects_details: (id:string)=>`content/completed_projects/detail/${id}`,
    construction_projects_details: (id:string)=>`content/construction_projects/detail/${id}`,
    news_details: (id:string)=>`content/news/detail/${id}/`,
    address: 'info/address/',
    news: 'content/news/',
    logo_animation: 'info/logo_animation/'
}