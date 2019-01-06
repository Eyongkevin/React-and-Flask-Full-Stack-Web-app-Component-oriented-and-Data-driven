import React, { Component } from 'react';
import Article from './Article';
import articleData from '../articleData'
import Header from './Header';

export default class ArticleList extends Component {
    render() {
       const articleSort = articleData.article.sort((a,b)=>(b.clapps - a.clapps));
       const articleCom = articleSort.map((a)=>(<Article key={'article-'+a.id} article={a} />));
       return (
	 <div className='container'>
		 <Header logo={articleData.logo}/>
		  <div className='ui unstackable items'>
		       {articleCom}
		  </div>
	 </div>
)
    }
}
