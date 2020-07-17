module.exports = {
  dest: 'dist',
  base: '/tonglew/',
  port: 8082, 
  host: '0.0.0.0',
  title: '同略项目版本发布文档', // 网站标题
  description: '同略科技各项目版本更新，bug修复详细记录', //描述
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }] // 添加网站 favicon,文件路径在.vuepress>public>images中
  ],
  themeConfig: {
    logo: '/images/logo.png',
  	displayAllHeaders: false, // 显示所有页面的标题链接
  	// 导航栏链接
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '项目', 
        items: [
          {text: '档案基础产品研发', link: '/project/zhda/' },
          {text: 'ARCH2.0南航档案馆系统(2019)', link: '/project/arch/' },
          {text: '人事档案系统', link: '/project/rsda/' },
          {text: '中国航发四川燃气涡轮研究院声像档案管理系统', link: '/project/hfda/' }
        ]
      },
      { text: '帮助',
        items: [
          {text: '编写模版', link: '/help/html/' }
        ]
      }
    ],
    // 导航页面中的分组折叠目录
    sidebar: {
      '/project/arch/': [
        '', 
        'v1.0.0', 
        'v1.0.1'   
      ]
    }
  }
}