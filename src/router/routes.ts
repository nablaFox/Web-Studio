import Page from '@/views/Page.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: Page,
        props: {
            title: ['The Home', 'Pageeee'],
            subTitles: ['Client', 'Type'],
            info: ['Cartier x Bonjour Paris', 'Experimental'],
            images: ['test0.jpg'],
            video: '',
            color: '#72a5c6'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: Page,
        props: {
            title: 'The About Page',
            subTitles: ['Client', 'Type'],
            info: ['Cartier x Bonjour Paris', 'Experimental'],
            images: ['test1.jpg'],
            video: '',
            color: 'purple'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: Page,
        props: {
            title: 'The Test Page',
            subTitles: ['Client', 'Type'],
            info: ['Cartier x Bonjour Paris', 'Experimental'],
            images: [''],
            video: '',
            color: 'black'
        }
    },
    {
        path: '/work',
        name: 'Work',
        component: Page,
        props: {
            title: 'The Work Page',
            subTitles: ['Client', 'Type'],
            info: ['Cartier x Bonjour Paris', 'Experimental'],
            images: [''],
            video: '',
            color: 'purple'
        }
    },
    {
        path: '/fun',
        name: 'Fun',
        component: Page,
        props: {
            title: 'The Fun Page',
            subTitles: ['Client', 'Type'],
            info: ['Cartier x Bonjour Paris', 'Experimental'],
            images: [''],
            video: '',
            color: 'purple'
        }
    }
]

