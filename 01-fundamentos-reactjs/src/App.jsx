import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css" ;
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content:[
     {type: 'paragraph', content: 'Fala galera'},
     {type: 'paragraph', content: 'Acabei de subir mais um porjeto no meu portifa. EH um projeto que fiz no NLW Return evento da rocketseat'},
     {type: 'link', content: 'jane.desing/doctorcare'},
     {type: 'link', content: '<a href="">#novoprojeto #NLW #rocketseat</a>'},                
    ],
    publishedAt: new Date('2025-03-12T12:00:00.000Z'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Myayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content:[
     {type: 'paragraph', content: 'Fala galera'},
     {type: 'paragraph', content: 'ta uma merda isso em'},
     {type: 'link', content: 'jane.desing/doctorcare'},
     {type: 'link', content: '<a href="">#novoprojeto #NLW #rocketseat</a>'},                
    ],
    publishedAt: new Date('2025-03-10T12:00:00.000Z'),

  },
];

export function App() {
  
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
          {posts.map(post =>{ 
            return (<Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />)})}
          
        </main>
      </div>
    </div>
  )
}


