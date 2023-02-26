import Page from '@/views/Page.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: Page,
        props: {
            title: ['I\'m Ice cube', 'A web developer'],
            subTitles: ['Passion', 'Fun'],
            info: ['Success', 'Experience'],
            images: ['test3.jpg', 'test7.png', '',  'test4.jpg'],
            video: 'test0.mp4',
            color: '#72a5c6'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: Page,
        props: {
            title: ['i love what i do'],
            subTitles: ['Effort', 'Dreams'],
            info: ['Victory', 'Reality'],
            images: ['test5.jpg', 'test10.jpg', '', 'test6.png'],
            video: 'test1.mp4',
            color: '#af88fd'
        }
    },
    {
        path: '/collaboration',
        name: 'Collaboration',
        component: Page,
        props: {
            title: ['Looking for a', 'collaborator'],
            subTitles: ['Study', 'Enjoy'],
            info: ['Endless', 'Learning'],
            images: ['test9.png', 'test6.png', '', 'test10.jpg'],
            video: 'test2.mp4',
            color: '#fa3f80'
        }
    },
    {
        path: '/work',
        name: 'Work',
        component: Page,
        props: {
            title: ['And a dreamer.'],
            subTitles: ['Design', 'Coding'],
            info: ['Beauty', 'Wisdom'],
            images: ['test6.png', 'test10.jpg', '', 'test11.png'],
            video: ['test1.mp4'],
            color: 'white'
        }
    }
]